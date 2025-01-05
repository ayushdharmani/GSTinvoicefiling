**GST Filing System 📑💻**

This project is designed to automate the process of GST filing them with the government, making it easier for businesses to stay compliant with tax regulations. It integrates with Firebase and uses Firestore, a cloud-based database, to track bookings and calculate the applicable Goods and Services Tax (GST) for each booking.

Here’s how it works:

Automated GST Calculation 📊💰:

When a booking status changes to "finished", the system calculates the GST for the total booking amount. This is done using a fixed GST rate of 18%. The total tax is split into IGST (for interstate transactions) and SGST/CGST (for intrastate transactions), making sure the taxes are calculated correctly depending on the nature of the transaction.
Connecting to a Mock API 🌐🔌:

Once the GST amount is calculated, the system sends this data to a mock external API (a placeholder for a real government API). The data is sent via a secure internet connection to ensure accurate filing.
Automatic Firestore Updates 🗂️📱:

After successfully filing the GST, the system updates the Firestore database with a flag showing that the GST has been filed and stores the invoice ID from the API response. This keeps everything organized in one place and makes it easy for users to track the status of their bookings.
Cloud-Based and Scalable ☁️📈:

The entire process is cloud-based, running on Firebase, which ensures that it can handle a large number of bookings without the need for complex infrastructure. This makes the system both scalable and easy to maintain.
Error Handling ❗⚠️:

If something goes wrong during the filing process, the system catches the error and logs it, so businesses can be aware of any issues and fix them quickly.
Key Benefits:
Automation: It saves time by automating the GST filing process.
Accuracy: The calculations are done programmatically, minimizing human errors.
Cloud Integration: Everything is stored in the cloud, so businesses can access data anytime and anywhere.
Scalability: As your business grows, the system can handle increasing bookings without extra effort.
This system aims to streamline the GST filing process, ensuring businesses comply with tax regulations effortlessly! 🌟
