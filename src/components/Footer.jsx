import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-light py-4">
      <div className="container text-center">
        <h5 className="fw-bold mb-3">Get in Touch</h5>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a href="mailto:originarchstudio@gmail.com" className="text-light">
            <EmailIcon fontSize="medium" />
          </a>
          <a href="tel:7377039259" className="text-light">
            <PhoneIcon fontSize="medium" />
          </a>
          <a
            href="https://linkedin.com/company/oas-architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
          <a
            href="https://twitter.com/oas_arch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <TwitterIcon fontSize="medium" />
          </a>
          <a
            href="https://instagram.com/oas_architecture"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
          >
            <InstagramIcon fontSize="medium" />
          </a>
        </div>

        {/* Copyright */}
        <p className="small mb-0">© 2026 OAS Architecture. All rights reserved.</p>

        {/* Freepik credit */}
        <p className=" mb-0" style={{ fontSize: "0.7rem" }}>
          Images used in this site are from{" "}
          <a
            href="https://www.freepik.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-light"
          >
            Freepik
          </a>.
        </p>

      </div>
    </footer>
  );
}

export default Footer;
