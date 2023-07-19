import React from "react";
import Background from "./base/BackGround";
import Butons from "./base/Butons";
import myBackgroundImage from "../assets/fondo.jpg";
import leftImage from "../assets/mapa.png";
import rightImage1 from "../assets/foto1.jpg";
import rightImage2 from "../assets/foto2.jpg";
import rightImage3 from "../assets/foto3.jpg";

const Main: React.FC = () => {
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
    <Background opacity={0.4} fillScreen={false} imageUrl={myBackgroundImage}>
      <div className="container-sm">
        <div className="row align-items-center">
          <div className="col-md-6 mt-2 mb-2">
            <div style={{ ...containerStyle, ...opacityStyle }}>
              <img src={leftImage} alt="Left Image" className="w-100 h-80" />
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ ...containerStyle, ...opacityStyle }}>
              <div className="d-flex flex-column align-items-center">
                <div style={{ marginBottom: "10px" }}>
                  <img src={rightImage1} alt="Right Image 1" className="w-100 h-100" />
                </div>
                <div className="d-flex justify-content-between">
                  <div style={{ width: "48%" }}>
                    <img src={rightImage2} alt="Right Image 2" className="w-100 h-100" />
                  </div>
                  <div style={{ width: "48%" }}>
                    <img src={rightImage3} alt="Right Image 3" className="w-100 h-100" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ ...containerStyle, width: "250px"}}>
              <Butons height={25} width={250} />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Main;
