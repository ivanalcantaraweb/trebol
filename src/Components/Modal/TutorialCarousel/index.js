import React, { useRef, useState } from "react";
import { Button } from "@chakra-ui/react";
import Slider from "react-slick";
import BBVALogo from "../../../Assets/bbva.png";
import Slider1 from "../../../Assets/slider1.png";
import Slider2 from "../../../Assets/slide2.png";
import Slider3 from "../../../Assets/slide3.png";
import TrebolLogo from "../../../Assets/Trebol_logo.png";
import { MdFingerprint, MdOutlineArrowForward } from "react-icons/md";

export default function TutorialCarousel(props) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const SetTutorial = props.SetTutorial;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setCurrentSlide(index);
    },
  };
  const handleNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <div className="wrapperCarousel">
      <div className="tutorialWrapperLogo">
        <img className="logoBBVA" src={BBVALogo} alt="bbva logo"></img>
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div className="wrapperSlide">
          <img src={Slider1} alt="Slider1"></img>
          <p>
            Bienvenido a su asistente virtual para validar la documentación
            requerida para el proceso de BBVA.
          </p>
          <Button
            rightIcon={<MdOutlineArrowForward />}
            colorScheme="blue"
            onClick={handleNextSlide}
            size={"lg"}
          >
            Siguiente
          </Button>
        </div>
        <div className="wrapperSlide">
          <img src={Slider2} alt="Slider2"></img>
          <p>
           Valida tu proceso con la tecnología de BBVA y Trebol mediante la carga segura de tus documentos.
          </p>
          <Button
            rightIcon={<MdOutlineArrowForward />}
            colorScheme="blue"
            onClick={handleNextSlide}
            size={"lg"}
          >
            Siguiente
          </Button>
        </div>
        <div className="wrapperSlide">
          <img src={Slider3} alt="Slider3"></img>
          <p>
           Realiza la validación mediante una interfaz intuitiva y facil de usar, sin tramites complicados ni filas innecesarias
          </p>
          <Button
            colorScheme="blue"
            onClick={() => SetTutorial(false)}
            rightIcon={<MdFingerprint  style={{fontSize: "1.4rem"}} />}
            size={"lg"}
          >
            Comenzar
          </Button>
        </div>
      </Slider>
      <div className="footerTutorialModal">
        Powered by <img src={TrebolLogo} alt="bbva logo"></img>
      </div>
    </div>
  );
}
