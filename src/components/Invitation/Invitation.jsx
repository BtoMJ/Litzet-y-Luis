import { Link, useParams } from "react-router-dom";
import Home from "../Home/Home";
import Second from "../Second/Second";
import Third from "../Third/Third";
import Carrusel from "../Carrusel/Carrusel";
import data from "../../data/data";
import Confirm from "../Confirm/Confirm";
import Music from "../Music/Music";
import envelope from "../../assets/sobre.png";
import "./Invitation.css";
import ViewLandscape from "../ViewLandscape/ViewLandscape";

function Invitation() {
  const { fam } = useParams();

  const guest = data.find((item) => item.url === fam);

  if (!guest) {
    return (
      <>
        <div className="no-invitation">
          <img src={envelope} alt="imagen de sobre" />
          <h2>Invitación no encontrada</h2>
          <Link className="return" to="/">
            Volver
          </Link>
        </div>
        <ViewLandscape />
      </>
    );
  }

  return (
    <>
      <Music />
      <Home />
      <Second />
      <Third />
      <Confirm guest={guest} />
      <Carrusel />
    </>
  );
}

export default Invitation;
