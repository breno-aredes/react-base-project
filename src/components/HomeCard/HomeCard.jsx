import { HomePageHead } from "./Style";
import Botao from "../Botao/Botao";

import "../../utils/i18n";
import { useTranslation } from "react-i18next";

import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const HomeCard = ({ titulo, titulo1, texto, pl }) => {
  const { t } = useTranslation();

  return (
    <HomePageHead>
      <div className="background" />
      <div className="overlay" />
      <section className="container">
        <div className="text-container">
          <div className="title-container">
            <h2 className="titulo">{titulo1}</h2>
            <h1 className="titulo">{titulo}</h1>
          </div>
          <h3 className="subtitulo">{texto}</h3>
          <div className="textoplataformas">
            {" "}
            <h5>{pl}</h5>{" "}
          </div>
          <span className="botoesPlataformas">
            <a
              href="https://www.apple.com/br/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="botao">
                <FaApple size={25} /> Em breve na App Store
              </button>
            </a>
            <a
              href="https://play.google.com/store/apps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="botao">
                <FaGooglePlay size={25} /> Em breve na Google Play
              </button>
            </a>
          </span>
        </div>
        <div className="img-container">
          <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Logo" />
        </div>
      </section>
    </HomePageHead>
  );
};

export default HomeCard;
