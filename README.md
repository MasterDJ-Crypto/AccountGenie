<p align="center">
  <img src="logo.png" alt="AccountGenie Logo" width="120" />
</p>

<h1 align="center">AccountGenie</h1>

<p align="center">
  <strong>One-click disposable accounts with local auto-verification.</strong><br/>
  Privacy-first · Secure · Ephemeral
</p>

<p align="center">
  <a href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/Chrome_Web_Store-Install-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Install on Chrome" />
  </a>
  <img src="https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

---

## 🧞 What is AccountGenie?

AccountGenie is a Chrome extension that generates **disposable email accounts** and **automatically verifies them** — entirely within your browser. No passwords ever leave your device.

This repository contains the **landing page / marketing website** for the extension, built with React, TypeScript, Tailwind CSS, and Vite.

### How the Extension Works

```
Generate ──▶ Monitor ──▶ Verify ──▶ Success
   │             │           │           │
 Creates      Polls API   Clicks      Credentials
 email +      for new     links or    saved to
 password     emails      extracts    local vault
 locally                  codes
```

1. **Generate** — One click creates a disposable email & cryptographically strong password via [mail.tm](https://mail.tm).
2. **Monitor** — The background worker polls for incoming verification emails.
3. **Verify** — Parses the email HTML to find verification links (opened & clicked automatically in a background tab) or extract numeric codes.
4. **Success** — Credentials are saved securely in `browser.storage.local`.

---

## ✨ Key Features

| Feature | Description |
|---|---|
| 🖱️ **Instant Generation** | One click creates a disposable email + strong password |
| 🔑 **Auto-Verify Engine** | Detects verification links and clicks them in a background tab |
| 🗄️ **Zero-Knowledge Storage** | Credentials live in `browser.storage.local` — we never see your data |
| 🌐 **Stateless API** | Backend only proxies ephemeral message bodies; no logs kept |
| 🛡️ **Anti-Abuse Rate Limits** | 30-second generation cooldowns and inbox TTLs |
| 🛠️ **Dev Tools** | View raw HTML/text source of emails for debugging auth flows |

---

## 🔒 Privacy Architecture

- **Local Storage Only** — All generated credentials are saved only in the extension's local storage. We physically cannot access your data.
- **No Password Transmission** — Passwords are never sent to any server. The backend only handles ephemeral email message bodies from mail.tm.
- **Client-Side Execution** — All auto-verify actions run in your active browser instance.
- **No Tracking** — No Google Analytics, Meta Pixels, or any third-party trackers.
- **No Cookies** — The website and extension operate without setting any tracking cookies.

---

## 🏗️ Project Structure

```
├── index.html              # Entry HTML with Tailwind config & animations
├── index.tsx               # React entry point
├── App.tsx                 # Main app layout with scroll observers
├── types.ts                # TypeScript interfaces
├── components/
│   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   ├── Hero.tsx            # Landing hero with animated terminal demo
│   ├── Features.tsx        # Feature cards with spotlight hover effects
│   ├── HowItWorks.tsx      # 4-step pipeline visualization
│   ├── TechnicalSpecs.tsx  # Tabbed permissions/privacy/tech docs
│   ├── ComplianceSection.tsx # Collapsible store reviewer notes
│   ├── FAQ.tsx             # Accordion FAQ section
│   ├── Footer.tsx          # Footer with legal modals
│   └── Logo.tsx            # Logo component
├── logo.png                # Brand logo
├── metadata.json           # App metadata
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/MasterDJ-Crypto/AccountGenie.git
cd AccountGenie

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at **`http://localhost:3000`**.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **TypeScript 5.8** | Type safety |
| **Vite 6** | Build tool & dev server |
| **Tailwind CSS** (CDN) | Utility-first styling |
| **Lucide React** | Icon library |
| **Space Grotesk + Inter** | Typography |

### Design Highlights

- 🎨 Dark-mode-first design with glassmorphism UI
- ✨ Scroll-triggered reveal animations (3D cards, domino, blur, swipe)
- 🔦 Interactive spotlight hover effects on feature cards
- 🖥️ Animated terminal demo showcasing the verification pipeline
- 🎯 Responsive cursor + spotlight tour animations (mobile/tablet/desktop)
- 📱 Fully responsive with mobile navigation

---

## 📄 Extension Permissions

| Permission | Reason |
|---|---|
| `storage` | Save generated emails & passwords locally within your browser profile |
| `alarms` | Wake up the background worker to poll for new emails |
| `scripting` | Inject `verify_clicker.js` into verification pages to perform click actions |
| `host_permissions` | `https://api.mail.tm/*` for API access; `<all_urls>` for injecting verification scripts |

---

## ❓ FAQ

<details>
<summary><strong>How does auto-verify work?</strong></summary>
<br/>
The extension parses incoming email HTML, scores verification link candidates, and opens the best match in a background tab. A content script (<code>verify_clicker.js</code>) finds and clicks the verification button. If a numeric code is detected instead, it's extracted and presented in the UI.
</details>

<details>
<summary><strong>Does AccountGenie store passwords on your servers?</strong></summary>
<br/>
No. All credentials are saved only in <code>browser.storage.local</code> within the extension. The server is used only for ephemeral inbox creation and fetching message bodies.
</details>

<details>
<summary><strong>What about CAPTCHAs?</strong></summary>
<br/>
If <code>verify_clicker.js</code> detects CAPTCHA frames (reCAPTCHA/hCaptcha), verification is aborted and the account is marked as failed. You can view the raw message to follow up manually.
</details>

<details>
<summary><strong>Will sites block this?</strong></summary>
<br/>
Some sites block known temp mail providers. AccountGenie mitigates this with a 30-second generation rate limit and short inbox TTLs to reduce obvious abuse patterns.
</details>

---

## 📜 License

All rights reserved. © 2025 AccountGenie.

---

<p align="center">
  <a href="https://chromewebstore.google.com/detail/blcmhgdfaajieaiokjoienclhgobjabe?utm_source=item-share-cb">
    <img src="https://img.shields.io/badge/⬇_Install_AccountGenie-Chrome_Web_Store-0ea5e9?style=for-the-badge" alt="Get the Extension" />
  </a>
</p>
