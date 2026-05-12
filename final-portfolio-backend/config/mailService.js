import { emailApi } from "./mailConfig.js";

export const sendEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields!"
      });
    }

    const sendSmtpEmail = {
      sender: {
        email: process.env.BREVO_MY_EMAIL,
        name: "Portfolio"
      },
      to: [
        {
          email: process.env.BREVO_RECEIVER
        }
      ],
      subject: `New message from ${name}`,
      htmlContent: `
                    <div style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px;">
                        
                        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
                        
                        <!-- Header -->
                        <div style="background: #2563eb; padding: 20px; text-align: center;">
                            <h2 style="color: #ffffff; margin: 0;">📬 New Inquiry Received</h2>
                        </div>

                        <!-- Body -->
                        <div style="padding: 25px; color: #333;">
                            
                            <p>Hello Rapp Micco,</p>

                            <p>You have received a new inquiry from your portfolio website. Here are the details:</p>

                            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>

                            <p style="margin-top: 20px;"><strong>Message:</strong></p>
                            <div style="
                            background: #f9fafb;
                            padding: 15px;
                            border-radius: 8px;
                            border: 1px solid #eee;
                            white-space: pre-line;
                            ">
                            ${message}
                            </div>

                            <p style="margin-top: 20px;">
                            Please respond to this inquiry as soon as possible.
                            </p>

                        </div>

                        <!-- Footer -->
                        <div style="background: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #888;">
                            <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
                        </div>

                        </div>

                    </div>
                    `
    };

    await emailApi.sendTransacEmail(sendSmtpEmail);

    res.status(200).json({
      success: true,
      message: "Email sent!"
    });

  } catch (error) {
    console.error("Email Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email!"
    });
  }
};


