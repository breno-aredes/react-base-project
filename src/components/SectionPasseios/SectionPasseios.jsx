import passeio from "../../data/passeios.json";
import PasseiosDestaque from "../../components/PasseiosDestaque/PasseiosDestaque";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Section } from "./Style";

const SectionPasseios = () => {
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

  return (
    <Section id="passeio">
      <main className="passeios">
        <section className="text">
          <h2 className="section-title">{t("Passeios Guiados")}</h2>
          <hr class="linha-divisoria" />
          <h3 className="section-subtitle">
            {t("Curta aquele gostinho dos passeios favoritos da galera!")}
          </h3>
        </section>
        <Swiper
          modules={[Navigation, Autoplay]}
          grabCursor={true}
          navigation
          slidesPerView={slidePerView}
          loop={true}
          autoplay={{ delay: 6000 }}
          className="swiperPasseios"
        >
          {passeio.map((e) => (
            <SwiperSlide key={e.id}>
              <PasseiosDestaque
                imagem={e.imagem}
                titulo={e.nome}
                local={e.local}
                passeioId={e.passeioId}
                descricao={t(e.descricao)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <section className="text">
          <hr class="linha-divisoria" />
          <div className="section-text">
            <p>
              {t(
                "Explore a cidade com nossos passeios guiados personalizados. Nossos guias turísticos experientes o levarão a uma jornada única, compartilhando histórias fascinantes e segredos bem guardados dos pontos turísticos do Rio de Janeiro. Além disso, você terá a oportunidade de descobrir um rio que você nunca viu antes. Nossos passeios não apenas mostram a beleza natural da região, mas também mergulham na cultura e na história local, proporcionando uma experiência inesquecível."
              )}
            </p>
          </div>
        </section>
      </main>
    </Section>
  );
};

export default SectionPasseios;
