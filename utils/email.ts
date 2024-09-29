// // pages/api/send-email.ts
// import type { NextApiRequest, NextApiResponse } from "next";
// import { transporter, mailOptions } from "@/utils/nodemailer";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === "POST") {
//     const { to, subject, html } = req.body;

//     if (!to || !subject || !html) {
//       return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//       await transporter.sendMail({
//         ...mailOptions,
//         to,
//         subject,
//         html,
//       });

//       return res.status(200).json({ success: true });
//     } catch (error) {
//       console.error("Error sending email:", error);
//       return res.status(500).json({ message: "Failed to send email" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
