import { ArrowRight, MessageCircle } from "lucide-react";
import "./Hero.css";

function scrollTo(href) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="home" className="mk-hero">
      <div className="mk-hero__field" aria-hidden="true">
        <svg
          className="mk-hero__mycelium"
          viewBox="0 0 900 700"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <g fill="none" stroke="var(--forest-mid)" strokeWidth="1.4" strokeLinecap="round" opacity="0.35">
            <path d="M60 640 C 140 520, 120 420, 200 340 C 260 280, 240 200, 300 130" />
            <path d="M200 340 C 260 360, 300 320, 360 360 C 410 390, 460 360, 510 400" />
            <path d="M300 130 C 340 160, 320 210, 380 220 C 430 228, 440 190, 490 200" />
            <path d="M60 640 C 20 560, 40 480, -10 420" />
            <path d="M510 400 C 560 430, 590 400, 640 440 C 690 480, 720 460, 780 500" />
          </g>
          <g fill="var(--amber)" opacity="0.9">
            <circle cx="300" cy="130" r="4.5" />
            <circle cx="490" cy="200" r="3.5" />
            <circle cx="510" cy="400" r="4" />
            <circle cx="780" cy="500" r="3.5" />
            <circle cx="200" cy="340" r="3.5" />
          </g>
          <g fill="none" stroke="var(--sage)" strokeWidth="1.2" opacity="0.55">
            <polygon points="700,120 730,138 730,174 700,192 670,174 670,138" />
            <polygon points="640,220 662,233 662,259 640,272 618,259 618,233" />
          </g>
        </svg>
      </div>

      <div className="container-xl mk-hero__inner">
        <div className="mk-hero__copy">
          <span className="mk-hero__eyebrow">Cordyceps militaris Cultivation &amp; Bulk Supply</span>
          <h1 className="mk-hero__headline">
            Nature Meets Science<br />for a Better Tomorrow
          </h1>
          <p className="mk-hero__lede">
            MK Organics cultivates and supplies premium-quality Cordyceps militaris mushroom for
            B2B and B2C customers and organizations across pharmaceutical, nutraceutical, Ayurvedic,
            functional-food, wellness and research sectors.
          </p>
          <div className="mk-hero__actions">
            <button
              type="button"
              className="btn-mk btn-mk-primary"
              onClick={() => scrollTo("#product")}
            >
              Explore Our Product
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
            <button
              type="button"
              className="btn-mk btn-mk-outline"
              onClick={() => scrollTo("#contact")}
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              Contact Us
            </button>
          </div>
        </div>

        <div className="mk-hero__visual" role="presentation">
          <div className="mk-hero__blob mk-hero__blob--1" />
          <div className="mk-hero__blob mk-hero__blob--2" />
          <div className="mk-hero__ring" />
          <svg
            className="mk-hero__spore"
            viewBox="0 0 320 320"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
          >
            <g stroke="var(--paper)" strokeWidth="2.2" fill="none" strokeLinecap="round">
              {Array.from({ length: 14 }).map((_, i) => {
                const angle = (i / 14) * Math.PI * 2;
                const x2 = 160 + Math.cos(angle) * 110;
                const y2 = 160 + Math.sin(angle) * 110;
                return <line key={i} x1="160" y1="160" x2={x2} y2={y2} opacity="0.55" />;
              })}
            </g>
            <circle cx="160" cy="160" r="34" fill="var(--amber)" opacity="0.95" />
            <circle cx="160" cy="160" r="52" fill="none" stroke="var(--paper)" strokeWidth="1.6" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
