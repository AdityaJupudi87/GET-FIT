import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "Quarterly",
      price: 4500,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Half-Yearly",
      price: 8000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "Yearly",
      price: 14000,
      length: 12,
    },
  ];

  return (
    <section className="pricing">
      <h1>Fitness Plans</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>Package</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Equipment
                </p>
                <p>
                  <Check /> All Day Free Training
                </p>
                <p>
                  <Check /> Free Restroom Access
                </p>
                <p>
                  <Check /> 24/7 Skilled Support
                </p>
                <p>
                  <Check /> 20 Days Pause Option
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
