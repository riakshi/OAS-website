import Carousel from "react-bootstrap/Carousel";
import { motion } from "framer-motion";
import "./HeroCarousel.css";

function HeroCarousel() {
  const slides = [
    {
      img: "Homepage/homepage1.jpg",
      title: "Modern Living Spaces",
      text: "We design homes that blend elegance with functionality.",
    },
    {
      img: "Homepage/homepage2.jpg",
      title: "Urban Architecture",
      text: "Innovative solutions for growing cities and communities.",
    },
    {
      img: "Homepage/homepage3.jpg",
      title: "Sustainable Design",
      text: "Eco-friendly projects that respect nature and last generations.",
    },
    {
      img: "Homepage/homepage4.jpg",
      title: "Commercial Excellence",
      text: "Smart office spaces that inspire productivity.",
    },
  ];

  return (
    <Carousel id="home" interval={4000} controls={false} indicators={true} fade={true}>
      {slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className="container-fluid">
            <div className="row hero-slide">
              {/* Image column */}
              <div className="col-md-7 p-0">
                <img
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  className="img-fluid hero-img"
                />
              </div>

              {/* Text column */}
              <motion.div
                className="col-md-5 d-flex flex-column justify-content-center align-items-start p-5 hero-text"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="fw-bold">{slide.title}</h2>
                <p className="mt-3">{slide.text}</p>
                <button className="btn btn-light mt-3">Book a Free Consultation</button>
              </motion.div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
