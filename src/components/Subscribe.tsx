const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-heading">
              <h2>En vous abonnant a notre newsletter, vous obtenez 30% de reduction</h2>
              <span>
                Le souci du detail fait la difference chez BillionShake.
              </span>
            </div>
            <form id="subscribe" action="" method="get">
              <div className="row">
                <div className="col-lg-5">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Votre nom"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-5">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      placeholder="Votre adresse email"
                      required
                    />
                  </fieldset>
                </div>
                <div className="col-lg-2">
                  <fieldset>
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-dark-button"
                    >
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    Adresse du magasin :
                    <br />
                    <span>Sunny Isles Beach, FL 33160, United States</span>
                  </li>
                  <li>
                    Telephone :
                    <br />
                    <span>010-020-0340</span>
                  </li>
                  <li>
                    Bureau :
                    <br />
                    <span>North Miami Beach</span>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Horaires :
                    <br />
                    <span>07:30 AM - 9:30 PM Tous les jours</span>
                  </li>
                  <li>
                    Email :
                    <br />
                    <span>contact@billionshake.com</span>
                  </li>
                  <li>
                    Reseaux sociaux :
                    <br />
                    <span>
                      <a href="#!">Facebook</a>, <a href="#!">Instagram</a>,{' '}
                      <a href="#!">Behance</a>, <a href="#!">Linkedin</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
