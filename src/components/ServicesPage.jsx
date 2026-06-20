import { useState } from "react";
import "./Services.css"; // make sure Services.css is in the same folder

function ServicesPage() {
  const services = [
    { title: "Urban Planning", img: "/services/service1.jpg", text: "Innovative solutions for sustainable urban growth." },
    { title: "Interior Design", img: "/services/service2.jpg", text: "Elegant interiors blending style and functionality." },
    { title: "Construction", img: "/services/service3.jpg", text: "Reliable construction with modern techniques." },
    { title: "Planning", img: "/services/service4.jpg", text: "Meticulous planning for efficient project execution." },
    { title: "Structural Design", img: "/services/service5.jpg", text: "Safe and robust structural engineering solutions." },
    { title: "MEP Services", img: "/services/service6.jpg", text: "Mechanical, electrical, and plumbing expertise." },
  ];

  const [flipped, setFlipped] = useState(Array(services.length).fill(false));

  const handleFlip = (index) => {
    const newFlipped = [...flipped];
    newFlipped[index] = !newFlipped[index];
    setFlipped(newFlipped);
  };

  return (
<section id="services" className="container-fluid py-5">
  <h2 className="text-center fw-bold mb-5">Our Services</h2>
  <div className="row justify-content-center">
    {services.map((service, index) => (
      <div className="col-md-4 d-flex justify-content-center mb-4" key={index}>
        <div className="service-card">
          <img src={service.img} alt={service.title} />
          <div className="overlay">
            {/* <h5 className="fw-bold">{service.title}</h5> */}
            <p>{service.text}</p>
          </div>
          {/* ✅ Always-visible label */}
          <div className="label">{service.title}</div>
        </div>
      </div>
    ))}
  </div>
</section>




  );
}

export default ServicesPage;
