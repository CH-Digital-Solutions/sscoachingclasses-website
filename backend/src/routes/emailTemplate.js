const emailTemplate = ({ title, badgeText, rows }) => `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1d5fd6 0%,#0b1f3f 100%);padding:36px 40px;text-align:center;">
            <div style="display:inline-block;background:rgba(255,255,255,0.15);border-radius:50px;padding:6px 18px;margin-bottom:16px;">
              <span style="color:#e8c87a;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">${badgeText}</span>
            </div>
            <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;line-height:1.3;">${title}</h1>
            <p style="margin:10px 0 0;color:rgba(255,255,255,0.75);font-size:14px;">SS Coaching Classes · GTB Nagar, Sion Koliwada, Mumbai</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 24px;color:#3b4a63;font-size:15px;line-height:1.6;">You have received a new submission. Details are below:</p>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              ${rows.filter(r => r.value && r.value.trim() !== '').map(({ label, value }, i) => `
              <tr style="background:${i % 2 === 0 ? '#f7f9fc' : '#ffffff'};">
                <td style="padding:14px 16px;font-size:13px;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;width:35%;border-bottom:1px solid #e2e8f0;">${label}</td>
                <td style="padding:14px 16px;font-size:15px;color:#0f1e38;font-weight:500;border-bottom:1px solid #e2e8f0;">${value}</td>
              </tr>`).join('')}
            </table>
          </td>
        </tr>

        <!-- CTA Banner -->
        <tr>
          <td style="padding:0 40px 36px;">
            <div style="background:#f0f4ff;border-left:4px solid #1d5fd6;border-radius:8px;padding:16px 20px;">
              <p style="margin:0;color:#1d5fd6;font-size:14px;font-weight:600;">⚡ Action Required</p>
              <p style="margin:6px 0 0;color:#3b4a63;font-size:14px;">Please follow up with this student within <strong>24 hours</strong> to confirm their inquiry.</p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f7f9fc;border-top:1px solid #e2e8f0;padding:24px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6;">
              This email was sent automatically from the <strong>SS Coaching Classes website</strong>.<br/>
              © 2026 SS Coaching Classes · Vivekanand Society, GTB Nagar, Sion Koliwada, Mumbai – 400037
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

module.exports = { emailTemplate };
