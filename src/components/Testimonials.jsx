import React from "react";

export default function Testimonials() {
  const data = [
    {
      quote: "Ashley completely revitalized our brand identity. The team was attentive and creative every step of the way.",
      author: "Samantha R.",
    },
    {
      quote: "Working with this team was a breeze! They delivered a website that exceeded our expectations.",
      author: "David L.",
    },
    {
      quote: "Their design solutions were both innovative and practical. I loved how they listened to our needs.",
      author: "Priya K.",
    },
    {
      quote: "We saw immediate improvement in our engagement after the marketing campaign. Truly impressed!",
      author: "Michael T.",
    },
    {
      quote: "Professional, punctual, and incredibly talented. They made a complex project feel easy.",
      author: "Elena G.",
    },
    {
      quote: "The admin dashboard they built has saved us so much time every day. Highly recommend them.",
      author: "Carlos M.",
    },
  ];

  const loopedData = [...data, ...data];

  return (
    <section className="section testimonials fade-up-stagger" id="testimonials">
      <h2 className="scrolling-title fade-item">Customer Voices</h2>
      <div className="scrolling-wrapper">
        <div className="scrolling-track">
          {loopedData.map((item, index) => (
            <div className="brutalist-card fade-item" key={index}>
              <div className="brutalist-card__header">
                <div className="brutalist-card__alert">{item.author}</div>
              </div>
              <div className="brutalist-card__message">{item.quote}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}