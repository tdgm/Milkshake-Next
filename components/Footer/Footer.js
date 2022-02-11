
function Footer(){
  return(
    <footer className="contact mk-pt-45 mk-pb-150 mk-width-100" id="contact">
      <div className="container">
        <h2 className="d-none">Contato</h2>
        <div className="row">
          <div className="col-12">
            <div className="mk-footer">
              <h3>Dá um alô,<br/> a gente não morde!</h3>
              <i className="icon milkshake"></i>
            </div>
            <address>
              <a className="mk-email" href="mailto:">contato@agenciamilkshake.com.br</a>
              <a className="mk-phone" href="tel:+5521979505189">+55 21 979 505 189</a>
              <span className="mk-adress">Avenida das Américas, 500 - Bloco 7 - Barra da Tijuca, RJ</span>  
            </address>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;