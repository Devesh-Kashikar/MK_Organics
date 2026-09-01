import { Send, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";
import "./BusinessCTA.css";

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function BusinessCTA() {
  return (
    <section className="mk-cta">
      <div className="mk-cta__field" aria-hidden="true">
        <svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg" focusable="false">
          <g fill="none" stroke="rgba(255,255,255,0.14)" strokeWidth="1.4">
            <path d="M0 340 C 120 300, 160 240, 260 220 C 340 204, 380 150, 460 140" />
            <path d="M260 220 C 320 240, 340 200, 400 210" />
            <path d="M460 140 C 520 120, 540 80, 620 70" />
          </g>
          <g fill="var(--amber)" opacity="0.75">
            <circle cx="460" cy="140" r="3.5" />
            <circle cx="620" cy="70" r="3" />
            <circle cx="260" cy="220" r="3" />
          </g>
        </svg>
      </div>

      <Reveal className="container-xl mk-cta__inner">
        <h2 className="mk-cta__heading">Looking for Cordyceps militaris Mushroom?</h2>
        <p className="mk-cta__text">
          MK Organics supplies Cordyceps militaris raw material and welcomes enquiries for samples,
          specifications, pricing, quantities and long-term supply arrangements.
        </p>
        <p className="mk-cta__note">B2B and B2C enquiries are welcome.</p>

        <div className="mk-cta__actions">
          <button type="button" className="btn-mk btn-mk-light" onClick={scrollToContact}>
            <Send size={18} strokeWidth={2.2} />
            Send an Enquiry
          </button>
          <button type="button" className="btn-mk btn-mk-ghost-light" onClick={scrollToContact}>
            <PhoneCall size={18} strokeWidth={2.2} />
            Contact Us
          </button>
        </div>
      </Reveal>
    </section>
  );
}
