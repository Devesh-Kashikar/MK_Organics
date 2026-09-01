import { ArrowRight, Package2, Beaker, Boxes } from "lucide-react";
import Reveal from "./Reveal";
import mushroomImg from "../assets/cordyceps-militaris.jpg";
import "./Product.css";

function scrollToContact() {
  const el = document.querySelector("#contact");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Product() {
  return (
    <section id="product" className="section section-sage mk-product">
      <div className="container-xl">
        <Reveal className="mk-product__intro">
          <span className="eyebrow">Our Product</span>
          <h2 className="section-heading">Cordyceps militaris Mushroom</h2>
        </Reveal>

        <Reveal as="div" className="row g-0 mk-product__panel">
          <div className="col-lg-5 mk-product__image-wrap">
            <img
              src={mushroomImg}
              alt="Freshly harvested Cordyceps militaris mushroom, with bright orange fruiting bodies, held in gloved hands beside jars of cultivated mushroom"
              className="mk-product__image"
            />
          </div>

          <div className="col-lg-7 mk-product__details">
            <h3 className="mk-product__name">Cordyceps militaris Mushroom</h3>

            <div className="mk-product__row">
              <span className="icon-ring mk-product__row-icon">
                <Package2 size={20} strokeWidth={2} />
              </span>
              <div>
                <h4 className="mk-product__row-title">Supply Forms</h4>
                <p className="mk-product__row-text">Dried Fruiting Bodies &bull; Bulk Raw Material</p>
              </div>
            </div>

            <div className="mk-product__row">
              <span className="icon-ring mk-product__row-icon">
                <Beaker size={20} strokeWidth={2} />
              </span>
              <div>
                <h4 className="mk-product__row-title">Target Applications</h4>
                <p className="mk-product__row-text">
                  Nutraceutical &bull; Ayurvedic &bull; Pharmaceutical &bull; Functional Food &bull; Research
                </p>
              </div>
            </div>

            <div className="mk-product__row">
              <span className="icon-ring mk-product__row-icon">
                <Boxes size={20} strokeWidth={2} />
              </span>
              <div>
                <h4 className="mk-product__row-title">Supply Model</h4>
                <p className="mk-product__row-text">
                  B2B &amp; B2C Supply &bull; Bulk Supply &bull; Long-Term Sourcing Partnerships
                </p>
              </div>
            </div>

            <button type="button" className="btn-mk btn-mk-primary mk-product__cta" onClick={scrollToContact}>
              Enquire Now
              <ArrowRight size={18} strokeWidth={2.2} />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
