const functions = require('firebase-functions');
const axios = require('axios');
const { generateGSTInvoice } = require('../functions/src/index');
const { calculateGST } = require('../functions/src/gstUtils');
const mockApiUrl = "https://mockapi.io/your-project-id/gst";

// Mock axios for testing API requests
jest.mock('axios');

describe('generateGSTInvoice Cloud Function', () => {
  it('should correctly calculate GST and call the API', async () => {
    const totalAmount = 1000;
    const gstData = calculateGST(totalAmount);

    axios.post.mockResolvedValue({ data: { status: "success", invoiceId: "12345" } });

    const response = await generateGSTInvoice({
      data: { totalBookingAmount: totalAmount, status: "finished" },
      ref: { update: jest.fn() }
    });

    expect(axios.post).toHaveBeenCalledWith(mockApiUrl, gstData);
    expect(response.status).toBe("success");
  });
});
