import novios from "../../assets/Home.png";
import ViewLandscape from "../ViewLandscape/ViewLandscape";
import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="photo-frame">
          <img src={novios} alt="foto de los novios" />
        </div>
        <div className="data">
          <p className="names">
            Litzet <span>&</span> Luis
          </p>
          <h3>Nuestra Boda</h3>
          <p>Recuerda ingresar a tu invitación desde el enlace proporcionado</p>
        </div>
      </section>
      <ViewLandscape />
    </>
  );
}

export default Hero;
