import nodemailer from "nodemailer"

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: Number(process.env.SMTP_PORT),
	secure: process.env.SMTP_SECURE === "true",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
})

interface SendRegistrationEmailParams {
	to: string
	registrationId: string
	firstName: string
	lastName: string
	participantType: string
	tier: string
}
interface sendReviewArrivalMailParams{
	to: string
  paperTitle: string
  firstName: string
  coAuthors: string[] | undefined 
  status: string
	paperReview: string
}

export async function sendRegistrationEmail({
	to,
	registrationId,
	firstName,
	lastName,
	participantType,
	tier,
}: SendRegistrationEmailParams) {
	const mailOptions = {
		from: `"NCCI 2025" <${process.env.EMAIL_USER}>`,
		to,
		subject: "NCCI 2025 - Registration Confirmation",
		html: `
			<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
				<div style="background-color: #1a365d; padding: 20px; text-align: center;">
					<h1 style="color: white; margin: 0;">NCCI 2025</h1>
					<p style="color: #e2e8f0; margin: 10px 0 0;">Registration Confirmation</p>
				</div>
				
				<div style="padding: 20px; background-color: #f8fafc;">
					<p style="font-size: 16px; color: #1e293b;">Dear ${firstName} ${lastName},</p>
					
					<p style="font-size: 16px; color: #1e293b;">Thank you for registering for NCCI 2025. Your registration has been received and is being processed.</p>
					
					<div style="background-color: #e2e8f0; padding: 15px; border-radius: 5px; margin: 20px 0;">
						<h2 style="color: #1e365d; margin: 0 0 10px;">Registration Details</h2>
						<p style="margin: 5px 0;"><strong>Registration ID:</strong> ${registrationId}</p>
						<p style="margin: 5px 0;"><strong>Participant Type:</strong> ${participantType}</p>
						<p style="margin: 5px 0;"><strong>Tier:</strong> ${tier}</p>
					</div>
					
					<h3 style="color: #1e365d;">Next Steps</h3>
					<ol style="color: #1e293b;">
						<li>Keep your payment voucher/statement for reference</li>
						<li>Wait for our team to verify your payment</li>
						<li>You will receive another email once your registration is confirmed</li>
					</ol>
					
					<div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
						<h3 style="color: #1e365d; margin: 0 0 10px;">Important Notes</h3>
						<ul style="color: #1e293b; margin: 0; padding-left: 20px;">
							<li>Registration confirmation may take 1-2 business days</li>
							<li>Keep your registration ID for future reference</li>
							<li>For any issues, contact us at <a href="mailto:kucc@ku.edu.np" style="color: #2563eb;">kucc@ku.edu.np</a></li>
						</ul>
					</div>
					
					<p style="font-size: 16px; color: #1e293b;">You can check your registration status anytime by visiting:</p>
					<p style="text-align: center; margin: 20px 0;">
						<a href="${process.env.NEXT_PUBLIC_BASE_URL}/registration/status/${registrationId}" 
						   style="background-color: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; display: inline-block;">
							View Registration Status
						</a>
					</p>
				</div>
				
				<div style="background-color: #1a365d; padding: 20px; text-align: center; color: #e2e8f0;">
					<p style="margin: 0;">© 2025 NCCI. All rights reserved.</p>
				</div>
			</div>
		`,
	}

	try {
		await transporter.sendMail(mailOptions)
		return { success: true }
	} catch (error) {
		console.error("Error sending email:", error)
		return { success: false, error }
	}
} 

export async function sendReviewDecisionMail({
    to ,
    paperTitle,
    firstName,
    coAuthors, // Optional co-authors
    status,
}:sendReviewArrivalMailParams) {
    const mailOptions = {
        from: `"NCCI" <${process.env.EMAIL_USER}>`,
        to: to,
        subject: `Paper Decision: ${paperTitle}`,
        html: `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
  <div style="background:#1a365d;padding:15px;text-align:center;color:white">
    <h1 style="margin:0">NCCI 2025</h1>
  </div>
  <div style="padding:15px">
    <p>Dear ${firstName},</p>
    ${coAuthors?.length ? `<p>Co-authors: ${coAuthors.join(', ')}</p>` : ''}
    <p>Your paper "${paperTitle}" status:</p>
    <div style="background:#f8fafc;padding:10px;margin:10px 0">
      ${status === 'accepted' 
        ? "We'll be in touch soon." 
        : "Please submit a rebuttal on the website portal!"}
    </div>
    <div style="background:#f1f5f9;padding:10px;margin-top:20px">
      <p style="margin:0">© 2025 NCCI</p>
    </div>
  </div>
</div>
        `
    };

    await transporter.sendMail(mailOptions);
}
