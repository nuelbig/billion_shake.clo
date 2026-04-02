import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <>
      
          <div className="page-heading about-page-heading" id="top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="inner-content">
                              <h2>A propos de Billion'Shake</h2>
                              <span>Un template HTML5 moderne, propre et creatif</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          

          
          <div className="about-us">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="left-image">
                              <img src="/assets/images/about-left-image.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="right-content">
                              <h4>A propos de Billion'Shake</h4>
                              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</span>
                              <div className="quote">
                                  <i className="fa fa-quote-left"></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                              </div>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                              <ul>
                                  <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          

          
          <section className="our-team">
              <div className="container">
                  <div className="row">
                      {/* <div className="col-lg-12">
                          <div className="section-heading">
                              <h2>Notre equipe</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div> */}
                      <div className="col-lg-4" style={{margin: '0 auto'}}>
                          <div className="team-item">
                              <div className="thumb">
                                  <div className="hover-effect">
                                      <div className="inner-content">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <img src="/assets/images/obed.png" />
                              </div>
                              <div className="down-content">
                                  <h4>OBED</h4>
                                  <span>CEO</span>
                              </div>
                          </div>
                      </div>
                      {/* <div className="col-lg-4">
                          <div className="team-item">
                              <div className="thumb">
                                  <div className="hover-effect">
                                      <div className="inner-content">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                              <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <img src="/assets/images/team-member-02.jpg" />
                              </div>
                              <div className="down-content">
                                  <h4>Ragnar Lodbrok</h4>
                                  <span>Responsable produit</span>
                              </div>
                          </div>
                      </div> */}
                      {/* <div className="col-lg-4">
                          <div className="team-item">
                              <div className="thumb">
                                  <div className="hover-effect">
                                      <div className="inner-content">
                                          <ul>
                                              <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                              <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                              <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                              <li><a href="#"><i className="fa fa-behance"></i></a></li>
                                          </ul>
                                      </div>
                                  </div>
                                  <img src="/assets/images/team-member-03.jpg" />
                              </div>
                              <div className="down-content">
                                  <h4>Ragnar Lodbrok</h4>
                                  <span>Responsable produit</span>
                              </div>
                          </div>
                      </div> */}
                  </div>
              </div>
          </section>
          

          
          {/* <section className="our-services">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-heading">
                              <h2>Nos services</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="service-item">
                              <h4>Synther Vaporware</h4>
                              <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                              <img src="/assets/images/service-01.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="service-item">
                              <h4>Locavore Squidward</h4>
                              <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                              <img src="/assets/images/service-02.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-lg-4">
                          <div className="service-item">
                              <h4>Health Gothfam</h4>
                              <p>Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.</p>
                              <img src="/assets/images/service-03.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
          
      <Subscribe />
    </>
  )
}

export default About
