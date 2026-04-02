import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <>
      
          <div className="page-heading about-page-heading" id="top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="inner-content">
                              <h2>Contact</h2>
                              <span>Un template HTML5 moderne, propre et creatif</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          

          
          <div className="contact-us">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div id="map">
                            <iframe
                              src="https://www.google.com/maps?q=Lomé,Togo&output=embed"
                              width="100%"
                              height="400px"
                              frameBorder="0"
                              style={{ border: 0 }}
                              allowFullScreen
                            ></iframe>
                            
                      
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="section-heading">
                              <h2>Dites bonjour. N'hesitez pas!</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                          <form id="contact" action="" method="post">
                              <div className="row">
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input name="name" type="text" id="name" placeholder="Votre nom" required />
                                  </fieldset>
                                </div>
                                <div className="col-lg-6">
                                  <fieldset>
                                    <input name="email" type="text" id="email" placeholder="Votre email" required />
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
                                  <fieldset>
                                    <textarea name="message" rows={6} id="message" placeholder="Votre message" required></textarea>
                                  </fieldset>
                                </div>
                                <div className="col-lg-12">
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
                  </div>
              </div>
          </div>
          
      <Subscribe />
    </>
  )
}

export default Contact
