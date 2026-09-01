import { Sprout, Users, Gauge, Handshake, Leaf } from "lucide-react";
import Reveal from "./Reveal";
import "./About.css";

const FEATURES = [
  {
    icon: Users,
    title: "B2B & B2C Supply",
    text: "Supply options for business and individual customers.",
  },
  {
    icon: Gauge,
    title: "Quality Focused",
    text: "Commitment to consistent-quality raw material.",
  },
  {
    icon: Sprout,
    title: "Flexible Supply",
    text: "Supply formats and quantities can be discussed based on customer requirements.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    text: "Focus on dependable and lasting sourcing relationships.",
  },
];

function CultivationIllustration() {
  return (
    <svg
      viewBox="0 0 480 520"
      xmlns="http://www.w3.org/2000/svg"
      className="mk-about__illustration"
      role="img"
      aria-labelledby="cultivationTitle"
    >
      <title id="cultivationTitle">Illustration of Cordyceps militaris cultivation jars on a laboratory shelf</title>
      <rect x="0" y="0" width="480" height="520" rx="28" fill="var(--sage-soft)" />
      <rect x="30" y="120" width="420" height="10" fill="var(--forest)" opacity="0.5" />
      <rect x="30" y="300" width="420" height="10" fill="var(--forest)" opacity="0.5" />
      <rect x="30" y="480" width="420" height="10" fill="var(--forest)" opacity="0.5" />

      {[70, 160, 250, 340].map((x, i) => (
        <g key={i} transform={`translate(${x},155)`}>
          <rect x="-30" y="0" width="60" height="120" rx="10" fill="var(--paper)" stroke="var(--forest)" strokeWidth="2" />
          <rect x="-30" y="0" width="60" height="70" rx="10" fill="var(--amber-soft)" />
          {Array.from({ length: 5 }).map((_, j) => (
            <line
              key={j}
              x1={-16 + j * 8}
              y1={20}
              x2={-16 + j * 8}
              y2={-14 - (j % 2) * 6}
              stroke="var(--amber)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </g>
      ))}

      {[70, 160, 250, 340].map((x, i) => (
        <g key={`b-${i}`} transform={`translate(${x},335)`}>
          <rect x="-30" y="0" width="60" height="120" rx="10" fill="var(--paper)" stroke="var(--forest)" strokeWidth="2" />
          <rect x="-30" y="0" width="60" height="60" rx="10" fill="var(--amber-soft)" />
          {Array.from({ length: 5 }).map((_, j) => (
            <line
              key={j}
              x1={-16 + j * 8}
              y1={16}
              x2={-16 + j * 8}
              y2={-10 - (j % 2) * 5}
              stroke="var(--amber)"
              strokeWidth="2.6"
              strokeLinecap="round"
            />
          ))}
        </g>
      ))}
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="section section-paper mk-about">
      <div className="container-xl">
        <div className="row align-items-center g-5 mk-about__grid">
          <Reveal className="col-lg-5 mk-about__image-wrap">
            <CultivationIllustration />
          </Reveal>

          <Reveal as="div" className="col-lg-7 mk-about__content">
            <span className="icon-ring mk-about__mark">
              <Leaf size={22} strokeWidth={2} />
            </span>
            <h2 className="section-heading">About Us</h2>
            <p className="section-lede">
              MK Organics is engaged in the cultivation and supply of premium-quality Cordyceps
              militaris mushroom for B2B customers. We aim to build long-term relationships with
              pharmaceutical, nutraceutical, Ayurvedic, functional-food, wellness and research
              organizations by providing consistent-quality mushroom raw material and professional
              supply support.
            </p>
            <p className="mk-about__b2c-note">
              We also welcome B2C enquiries — MK Organics supports both business and individual
              customers looking to source Cordyceps militaris.
            </p>

            <div className="row g-4 mk-about__features">
              {FEATURES.map((f) => (
                <div className="col-sm-6 mk-about__feature" key={f.title}>
                  <span className="icon-ring mk-about__feature-icon">
                    <f.icon size={20} strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="mk-about__feature-title">{f.title}</h3>
                    <p className="mk-about__feature-text">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
