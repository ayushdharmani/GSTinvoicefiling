const axios = require('axios');
// Function to calculate GST, separating it into IGST and SGST/CGST
function calculateGST(totalAmount) {
    const gstRate = 0.18; // 18% GST
    const totalGST = totalAmount * gstRate;
  
    const IGST = totalGST / 2;
    const SGST_CGST = totalGST / 2;
  
    return {
      IGST,
      SGST_CGST,
      totalGST,
      totalAmount
    };
  }
  
  // Function to send GST data to the mock API
  async function sendToGSTAPI(gstData, apiUrl) {
    try {
      console.log('Sending GST data to API:', gstData, 'API URL:', apiUrl);
      const response = await axios.post(apiUrl, gstData);
      console.log('Received response:', response.data);
      return response;
    } catch (error) {
      console.error('Error in sendToGSTAPI:', error.message, error.stack);
      throw error;
    }
  }
  
  
  module.exports = { calculateGST, sendToGSTAPI };
  