import { Bottom } from "./Style";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";
import { criarWhatsAppLink } from "../../utils/utils.js";
import dadosComuns from '../../utils/dados_comuns.json';
import { HashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";


const Rodape = function(){
    const { t } = useTranslation();

    return (
        <Bottom>
            <div className="colunaNav">
                    <Link smooth to="/#title_header" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} className="containerLogo">
                        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
                        <h3 className="nomeEmpresa">Passeio<br/>Carioca</h3>
                    </Link>  
                    <hr className="dividerLogo" />               
                    <div className="explore">                        
                        <div className="linksColumn">
                            <h3>Explore</h3>
                            <Link smooth to="/#title_header" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>Home</Link>
                            <Link smooth to="/#passeio" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{t('Passeios')}</Link>
                            <Link smooth to="/#gameficacao" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{t('Gameficação')}</Link>
                            <Link smooth to="/#mapa" scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>{t('Mapa')}</Link>
                            <Link to="/about#title_header">{t('Sobre Nós')}</Link>
                            <Link to="/passeios#title_header">{t('Passeios Antigos')}</Link>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="linksColumn">
                            <h3>{t('Contatos')}</h3>
                            <Link to="/anuncie#title_header">{t('Anuncie')}</Link>
                            <Link to="/guia#title_header">{t('Seja um Guia')}</Link>
                            <Link to="/contato#title_header">{t('Fale conosco')}</Link>
                        </div>
                    </div>
                    <div className="redes">
                        <div className="linksColumn">
                            <h3>{t('Nossas Redes')}</h3>
                            <a className="sociais" href={dadosComuns.redes_sociais.instagram} target="_blank" rel="noopener noreferrer">
                                <RiInstagramLine size={25} className="socialicons"/>
                                <span className="link-text">Instagram</span>
                            </a>
                            <a className="sociais" href={dadosComuns.redes_sociais.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={25} className="socialicons"/>
                                <span className="link-text">Facebook</span>
                            </a>
                            <a className="sociais" href={criarWhatsAppLink(dadosComuns.whatsapp, dadosComuns.mnsgs_padrao_whatsapp.geral)} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={25} className="socialicons"/>
                                <span className="link-text">Whatsapp</span>
                            </a>
                    
                        </div>
                    </div>
                        <hr className="divider" />
                        <div className="footerEnd">
                            <Link to="/"><small>© {new Date().getFullYear()} Passeio Carioca</small></Link>
                            <div className="bottomLinks">
                                <Link to="/termos"><small>{t('Termos de Uso')}</small></Link>
                                <Link to="/privacidade"><small>{t('Política de Privacidade')}</small></Link>
                            </div>
                            
                        </div>
            </div>
        </Bottom>
    )
}

export default Rodape;