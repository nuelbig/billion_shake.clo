const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-4">
            <div className="first-item">
              <div className="logo">
                <img
                  src="/assets/images/logo.png"
                  alt="Billion'Shake ecommerce"
                  width="150"
                  height="150"
                  style={{ display: 'block', margin: '0 auto' }}
                />
              </div>
              {/* <ul>
                <li>
                  <a href="#!">
                    Agbalépédo, à côté de la station Total, Lomé, Togo
                  </a>
                </li>
                <li>
                  <a href="#!">contact@Billion'Shake.com</a>
                </li>
                <li>
                  <a href="#!">+228 92 59 65 83</a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-4">
            <h4>Shopping & categories</h4>
            <ul>
              <li>
                <a href="#!">Shopping T-shirt</a>
              </li>
              <li>
                <a href="#!">Shopping Jogging</a>
              </li>
              <li>
                <a href="#!">Shopping Pull-over / Par-dessus</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Liens utiles</h4>
            <ul>
              <li>
                <a href="#!">Accueil</a>
              </li>
              <li>
                <a href="#!">A propos</a>
              </li>
              <li>
                <a href="#!">Aide</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-12">
            <div className="under-footer">
              <p>
                Copyright (c) 2026 Billion'Shake. Tous droits reserves.
              </p>
              <ul>
                <li>
                  <a href="#!">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
