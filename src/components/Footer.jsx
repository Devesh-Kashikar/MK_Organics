import { Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
import "./Footer.css";

const QUICK_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#product", label: "Our Product" },
  { href: "#why-partner", label: "Why Partner With Us" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact Us" },
];

function handleLinkClick(e, href) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="mk-footer">
      <div className="container-xl mk-footer__grid row">
        <div className="col-lg-4 col-sm-6 mk-footer__brand">
          <div className="mk-footer__brand-row">
            <img src={logo} alt="MK Organics logo" className="mk-footer__logo" />
            <div>
              <span className="mk-footer__name">MK ORGANICS</span>
              <span className="mk-footer__tagline">Nature Meets Science</span>
            </div>
          </div>
          <p className="mk-footer__desc">
            Premium Cordyceps militaris mushroom cultivation and B2B &amp; B2C supply.
          </p>
        </div>

        <div className="col-lg-2 col-sm-6 mk-footer__col">
          <h4>Quick Links</h4>
          <ul>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleLinkClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-lg-3 col-sm-6 mk-footer__col">
          <h4>Our Product</h4>
          <ul>
            <li>
              <a href="#product" onClick={(e) => handleLinkClick(e, "#product")}>
                Cordyceps militaris Mushroom
              </a>
            </li>
          </ul>
        </div>

        <div className="col-lg-3 col-sm-6 mk-footer__col">
          <h4>Contact</h4>
          <ul className="mk-footer__contact-list">
            <li>
              <Phone size={16} strokeWidth={2} />
              <a href="tel:+917020052890">7020052890</a>
            </li>
            <li>
              <Mail size={16} strokeWidth={2} />
              <a href="mailto:punemk.organics@gmail.com">punemk.organics@gmail.com</a>
            </li>
            <li>
              <MapPin size={16} strokeWidth={2} />
              <span>Pune, Maharashtra</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mk-footer__bottom">
        <div className="container-xl mk-footer__bottom-inner">
          <span>&copy; 2026 MK Organics. All Rights Reserved.</span>
          <div className="mk-footer__legal">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms-conditions">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
