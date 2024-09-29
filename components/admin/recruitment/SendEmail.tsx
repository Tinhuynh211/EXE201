// SendEmailButton.tsx
"use client";

import React from "react";

interface SendEmailButtonProps {
  email: string;
  name: string;
}

const SendEmailButton: React.FC<SendEmailButtonProps> = ({ email, name }) => {
  const handleSendEmail = async () => {
    const htmlContent = `
      <html>
        <body>
          <h1>Hello, ${name}</h1>
          <p>This is a sample message.</p>
        </body>
      </html>
    `;

    try {
      const response = await fetch("api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
          subject: "Subject",
          html: htmlContent,
        }),
      });

      if (response.ok) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <button onClick={handleSendEmail} className="btn btn-primary">
      Send Email
    </button>
  );
};

export default SendEmailButton;
