const SingleProduct = () => {
  return (
    <>
      
          <div className="page-heading" id="top">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="inner-content">
                              <h2>Page produit</h2>
                              <span>Achetez votre coup de cœur en un clic</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          


          
          <section className="section" id="product">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-8">
                      <div className="left-images">
                          <img src="/assets/images/single-product-01.jpg" alt="" />
                          <img src="/assets/images/single-product-02.jpg" alt="" />
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div className="right-content">
                          <h4>Nouvelle veste verte</h4>
                          <span className="price">15000 CFA</span>
                          <ul className="stars">
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                              <li><i className="fa fa-star"></i></li>
                          </ul>
                          <span>Ce vêtement allie style et confort supérieur. Conçu avec des matières de premier choix, il est idéal pour affirmer votre personnalité au quotidien ou pour une occasion spéciale.</span>
                          <div className="quote">
                              <i className="fa fa-quote-left"></i><p>Un indispensable de votre garde-robe.</p>
                          </div>
                          <div className="quantity-content">
                              <div className="left-content">
                                  <h6>Nombre de pieces</h6>
                              </div>
                              <div className="right-content">
                                  <div className="quantity buttons_added">
                                      <input type="button" value="-" className="minus" />
                                      <input
                                        type="number"
                                        step="1"
                                        min="1"
                                        max=""
                                        name="quantity"
                                        value="1"
                                        title="Qty"
                                        className="input-text qty text"
                                        size={4}
                                        pattern=""
                                      />
                                      <input type="button" value="+" className="plus" />
                                  </div>
                              </div>
                          </div>
                          <div className="total">
                              <h4>Total : 15000 CFA</h4>
                              <div className="main-border-button"><a href="#">Ajouter au panier</a></div>
                          </div>
                      </div>
                  </div>
                  </div>
              </div>
          </section>
          
    </>
  )
}

export default SingleProduct
