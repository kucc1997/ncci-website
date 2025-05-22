import { db, contacts } from "@/db/schema";
import { eq } from "drizzle-orm";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // Validate input
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ success: false, error: "All fields are required." }),
                { status: 400 }
            );
        }

        // Save to database
        await db.insert(contacts).values({
            name,
            email,
            subject,
            message,
        });

        // Send email
        const transporter = nodemailer.createTransport({
            service: "gmail", // Use your email service provider
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECIPIENT, // **Recipient email address**
            subject: `[NCCI_CONTACT]: ${subject}`,
            html: `<b>Name:</b> ${name} 
            <br> 
            <b>Email:</b> ${email} 
            <br> 
            <b>Message:</b> <br> ${message}`,
        });

        return new Response(
            JSON.stringify({ success: true, message: "Form submitted successfully." }),
            { status: 200 }
        );
    } catch (error) {
        console.error("Error handling contact form submission:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Internal Server Error" }),
            { status: 500 }
        );
    }
}