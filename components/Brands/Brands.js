function Brands(){
  return(
    <section className="brands mk-p-default mk-width-100" id="brands">
      <div className="container">
        <h2 className="d-none">Brands</h2>
        <h3>Quem já atendemos</h3>
        <div className="row align-items-center mk-brands">
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-cea.png" alt="C&A" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-seculus.png" alt="Grupo Seculus" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-piglove.png" alt="Pig Love" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-casio.png" alt="Casio" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-ck.png" alt="Calvin Klein" loading="lazy" />
          </div>

          <div className="w-100"></div>
          
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-organomix.png" alt="Organomix" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-wollner.png" alt="Wollner" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-giinger.png" alt="Giinger Foodtech" loading="lazy" />
          </div>
          <div className="mk-brand-item col-6 col-md-4 col-lg-2">
            <img className="img-fluid mk-pulse" src="public/mk-brand-epc.png" alt="Época Cosméticos" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Brands;