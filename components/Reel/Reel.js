function Reel(){
  return(
    <section className="reel mk-p-default mk-width-100" id="reel">
      <div className="container">
        <h2 className="d-none">Reel</h2>
        <div className="row">
          <div className="col-12">
            <div className="card mk-p-rl mk-pt-45 mk-pb-15 mb-5">
              <img className="card-img-top" src="public/mk-job-giinger.png" alt="Card image cap" loading="lazy"/>
              <div className="card-body">
                <h3 className="card-title">Giinger Foodtech</h3>
                <p className="card-text">Branding, UX/UI, Developement</p>
              </div>
            </div>
            <div className="card mk-p-rl mk-pt-45 mk-pb-15 mb-5">
              <img className="card-img-top" src="public/mk-job-casio.png" alt="Card image cap" loading="lazy"/>
              <div className="card-body">
                <h3 className="card-title">Casio</h3>
                <p className="card-text">UX/UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reel;