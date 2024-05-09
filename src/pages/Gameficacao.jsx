import Banner from "../components/Banner/Banner";
import Base from "./Base"
import Botao from "../components/Botao/Botao";
import MedalhaCard from "../components/MedalhaCard/MedalhaCard";
import medalha from "../data/medalhas.json"

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const Gameficacao = () => {

  return (
    <Base>
      <Banner titulo={"Gameficação"} imagem={""}/>
      <div className="titulo-game">
        <h3>Descubra o turismo de uma maneira nova com o nosso aplicativo!</h3>
      </div>

      <div className="texto-game">
        <p>Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!</p>
      </div>

      <div className="titulo-game">
        <h3>Baixe agora e comece a sua jornada de turismo com uma dose extra de diversão e recompensas!</h3>
      </div>

      <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="cardSwiper"
      >
        {medalha.map((e, index) =>(
          <SwiperSlide key={index}> 
            <MedalhaCard 
              nome={e.nome}
              imagem={e.imagem}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div><Botao texto="Baixe o App"/></div>
    </Base>
  )
}

export default Gameficacao;
