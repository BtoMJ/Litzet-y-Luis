import dress from "../../assets/dresscode.png";
import examples from "../../assets/examples.png";
import grecaIZQ from "../../assets/greca2.png";
import grecaDER from "../../assets/greca3.png";
import "./Third.css";

function Third() {
  return (
    <section className="gif-container">
      <div className="dress-code">
        <div className="title-section">
          <img src={grecaIZQ} alt="adorno izquierdo" />
          <h2>Vestimenta</h2>
          <img src={grecaDER} alt="adorno derecho" />
        </div>

        <h4>Formal</h4>

        <img src={dress} />

        <p className="dress-description">
          Para esta ocasión, te pedimos un atuendo formal, en color negro
          <br />
          <span>(no venir de otro color por favor).</span>
        </p>
        <p className="dress-description-2">
          Aquí tienes algunos ejemplos
          <img src={examples} alt="tipos de vestimenta negra" />
        </p>
      </div>

      <div className="title-section">
        <img src={grecaIZQ} alt="adorno izquierdo" />
        <h2>Regalos</h2>
        <img src={grecaDER} alt="adorno derecho" />
      </div>

      <p className="gift-text">
        Lo más importante es compartir este día con ustedes; pero si desean
        contribuir a nuestro nuevo comienzo, te compartimos la cuenta donde
        podrás depositar.
      </p>

      <div className="bank">722969010992018357</div>
    </section>
  );
}

export default Third;
