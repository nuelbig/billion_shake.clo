import { useEffect } from 'react'
import Subscribe from '../components/Subscribe'

const Home = () => {
  useEffect(() => {
    let attempts = 0

    const tryInit = () => {
      const CFA = window.jQuery || window.$
      if (!CFA || !CFA.fn || !CFA.fn.owlCarousel) {
        if (attempts < 10) {
          attempts += 1
          window.setTimeout(tryInit, 150)
        }
        return
      }

      const initCarousel = (selector: string) => {
        const CFAel = CFA(selector)
        if (!CFAel.length) return
        if (CFAel.data('owl.carousel')) {
          CFAel.trigger('destroy.owl.carousel')
          CFAel.find('.owl-stage-outer').children().unwrap()
          CFAel.removeClass('owl-center owl-loaded owl-text-select-on')
        }
        CFAel.owlCarousel({
          items: 5,
          loop: true,
          dots: true,
          nav: true,
          margin: 30,
          responsive: {
            0: { items: 1 },
            600: { items: 2 },
            1000: { items: 3 },
          },
        })
      }

      initCarousel('.owl-men-item')
      initCarousel('.owl-women-item')
      initCarousel('.owl-kid-item')
    }

    tryInit()
  }, [])

  return (
    <>
      
          <div className="main-banner" id="top">
              <div className="container-fluid">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="left-content">
                              <div className="thumb">
                                  <div className="inner-content">
                                      <h4>Bienvenue chez Billion'Shake</h4>
                                      {/* <span>Un template HTML5 moderne, propre et creatif</span> */}
                                      <div className="main-border-button">
                                          <a href="#">Acheter maintenant!</a>
                                      </div>
                                  </div>
                                  <img src="/assets/images/left-banner-image.png" alt="" />
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="right-content">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="right-first-image">
                                          <div className="thumb">
                                              <div className="inner-content">
                                                  <h4>Jogging</h4>
                                                  <span>Les meilleurs joggings</span>
                                              </div>
                                              {/* <div className="hover-content">
                                                  <div className="inner">
                                                      <h4>Jogging</h4>
                                                      <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                      <div className="main-border-button">
                                                          <a href="#">Decouvrir</a>
                                                      </div>
                                                  </div>
                                              </div> */}
                                              <img src="/assets/images/women-01.jpg" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="right-first-image">
                                          <div className="thumb">
                                              <div className="inner-content">
                                                  <h4>T-shirt</h4>
                                                  <span>Les meilleurs T-shirts</span>
                                              </div>
                                              {/* <div className="hover-content">
                                                  <div className="inner">
                                                      <h4>T-shirt</h4>
                                                      <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                      <div className="main-border-button">
                                                          <a href="#">Decouvrir</a>
                                                      </div>
                                                  </div>
                                              </div> */}
                                              <img src="/assets/images/t-shirt-01.png" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="right-first-image">
                                          <div className="thumb">
                                              <div className="inner-content">
                                                  <h4>Pull-over / Par-dessus</h4>
                                                  <span>Les meilleurs pulls et par-dessus</span>
                                              </div>
                                              {/* <div className="hover-content">
                                                  <div className="inner">
                                                      <h4>Pull-over / Par-dessus</h4>
                                                      <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                      <div className="main-border-button">
                                                          <a href="#">Decouvrir</a>
                                                      </div>
                                                  </div>
                                              </div> */}
                                              <img src="/assets/images/kid-01.jpg" />
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="right-first-image">
                                          <div className="thumb">
                                              <div className="inner-content">
                                                  <h4>Accessoires</h4>
                                                  <span>Accessoires tendance</span>
                                              </div>
                                              {/* <div className="hover-content">
                                                  <div className="inner">
                                                      <h4>Accessoires</h4>
                                                      <p>Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.</p>
                                                      <div className="main-border-button">
                                                          <a href="#">Decouvrir</a>
                                                      </div>
                                                  </div>
                                              </div> */}
                                              <img src="/assets/images/baner-right-image-04.png" />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          

          
          <section className="section" id="men">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="section-heading">
                              <h2>Nouveautés T-shirt</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="men-item-carousel">
                              <div className="owl-men-item owl-carousel">
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/men-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>T-shirt Billion'Shake noire</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/men-02.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>T-shirt Billion'Shake rose</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/men-03.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>T-shirt Billion'Shake blanc</h4>
                                          <span>15000CFA</span>
                                          {/*
                                          <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul>
                                          */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/men-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>T-shirt Billion'Shake noire</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          

          
          <section className="section" id="women">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="section-heading">
                              <h2>Nouveautés Jogging</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="women-item-carousel">
                              <div className="owl-women-item owl-carousel">
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/women-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Jogging Billion'Shake </h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/women-02.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Ensemble Billion'Shake rose</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/women-03.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Ensemble Billion'Shake café</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/women-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Ensemble Billion'Shake gris</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          

          
          <section className="section" id="kids">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="section-heading">
                              <h2>Nouveautés Pull-over / Par-dessus</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="kid-item-carousel">
                              <div className="owl-kid-item owl-carousel">
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/kid-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Pull-over Classique</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/kid-02.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Par-Dessus</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/kid-03.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Collection Ecole</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                                  <div className="item">
                                      <div className="thumb">
                                          <div className="hover-content">
                                              <ul>
                                                  <li><a href="/single-product"><i className="fa fa-eye"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-star"></i></a></li>
                                                  <li><a href="/single-product"><i className="fa fa-shopping-cart"></i></a></li>
                                              </ul>
                                          </div>
                                          <img src="/assets/images/kid-01.jpg" alt="" />
                                      </div>
                                      <div className="down-content">
                                          <h4>Classique Printemps</h4>
                                          <span>15000CFA</span>
                                          {/* <ul className="stars">
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                              <li><i className="fa fa-star"></i></li>
                                          </ul> */}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          

          
          {/* <section className="section" id="explore">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-6">
                          <div className="left-content">
                              <h2>Decouvrez nos produits</h2>
                              <span>Vous pouvez utiliser ce template HTML/CSS et le modifier librement pour Billion'Shake.</span>
                              <div className="quote">
                                  <i className="fa fa-quote-left"></i><p>Vous ne devez pas redistribuer le fichier ZIP du template sur un autre site.</p>
                              </div>
                              <p>Ce template contient 5 pages et est propose gratuitement par TemplateMo. Sa creation implique des couts de developpement.</p>
                              <p>Si ce template vous est utile, vous pouvez <a rel="nofollow noreferrer" href="https://paypal.me/templatemo" target="_blank">les soutenir</a> via PayPal. Merci.</p>
                              <div className="main-border-button">
                                  <a href="/products">Decouvrir</a>
                              </div>
                          </div>
                      </div>
                      <div className="col-lg-6">
                          <div className="right-content">
                              <div className="row">
                                  <div className="col-lg-6">
                                      <div className="leather">
                                          <h4>Sacs en cuir</h4>
                                          <span>Derniere collection</span>
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="first-image">
                                          <img src="/assets/images/explore-image-01.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="second-image">
                                          <img src="/assets/images/explore-image-02.jpg" alt="" />
                                      </div>
                                  </div>
                                  <div className="col-lg-6">
                                      <div className="types">
                                          <h4>Differents styles</h4>
                                          <span>Plus de 304 produits</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          

          
          <section className="section" id="social">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-heading">
                              <h2>Reseaux sociaux</h2>
                              <span>Le souci du detail fait la difference chez Billion'Shake.</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="container">
                  <div className="row images">
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Mode</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-01.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Nouveau</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-02.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Marque</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-03.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Maquillage</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-04.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Cuir</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-05.jpg" alt="" />
                          </div>
                      </div>
                      <div className="col-2">
                          <div className="thumb">
                              <div className="icon">
                                  <a href="http://instagram.com">
                                      <h6>Sac</h6>
                                      <i className="fa fa-instagram"></i>
                                  </a>
                              </div>
                              <img src="/assets/images/instagram-06.jpg" alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </section> */}
          
      <Subscribe />
    </>
  )
}

export default Home
