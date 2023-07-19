import React, { useState } from "react";
import Background from "./base/BackGround";
import Butons from "./base/Butons";
import myBackgroundImage from "../assets/fondo.jpg";
import leftImage from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setUserCredentials } from "../store/slices/user/userSlice";

const ContactUs: React.FC = () => {
  // const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: "20px",
    padding: "10px",
    margin: "30px",
  };

  const opacityStyle = {
    opacity: 1,
  };

  const handleLogin = () => {
    // Lógica para manejar el evento de inicio de sesión
    //
  };

  const handleRegister = () => {

    console.log("Registrarse");
  };

  return (
    <Background opacity={0.4} fillScreen={false} imageUrl={myBackgroundImage}>
      <div className="container-sm">
        <div className="row align-items-center">
          <div className="col-md-6 mt-2 mb-2">
            <div style={{ ...containerStyle, ...opacityStyle, height: "100%" }}>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleLogin}
                  >
                    Iniciar Sesión
                  </button>
                </div>
                <p className="text-center">
                  <a href="#" className="text-decoration-none">
                    ¿Olvidaste tu contraseña?
                  </a>
                </p>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleRegister}
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="col-md-6 d-flex align-items-center justify-content-center"
            style={{ height: "650px" }}
          >
            <div
              style={{ ...containerStyle, ...opacityStyle, height: "400px" }}
            >
              <img
                src={leftImage}
                alt="Left Image"
                className="img-fluid"
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
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
