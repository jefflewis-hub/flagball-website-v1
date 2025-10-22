import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, email, organization, organizationWebsite } = await request.json();

    // Validate required fields
    if (!firstName || !email || !organization || !organizationWebsite) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Flagball Partnership Form <partnerships@flagball.com>',
      to: 'josh@grovehillresearch.com',
      replyTo: email,
      subject: 'New Partnership Inquiry - Flagball',
      html: `
        <h2>New Partnership Inquiry</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Organization Website:</strong> ${organizationWebsite}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}

