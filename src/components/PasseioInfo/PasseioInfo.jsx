import { useTranslation } from "react-i18next";
import { PasseioInfoStyle } from "./Style";
import { HashLink as Link } from "react-router-hash-link";

const PasseioInfo = ({nome, passeioId, local, dia, mes, hora, key, descricao, guia, valor, imagem, passeio}) => {  

  const { t } = useTranslation();

    return (
    <PasseioInfoStyle>
      <div className="card_descricao_passeio"> 
        <div className="img_container">
          <img src={imagem} alt={nome} />
        </div>
        
        <div className="infos_passeio_container">
        <h2>{t(nome)}</h2>
        <p>
          <span className="neg">{t('Local')}: </span>{t(local)} <br />
          <span className="neg">{t('Dia')}:</span> {t(dia)} / {t(mes)} <br />
          <span className="neg">{t('Hora')}:</span> {t(hora)} <br />
          <span className="neg">{t('Guia')}:</span> {t(guia)}
        </p>
        
        <p>{t(descricao)}</p>
        
        <p><span className="neg">{t('Preço')}:</span> {t(valor)}</p>
        <Link to="/#passeio">
          <button className="btn_voltar">{t('Voltar')}</button>
        </Link>
        </div>
      </div>
    </PasseioInfoStyle>
    )
  
  };
  
  
  export default PasseioInfo;