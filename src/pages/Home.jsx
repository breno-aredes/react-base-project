import Base from "./Base";
import Botao from "../components/Botao/Botao";
import HomeCard from "../components/HomeCard/HomeCard";
import SectionPasseios from "../components/SectionPasseios/SectionPasseios";
import SectionGameficacao from "../components/SectionGameficacao/SectionGameficacao";
import SectionMapa from "../components/SectionMapa/SectionMapa";
import BotaoSubir from "../components/BotaoSubir/BotaoSubir";

import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/effect-cards";

import Popup from "../components/Popup/Popup";
import { useState, useEffect } from "react";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import "../utils/i18n";
import { useTranslation } from "react-i18next";

const Home = () => {
  {
    /* Traducao da pagina */
  }
  const { t } = useTranslation();

  {
    /* Responsividade do slider dos passeios */
  }
  const [slidePerView, setSlidePerView] = useState(1);
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setSlidePerView(3);
      } else if (window.innerWidth > 768) {
        setSlidePerView(2);
      } else {
        setSlidePerView(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <Base>
      <HomeCard
        titulo1={t("Descubra o App")}
        titulo={t("Passeio Carioca")}
        texto={t("Conheça um lado do Rio de Janeiro que você nunca viu!")}
        pl={t("Plataformas Disponíveis")}
      />

      <div className="apresentacao">
        <h2 className="texto-destaque">{t("Conheça a Passeio Carioca")}</h2>
        <hr class="linha-divisoria" />
        <p>
          {t(
            "O Passeio Carioca é o seu passaporte para explorar o Rio de Janeiro, combinando história, cultura e diversão em uma única experiência. Navegue por histórias fascinantes, participe de jogos interativos e conecte-se com guias locais."
          )}
        </p>
        <p>
          {t("Descubra abaixo os principais diferenciais do nosso aplicativo.")}
        </p>
      </div>

      <SectionGameficacao />
      <SectionMapa />
      <SectionPasseios />

      {/*<SectionsApp 
      texto={t("Explore a cidade com nossos passeios guiados personalizados. Nossos guias turísticos experientes o levarão a uma jornada única, compartilhando histórias fascinantes e segredos bem guardados dos pontos turísticos mais icônicos da cidade.")}
      imagem="imagens/passeios/raphael-souza-4y0N7sIPaTc-unsplash.jpg"
      align="right"
      link={"/passeios"}/>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={slidePerView}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={true}
        className="swiperPasseios">
        {passeio.map(
          (e) => (
            <SwiperSlide> 
              <PasseiosDestaque 
                  key={e.id}
                  imagem={e.imagem}
                  titulo={e.nome}
                  local={e.local}
              />
            </SwiperSlide>
          ))}
        </Swiper>*/}

      {/*<h2 className="texto-destaque">{t('Gameficação do aplicativo')}</h2>
      <SectionsApp 
      texto={t("Transforme sua experiência de turismo em uma aventura emocionante! Explore os pontos turísticos incríveis da cidade e colecione medalhas digitais ao longo do caminho. Com nossa funcionalidade de gamificação, cada lugar que você visita se torna uma conquista única. Tire uma foto, marque sua presença no aplicativo e ganhe suas medalhas. Quanto mais lugares você visitar, mais medalhas você ganha!")}
      imagem="imagens/old-computer-3.jpg"
      align="left"
      link={"/gameficacao"}/>*/}

      {/*<h2 className="texto-destaque">{t('Mapa da Passeio Carioca')}</h2>
      <SectionsApp 
      texto={t("Descubra a cidade como nunca antes com nosso mapa geolocalizado. Explore pontos de interesse ao redor de você e mergulhe na história de cada local. Clique nos pins do mapa para ler sobre a história do local, curiosidades interessantes e dicas exclusivas de nossos especialistas locais.")}
      imagem="imagens/FotoMapaApp-PasseioCarioca.png"
      align="right"
      link={"/mapa"}/>*/}
      <div
        className="botoes"
        // onClick={()=> setButtonPopup(true)}
      >
        <Botao texto={t("Baixe o app")} />
      </div>
      <Popup
        trigger={buttonPopup}
        position="center"
        modal
        setTrigger={setButtonPopup}
      ></Popup>
      <BotaoSubir></BotaoSubir>
    </Base>
  );
};

export default Home;
