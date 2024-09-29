// emailTemplate.ts
export const generateEmailTemplate = (name: string, message: string) => {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Email Template</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .container {
              padding: 20px;
              background-color: #ffffff;
              margin: 20px auto;
              max-width: 600px;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              padding: 10px 0;
              border-bottom: 1px solid #dddddd;
            }
            .content {
              padding: 20px;
            }
            .footer {
              text-align: center;
              padding: 10px 0;
              border-top: 1px solid #dddddd;
              font-size: 12px;
              color: #888888;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Hello, ${name}</h1>
            </div>
            <div class="content">
              <p>${message}</p>
            </div>
            <div class="footer">
              <p>Thank you for using our service.</p>
            </div>
          </div>
        </body>
      </html>
    `;
};
