import { useTranslation } from "react-i18next";

import { MedalhaArticle } from "./Style"

const MedalhaCard = ({nome, imagem}) => {

  const { t } = useTranslation();

  return(
    <MedalhaArticle>
      <div className="medalha"> 
        <img src={`${process.env.PUBLIC_URL}${imagem}`} />
      </div>
      <div className="medalha-name">
        <h3>{t(nome)}</h3>
      </div>
    </MedalhaArticle>
  )
}

export default MedalhaCard;