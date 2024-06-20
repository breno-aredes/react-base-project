import { PasseioInfoStyle } from "./Style";


const PasseioInfo = ({nome, passeioId, local, dia, mes, hora, key, descricao, guia, valor, imagem, passeio}) => {  
  

  const handleVoltarClick = (e) => {
      window.location.href = `/home#/#passeio`
  };

    return (
    <PasseioInfoStyle>
      <div className="card_descricao_passeio"> 
        <div className="img_container">
          <img src={imagem} alt={nome} />
        </div>
        
        <div className="infos_passeio_container">
        <h2>{nome}</h2>
        <p>
          <span className="neg">Local: </span>{local} <br />
          <span className="neg">Dia:</span> {dia} / {mes} <br />
          <span className="neg">Hora:</span> {hora} <br />
          <span className="neg">Guia:</span> {guia}
        </p>
        
        <p>{descricao}</p>
        
        <p><span className="neg">Preço:</span> {valor}</p>
        <button className="btn_voltar" onClick={handleVoltarClick}>Voltar</button>
        </div>
      </div>
    </PasseioInfoStyle>
    )
  
  };
  
  
  export default PasseioInfo;