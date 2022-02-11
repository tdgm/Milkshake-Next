function About(){
  return(
    <section className="about mk-p-default mk-width-100" id="about" style={{backgroundColor: "white"}}>
      <div className="container">
        <h2 className="d-none">About</h2>
        <div className="row">
          <div className="col-12 col-lg-5">
            <div className="mk-box left">
              <h3>O que fazemos</h3>
              <p>
                Em linha com a nossa tradição como um estúdio de design e desenvolvimento, temos orgulho em criar as mais belas e exclusivas experiências digitais, produtos e de comércio eletrônico. O resultado são experiências personalizadas que refletem as identidades únicas de nossos clientes. Não há dois projetos com conceitos iguais na MS B&D, mas cada um é distintamente MS B&D.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 offset-lg-1">
            <div className="mk-box right">
              <div className="list">
                <h4>Skills</h4>
                <ul>
                  <li>UX/UI</li>
                  <li>Design Web</li>
                  <li>Development</li>
                  <li>Digital Branding</li>
                  <li>Direção de Arte</li>
                  <li>Especialistas Vtex</li>
                </ul>
              </div>
              <div className="list">
                <h4>Tools</h4>
                <ul>
                  <li>HTML, CSS e JS</li>
                  <li>Webflow</li>
                  <li>Wordpress</li>
                  <li>Adobe Design</li>
                  <li>Figma</li>
                  <li>React</li>
                </ul>
              </div>
              <div className="list">
                <h4>Services</h4>
                <ul>
                  <li>Landing Pages</li>
                  <li>Website</li>
                  <li>E-commerce</li>
                  <li>App Design</li>
                  <li>Identidade Visual</li>
                  <li>Consultoria Vtex</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;