import React from "react";
import Background from "./base/BackGround";
import Butons from "./base/Butons";
import myBackgroundImage from "../assets/fondo.jpg";
import leftImage from "../assets/logo.png";

const ContactUs: React.FC = () => {
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
            <div style={{ ...containerStyle, ...opacityStyle, height: "100%" }}>
              <p className="h4 mb-5">
                Vereda el Cofre, Parcelación la Margarita, Finca Santa Maria,
                Casa 1, Popayán, Cauca 190002, CO
              </p>
              <h5 className="fw-bold mb-5">Comunicaciones@cdtcreatic.com</h5>
            </div>
          </div>
          <div className="col-md-6 align-items-center justify-content-centervw-40" style={{ height: "655px" }}>
            <div style={{ ...containerStyle, ...opacityStyle, height: "400px" }}>
              <img src={leftImage} alt="Left Image" className="img-fluid" style={{ maxHeight: "80%", maxWidth: "80%" }} />
            </div>
            <div style={{ ...containerStyle, width: "250px" }}>
              <Butons height={25} width={250} />
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default ContactUs;
