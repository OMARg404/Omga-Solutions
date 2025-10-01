// const express = require("express");
// const cors = require("cors");
// const nodemailer = require("nodemailer");
// require("dotenv").config(); // Load environment variables from .env file

// const app = express();
// const PORT = 3000;

// // CORS configuration
// app.use(
//     cors({
//         origin: "https://my-profile-lake-one.vercel.app/" || "http://localhost:3000", // Replace with your React app's URL in production
//         methods: ["POST"],
//         credentials: true,
//     })
// );

// // Middleware for parsing JSON
// app.use(express.json());

// // Email transporter setup
// const contactEmail = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//         user: process.env.EMAIL_USER, // Ensure EMAIL_USER is set in your .env file
//         pass: process.env.EMAIL_PASS, // Ensure EMAIL_PASS is set in your .env file
//     },
// });

// // Verify the email transporter
// contactEmail.verify((error) => {
//     if (error) {
//         console.error("Email transporter verification failed:", error);
//     } else {
//         console.log("Email transporter is ready to send emails.");
//     }
// });

// // API route for contact form submissions
// app.post("/contact", (req, res) => {
//     const { firstName, lastName, email, message, phone } = req.body;

//     // Validate the required fields
//     if (!firstName || !lastName || !email || !message) {
//         return res.status(400).json({ code: 400, status: "Missing required fields" });
//     }

//     const mail = {
//         from: `${firstName} ${lastName} <${email}>`,
//         to: process.env.EMAIL_USER,
//         subject: "Contact Form Submission - OMGA Portfolio",
//         html: `
//             <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
//                 <h2 style="color: #4CAF50;">New Contact Form Submission - OMGA Portfolio</h2>
//                 <p><strong>Name:</strong> ${firstName} ${lastName}</p>
//                 <p><strong>Email:</strong> ${email}</p>
//                 <p><strong>Phone:</strong> 
//                     <a href="https://wa.me/${phone.replace(/\s+/g, "")}" target="_blank" style="color: #4CAF50; text-decoration: none;">
//                         ${phone} (Message on WhatsApp)
//                     </a>
//                 </p>
//                 <p><strong>Message:</strong></p>
//                 <p style="background-color: #f9f9f9; padding: 10px; border-left: 4px solid #4CAF50;">
//                     ${message}
//                 </p>
//                 <hr style="border: none; border-top: 1px solid #ddd;">
//                 <p style="font-size: 12px; color: #777;">This email was sent from your portfolio's contact form.</p>
//             </div>
//         `,
//     };

//     // Send the email
//     contactEmail.sendMail(mail, (error) => {
//         if (error) {
//             console.error("Error sending email:", error);
//             return res.status(500).json({ code: 500, status: "Error sending message" });
//         } else {
//             console.log("Email sent successfully.");
//             return res.status(200).json({ code: 200, status: "Message Sent" });
//         }
//     });
// });

// // Start the server
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));