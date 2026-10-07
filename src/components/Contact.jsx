import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";
import "./Contact.css";

const ENQUIRY_TYPES = [
  "B2B Enquiry",
  "B2C Enquiry",
  "Bulk Supply",
  "Product Information",
  "Pricing Enquiry",
  "Other",
];

const EMPTY_FORM = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "B2B Enquiry",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// EmailJS keeps everything client-safe: only a public key ships to the browser,
// so this satisfies "no private API key in the frontend" while needing no server to maintain.
// Set these three values in a .env file (see README) to make the form live.
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const submittingRef = useRef(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!EMAIL_RE.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) next.message = "Please enter a message.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submittingRef.current) return; // prevent duplicate submissions
    if (!validate()) return;

    submittingRef.current = true;
    setStatus("sending");

    try {
      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        throw new Error("Email service is not configured yet.");
      }

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_email: "punemk.organics@gmail.com",
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || "Not provided",
          enquiry_type: form.enquiryType,
          message: form.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setStatus("success");
      setForm(EMPTY_FORM);
      setErrors({});
    } catch (err) {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  };

  return (
    <section id="contact" className="section section-cream mk-contact">
      <div className="container-xl">
        <div className="mk-contact__intro">
          <span className="eyebrow">Contact Us</span>
          <h2 className="section-heading">Let&rsquo;s Start a Conversation</h2>
        </div>

        <div className="row g-4 mk-contact__grid">
          <div className="col-lg-7">
          <form className="mk-contact__form mk-card" onSubmit={handleSubmit} noValidate>
            <div className="mk-contact__field">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span className="mk-contact__error" id="name-error" role="alert">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="mk-contact__field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span className="mk-contact__error" id="email-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="mk-contact__field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
            </div>

            <div className="mk-contact__field">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <select id="enquiryType" name="enquiryType" value={form.enquiryType} onChange={handleChange}>
                {ENQUIRY_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div className="mk-contact__field">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span className="mk-contact__error" id="message-error" role="alert">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn-mk btn-mk-primary mk-contact__submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="mk-contact__spinner" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {status === "success" && (
              <p className="mk-contact__status mk-contact__status--success" role="status">
                <CheckCircle2 size={18} />
                Thank you! Your enquiry has been sent successfully. We will get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="mk-contact__status mk-contact__status--error" role="alert">
                <AlertTriangle size={18} />
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>
          </div>

          <div className="col-lg-5 mk-contact__info">
            <div className="mk-card mk-contact__info-card">
              <h3 className="mk-contact__info-heading">MK Organics</h3>
              <p className="text-meta mk-contact__info-sub">
                Cordyceps militaris Mushroom Cultivation &amp; Bulk Supply
              </p>

              <ul className="mk-contact__info-list">
                <li>
                  <span className="icon-ring">
                    <Phone size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <span className="mk-contact__info-label">Contact Person</span>
                    <a href="tel:+917020052890">Krutika Kashikar &bull; 7020052890</a>
                  </div>
                </li>
                <li>
                  <span className="icon-ring">
                    <Mail size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <span className="mk-contact__info-label">Email</span>
                    <a href="mailto:punemk.organics@gmail.com">sales@mkorganics-pune.com</a>
                  </div>
                </li>
                <li>
                  <span className="icon-ring">
                    <MapPin size={18} strokeWidth={2} />
                  </span>
                  <div>
                    <span className="mk-contact__info-label">Address</span>
                    <span>
                      Dhayari Fhata, Sinhgad Road, Pune, Maharashtra, India 
                      <br/>
                      Pin: 411041
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
