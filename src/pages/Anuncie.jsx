import Banner from "../components/Banner/Banner";
import Botao from "../components/Botao/Botao";
import Base from "./Base"
import { PiMedalDuotone } from "react-icons/pi";
import { HashLink as Link } from "react-router-hash-link";
import { StyleAnun } from "../components/Anunciante/StyeAnunciante";
import { useTranslation } from "react-i18next";

const Anuncie = () => {

    const { t } = useTranslation();

    return (
        <Base>
            <Banner titulo={t("Anuncie Aqui")} imagem={"imagens/heroHome.png"}/>
            
            <StyleAnun>
            <main className="conteudo-anuncie">
                <section className="Conteudo-Atrativo">
                    <div className="Conteudo-Atrativo-Escrito">

                        <h1 className="Conteudo-Atrativo-Escrito-Title">{t('Anuncie Conosco!')}</h1>
                        <p className="Conteudo-Atrativo-Escrito-SubTitle">{t('Alcance Mais Clientes: Promova Seu Negócio com o Passeio Carioca!')} </p>
                    </div>
                </section>
                

                <section className="Conteudo-Principal">

                    <div className="Conteudo-Principal-Escrito" >

                        <h1 className="Title_Anunciante">{t('Conheça nossos Planos de Anuncio')}</h1>
                        <span>
                            <PiMedalDuotone color="var(--bronze)" size={30}/>
                            <h3 className="title" id="title-bronze">{t('Plano Bronze')}</h3>
                        </span>
                        <p1 className="SubTitle_Bronze">{t('Contaremos a historia do seu estabelecimento e colocaremos em destaque do nosso mapa')}</p1>
                        <span>
                            <PiMedalDuotone color="var(--prata)" size={30}/>
                            <h3 className="title" id="title-prata">{t('Plano Prata')}</h3>
                        </span>
                        <p1 className="SubTitle_Prata"> {t('Plano Bronze + inclusão do “Viva essa experiencia”, com um link para a sua rede social ou um QR code, que podera incluir um desconto ou um premio para o turista ou morador da cidade')}</p1>
                        <span>
                            <PiMedalDuotone color="var(--ouro)" size={30}/>
                            <h3 className="title" id="title-ouro">{t('Plano Ouro')}</h3>
                        </span>
                        <p1 className="SubTitle_Ouro"> {t('Plano Bronze + Plano Prata + inclusão do seu estabelecimento na gameficacao do aplicativo, com possibilidade do turista realizar checkin presencial no local e divulgar em suas redes socias ')}</p1>
                        <span>
                            <PiMedalDuotone color="var(--diamante)" size={30}/>
                            <h3 className="title" id="title-diamante">{t('Plano Diamante')}</h3>
                        </span>
                        <p1 className="SubTitle_Diamante">{t('Plano Bronze + Plano Prata + Plano Ouro + inclusão do seu estabelecimento em um dos passeios presenciais guiados')}</p1>
                        
                    </div>

                    <div className="Bloco_Img">
                        <img className="Imagem" src="../imagens/online-ad.svg"  alt="Imagem" />
                    </div>

                </section>

                <div className="botao">
                        <p1 className="Textinho">{t("Consulte valores e tire duvidas")}</p1>

                        <Link smooth to="/Form_Anunciante#title_header">
                            <Botao className="BotaoAnun" texto={t("Entre em contato")} />
                        </Link>
                        
                </div>
                
            </main>

            </StyleAnun>
        </Base>
      
    )
  }
  
  export default Anuncie;