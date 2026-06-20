import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./Team.css"
function Team() {
  const members = [
    {
      name: "Abhisek Choudhury",
      role: "Co-Founder and Principal Architect",
      qualification: "B.Arch, IIT BHU",
      img: "Team/member1.jpg",
    },
    {
      name: "Nitisha Kothari",
      role: "Senior Designer",
      qualification: "B.Arch, IIT BHU",
      img: "Team/member2.jpeg",
    },
    {
      name: "Rahul Bharadwaj",
      role: "Project Manager",
      qualification: "MBA, IIM Bangalore",
      img: "Team/member3.jpeg",
    },
    {
      name: "Sneha Patel",
      role: "Urban Planner",
      qualification: "M.Plan, SPA Delhi",
      img: "Team/member4.jpg",
    },
    {
      name: "Arjun Mehta",
      role: "Structural Engineer",
      qualification: "M.Tech, IIT Madras",
      img: "Team/member5.jpg",
    },
    {
      name: "Neha Gupta",
      role: "Interior Designer",
      qualification: "B.Des, NID Ahmedabad",
      img: "Team/member6.jpg",
    },
    {
      name: "Vikram Singh",
      role: "Landscape Architect",
      qualification: "M.L.A, Harvard GSD",
      img: "Team/member7.jpg",
    }
    // {
    //   name: "Ananya Roy",
    //   role: "Sustainability Expert",
    //   qualification: "M.Sc, TERI University",
    //   img: "/member8.jpg",
    // },
    // {
    //   name: "Karan Malhotra",
    //   role: "Construction Manager",
    //   qualification: "MBA, XLRI Jamshedpur",
    //   img: "/member9.jpg",
    // },
    // {
    //   name: "Meera Iyer",
    //   role: "Design Researcher",
    //   qualification: "PhD, IIT Bombay",
    //   img: "/member10.jpg",
    // },
  ];

 
  // Split into groups of 3
  const chunkedMembers = [];
  for (let i = 0; i < members.length; i += 3) {
    chunkedMembers.push(members.slice(i, i + 3));
  }

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="team" className="container-fluid py-5">
     <div className="container">
    <h2 className="text-center fw-bold mb-5">Our Team</h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        interval={null}
        indicators={false}
        controls={true}
      >
        {chunkedMembers.map((group, idx) => (
          <Carousel.Item key={idx}>
            <div className="row justify-content-center">
              {group.map((member, i) => (
                <div className="col-md-4 mb-4" key={i}>
                  <div className="card shadow h-100 text-center">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="mx-auto d-block"
                      style={{
                        objectFit: "cover",
                        width: "200px",
                        height: "200px",
                        borderRadius: "8px",
                      }}
                    />
                    <div className="card-body">
                      <h5 className="fw-bold">{member.name}</h5>
                      <p>{member.role}</p>
                      <p className="text-muted">{member.qualification}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Hide arrows when at first or last */}
      <style>
        {`
          .carousel-control-prev {
            display: ${index === 0 ? "none" : "flex"};
          }
          .carousel-control-next {
            display: ${index === chunkedMembers.length - 1 ? "none" : "flex"};
          }
        `}
      </style>
      </div>
    </section>
  );
}

export default Team;
