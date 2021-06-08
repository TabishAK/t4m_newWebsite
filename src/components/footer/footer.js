import t4m_logo from "../../images/logos/t4m_logo.png";
import long_line from "../../images/lines/long_line.png";
import "./footer.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer mb-5">
      <Container>
        <div className="row f-part-1">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <Fade bottom delay={500}>
              <img
                className="ml-5"
                style={{
                  marginLeft: "70px",
                  width: "75%",
                }}
                src={t4m_logo}
                alt="take_4_media"
              />
            </Fade>
          </div>
          <div className="col-lg-3 col-md-3"></div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <ul>
              <li>Home</li>
              <li>Who we are</li>
              <li>Our work</li>
              <li>Blog</li>
              <li>Team</li>
              <li>Packages</li>
              <li>Email us</li>
            </ul>
          </div>
        </div>
      </Container>

      <Container>
        <div className="row f-part-2">
          <div className="col-lg-3 col-md-3 col-sm-3 col-xs-4 address">
            <Fade bottom delay={500}>
              <h4>Amsterdam</h4>
            </Fade>
            <Fade bottom delay={600}>
              <h6>Prinsengracht 526</h6>
            </Fade>
            <Fade bottom delay={700}>
              <h6>1017 KJ Amsterdam</h6>
            </Fade>
            <Fade bottom delay={800}>
              <h6>The Netherlands</h6>
            </Fade>
            <Fade bottom delay={900}>
              <h6>Phone: +31 20 261 5080</h6>
            </Fade>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-1"></div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-5">
            <div className="social-media-icons">
              <Fade bottom delay={500}>
                <FaFacebookF />
              </Fade>
              <Fade bottom delay={600}>
                <FaLinkedinIn />
              </Fade>
              <Fade bottom delay={700}>
                <FaInstagram />
              </Fade>
              <Fade bottom delay={800}>
                <FaYoutube />
              </Fade>
            </div>
          </div>
        </div>
      </Container>
      <img
        src={long_line}
        style={{
          marginTop: 55,
          width: "100%",
        }}
        alt="theme_line"
      />
    </Container>
  );
};

export default Footer;
