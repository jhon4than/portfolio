import meter1 from "../assets/image/meter1.svg";
import meter2 from "../assets/image/meter2.svg";
import meter3 from "../assets/image/meter3.svg";

import blockchain from "../assets/image/blockchain.png";
import cssImage from "../assets/image/css-3.png";
import html5Image from "../assets/image/html5.png";
import javaImage from "../assets/image/java.png";
import reactNativeImage from "../assets/image/react-native-removebg-preview.png";
import cImage from "../assets/image/do-sustenido.png";
import reactjsImage from "../assets/image/reactjs.svg";
import javaScriptImage from "../assets/image/script-java.png";

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
                                <img src={javaScriptImage} alt="Image2" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={cImage} alt="Image3" />
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={reactjsImage} alt="Image4" />
                                <h5>React.JS</h5>
                            </div>
                            <div className="item">
                                <img src={javaImage} alt="Image5" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={html5Image} alt="Image6" />
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={blockchain} alt="Image7" />
                                <h5>Blockchain</h5>
                            </div>
                            <div className="item">
                                <img src={reactjsImage} alt="Image8" />
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
