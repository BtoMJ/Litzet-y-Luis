// import flores2 from "../../assets/flores2.png";
import "./ViewLandscape.css";

function ViewLandscape() {
  return (
    <section className="ViewLandscape-container">
      <div className="name">
        {/* <img className="flower2" src={flores2} alt="flores arriba" /> */}
        <p className="names">
          Litzet <span>&</span> Luis
        </p>
        <h4>MIS XV AÑOS</h4>
      </div>
      <h5>Por favor rota tu dispositivo para una mejor experiencia</h5>
      {/* <img className="flower1" src={flores2} alt="flores arriba" /> */}
    </section>
  );
}

export default ViewLandscape;
