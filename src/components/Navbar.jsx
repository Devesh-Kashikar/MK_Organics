import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";
import logo from "../assets/logo.png";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#product", label: "Our Product" },
  { href: "#why-partner", label: "Why Partner With Us" },
  { href: "#approach", label: "Our Approach" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);
    if (!sections.length || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`mk-navbar ${scrolled ? "mk-navbar--scrolled" : ""}`}>
      <nav className="container-xl mk-navbar__inner" aria-label="Primary">
        <a
          href="#home"
          className="mk-navbar__brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <img src="New_MK_Organics_Botanical_Logo-removebg.png" alt="MK Organics logo" className="mk-navbar__logo" />
          <span className="mk-navbar__brand-text">
            <span className="mk-navbar__name">MK ORGANICS</span>
            <span className="mk-navbar__tagline">Nature Meets Science</span>
          </span>
        </a>

        <button
          type="button"
          className="mk-navbar__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`mk-navbar__links ${open ? "is-open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={active === link.href ? "is-active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-mk btn-mk-primary mk-navbar__cta"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
          >
            <Leaf size={16} strokeWidth={2.2} />
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
