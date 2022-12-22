import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/image/color-sharp.png";
import { i18n } from "../translate/i18n";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>{i18n.t("skills.about")}</h2>
                        <p>{i18n.t("skills.about1")}<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image1" />
                                <h5>{i18n.t("skills.web")}</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image2" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image3" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image4" />
                                <h5>React.JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image5" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image6" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image7" />
                                <h5>Blockchain</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image8" />
                                <h5>React Native</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image10" />
    </section>
  )
}
