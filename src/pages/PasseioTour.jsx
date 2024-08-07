import { useTranslation } from "react-i18next";
import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base";
import { useParams } from "react-router-dom";
import passeio from "../data/passeios.json";
import PasseioInfo from "../components/PasseioInfo/PasseioInfo";
import { useEffect, useState } from "react";
import Popup from "../components/Popup/Popup";

const PasseioTour = () => {
  const { t } = useTranslation();
  let { passeioId } = useParams();

  const passeiodado = passeio.filter((e) => e.passeioId == passeioId);
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Base>
      <Banner titulo={t("Passeio")} imagem={"imagens/heroHome.png"} />
      <div className="body">
        <PasseioInfo
          nome={passeiodado[0].nome}
          imagem={passeiodado[0].imagem}
          dia={passeiodado[0].dia}
          mes={passeiodado[0].mes}
          local={passeiodado[0].local}
          hora={passeiodado[0].hora}
          guia={passeiodado[0].guia}
          valor={passeiodado[0].valor}
          passeioId={passeiodado[0].passeioId}
          descricao={passeiodado[0].descricao}
        />
      </div>
      <div
        className="botoes"
        // onClick={()=> setButtonPopup(true)}
      >
        <Botao texto={t("Baixe o app")} isFinal={true} />
      </div>
      <Popup
        trigger={buttonPopup}
        position="center"
        modal
        setTrigger={setButtonPopup}
      ></Popup>
    </Base>
  );
};

export default PasseioTour;
