import { Link } from "react-router-dom";
import { Top, MenuStyled, MenuContent, MenuIcon, MenuButton } from "./Style";
import { slide as Menu } from 'react-burger-menu'
import { MdOutlineTranslate } from 'react-icons/md';

import { useTranslation } from 'react-i18next';

import { useState, useEffect, useRef, useContext } from "react";

const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  ADVERTISE: "/anuncie",
  GUIDE: "/guia",
};

const Header = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pt')
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = () => setMenuVisible(!menuVisible)
  const menuRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLanguageName = (locale) => {
    switch (locale) {
      case 'en': return 'English';
      case 'pt': return 'Português';
      default: return '';
    }
  };

  const changeLanguage = value => {
    i18n.changeLanguage(value)
    .then( () => {
      setCurrentLanguage(value);
    })
  }

  return (
    <Top>
    <div id="outer-container">
      <Menu outerContainerId={ "outer-container" } right noOverlay>
        <Link to={ROUTES.HOME}>{t('Home')}</Link>
        <Link to={ROUTES.ABOUT}>{t('Sobre Nós')}</Link>
        <Link to={ROUTES.ADVERTISE}>{t('Anuncie')}</Link>
        <Link to={ROUTES.GUIDE}>{t('Seja um Guia')}</Link>  
      </Menu>
    </div>
    <div className="divGeral">
      <Link to={ROUTES.HOME} className="containerLogo">
        <img src="imagens/PasseioCariocaLogoBranco.svg" alt="Passeio Carioca" />
        <h3 id="title_header">Passeio<br/>Carioca</h3>
      </Link>
      <div className="links">
        <Link to={ROUTES.HOME} className="linkpages">{t('Home')}</Link>
        <Link to={ROUTES.ABOUT}className="linkpages">{t('Sobre Nós')}</Link>
        <Link to={ROUTES.ADVERTISE} className="linkpages">{t('Anuncie')}</Link>
        <Link to={ROUTES.GUIDE} className="linkpages">{t('Seja um Guia')}</Link>
      </div>

      <div ref={menuRef} className="trButton">
        <MenuButton id="menu-btn" type="checkbox" checked={menuVisible} onChange={toggleMenu}/>
        <MenuStyled>
          <MenuIcon htmlFor="menu-btn" className={isHovered ? 'hovered' : ''}>
            <div className="trIcon">
              <MdOutlineTranslate />
            </div>
            <span onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>{getLanguageName(i18n.language)}</span>
            {/* <span onClick={toggleMenu} className="clickable">{getLanguageName(i18n.language)}</span> */}
          </MenuIcon>
          
        </MenuStyled>
        <MenuContent isVisible= {menuVisible}>
          <div className="botoes">
            <button className="botaoLng" onClick={() => changeLanguage('pt')}>{t('Português')}</button>
            <button className="botaoLng" onClick={() => changeLanguage('en')}>{t('English')}</button>
          </div>
        </MenuContent>
      </div>
    </div>
  </Top>
  )
}

export default Header;