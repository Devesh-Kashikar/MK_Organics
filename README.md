# MK Organics — Website

A single-page promotional website for **MK Organics**, built with React, Vite, Bootstrap 5, and custom CSS. The site introduces the company, its one product (Cordyceps militaris mushroom), and a working, validated contact/enquiry form.

## Tech stack

- React 18 + Vite
- Bootstrap 5 (grid, breakpoints)
- Custom CSS (design tokens in `src/index.css`)
- lucide-react (icons)
- EmailJS (`@emailjs/browser`) for the contact form — no server to maintain, and no private key ever ships to the browser

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Making the contact form live (EmailJS setup)

The form is fully built (validation, loading state, duplicate-submission guard, success/error messages) but needs an EmailJS account connected before it can actually deliver mail, since no secrets are hard-coded into the app.

1. Create a free account at https://www.emailjs.com
2. Add an **Email Service** (e.g. Gmail) and connect `punemk.organics@gmail.com` as the sending/receiving account.
3. Create an **Email Template** with these variables, matching what `Contact.jsx` sends:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{phone}}`
   - `{{enquiry_type}}`
   - `{{message}}`
   - `{{to_email}}` (set the template's "To" field to this variable, or hard-code `punemk.organics@gmail.com`)
4. Copy your **Service ID**, **Template ID**, and **Public Key** from the EmailJS dashboard.
5. Copy `.env.example` to `.env` and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
   ```
6. Restart the dev server (or rebuild) so Vite picks up the new environment variables.

The EmailJS **public key** is safe to ship in frontend code by design (it only allows sending through templates you've configured) — this is why no serverless function is required and why there's no private key anywhere in this repo.

Until these values are set, submitting the form will show the "Something went wrong" error state rather than silently failing.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   ├── Hero.jsx / .css
│   ├── About.jsx / .css
│   ├── Product.jsx / .css
│   ├── WhyPartner.jsx / .css
│   ├── Approach.jsx / .css
│   ├── BusinessCTA.jsx / .css
│   ├── Contact.jsx / .css
│   ├── Footer.jsx / .css
│   └── Reveal.jsx          (shared scroll-reveal wrapper)
├── assets/
│   ├── logo.png
│   └── cordyceps-militaris.jpg
├── App.jsx
├── main.jsx
└── index.css                (design tokens + base styles)
```

## Deploying

`npm run build` outputs a static `dist/` folder that can be hosted on Netlify, Vercel, GitHub Pages, or any static host. Remember to set the three `VITE_EMAILJS_*` environment variables in your hosting provider's dashboard as well, since `.env` is not committed to the repo.

## Notes

- Only real company information provided in the brief was used — no invented certifications, clients, or statistics.
- The product photo is used only in the "Our Product" section, as required.
- All other imagery is original SVG illustration, drawn to match the brand palette, rather than stock photography.
