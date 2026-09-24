import flores1 from "../../assets/flower-left.png";
import flores2 from "../../assets/flower-rigth.png";
import "./ViewLandscape.css";

function ViewLandscape() {
  return (
    <section className="ViewLandscape-container">
      <img className="flower1" src={flores1} alt="flores arriba" />
      <p className="names">
        Litzet <span>&</span> Luis
      </p>
      <h4>Nuestra Boda</h4>
      <h5>Por favor rota tu dispositivo para una mejor experiencia</h5>
      <img className="flower2" src={flores2} alt="flores arriba" />
    </section>
  );
}

export default ViewLandscape;
