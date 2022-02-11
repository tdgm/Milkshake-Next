import Image from "next/image";

import imgLogo from '../../public/mk-logo-completo.svg';

const Header = () => {
  return(
    <header id="sticky">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="/"><span className="d-none">Milkshake Branding & Design</span><Image src={imgLogo} alt="Milkshake Branding & Design" width={114} height={49} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#about" id="menu-1">O Restaurante</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#orderMenu">Cardápio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#photos">Fotos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="social">
            <ul>
              <li><a href="tel:+5521979505189" alt="whatsapp"><i className="icon whatsapp mk-pulse"></i><span className="d-none">whatsapp</span></a></li>
              <li><a href="https://www.instagram.com/sigamilkshake/" alt="instagram"><i className="icon instagram mk-pulse"></i><span className="d-none">instagram</span></a></li>
              <li><a href="https://www.linkedin.com/company/milkshake-branding-design" alt="linkedin"><i className="icon linkedin mk-pulse"></i><span class="d-none">linkedin</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;