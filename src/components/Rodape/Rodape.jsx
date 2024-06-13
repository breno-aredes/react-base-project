import { Bottom } from "./Style";
import { RiInstagramLine } from "react-icons/ri";
import { FaWhatsapp , FaFacebook } from "react-icons/fa";
import { criarWhatsAppLink } from "../../utils/utils.js";
import dadosComuns from '../../utils/dados_comuns.json';
import { HashLink as Link } from "react-router-hash-link";


const Rodape = function(){
    return (
        <Bottom>
            <div className="colunaNav">
                    <Link to="/" className="containerLogo">
                        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
                        <h3 className="nomeEmpresa">Passeio<br/>Carioca</h3>
                    </Link>  
                    <hr className="dividerLogo" />               
                    <div className="explore">                        
                        <div className="linksColumn">
                            <h3>Explore</h3>
                            <Link to="/#title_header">Home</Link>
                            <Link to="/passeios#title_header">Passeios</Link>
                            <Link to="/gameficacao#title_header">Gameficação</Link>
                            <Link to="/mapa#title_header">Mapa</Link>
                            <Link to="/about#title_header">Sobre Nós</Link>
                        </div>
                    </div>
                    <div className="contatos">
                        <div className="linksColumn">
                            <h3>Contatos</h3>
                            <Link to="/anuncie#title_header">Anuncie</Link>
                            <Link to="/guia#title_header">Seja um Guia</Link>
                            <Link to="/contato#title_header">Fale conosco</Link>
                        </div>
                    </div>
                    <div className="redes">
                        <div className="linksColumn">
                            <h3>Nossas Redes</h3>
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
                                <Link to="/termos"><small>Termos de Uso</small></Link>
                                <Link to="/privacidade"><small>Política de Privacidade</small></Link>
                            </div>
                            
                        </div>
            </div>

        

        </Bottom>
    )
}

export default Rodape;