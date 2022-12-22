import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/image/JhonMeirele.png";
import navIcon1 from "../assets/image/nav-icon1.svg";
import navIcon2 from "../assets/image/nav-icon2.svg";
import navIcon3 from "../assets/image/nav-icon3.svg";
import navIcon4 from "../assets/image/nav-icon4.svg";
import { i18n } from "../translate/i18n";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jhonathan-meireles-440a2873/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://www.facebook.com/jhonathan.meireles/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a
                href="https://www.instagram.com/jhonmeireles/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/jhon4than" target="_blank" rel="noreferrer">
                  <img src={navIcon4} alt="" />
                </a>
            </div>
            <p>{i18n.t("footer.footerPrincipal")}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
