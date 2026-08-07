const express = require('express');
const router = express.Router();
const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, program, message } = req.body;

    const emailContent = `
      <h2>New Inquiry from SS Coaching Classes Website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email || 'Not provided'}</p>
      <p><strong>Program:</strong> ${program}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided.'}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // Resend default for unverified domains
      to: [process.env.DESTINATION_EMAIL],
      subject: `New Inquiry from ${name} - SS Classes`,
      html: emailContent,
    });

    if (error) {
      console.error('Error sending email via Resend:', error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Server error while sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
