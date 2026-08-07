const { Resend } = require('resend');

const resend = new Resend('re_512Mq8PA_M8yxRqPNY8j9g3UBYfR9rwSq');

async function sendTestEmail() {
  console.log('Sending test email via Resend...');

  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['manage.ssclasses@gmail.com'],
    subject: '✅ Test Inquiry - SS Coaching Classes Website',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #2563eb;">🎉 Test Inquiry from SS Coaching Classes Website</h2>
        <p>This is a <strong>test email</strong> to verify the inquiry form is working correctly.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <p><strong>Name:</strong> John Doe (Test Student)</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> testinquiry@example.com</p>
        <p><strong>Program:</strong> HSC Commerce</p>
        <p><strong>Message:</strong></p>
        <p style="background: #f9fafb; padding: 12px; border-radius: 4px;">
          Hi, I am interested in joining HSC Commerce classes. Please let me know the batch timings and fees. Thank you!
        </p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
        <p style="color: #6b7280; font-size: 12px;">This email was sent from the SS Coaching Classes website contact form.</p>
      </div>
    `
  });

  if (error) {
    console.error('❌ Failed to send email:', JSON.stringify(error, null, 2));
    return;
  }

  console.log('✅ Email sent successfully!');
  console.log('Email ID:', data.id);
}

sendTestEmail();
