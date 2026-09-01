import { Target, Users2, SlidersHorizontal, ShieldCheck, MessagesSquare } from "lucide-react";
import Reveal from "./Reveal";
import "./WhyPartner.css";

const REASONS = [
  {
    icon: Target,
    title: "Focused Cultivation",
    text: "Focused on Cordyceps militaris cultivation and supply.",
  },
  {
    icon: Users2,
    title: "B2B & B2C Supply",
    text: "Supply options for both business and individual customers.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible Supply",
    text: "Flexible supply formats and quantities based on customer specifications.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Quality",
    text: "Commitment to consistent quality and dependable supply.",
  },
  {
    icon: MessagesSquare,
    title: "Transparent Communication",
    text: "Professional and transparent communication throughout the sourcing process.",
  },
];

export default function WhyPartner() {
  return (
    <section id="why-partner" className="section section-paper mk-why">
      <div className="container-xl">
        <Reveal className="mk-why__intro">
          <h2 className="section-heading">Why Partner With MK Organics</h2>
        </Reveal>

        <div className="row g-4 mk-why__grid">
          {REASONS.map((r, i) => (
            <div className="col-md-6 col-lg-4" key={r.title}>
              <Reveal as="div" className="mk-card mk-why__card h-100" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="icon-ring mk-why__icon">
                  <r.icon size={22} strokeWidth={2} />
                </span>
                <h3 className="mk-why__title">{r.title}</h3>
                <p className="mk-why__text">{r.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
