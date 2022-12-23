import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/image/projImg1.png";
import projImg2 from "../assets/image/loginPhp.png";
import projImg3 from "../assets/image/calculator.png";
import projImg4 from "../assets/image/funcoes.png";
import projImg5 from "../assets/image/blockchainpython.png";
import projImg6 from "../assets/image/paypal.png";
import projImg7 from "../assets/image/alugue.png";
import projImg8 from "../assets/image/reutilizacao.png";
import projImg9 from "../assets/image/artigoKubernetes.png";
import colorSharp2 from "../assets/image/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { i18n } from "../translate/i18n";

export const Projects = () => {

  const projects = [
    {
      title:"React Native",
      description: i18n.t("projects.project1"),
      imgUrl: projImg7,
      link: "https://github.com/jhon4than/app_react_alugue"
    },
    {
      title:"React Typescript",
      description: i18n.t("projects.project2"),
      imgUrl: projImg8,
      link: "https://github.com/jhon4than/reutilizacao_avaliacao_2"
    },
    {
      title:"C#",
      description: i18n.t("projects.project3"),
      imgUrl: projImg3,
      link: "https://github.com/jhon4than/Calculadora"
    },
    {
      title:"C#",
      description: i18n.t("projects.project4"),
      imgUrl: projImg4,
      link: "https://github.com/jhon4than/ProjetoPOF"
    },
    {
      title:"Artigo Kubernetes",
      description: i18n.t("projects.project9"),
      imgUrl: projImg9,
      link: "https://medium.com/@jhon4than1995/como-o-kubernetes-pode-ajudar-a-simplificar-o-gerenciamento-de-aplicativos-em-cont%C3%AAineres-1642213e4dc9"
    },
    {
      title:"Consumindo API",
      description: i18n.t("projects.project6"),
      imgUrl: projImg6,
      link: "https://github.com/jhon4than/paypal_integration"
    },
    
  ];
  const projects2 = [
    {
      title:"Java",
      description: i18n.t("projects.project7"),
      imgUrl: projImg1,
      link: "https://github.com/jhon4than/SistemaDeControleAcademico"
    },
    {
      title:"Php",
      description: i18n.t("projects.project8"),
      imgUrl: projImg2,
      link: "https://github.com/jhon4than/CakePhpSistemaLogin"
    },
    {
      title:"Python",
      description: i18n.t("projects.project5"),
      imgUrl: projImg5,
      link: "https://github.com/jhon4than/API_Blockchain"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>{i18n.t("projects.project")}</h2>
                <p>{i18n.t("projects.projectInfo")}</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">{i18n.t("projects.tab")} 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">{i18n.t("projects.tab")} 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">{i18n.t("projects.tab")} 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image1"></img>
    </section>
  )
}
