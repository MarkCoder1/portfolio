import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const html = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f9f9f9; padding: 16px; border-radius: 8px; border: 1px solid #eee;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // use verified domain in production
      to: "marcalber59@gmail.com",
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
      html,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    console.log("Email sent successfully, id:", data?.id);

    // return only clean success
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
