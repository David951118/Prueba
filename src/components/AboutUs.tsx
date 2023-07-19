import React from "react";
import Background from "./base/BackGround";
import myBackgroundImage from "../assets/fondo.jpg";
import Butons from "./base/Butons";

const AboutUs: React.FC = () => {
  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "20px",
    padding: "10px",
    margin: "30px",
  };

  const opacityStyle = {
    opacity: 1,
  };

  return (
    <div  className="h-100 w-100">
      <Background opacity={0.4} fillScreen={true} imageUrl={myBackgroundImage} >
        <div className="container">
          <div className="row align-items-center" style={{ height: "655px" }}>
            <div className="col-md-12 mt-2 mb-2">
              <div style={{ ...containerStyle, ...opacityStyle, height: "100%" }}>
                <h2 className="fw-bold mb-5">Misión</h2>
                <p className="h4 mb-5">
                  La misión define el propósito de la existencia de la empresa y
                  lo que la diferencia de los demás. En otras palabras, tiene que
                  ver con la propuesta de valor de un negocio.
                </p>
                <h2 className="fw-bold mb-5">Visión</h2>
                <p className="h4 mb-5">
                  La visión es el destino al que una empresa quiere llegar. En
                  este sentido, establece los parámetros para la toma de
                  decisiones de una empresa, las inversiones necesarias y la forma
                  de definir estrategias.
                </p>
              </div>
              <div className="mt-5 mb-5" style={{ ...containerStyle, width: "250px" }}>
                <Butons height={25} width={250} />
              </div>
            </div>
          </div>
        </div>
      </Background>
    </div>
  );
};

export default AboutUs;
