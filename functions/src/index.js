const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');
const { calculateGST, sendToGSTAPI } = require('./gstUtils');
const firestoreConfig = require('../config/firestore_config.json');
const gstApiConfig = require('../config/gst_api_config.json');

admin.initializeApp();

// Firestore trigger for the bookings collection when the status is 'finished'
exports.generateGSTInvoice = functions.firestore
  .document('bookings/{bookingId}')
  .onUpdate(async (change, context) => {
    const bookingData = change.after.data();

    // Proceed only if the status is 'finished'
    if (bookingData.status === 'finished') {
      const name = bookingData.name;
      const totalBookingAmount = bookingData.totalBookingAmount;

      // Calculate GST
      const gstData = calculateGST(totalBookingAmount);
      
      // Send the GST data to the mock API
      try {
        const response = await sendToGSTAPI(gstData, gstApiConfig.apiUrl);
        console.log('GST filed successfully:', response.data);
        
        // Update the Firestore document with the response
        await change.after.ref.update({
          gstFiled: true,
          invoiceId: response.data.invoiceId
        });
      } catch (error) {
        console.error('Error filing GST:', error);
      }
    }
  });
