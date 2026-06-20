function AboutSection() {
  return (
    <section
      id="about"
      className="container-fluid py-5"
      style={{ backgroundColor: "#f5f5dc" }}
    >
      <div className="row align-items-center">
        {/* Left side: text */}
        <div className="col-md-6 ms-4">
          <h2 className="fw-bold text-dark">About OAS Architecture</h2>
          <p className="mt-3 text-dark">
            OAS Architecture is a visionary firm reshaping urban landscapes
            with innovative and sustainable designs. Our mission is to harmonize
            modern living with environmental consciousness, creating spaces that
            inspire community, connection, and well-being.
          </p>
          <p className="text-dark">
            Through cutting-edge technology and thoughtful planning, we bring
            to life projects that are both aesthetically stunning and ecologically
            responsible.
          </p>
        </div>

        {/* Right side: office photo */}
        <div className="col-md-5 d-flex flex-column justify-content-center align-items-start p-5">
          <img
            src="/office.jpg"
            alt="OAS Office"
            className="img-fluid rounded shadow"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
