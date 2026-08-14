export function downloadBeneficiaryListDocument() {
  const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Indus Hub Surety Bond - Approved Beneficiaries List</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background: #f8fafc;
      padding: 40px 20px;
    }
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: #ffffff;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
      border: 1px solid #e2e8f0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 3px solid #cf6734;
      padding-bottom: 24px;
      margin-bottom: 28px;
    }
    .brand {
      display: flex;
      flex-direction: column;
    }
    .brand-name {
      font-size: 28px;
      font-weight: 800;
      color: #cf6734;
      letter-spacing: -0.5px;
    }
    .brand-sub {
      font-size: 12px;
      font-weight: 700;
      color: #475569;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-top: 2px;
    }
    .doc-info {
      text-align: right;
    }
    .doc-badge {
      display: inline-block;
      background: #fff7ed;
      color: #cf6734;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      border-radius: 20px;
      border: 1px solid #ffedd5;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 6px;
    }
    .doc-title {
      font-size: 20px;
      font-weight: 700;
      color: #0f172a;
    }
    .contact-card {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      border-radius: 10px;
      padding: 24px;
      margin-bottom: 32px;
      box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
    }
    .contact-title {
      font-size: 12px;
      font-weight: 700;
      color: #f97316;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      margin-bottom: 14px;
    }
    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
    }
    .contact-item {
      display: flex;
      flex-direction: column;
    }
    .contact-label {
      font-size: 11px;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .contact-val {
      font-size: 16px;
      font-weight: 700;
      color: #ffffff;
      text-decoration: none;
    }
    .contact-val a {
      color: #ffffff;
      text-decoration: none;
    }
    .contact-val a:hover {
      color: #f97316;
    }
    .intro-text {
      font-size: 14px;
      line-height: 1.6;
      color: #475569;
      margin-bottom: 30px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f1f5f9;
    }
    .section-title {
      font-size: 16px;
      font-weight: 700;
      color: #0f172a;
      margin-top: 28px;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .section-title::before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 16px;
      background: #cf6734;
      border-radius: 2px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 24px;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }
    th {
      background: #f8fafc;
      color: #475569;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 12px 16px;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }
    td {
      padding: 14px 16px;
      font-size: 13px;
      color: #334155;
      line-height: 1.5;
      border-bottom: 1px solid #f1f5f9;
    }
    tr:last-child td {
      border-bottom: none;
    }
    tr:nth-child(even) td {
      background: #fafafa;
    }
    .category-tag {
      display: inline-block;
      font-weight: 700;
      color: #0f172a;
    }
    .actions {
      margin-top: 36px;
      display: flex;
      justify-content: center;
      gap: 16px;
    }
    .print-btn {
      background: #cf6734;
      color: #ffffff;
      border: none;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 6px;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(207, 103, 52, 0.3);
    }
    .print-btn:hover {
      background: #b45828;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      text-align: center;
      font-size: 12px;
      color: #94a3b8;
    }
    @media print {
      body { background: #fff; padding: 0; }
      .container { box-shadow: none; border: none; padding: 0; max-width: 100%; }
      .actions { display: none; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="brand">
        <div class="brand-name">INDUS HUB</div>
        <div class="brand-sub">Surety Bond Partner</div>
      </div>
      <div class="doc-info">
        <div class="doc-badge">Verified Document</div>
        <div class="doc-title">Approved Beneficiaries List</div>
      </div>
    </div>

    <!-- Official Contact Card -->
    <div class="contact-card">
      <div class="contact-title">Indus Hub Official Contact Details</div>
      <div class="contact-grid">
        <div class="contact-item">
          <span class="contact-label">Call Support</span>
          <span class="contact-val"><a href="tel:+919925624974">+91 99256 24974</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Direct Email</span>
          <span class="contact-val"><a href="mailto:pravin@indushub.in">pravin@indushub.in</a></span>
        </div>
        <div class="contact-item">
          <span class="contact-label">Official Website</span>
          <span class="contact-val"><a href="https://www.indushub.com" target="_blank">www.indushub.com</a></span>
        </div>
      </div>
    </div>

    <div class="intro-text">
      Indus Hub is India&apos;s trusted partner for IRDAI-compliant Surety Bonds. Below is the comprehensive list of approved beneficiaries, departments, PSUs, and authorities accepting Surety Bonds in place of traditional Bank Guarantees (BGs).
    </div>

    <div class="section-title">Beneficiary Categories & Entities</div>
    <table>
      <thead>
        <tr>
          <th style="width: 30%;">Category</th>
          <th style="width: 70%;">Accepted Beneficiaries & Departments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="category-tag">Government Departments & Ministries</span></td>
          <td>Ministry of Road Transport & Highways (MoRTH), PWD (State & Central), Ministry of Defence, Central Public Works Dept (CPWD), Water Resources, Railways, Irrigation Authorities.</td>
        </tr>
        <tr>
          <td><span class="category-tag">Public Sector Undertakings (PSUs)</span></td>
          <td>NTPC, ONGC, BHEL, IOCL, GAIL, HPCL, BPCL, SAIL, NHPC, PowerGrid Corporation, Coal India, BEL, HAL, EIL, NBCC, RITES, IRCON.</td>
        </tr>
        <tr>
          <td><span class="category-tag">Infrastructure & Utilities</span></td>
          <td>National Highways Authority of India (NHAI), State Road Development Corporations (MSRDC, GSRDC, KRDCL), Delhi Metro (DMRC), Mumbai Metro (MMRDA), Port Trusts (JPA, Syama Prasad Mookerjee Port), Airport Authority of India (AAI), Smart City Corporations.</td>
        </tr>
        <tr>
          <td><span class="category-tag">Project Owners & Developers</span></td>
          <td>Commercial, residential, and industrial project sponsors, renewable energy park developers, industrial corridor authorities.</td>
        </tr>
        <tr>
          <td><span class="category-tag">EPC & Turnkey Contractors</span></td>
          <td>L&T Construction, Tata Projects, Dilip Buildcon, KEC International, Megha Engineering (MEIL), Afcons Infrastructure, Kalpataru Projects, NCC Limited, HG Infra, J Kumar Infraprojects.</td>
        </tr>
        <tr>
          <td><span class="category-tag">Private Corporates</span></td>
          <td>Reliance Industries, Adani Group, Tata Group, JSW Group, Mahindra & Mahindra, Vedanta Group, Torrent Power, and major private conglomerates.</td>
        </tr>
        <tr>
          <td><span class="category-tag">Energy, Oil & Gas</span></td>
          <td>Upstream, midstream, and downstream energy entities, solar & wind power park developers, city gas distribution networks.</td>
        </tr>
      </tbody>
    </table>

    <div class="actions">
      <button class="print-btn" onclick="window.print()">Print / Save as PDF</button>
    </div>

    <div class="footer">
      &copy; ${new Date().getFullYear()} Indus Hub Surety Bond. All rights reserved. | Contact: +91 99256 24974 | pravin@indushub.in
    </div>
  </div>
</body>
</html>`;

  const blob = new Blob([content], { type: 'text/html;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Indus_Hub_Approved_Beneficiary_List.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
