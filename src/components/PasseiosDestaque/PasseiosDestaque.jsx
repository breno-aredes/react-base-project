import { PasseioDestaque, CardPasseio, Titulo, Local, Descricao } from "./Style"
import { useState } from "react";
import { Link } from "react-router-dom";

const PasseiosDestaque= (props) => {

  const [ShowText, setShowText]= useState(false)
  return(
      <PasseioDestaque
        onMouseOver={() => setShowText(true)}
        onMouseLeave={() =>setShowText(false)}>
        <CardPasseio>
              <Titulo
              mostrar={ShowText? ShowText.toString(): undefined}
              >
                {props.titulo}</Titulo>
              <img src={props.imagem}/>
        </CardPasseio>
        <section className="text">
          <Local mostrar={ShowText? ShowText.toString(): undefined}>{props.local}</Local>
          <Descricao mostrar={ShowText? ShowText.toString(): undefined}>{props.descricao}</Descricao>
        </section>
      </PasseioDestaque>
  )
}

export default PasseiosDestaque;
