// import second from "../../assets/Second.png";
import Countdown from "../Countdown/Countdown";
import { FaMapLocationDot } from "react-icons/fa6";
import grecaIZQ from "../../assets/greca2.png";
import grecaDER from "../../assets/greca3.png";
import Carrusel2 from "../Carrusel2/Carrusel2";
import "./Second.css";

function Second() {
  return (
    <section className="date-container">
      <>
        <div className="final-countdown">
          <h5>¡ Nos Casamos!</h5>
          <p className="cita-countdown">
            Hoy el amor nos encontró, y decidimos no soltarnos jamás.
          </p>
        </div>

        {/* <img src={second} alt="foto anillo de compromiso" /> */}
        <Carrusel2 />
        <Countdown />

        <div className="data-church">
          <div className="title-section">
            <img src={grecaIZQ} alt="adorno izquierdo" />
            <h2>Misa</h2>
            <img src={grecaDER} alt="adorno derecho" />
          </div>
          <p className="title-names">Templo de San Miguel</p>
          <p className="direction">5 de Mayo 371, Zona Centro</p>
          <p className="time">2:00 pm</p>
          <a
            href="https://www.google.com/maps/place/Parroquia+de+San+Miguel+Arc%C3%A1ngel/@21.0146523,-101.8500561,17z/data=!3m1!4b1!4m6!3m5!1s0x842be8568ffac903:0xe7757ca195767c61!8m2!3d21.0146523!4d-101.8500561!16s%2Fg%2F11c6rx2r5n?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <div className="title-section">
            <img src={grecaIZQ} alt="adorno izquierdo" />
            <h2>Recepción</h2>
            <img src={grecaDER} alt="adorno derecho" />
          </div>
          <p className="title-names">Salón Lupe Díaz</p>
          <p className="direction">La Escondida, San Fco. del Rincón</p>
          <p className="time">4:30 pm</p>
          {/* <img className="church" src={salon} alt="templo" /> */}
          <a
            href="https://www.google.com/maps/place/Sal%C3%B3n+de+eventos+Lupe+Diaz/@21.0218469,-101.8168311,19z/data=!4m7!3m6!1s0x842be90016df9ed9:0x1b1bcedaaf7e1b71!4b1!8m2!3d21.0217385!4d-101.8167152!16s%2Fg%2F11yb5nml7z?entry=ttu&g_ep=EgoyMDI2MDkxNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blanck"
          >
            <FaMapLocationDot className="map-icon" />
            Ver Ubicación
          </a>
        </div>
      </>

      <>
        <div className="data-church">
          <div className="title-section">
            <img src={grecaIZQ} alt="adorno izquierdo" />
            <h2>Nos Honran</h2>
            <img src={grecaDER} alt="adorno derecho" />
          </div>
          <p className="title-parients">Nuestros padres</p>
          <div className="parients">
            <>
              <h3>Laura Rafael Gómez</h3>
              <h3>Antonio Murguía Díaz </h3>
              <br />
            </>
            <>
              <h3>María Guadalupe Sánchez Vargas</h3>
              <h3>Ricardo Noriega Martínez</h3>
              <br />
            </>
          </div>
          <p className="title-parients">Padrinos de Velación</p>
          <div className="parients">
            <>
              <h3>Silvia Lorena Hernández Loza</h3>
              <h3>Juan de Dios Murguía Díaz </h3>
            </>
          </div>
        </div>
      </>
    </section>
  );
}

export default Second;
