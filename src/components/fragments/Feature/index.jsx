import React from "react";
import { featuresData } from "../../../helpers/featuresData";

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-grid">
        {featuresData.map((feature) => (
          <div className="feature" key={feature.id}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>
              {feature.icon}
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
