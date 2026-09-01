import { Factory, FlaskConical, ShieldCheck, Warehouse, Truck } from "lucide-react";
import Reveal from "./Reveal";
import "./Approach.css";

const STEPS = [
  {
    icon: Factory,
    title: "Production",
    text: "Cultivation of Cordyceps militaris under controlled conditions.",
  },
  {
    icon: FlaskConical,
    title: "Testing",
    text: "Laboratory testing of the harvested mushroom.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Check",
    text: "Consistency and quality verification before dispatch.",
  },
  {
    icon: Warehouse,
    title: "Wholesale Distribution",
    text: "Bulk supply coordinated for B2B and B2C orders.",
  },
  {
    icon: Truck,
    title: "Delivery",
    text: "Dispatch of the finished raw material to customers.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section section-cream mk-approach">
      <div className="container-xl">
        <Reveal className="mk-approach__intro">
          <span className="eyebrow">Our Approach</span>
          <h2 className="section-heading">From Cultivation to Your Doorstep</h2>
        </Reveal>

        <Reveal as="div" className="mk-approach__track">
          {STEPS.map((step, i) => (
            <div className="mk-approach__step" key={step.title}>
              <div className="mk-approach__node">
                <span className="mk-approach__icon">
                  <step.icon size={24} strokeWidth={2} />
                </span>
                {i < STEPS.length - 1 && <span className="mk-approach__connector" aria-hidden="true" />}
              </div>
              <h3 className="mk-approach__title">{step.title}</h3>
              <p className="mk-approach__text">{step.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
