const express = require('express');
const router = express.Router();
const { Resend } = require('resend');
const { emailTemplate } = require('./emailTemplate');

const resend = new Resend(process.env.RESEND_API_KEY);

router.post('/', async (req, res) => {
  try {
    const { name, phone, program } = req.body;

    const html = emailTemplate({
      title: `Free Demo Request from ${name}`,
      badgeText: '🎓 Free Demo Booking',
      rows: [
        { label: 'Student Name', value: name },
        { label: 'Phone Number', value: phone },
        { label: 'Program', value: program },
      ]
    });

    const { data, error } = await resend.emails.send({
      from: 'SS Classes <onboarding@resend.dev>',
      to: [process.env.DESTINATION_EMAIL],
      subject: `🎓 Free Demo Request from ${name} – SS Classes`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ message: 'Email sent successfully', data });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
