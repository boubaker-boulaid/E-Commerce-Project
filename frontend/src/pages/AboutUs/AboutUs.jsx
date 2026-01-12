import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const services = [
    {
      id: 1,
      icon: "./assets/images/service-1.png",
      title: "Free Shiping",
      text: "All orders over",
      highlight: "$150"
    },
    {
      id: 2,
      icon: "./assets/images/service-2.png",
      title: "Quick Payment",
      text: "100% secure payment"
    },
    {
      id: 3,
      icon: "./assets/images/service-3.png",
      title: "Free Returns",
      text: "Money back in 30 days"
    },
    {
      id: 4,
      icon: "./assets/images/service-4.png",
      title: "24/7 Support",
      text: "Get Quick Support"
    }
  ];

  return (
    <section className="section service" id="about">
      <div className="container">
        <ul className="service-list">
          {services.map((service) => (
            <li key={service.id} className="service-item">
              <div className="service-card">
                <div className="card-icon">
                  <img 
                    src={service.icon} 
                    width="53" 
                    height="28" 
                    loading="lazy" 
                    alt="Service icon" 
                  />
                </div>

                <div>
                  <h3 className="h4 card-title">{service.title}</h3>
                  <p className="card-text">
                    {service.text} {service.highlight && <span>{service.highlight}</span>}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutUs;