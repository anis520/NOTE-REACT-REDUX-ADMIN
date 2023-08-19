import "../../assets/css/demo1.min.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/swiper/swiper-bundle.min.css";
import "../../assets/vendor/animate/animate.min.css";
import "../../assets/vendor/magnific-popup/magnific-popup.min.css";
import "../../assets/vendor/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <div>
      <div className="page-wrapper">
        <h1 className="d-none">
          Wolmart - Responsive Marketplace HTML Template
        </h1>
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                <p className="welcome-msg">
                  Welcome to Wolmart Store message or remove it!
                </p>
              </div>
              <div className="header-right">
                <div className="dropdown">
                  <a href="#currency">USD</a>
                  <div className="dropdown-box">
                    <a href="#USD">USD</a>
                    <a href="#EUR">EUR</a>
                  </div>
                </div>
                <div className="dropdown">
                  <a href="#language">
                    <img
                      src="assets/images/flags/eng.png"
                      alt="ENG Flag"
                      width={14}
                      height={8}
                      className="dropdown-image"
                    />
                    ENG
                  </a>
                  <div className="dropdown-box">
                    <a href="#ENG">
                      <img
                        src="assets/images/flags/eng.png"
                        alt="ENG Flag"
                        width={14}
                        height={8}
                        className="dropdown-image"
                      />
                      ENG
                    </a>
                    <a href="#FRA">
                      <img
                        src="assets/images/flags/fra.png"
                        alt="FRA Flag"
                        width={14}
                        height={8}
                        className="dropdown-image"
                      />
                      FRA
                    </a>
                  </div>
                </div>
                <span className="divider d-lg-show" />
                <a href="blog.html" className="d-lg-show">
                  Blog
                </a>
                <a href="contact-us.html" className="d-lg-show">
                  Contact Us
                </a>
                <a href="my-account.html" className="d-lg-show">
                  My Account
                </a>
                <a
                  href="assets/ajax/login.html"
                  className="d-lg-show login sign-in"
                >
                  <i className="w-icon-account" />
                  Sign In
                </a>
                <span className="delimiter d-lg-show">/</span>
                <a
                  href="assets/ajax/login.html"
                  className="ml-0 d-lg-show login register"
                >
                  Register
                </a>
              </div>
            </div>
          </div>

          <div className="header-middle">
            <div className="container">
              <div className="header-left mr-md-4">
                <a
                  href="#"
                  className="mobile-menu-toggle  w-icon-hamburger"
                  aria-label="menu-toggle"
                />
                <a href="demo1.html" className="logo ml-lg-0">
                  <img
                    src="assets/images/logo.png"
                    alt="logo"
                    width={144}
                    height={45}
                  />
                </a>
                <form
                  method="get"
                  action="#"
                  className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper"
                >
                  <div className="select-box">
                    <select id="category" name="category">
                      <option value="">All Categories</option>
                      <option value={4}>Fashion</option>
                      <option value={5}>Furniture</option>
                      <option value={6}>Shoes</option>
                      <option value={7}>Sports</option>
                      <option value={8}>Games</option>
                      <option value={9}>Computers</option>
                      <option value={10}>Electronics</option>
                      <option value={11}>Kitchen</option>
                      <option value={12}>Clothing</option>
                    </select>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    name="search"
                    id="search"
                    placeholder="Search in..."
                    required=""
                  />
                  <button className="btn btn-search" type="submit">
                    <i className="w-icon-search" />
                  </button>
                </form>
              </div>
              <div className="header-right ml-4">
                <div className="header-call d-xs-show d-lg-flex align-items-center">
                  <a href="tel:#" className="w-icon-call" />
                  <div className="call-info d-lg-show">
                    <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                      <a
                        href="https://portotheme.com/cdn-cgi/l/email-protection#9ab9"
                        className="text-capitalize"
                      >
                        Live Chat
                      </a>
                      or :
                    </h4>
                    <a
                      href="tel:#"
                      className="phone-number font-weight-bolder ls-50"
                    >
                      0(800)123-456
                    </a>
                  </div>
                </div>
                <a
                  className="wishlist label-down link d-xs-show"
                  href="wishlist.html"
                >
                  <i className="w-icon-heart" />
                  <span className="wishlist-label d-lg-show">Wishlist</span>
                </a>
                <a
                  className="compare label-down link d-xs-show"
                  href="compare.html"
                >
                  <i className="w-icon-compare" />
                  <span className="compare-label d-lg-show">Compare</span>
                </a>
                <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
                  <div className="cart-overlay" />
                  <a href="#" className="cart-toggle label-down link">
                    <i className="w-icon-cart">
                      <span className="cart-count">2</span>
                    </i>
                    <span className="cart-label">Cart</span>
                  </a>
                  <div className="dropdown-box">
                    <div className="cart-header">
                      <span>Shopping Cart</span>
                      <a href="#" className="btn-close">
                        Close
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                    <div className="products">
                      <div className="product product-cart">
                        <div className="product-detail">
                          <a
                            href="product-default.html"
                            className="product-name"
                          >
                            Beige knitted elas
                            <br />
                            tic runner shoes
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$25.68</span>
                          </div>
                        </div>
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-1.jpg"
                              alt="product"
                              height={84}
                              width={94}
                            />
                          </a>
                        </figure>
                        <button
                          className="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                      <div className="product product-cart">
                        <div className="product-detail">
                          <a
                            href="product-default.html"
                            className="product-name"
                          >
                            Blue utility pina
                            <br />
                            fore denim dress
                          </a>
                          <div className="price-box">
                            <span className="product-quantity">1</span>
                            <span className="product-price">$32.99</span>
                          </div>
                        </div>
                        <figure className="product-media">
                          <a href="product-default.html">
                            <img
                              src="assets/images/cart/product-2.jpg"
                              alt="product"
                              width={84}
                              height={94}
                            />
                          </a>
                        </figure>
                        <button
                          className="btn btn-link btn-close"
                          aria-label="button"
                        >
                          <i className="fas fa-times" />
                        </button>
                      </div>
                    </div>
                    <div className="cart-total">
                      <label>Subtotal:</label>
                      <span className="price">$58.67</span>
                    </div>
                    <div className="cart-action">
                      <a
                        href="cart.html"
                        className="btn btn-dark btn-outline btn-rounded"
                      >
                        View Cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-primary  btn-rounded"
                      >
                        Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
            <div className="container">
              <div className="inner-wrap">
                <div className="header-left">
                  <div
                    className="dropdown category-dropdown has-border"
                    data-visible="true"
                  >
                    <a
                      href="#"
                      className="category-toggle text-dark"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                      data-display="static"
                      title="Browse Categories"
                    >
                      <i className="w-icon-category" />
                      <span>Browse Categories</span>
                    </a>
                    <div className="dropdown-box">
                      <ul className="menu vertical-menu category-menu">
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-tshirt2" />
                            Fashion
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Women</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery &amp; Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Men</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    New Arrivals
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Best Sellers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Trending
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Clothing
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Shoes</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Bags</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Accessories
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Jewlery &amp; Watches
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="banner-fixed menu-banner menu-banner2">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-2.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={347}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <div className="banner-price-info mb-1 ls-normal">
                                    Get up to
                                    <strong className="text-primary text-uppercase">
                                      20%Off
                                    </strong>
                                  </div>
                                  <h3 className="banner-title ls-normal">
                                    Hot Sales
                                  </h3>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-dark btn-sm btn-link btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-home" />
                            Home &amp; Garden
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">Bedroom</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Beds, Frames &amp; Bases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dressers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Nightstands
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kids Beds &amp; Headboards
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Armoires
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">Living Room</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Coffee Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Futons &amp; Sofa Beds
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cabinets &amp; Chests
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Office</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Office Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">Desks</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bookcases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    File Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Breakroom Tables
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">
                                Kitchen &amp; Dining
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Sets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Kitchen Storage Cabinets
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bashers Racks
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Chairs
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Dining Room Tables
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Bar Stools
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner3">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-3.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={461}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal text-white mb-1">
                                    Restroom
                                  </h4>
                                  <h3 className="banner-title font-weight-bolder text-white ls-normal">
                                    Furniture Sale
                                  </h3>
                                  <div className="banner-price-info text-white font-weight-normal ls-25">
                                    Up to
                                    <span className="text-secondary text-uppercase font-weight-bold">
                                      25% Off
                                    </span>
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-link btn-sm btn-slide-right btn-icon-right"
                                  >
                                    Shop Now
                                    <i className="w-icon-long-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-electronics" />
                            Electronics
                          </a>
                          <ul className="megamenu">
                            <li>
                              <h4 className="menu-title">
                                Laptops &amp; Computers
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Desktop Computers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Monitors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Laptops
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Hard Drives &amp; Storage
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Computer Accessories
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">
                                TV &amp; Video
                              </h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">TVs</a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Home Audio Speakers
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Projectors
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Media Streaming Devices
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h4 className="menu-title">Digital Cameras</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital SLR Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Sports &amp; Action Cameras
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Camera Lenses
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Photo Printer
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Digital Memory Cards
                                  </a>
                                </li>
                              </ul>
                              <h4 className="menu-title mt-1">Cell Phones</h4>
                              <hr className="divider" />
                              <ul>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Carrier Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Unlocked Phones
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Phone &amp; Cellphone Cases
                                  </a>
                                </li>
                                <li>
                                  <a href="shop-fullwidth-banner.html">
                                    Cellphone Chargers
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <div className="menu-banner banner-fixed menu-banner4">
                                <figure>
                                  <img
                                    src="assets/images/menu/banner-4.jpg"
                                    alt="Menu Banner"
                                    width={235}
                                    height={433}
                                  />
                                </figure>
                                <div className="banner-content">
                                  <h4 className="banner-subtitle font-weight-normal">
                                    Deals Of The Week
                                  </h4>
                                  <h3 className="banner-title text-white">
                                    Save On Smart EarPhone
                                  </h3>
                                  <div className="banner-price-info text-secondary font-weight-bolder text-uppercase text-secondary">
                                    20% Off
                                  </div>
                                  <a
                                    href="shop-banner-sidebar.html"
                                    className="btn btn-white btn-outline btn-sm btn-rounded"
                                  >
                                    Shop Now
                                  </a>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-furniture" />
                            Furniture
                          </a>
                          <ul className="megamenu type2">
                            <li className="row">
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Furniture</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Sofas &amp; Couches
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Armchairs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bed Frames
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Beside Tables
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Dressing Tables
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Lighting</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Light Bulbs
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lamps
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Celling Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Wall Lights
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Bathroom Lighting
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">Home Accessories</h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Decorative Accessories
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Candals &amp; Holders
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Home Fragrance
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Mirrors
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Clocks
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3 col-lg-3 col-6">
                                <h4 className="menu-title">
                                  Garden &amp; Outdoors
                                </h4>
                                <hr className="divider" />
                                <ul>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Garden Furniture
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Lawn Mowers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Pressure Washers
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      All Garden Tools
                                    </a>
                                  </li>
                                  <li>
                                    <a href="shop-fullwidth-banner.html">
                                      Outdoor Dining
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li className="row">
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-5.jpg"
                                      alt="Banner"
                                      width={410}
                                      height={123}
                                      style={{ backgroundColor: "#D2D2D2" }}
                                    />
                                  </figure>
                                  <div className="banner-content text-right y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-default text-capitalize">
                                      New Arrivals
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize ls-normal">
                                      Amazing Sofa
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal">
                                      Starting at <strong>$125.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="banner banner-fixed menu-banner5 br-xs">
                                  <figure>
                                    <img
                                      src="assets/images/menu/banner-6.jpg"
                                      alt="Banner"
                                      width={410}
                                      height={123}
                                      style={{ backgroundColor: "#9F9888" }}
                                    />
                                  </figure>
                                  <div className="banner-content y-50">
                                    <h4 className="banner-subtitle font-weight-normal text-white text-capitalize">
                                      Best Seller
                                    </h4>
                                    <h3 className="banner-title font-weight-bolder text-capitalize text-white ls-normal">
                                      Chair &amp; Lamp
                                    </h3>
                                    <div className="banner-price-info font-weight-normal ls-normal text-white">
                                      From <strong>$165.00</strong>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-heartbeat" />
                            Healthy &amp; Beauty
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-gift" />
                            Gift Ideas
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-gamepad" />
                            Toy &amp; Games
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ice-cream" />
                            Cooking
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ios" />
                            Smart Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-camera" />
                            Cameras &amp; Photo
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            <i className="w-icon-ruby" />
                            Accessories
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-banner-sidebar.html"
                            className="font-weight-bold text-primary text-uppercase ls-25"
                          >
                            View All Categories
                            <i className="w-icon-angle-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <nav className="main-nav">
                    <ul className="menu active-underline">
                      <li className="active">
                        <a href="demo1.html">Home</a>
                      </li>
                      <li>
                        <a href="shop-banner-sidebar.html">Shop</a>
                        <ul className="megamenu">
                          <li>
                            <h4 className="menu-title">Shop Pages</h4>
                            <ul>
                              <li>
                                <a href="shop-banner-sidebar.html">
                                  Banner With Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-boxed-banner.html">
                                  Boxed Banner
                                </a>
                              </li>
                              <li>
                                <a href="shop-fullwidth-banner.html">
                                  Full Width Banner
                                </a>
                              </li>
                              <li>
                                <a href="shop-horizontal-filter.html">
                                  Horizontal Filter
                                  <span className="tip tip-hot">Hot</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-off-canvas.html">
                                  Off Canvas Sidebar
                                  <span className="tip tip-new">New</span>
                                </a>
                              </li>
                              <li>
                                <a href="shop-infinite-scroll.html">
                                  Infinite Ajax Scroll
                                </a>
                              </li>
                              <li>
                                <a href="shop-right-sidebar.html">
                                  Right Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="shop-both-sidebar.html">
                                  Both Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Shop Layouts</h4>
                            <ul>
                              <li>
                                <a href="shop-grid-3cols.html">
                                  3 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-4cols.html">
                                  4 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-5cols.html">
                                  5 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-6cols.html">
                                  6 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-7cols.html">
                                  7 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-grid-8cols.html">
                                  8 Columns Mode
                                </a>
                              </li>
                              <li>
                                <a href="shop-list.html">List Mode</a>
                              </li>
                              <li>
                                <a href="shop-list-sidebar.html">
                                  List Mode With Sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Product Pages</h4>
                            <ul>
                              <li>
                                <a href="product-variable.html">
                                  Variable Product
                                </a>
                              </li>
                              <li>
                                <a href="product-featured.html">
                                  Featured &amp; Sale
                                </a>
                              </li>
                              <li>
                                <a href="product-accordion.html">
                                  Data In Accordion
                                </a>
                              </li>
                              <li>
                                <a href="product-section.html">
                                  Data In Sections
                                </a>
                              </li>
                              <li>
                                <a href="product-swatch.html">Image Swatch</a>
                              </li>
                              <li>
                                <a href="product-extended.html">
                                  Extended Info
                                </a>
                              </li>
                              <li>
                                <a href="product-without-sidebar.html">
                                  Without Sidebar
                                </a>
                              </li>
                              <li>
                                <a href="product-video.html">
                                  360<sup>o</sup> &amp; Video
                                  <span className="tip tip-new">New</span>
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <h4 className="menu-title">Product Layouts</h4>
                            <ul>
                              <li>
                                <a href="product-default.html">
                                  Default
                                  <span className="tip tip-hot">Hot</span>
                                </a>
                              </li>
                              <li>
                                <a href="product-vertical.html">
                                  Vertical Thumbs
                                </a>
                              </li>
                              <li>
                                <a href="product-grid.html">Grid Images</a>
                              </li>
                              <li>
                                <a href="product-masonry.html">Masonry</a>
                              </li>
                              <li>
                                <a href="product-gallery.html">Gallery</a>
                              </li>
                              <li>
                                <a href="product-sticky-info.html">
                                  Sticky Info
                                </a>
                              </li>
                              <li>
                                <a href="product-sticky-thumb.html">
                                  Sticky Thumbs
                                </a>
                              </li>
                              <li>
                                <a href="product-sticky-both.html">
                                  Sticky Both
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="vendor-dokan-store.html">Vendor</a>
                        <ul>
                          <li>
                            <a href="vendor-dokan-store-list.html">
                              Store Listing
                            </a>
                            <ul>
                              <li>
                                <a href="vendor-dokan-store-list.html">
                                  Store listing 1
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcfm-store-list.html">
                                  Store listing 2
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcmp-store-list.html">
                                  Store listing 3
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wc-store-list.html">
                                  Store listing 4
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="vendor-dokan-store.html">Vendor Store</a>
                            <ul>
                              <li>
                                <a href="vendor-dokan-store.html">
                                  Vendor Store 1
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcfm-store-product-grid.html">
                                  Vendor Store 2
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wcmp-store-product-grid.html">
                                  Vendor Store 3
                                </a>
                              </li>
                              <li>
                                <a href="vendor-wc-store-product-grid.html">
                                  Vendor Store 4
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                        <ul>
                          <li>
                            <a href="blog.html">classNameic</a>
                          </li>
                          <li>
                            <a href="blog-listing.html">Listing</a>
                          </li>
                          <li>
                            <a href="blog-grid-3cols.html">Grid</a>
                            <ul>
                              <li>
                                <a href="blog-grid-2cols.html">
                                  Grid 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-3cols.html">
                                  Grid 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-4cols.html">
                                  Grid 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-grid-sidebar.html">
                                  Grid sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-masonry-3cols.html">Masonry</a>
                            <ul>
                              <li>
                                <a href="blog-masonry-2cols.html">
                                  Masonry 2 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-3cols.html">
                                  Masonry 3 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-4cols.html">
                                  Masonry 4 columns
                                </a>
                              </li>
                              <li>
                                <a href="blog-masonry-sidebar.html">
                                  Masonry sidebar
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog-mask-grid.html">Mask</a>
                            <ul>
                              <li>
                                <a href="blog-mask-grid.html">Blog mask grid</a>
                              </li>
                              <li>
                                <a href="blog-mask-masonry.html">
                                  Blog mask masonry
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="post-single.html">Single Post</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about-us.html">Pages</a>
                        <ul>
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="become-a-vendor.html">Become A Vendor</a>
                          </li>
                          <li>
                            <a href="contact-us.html">Contact Us</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQs</a>
                          </li>
                          <li>
                            <a href="error-404.html">Error 404</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="wishlist.html">Wishlist</a>
                          </li>
                          <li>
                            <a href="cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="my-account.html">My Account</a>
                          </li>
                          <li>
                            <a href="compare.html">Compare</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="elements.html">Elements</a>
                        <ul>
                          <li>
                            <a href="element-accordions.html">Accordions</a>
                          </li>
                          <li>
                            <a href="element-alerts.html">
                              Alert &amp; Notification
                            </a>
                          </li>
                          <li>
                            <a href="element-blog-posts.html">Blog Posts</a>
                          </li>
                          <li>
                            <a href="element-buttons.html">Buttons</a>
                          </li>
                          <li>
                            <a href="element-cta.html">Call to Action</a>
                          </li>
                          <li>
                            <a href="element-icons.html">Icons</a>
                          </li>
                          <li>
                            <a href="element-icon-boxes.html">Icon Boxes</a>
                          </li>
                          <li>
                            <a href="element-instagrams.html">Instagrams</a>
                          </li>
                          <li>
                            <a href="element-categories.html">
                              Product Category
                            </a>
                          </li>
                          <li>
                            <a href="element-products.html">Products</a>
                          </li>
                          <li>
                            <a href="element-tabs.html">Tabs</a>
                          </li>
                          <li>
                            <a href="element-testimonials.html">Testimonials</a>
                          </li>
                          <li>
                            <a href="element-titles.html">Titles</a>
                          </li>
                          <li>
                            <a href="element-typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="element-vendors.html">Vendors</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <a href="#" className="d-xl-show">
                    <i className="w-icon-map-marker mr-1" />
                    Track Order
                  </a>
                  <a href="#">
                    <i className="w-icon-sale" />
                    Daily Deals
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="main">
          <section className="intro-section">
            <div
              className="swiper-container swiper-theme nav-inner pg-inner swiper-nav-lg animation-slider pg-xxl-hide nav-xxl-show nav-hide"
              data-swiper-options="{
          'slidesPerView': 1,
          'autoplay': {
              'delay': 8000,
              'disableOnInteraction': false
          }
      }"
            >
              <div className="swiper-wrapper">
                <div
                  className="swiper-slide banner banner-fixed intro-slide intro-slide1"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo1/sliders/slide-1.jpg)",
                    backgroundColor: "#ebeef2",
                  }}
                >
                  <div className="container">
                    <figure className="slide-image skrollable slide-animate">
                      <img
                        src="assets/images/demos/demo1/sliders/shoes.png"
                        alt="Banner"
                        data-bottom-top="transform: translateY(10vh);"
                        data-top-bottom="transform: translateY(-10vh);"
                        width={474}
                        height={397}
                      />
                    </figure>
                    <div className="banner-content y-50 text-right">
                      <h5
                        className="banner-subtitle font-weight-normal text-default ls-50 lh-1 mb-2 slide-animate"
                        data-animation-options="{
                          'name': 'fadeInRightShorter',
                          'duration': '1s',
                          'delay': '.2s'
                      }"
                      >
                        Custom
                        <span className="p-relative d-inline-block">Men’s</span>
                      </h5>
                      <h3
                        className="banner-title font-weight-bolder ls-25 lh-1 slide-animate"
                        data-animation-options="{
                          'name': 'fadeInRightShorter',
                          'duration': '1s',
                          'delay': '.4s'
                      }"
                      >
                        RUNNING SHOES
                      </h3>
                      <p
                        className="font-weight-normal text-default slide-animate"
                        data-animation-options="{
                          'name': 'fadeInRightShorter',
                          'duration': '1s',
                          'delay': '.6s'
                      }"
                      >
                        Sale up to
                        <span className="font-weight-bolder text-secondary">
                          30% OFF
                        </span>
                      </p>
                      <a
                        href="shop-list.html"
                        className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                        data-animation-options="{
                          'name': 'fadeInRightShorter',
                          'duration': '1s',
                          'delay': '.8s'
                      }"
                      >
                        SHOP NOW
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide banner banner-fixed intro-slide intro-slide2"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo1/sliders/slide-2.jpg)",
                    backgroundColor: "#ebeef2",
                  }}
                >
                  <div className="container">
                    <figure
                      className="slide-image skrollable slide-animate"
                      data-animation-options="{
                          'name': 'fadeInUpShorter',
                          'duration': '1s'
                      }"
                    >
                      <img
                        src="assets/images/demos/demo1/sliders/men.png"
                        alt="Banner"
                        data-bottom-top="transform: translateX(10vh);"
                        data-top-bottom="transform: translateX(-10vh);"
                        width={480}
                        height={633}
                      />
                    </figure>
                    <div className="banner-content d-inline-block y-50">
                      <h5
                        className="banner-subtitle font-weight-normal text-default ls-50 slide-animate"
                        data-animation-options="{
                              'name': 'fadeInUpShorter',
                              'duration': '1s',
                              'delay': '.2s'
                          }"
                      >
                        Mountain-
                        <span className="text-secondary">Climbing</span>
                      </h5>
                      <h3
                        className="banner-title font-weight-bolder text-dark mb-0 ls-25 slide-animate"
                        data-animation-options="{
                              'name': 'fadeInUpShorter',
                              'duration': '1s',
                              'delay': '.4s'
                          }"
                      >
                        Hot &amp; Packback
                      </h3>
                      <p
                        className="font-weight-normal text-default slide-animate"
                        data-animation-options="{
                              'name': 'fadeInUpShorter',
                              'duration': '1s',
                              'delay': '.8s'
                          }"
                      >
                        Only until the end of this week.
                      </p>
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-dark btn-outline btn-rounded btn-icon-right slide-animate"
                        data-animation-options="{
                              'name': 'fadeInUpShorter',
                              'duration': '1s',
                              'delay': '1s'
                          }"
                      >
                        SHOP NOW
                        <i className="w-icon-long-arrow-right" />
                      </a>
                    </div>
                    {"/* End of .banner-content */*/"}
                  </div>
                  {"/* End of .container */*/"}
                </div>
                {"/* End of .intro-slide2 */*/"}
                <div
                  className="swiper-slide banner banner-fixed intro-slide intro-slide3"
                  style={{
                    backgroundImage:
                      "url(assets/images/demos/demo1/sliders/slide-3.jpg)",
                    backgroundColor: "#f0f1f2",
                  }}
                >
                  <div className="container">
                    <figure
                      className="slide-image skrollable slide-animate"
                      data-animation-options="{
                          'name': 'fadeInDownShorter',
                          'duration': '1s'
                      }"
                    >
                      <img
                        src="assets/images/demos/demo1/sliders/skate.png"
                        alt="Banner"
                        data-bottom-top="transform: translateY(10vh);"
                        data-top-bottom="transform: translateY(-10vh);"
                        width={310}
                        height={444}
                      />
                    </figure>
                    <div className="banner-content text-right y-50">
                      <p
                        className="font-weight-normal text-default text-uppercase mb-0 slide-animate"
                        data-animation-options="{
                              'name': 'fadeInLeftShorter',
                              'duration': '1s',
                              'delay': '.6s'
                          }"
                      >
                        Top weekly Seller
                      </p>
                      <h5
                        className="banner-subtitle font-weight-normal text-default ls-25 slide-animate"
                        data-animation-options="{
                              'name': 'fadeInLeftShorter',
                              'duration': '1s',
                              'delay': '.4s'
                          }"
                      >
                        Trending Collection
                      </h5>
                      <h3
                        className="banner-title p-relative font-weight-bolder ls-50 slide-animate"
                        data-animation-options="{
                              'name': 'fadeInLeftShorter',
                              'duration': '1s',
                              'delay': '.2s'
                          }"
                      >
                        <span className="text-white mr-4">Roller</span>-skate
                      </h3>
                      <div
                        className="btn-group slide-animate"
                        data-animation-options="{
                              'name': 'fadeInLeftShorter',
                              'duration': '1s',
                              'delay': '.8s'
                          }"
                      >
                        <a
                          href="shop-list.html"
                          className="btn btn-dark btn-outline btn-rounded btn-icon-right"
                        >
                          SHOP NOW
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </div>
                      {"/* End of .banner-content */*/"}
                    </div>
                    {"/* End of .container */*/"}
                  </div>
                </div>
                {"/* End of .intro-slide3 */*/"}
              </div>
              <div className="swiper-pagination" />
              <button className="swiper-button-next" />
              <button className="swiper-button-prev" />
            </div>
          </section>

          <div className="container">
            <div
              className="swiper-container appear-animate icon-box-wrapper br-sm mt-6 mb-6"
              data-swiper-options="{
          'slidesPerView': 1,
          'loop': false,
          'breakpoints': {
              '576': {
                  'slidesPerView': 2
              },
              '768': {
                  'slidesPerView': 3
              },
              '1200': {
                  'slidesPerView': 4
              }
          }
      }"
            >
              <div className="swiper-wrapper row cols-md-4 cols-sm-3 cols-1">
                <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                  <span className="icon-box-icon icon-shipping">
                    <i className="w-icon-truck" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title font-weight-bold mb-1">
                      Free Shipping &amp; Returns
                    </h4>
                    <p className="text-default">For all orders over $99</p>
                  </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side icon-box-primary">
                  <span className="icon-box-icon icon-payment">
                    <i className="w-icon-bag" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title font-weight-bold mb-1">
                      Secure Payment
                    </h4>
                    <p className="text-default">We ensure secure payment</p>
                  </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-money">
                  <span className="icon-box-icon icon-money">
                    <i className="w-icon-money" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title font-weight-bold mb-1">
                      Money Back Guarantee
                    </h4>
                    <p className="text-default">Any back within 30 days</p>
                  </div>
                </div>
                <div className="swiper-slide icon-box icon-box-side icon-box-primary icon-box-chat">
                  <span className="icon-box-icon icon-chat">
                    <i className="w-icon-chat" />
                  </span>
                  <div className="icon-box-content">
                    <h4 className="icon-box-title font-weight-bold mb-1">
                      Customer Support
                    </h4>
                    <p className="text-default">Call or email us 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            {"/* End of Iocn Box Wrapper */*/"}
            <div className="row category-banner-wrapper appear-animate pt-6 pb-8">
              <div className="col-md-6 mb-4">
                <div className="banner banner-fixed br-xs">
                  <figure>
                    <img
                      src="assets/images/demos/demo1/categories/1-1.jpg"
                      alt="Category Banner"
                      width={610}
                      height={160}
                      style={{ backgroundColor: "#ecedec" }}
                    />
                  </figure>
                  <div className="banner-content y-50 mt-0">
                    <h5 className="banner-subtitle font-weight-normal text-dark">
                      Get up to
                      <span className="text-secondary font-weight-bolder text-uppercase ls-25">
                        20% Off
                      </span>
                    </h5>
                    <h3 className="banner-title text-uppercase">
                      Sports Outfits
                      <br />
                      <span className="font-weight-normal                       text-capitalize">
                        Collection
                      </span>
                    </h3>
                    <div className="banner-price-info font-weight-normal">
                      Starting at
                      <span className="text-secondary                       font-weight-bolder">
                        $170.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="banner banner-fixed br-xs">
                  <figure>
                    <img
                      src="assets/images/demos/demo1/categories/1-2.jpg"
                      alt="Category Banner"
                      width={610}
                      height={160}
                      style={{ backgroundColor: "#636363" }}
                    />
                  </figure>
                  <div className="banner-content y-50 mt-0">
                    <h5 className="banner-subtitle font-weight-normal text-capitalize">
                      New Arrivals
                    </h5>
                    <h3 className="banner-title text-white text-uppercase">
                      Accessories
                      <br />
                      <span className="font-weight-normal text-capitalize">
                        Collection
                      </span>
                    </h3>
                    <div className="banner-price-info text-white font-weight-normal text-capitalize">
                      Only From
                      <span className="text-secondary font-weight-bolder">
                        $90.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {"/* End of Category Banner Wrapper */*/"}
            <div className="row deals-wrapper appear-animate mb-8">
              <div className="col-lg-9 mb-4">
                <div className="single-product h-100 br-sm">
                  <h4 className="title-sm title-underline font-weight-bolder ls-normal">
                    Deals Hot of The Day
                  </h4>
                  <div className="swiper">
                    <div
                      className="swiper-container swiper-theme nav-top swiper-nav-lg"
                      data-swiper-options="{
                          'spaceBetween': 20,
                          'slidesPerView': 1
                      }"
                    >
                      <div className="swiper-wrapper row cols-1 gutter-no">
                        <div className="swiper-slide">
                          <div className="product product-single row">
                            <div className="col-md-6">
                              <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                                <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                                  <div className="swiper-wrapper row cols-1 gutter-no">
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/1-1-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/1-2-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/1-3-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/1-4-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <button className="swiper-button-next" />
                                  <button className="swiper-button-prev" />
                                  <div className="product-label-group">
                                    <label className="product-label label-discount">
                                      25% Off
                                    </label>
                                  </div>
                                </div>
                                <div
                                  className="product-thumbs-wrap swiper-container"
                                  data-swiper-options="{
                                                  'direction': 'vertical',
                                                  'breakpoints': {
                                                      '0': {
                                                          'direction': 'horizontal',
                                                          'slidesPerView': 4
                                                      },
                                                      '992': {
                                                          'direction': 'vertical',
                                                          'slidesPerView': 'auto'
                                                      }
                                                  }
                                              }"
                                >
                                  <div className="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/1-1-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/1-2-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/1-3-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/1-4-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="product-details scrollable">
                                <h2 className="product-title mb-1">
                                  <a href="product-default.html">
                                    Coat Pool Comfort Jacket
                                  </a>
                                </h2>
                                <hr className="product-divider" />
                                <div className="product-price">
                                  <ins className="new-price ls-50">
                                    $150.00 - $180.00
                                  </ins>
                                </div>
                                <div className="product-countdown-container flex-wrap">
                                  <label className="mr-2 text-default">
                                    Offer Ends In:
                                  </label>
                                  <div
                                    className="product-countdown countdown-compact"
                                    data-until="2022, 12, 31"
                                    data-compact="true"
                                  >
                                    629 days, 11: 59: 52
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a href="#" className="rating-reviews">
                                    (3 Reviews)
                                  </a>
                                </div>
                                <div className="product-form product-variation-form product-size-swatch mb-3">
                                  <label className="mb-1">Size:</label>
                                  <div className="flex-wrap d-flex align-items-center product-variations">
                                    <a href="#" className="size">
                                      Extra Large
                                    </a>
                                    <a href="#" className="size">
                                      Large
                                    </a>
                                    <a href="#" className="size">
                                      Medium
                                    </a>
                                    <a href="#" className="size">
                                      Small
                                    </a>
                                  </div>
                                  <a
                                    href="#"
                                    className="product-variation-clean"
                                  >
                                    Clean All
                                  </a>
                                </div>
                                <div className="product-variation-price">
                                  <span />
                                </div>
                                <div className="product-form pt-4">
                                  <div className="product-qty-form mb-2 mr-2">
                                    <div className="input-group">
                                      <input
                                        className="quantity form-control"
                                        type="number"
                                        min={1}
                                        max={10000000}
                                      />
                                      <button className="quantity-plus w-icon-plus" />
                                      <button className="quantity-minus w-icon-minus" />
                                    </div>
                                  </div>
                                  <button className="btn btn-primary btn-cart">
                                    <i className="w-icon-cart" />
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                                <div className="social-links-wrapper mt-1">
                                  <div className="social-links">
                                    <div className="social-icons social-no-color border-thin">
                                      <a
                                        href="#"
                                        className="social-icon social-facebook w-icon-facebook"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-twitter w-icon-twitter"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-pinterest fab fa-pinterest-p"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-whatsapp fab fa-whatsapp"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-youtube fab fa-linkedin-in"
                                      />
                                    </div>
                                  </div>
                                  <span className="divider d-xs-show" />
                                  <div className="product-link-wrapper d-flex">
                                    <a
                                      href="#"
                                      className="btn-product-icon btn-wishlist w-icon-heart"
                                    />
                                    <a
                                      href="#"
                                      className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="product product-single row">
                            <div className="col-md-6">
                              <div className="product-gallery product-gallery-sticky product-gallery-vertical">
                                <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                                  <div className="swiper-wrapper row cols-1 gutter-no">
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/2-1-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/2-2-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/2-3-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                    <div className="swiper-slide">
                                      <figure className="product-image">
                                        <img
                                          src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                          data-zoom-image="assets/images/demos/demo1/products/2-4-800x900.jpg"
                                          alt="Product Image"
                                          width={800}
                                          height={900}
                                        />
                                      </figure>
                                    </div>
                                  </div>
                                  <button className="swiper-button-next" />
                                  <button className="swiper-button-prev" />
                                  <div className="product-label-group">
                                    <label className="product-label label-discount">
                                      25% Off
                                    </label>
                                  </div>
                                </div>
                                <div
                                  className="product-thumbs-wrap swiper-container"
                                  data-swiper-options="{
                                                  'breakpoints': {
                                                      '992': {
                                                          'direction': 'vertical',
                                                          'slidesPerView': 'auto'
                                                      }
                                                  }
                                              }"
                                >
                                  <div className="product-thumbs swiper-wrapper row cols-lg-1 cols-4 gutter-sm">
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/2-1-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/2-2-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/2-3-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                    <div className="product-thumb swiper-slide">
                                      <img
                                        src="assets/images/demos/demo1/products/2-4-600x675.jpg"
                                        alt="Product thumb"
                                        width={60}
                                        height={68}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="product-details scrollable">
                                <h2 className="product-title mb-1">
                                  <a href="product-default.html">
                                    Coat Pool Comfort Jacket
                                  </a>
                                </h2>
                                <hr className="product-divider" />
                                <div className="product-price">
                                  <ins className="new-price ls-50">
                                    $150.00 - $180.00
                                  </ins>
                                </div>
                                <div className="product-countdown-container flex-wrap">
                                  <label className="mr-2 text-default">
                                    Offer Ends In:
                                  </label>
                                  <div
                                    className="product-countdown countdown-compact"
                                    data-until="2022, 12, 31"
                                    data-compact="true"
                                  >
                                    629 days, 11: 59: 52
                                  </div>
                                </div>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "80%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                  <a href="#" className="rating-reviews">
                                    (3 Reviews)
                                  </a>
                                </div>
                                <div className="product-form product-variation-form product-size-swatch mb-3">
                                  <label className="mb-1">Size:</label>
                                  <div className="flex-wrap d-flex align-items-center product-variations">
                                    <a href="#" className="size">
                                      Extra Large
                                    </a>
                                    <a href="#" className="size">
                                      Large
                                    </a>
                                    <a href="#" className="size">
                                      Medium
                                    </a>
                                    <a href="#" className="size">
                                      Small
                                    </a>
                                  </div>
                                  <a
                                    href="#"
                                    className="product-variation-clean"
                                  >
                                    Clean All
                                  </a>
                                </div>
                                <div className="product-variation-price">
                                  <span />
                                </div>
                                <div className="product-form pt-4">
                                  <div className="product-qty-form mb-2 mr-2">
                                    <div className="input-group">
                                      <input
                                        className="quantity form-control"
                                        type="number"
                                        min={1}
                                        max={10000000}
                                      />
                                      <button className="quantity-plus w-icon-plus" />
                                      <button className="quantity-minus w-icon-minus" />
                                    </div>
                                  </div>
                                  <button className="btn btn-primary btn-cart">
                                    <i className="w-icon-cart" />
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                                <div className="social-links-wrapper mt-1">
                                  <div className="social-links">
                                    <div className="social-icons social-no-color border-thin">
                                      <a
                                        href="#"
                                        className="social-icon social-facebook w-icon-facebook"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-twitter w-icon-twitter"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-pinterest fab fa-pinterest-p"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-whatsapp fab fa-whatsapp"
                                      />
                                      <a
                                        href="#"
                                        className="social-icon social-youtube fab fa-linkedin-in"
                                      />
                                    </div>
                                  </div>
                                  <span className="divider d-xs-show" />
                                  <div className="product-link-wrapper d-flex">
                                    <a
                                      href="#"
                                      className="btn-product-icon btn-wishlist w-icon-heart"
                                    />
                                    <a
                                      href="#"
                                      className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className="swiper-button-prev" />
                      <button className="swiper-button-next" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4">
                <div className="widget widget-products widget-products-bordered h-100">
                  <div className="widget-body br-sm h-100">
                    <h4 className="title-sm title-underline font-weight-bolder ls-normal mb-2">
                      Top 20 Best Seller
                    </h4>
                    <div className="swiper">
                      <div
                        className="swiper-container swiper-theme nav-top"
                        data-swiper-options="{
                              'slidesPerView': 1,
                              'spaceBetween': 20,
                              'breakpoints': {
                                  '576': {
                                      'slidesPerView': 2
                                  },
                                  '768': {
                                      'slidesPerView': 3
                                  },
                                  '992': {
                                      'slidesPerView': 1
                                  }
                              }
                          }"
                      >
                        <div className="swiper-wrapper row cols-lg-1 cols-md-3">
                          <div className="swiper-slide product-widget-wrap">
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-1.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Kitchen Cooker
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$150.60</ins>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-2.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Professional Pixel Camera
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$215.68</ins>
                                  <del className="old-price">$230.45</del>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-3.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Sport Women’s Wear
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$220.20</ins>
                                  <del className="old-price">$300.62</del>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide product-widget-wrap">
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-4.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Latest Speaker
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$250.68</ins>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-5.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Mens Black Wrist Watch
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$135.60</ins>
                                  <del className="old-price">$155.70</del>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-6.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Wash Machine
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$215.68</ins>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide product-widget-wrap">
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-7.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Security Guard
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$320.00</ins>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget bb-no">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-8.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    Apple Super Notecom
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "100%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$243.30</ins>
                                  <del className="old-price">$253.50</del>
                                </div>
                              </div>
                            </div>
                            <div className="product product-widget">
                              <figure className="product-media">
                                <a href="product-default.html">
                                  <img
                                    src="assets/images/demos/demo1/products/2-9.jpg"
                                    alt="Product"
                                    width={105}
                                    height={118}
                                  />
                                </a>
                              </figure>
                              <div className="product-details">
                                <h4 className="product-name">
                                  <a href="product-default.html">
                                    HD Television
                                  </a>
                                </h4>
                                <div className="ratings-container">
                                  <div className="ratings-full">
                                    <span
                                      className="ratings"
                                      style={{ width: "60%" }}
                                    />
                                    <span className="tooltiptext tooltip-top" />
                                  </div>
                                </div>
                                <div className="product-price">
                                  <ins className="new-price">$450.68</ins>
                                  <del className="old-price">$500.00</del>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="swiper-button-next" />
                        <button className="swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {"/* End of Deals Wrapper */*/"}
          </div>
          <section className="category-section top-category bg-grey pt-10 pb-10 appear-animate">
            <div className="container pb-2">
              <h2 className="title justify-content-center pt-1 ls-normal mb-5">
                Top Categories Of The Month
              </h2>
              <div className="swiper">
                <div
                  className="swiper-container swiper-theme pg-show"
                  data-swiper-options="{
                  'spaceBetween': 20,
                  'slidesPerView': 2,
                  'breakpoints': {
                      '576': {
                          'slidesPerView': 3
                      },
                      '768': {
                          'slidesPerView': 5
                      },
                      '992': {
                          'slidesPerView': 6
                      }
                  }
              }"
                >
                  <div className="swiper-wrapper row cols-lg-6 cols-md-5 cols-sm-3 cols-2">
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-1.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Fashion</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-2.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Furniture</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-3.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Shoes</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-4.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Sports</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-5.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Games</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide category category-classNameic category-absolute overlay-zoom br-xs">
                      <a
                        href="shop-banner-sidebar.html"
                        className="category-media"
                      >
                        <img
                          src="assets/images/demos/demo1/categories/2-6.jpg"
                          alt="Category"
                          width={130}
                          height={130}
                        />
                      </a>
                      <div className="category-content">
                        <h4 className="category-name">Computers</h4>
                        <a
                          href="shop-banner-sidebar.html"
                          className="btn btn-primary btn-link btn-underline"
                        >
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">
              Popular Departments
            </h2>
            <div className="tab tab-nav-boxed tab-nav-outline appear-animate">
              <ul
                className="nav nav-tabs justify-content-center"
                role="tablist"
              >
                <li className="nav-item mr-2 mb-2">
                  <a
                    className="nav-link active br-sm font-size-md ls-normal"
                    href="#tab1-1"
                  >
                    New arrivals
                  </a>
                </li>
                <li className="nav-item mr-2 mb-2">
                  <a
                    className="nav-link br-sm font-size-md ls-normal"
                    href="#tab1-2"
                  >
                    Best seller
                  </a>
                </li>
                <li className="nav-item mr-2 mb-2">
                  <a
                    className="nav-link br-sm font-size-md ls-normal"
                    href="#tab1-3"
                  >
                    most popular
                  </a>
                </li>
                <li className="nav-item mr-0 mb-2">
                  <a
                    className="nav-link br-sm font-size-md ls-normal"
                    href="#tab1-4"
                  >
                    Featured
                  </a>
                </li>
              </ul>
            </div>
            {"/* End of Tab */*/"}
            <div className="tab-content product-wrapper appear-animate">
              <div className="tab-pane active pt-4" id="tab1-1">
                <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">classNameic Hat</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (1 Reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$53.00</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Women’s White Handbag
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.62</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-3.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            7% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi Funtional Apple iPhone
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">136.26</ins>
                          <del className="old-price">$145.90</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-4-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-4-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Fashion Blue Towel</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (8 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.55 - $29.99</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            4% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Apple Super Notecom</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$243.30</ins>
                          <del className="old-price">$253.50</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-6-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-6-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s Comforter</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$32.00 - $33.26</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-7.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi-colorful Music
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$260.59 - $297.83</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-8-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-8-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Comfortable Backpack
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (6 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$45.90</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-9.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Data Transformer Tool
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$64.47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-10.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s hairdye</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$173.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {"/* End of Tab Pane */*/"}
              <div className="tab-pane pt-4" id="tab1-2">
                <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-4-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-4-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Fashion Blue Towel</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (8 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.55 - $29.99</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-3.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            7% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi Funtional Apple iPhone
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">136.26</ins>
                          <del className="old-price">$145.90</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-8-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-8-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Comfortable Backpack
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (6 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$45.90</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-9.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Data Transformer Tool
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$64.47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            4% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Apple Super Notecom</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$243.30</ins>
                          <del className="old-price">$253.50</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-6-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-6-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s Comforter</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$32.00 - $33.26</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-7.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi-colorful Music
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$260.59 - $297.83</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">classNameic Hat</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (1 Reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$53.00</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Women’s White Handbag
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.62</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-10.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s hairdye</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$173.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {"/* End of Tab Pane */*/"}
              <div className="tab-pane pt-4" id="tab1-3">
                <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-9.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Data Transformer Tool
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$64.47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">classNameic Hat</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (1 Reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$53.00</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-3.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            7% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi Funtional Apple iPhone
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">136.26</ins>
                          <del className="old-price">$145.90</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Women’s White Handbag
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.62</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-10.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s hairdye</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$173.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-8-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-8-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Comfortable Backpack
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (6 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$45.90</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            4% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Apple Super Notecom</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$243.30</ins>
                          <del className="old-price">$253.50</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-7.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi-colorful Music
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$260.59 - $297.83</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-6-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-6-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s Comforter</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$32.00 - $33.26</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-4-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-4-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Fashion Blue Towel</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (8 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.55 - $29.99</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {"/* End of Tab Pane */*/"}
              <div className="tab-pane pt-4" id="tab1-4">
                <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-4-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-4-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Fashion Blue Towel</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (8 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.55 - $29.99</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-10.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s hairdye</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$173.84</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-9.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Data Transformer Tool
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <span className="price">$64.47</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-8-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-8-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Comfortable Backpack
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (6 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$45.90</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Women’s White Handbag
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "80%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$26.62</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-5.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            4% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Apple Super Notecom</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (4 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$243.30</ins>
                          <del className="old-price">$253.50</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-3.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                        <div className="product-label-group">
                          <label className="product-label label-discount">
                            7% Off
                          </label>
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi Funtional Apple iPhone
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (5 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">136.26</ins>
                          <del className="old-price">$145.90</del>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-7.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">
                            Multi-colorful Music
                          </a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (3 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$260.59 - $297.83</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-6-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-6-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">Women’s Comforter</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "100%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (10 reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$32.00 - $33.26</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-wrap">
                    <div className="product text-center">
                      <figure className="product-media">
                        <a href="product-default.html">
                          <img
                            src="assets/images/demos/demo1/products/3-1-1.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                          <img
                            src="assets/images/demos/demo1/products/3-1-2.jpg"
                            alt="Product"
                            width={300}
                            height={338}
                          />
                        </a>
                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-cart w-icon-cart"
                            title="Add to cart"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist w-icon-heart"
                            title="Add to wishlist"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-quickview w-icon-search"
                            title="Quickview"
                          />
                          <a
                            href="#"
                            className="btn-product-icon btn-compare w-icon-compare"
                            title="Add to Compare"
                          />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name">
                          <a href="product-default.html">classNameic Hat</a>
                        </h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span
                              className="ratings"
                              style={{ width: "60%" }}
                            />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <a
                            href="product-default.html"
                            className="rating-reviews"
                          >
                            (1 Reviews)
                          </a>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">$53.00</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {"/* End of Tab Pane */*/"}
            </div>
            {"/* End of Tab Content */*/"}
            <div className="row category-cosmetic-lifestyle appear-animate mb-5">
              <div className="col-md-6 mb-4">
                <div className="banner banner-fixed category-banner-1 br-xs">
                  <figure>
                    <img
                      src="assets/images/demos/demo1/categories/3-1.jpg"
                      alt="Category Banner"
                      width={610}
                      height={200}
                      style={{ backgroundColor: "#3B4B48" }}
                    />
                  </figure>
                  <div className="banner-content y-50 pt-1">
                    <h5 className="banner-subtitle font-weight-bold text-uppercase">
                      Natural Process
                    </h5>
                    <h3 className="banner-title font-weight-bolder text-capitalize text-white">
                      Cosmetic Makeup
                      <br />
                      Professional
                    </h3>
                    <a
                      href="shop-banner-sidebar.html"
                      className="btn btn-white btn-link btn-underline btn-icon-right"
                    >
                      Shop Now
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="banner banner-fixed category-banner-2 br-xs">
                  <figure>
                    <img
                      src="assets/images/demos/demo1/categories/3-2.jpg"
                      alt="Category Banner"
                      width={610}
                      height={200}
                      style={{ backgroundColor: "#E5E5E5" }}
                    />
                  </figure>
                  <div className="banner-content y-50 pt-1">
                    <h5 className="banner-subtitle font-weight-bold text-uppercase">
                      Trending Now
                    </h5>
                    <h3 className="banner-title font-weight-bolder text-capitalize">
                      Womens Lifestyle
                      <br />
                      Collection
                    </h3>
                    <a
                      href="shop-banner-sidebar.html"
                      className="btn btn-dark btn-link btn-underline btn-icon-right"
                    >
                      Shop Now
                      <i className="w-icon-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {"/* End of Category Cosmetic Lifestyle */*/"}
            <div className="product-wrapper-1 appear-animate mb-5">
              <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">Clothing &amp; Apparel</h2>
                <a
                  href="shop-boxed-banner.html"
                  className="font-size-normal font-weight-bold ls-25 mb-0"
                >
                  More Products
                  <i className="w-icon-long-arrow-right" />
                </a>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-4 mb-4">
                  <div
                    className="banner h-100 br-sm"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo1/banners/2.jpg)",
                      backgroundColor: "#ebeced",
                    }}
                  >
                    <div className="banner-content content-top">
                      <h5 className="banner-subtitle font-weight-normal mb-2">
                        Weekend Sale
                      </h5>
                      <hr className="banner-divider bg-dark mb-2" />
                      <h3 className="banner-title font-weight-bolder ls-25 text-uppercase">
                        New Arrivals
                        <br />
                        <span className="font-weight-normal text-capitalize">
                          Collection
                        </span>
                      </h3>
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-dark btn-outline btn-rounded btn-sm"
                      >
                        shop Now
                      </a>
                    </div>
                  </div>
                </div>
                {"/* End of Banner */*/"}
                <div className="col-lg-9 col-sm-8">
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '992': {
                              'slidesPerView': 3
                          },
                          '1200': {
                              'slidesPerView': 4
                          }
                      }
                  }"
                  >
                    <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Men’s Clothing</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$23.99</ins>
                              <del className="old-price">$25.68</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-5-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/4-5-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Best Travel Bag</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$25.68</ins>
                              <del className="old-price">$28.99</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-2-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/4-2-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Women’s Fashion Handbag
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$25.68</ins>
                              <del className="old-price">$25.89</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-6.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Gray Leather Shoes
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$26.88</ins>
                              <del className="old-price">$27.89</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-3.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Black Winter Skating
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$40.86</ins>
                              <del className="old-price">$45.89</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-7.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Mens Black Wrist Watch
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$135.60</ins>
                              <del className="old-price">$155.70</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-4-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/4-4-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Sport Wear</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$220.20</ins>
                              <del className="old-price">$300.62</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="#">
                              <img
                                src="assets/images/demos/demo1/products/4-8.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Women’s Hiking Hat
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <span className="price">$53.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                </div>
              </div>
            </div>
            {"/* End of Product Wrapper 1 */*/"}
            <div className="product-wrapper-1 appear-animate mb-8">
              <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">Consumer Electric</h2>
                <a
                  href="shop-boxed-banner.html"
                  className="font-size-normal font-weight-bold ls-25 mb-0"
                >
                  More Products
                  <i className="w-icon-long-arrow-right" />
                </a>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-4 mb-4">
                  <div
                    className="banner h-100 br-sm"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo1/banners/3.jpg)",
                      backgroundColor: "#252525",
                    }}
                  >
                    <div className="banner-content content-top">
                      <h5 className="banner-subtitle text-white font-weight-normal mb-2">
                        New Collection
                      </h5>
                      <hr className="banner-divider bg-white mb-2" />
                      <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                        Top Camera <br />
                        <span className="font-weight-normal text-capitalize">
                          Mirrorless
                        </span>
                      </h3>
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-white btn-outline btn-rounded btn-sm"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
                {"/* End of Banner */*/"}
                <div className="col-lg-9 col-sm-8">
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '992': {
                              'slidesPerView': 3
                          },
                          '1200': {
                              'slidesPerView': 4
                          }
                      }
                  }"
                  >
                    <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-1-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/5-1-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                6% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Professional Pixel Camera
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (5 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$215.68</ins>
                              <del className="old-price">$230.45</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-5.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Latest Speaker</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$250.68</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-2-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/5-2-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Wash Machine</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (9 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$215.68</ins>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-6.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Security Guard</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$320.00</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-3.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                10% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">HD Television</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$450.68</ins>
                              <del className="old-price">$500.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-7.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                10% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">USB Receipt</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (5 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$26.89</ins>
                              <del className="old-price">$29.79</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-4.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Data Transformer Tool
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (6 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$64.47</ins>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/5-8.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                7% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Multi Functional Apple iPhone
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (9 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$136.26</ins>
                              <del className="old-price">$145.90</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                  {"/* End of Produts */*/"}
                </div>
              </div>
            </div>
            {"/* End of Product Wrapper 1 */*/"}
            <div
              className="banner banner-fashion appear-animate br-sm mb-9"
              style={{
                backgroundImage: "url(assets/images/demos/demo1/banners/4.jpg)",
                backgroundColor: "#383839",
              }}
            >
              <div className="banner-content align-items-center">
                <div className="content-left d-flex align-items-center mb-3">
                  <div className="banner-price-info font-weight-bolder text-secondary text-uppercase lh-1 ls-25">
                    25
                    <sup className="font-weight-bold">%</sup>
                    <sub className="font-weight-bold ls-25">Off</sub>
                  </div>
                  <hr className="banner-divider bg-white mt-0 mb-0 mr-8" />
                </div>
                <div className="content-right d-flex align-items-center flex-1 flex-wrap">
                  <div className="banner-info mb-0 mr-auto pr-4 mb-3">
                    <h3 className="banner-title text-white font-weight-bolder text-uppercase ls-25">
                      For Todays Fashion
                    </h3>
                    <p className="text-white mb-0">
                      Use code
                      <span className="text-dark bg-white font-weight-bold ls-50 pl-1 pr-1 d-inline-block">
                        Black
                        <strong>12345</strong>
                      </span>
                      to get best offer.
                    </p>
                  </div>
                  <a
                    href="shop-banner-sidebar.html"
                    className="btn btn-white btn-outline btn-rounded btn-icon-right mb-3"
                  >
                    Shop Now
                    <i className="w-icon-long-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {"/* End of Banner Fashion */*/"}
            <div className="product-wrapper-1 appear-animate mb-7">
              <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">
                  Home Garden &amp; Kitchen
                </h2>
                <a
                  href="shop-boxed-banner.html"
                  className="font-size-normal font-weight-bold ls-25 mb-0"
                >
                  More Products
                  <i className="w-icon-long-arrow-right" />
                </a>
              </div>
              <div className="row">
                <div className="col-lg-3 col-sm-4 mb-4">
                  <div
                    className="banner h-100 br-sm"
                    style={{
                      backgroundImage:
                        "url(assets/images/demos/demo1/banners/5.jpg)",
                      backgroundColor: "#EAEFF3",
                    }}
                  >
                    <div className="banner-content content-top">
                      <h5 className="banner-subtitle font-weight-normal mb-2">
                        Deals And Promotions
                      </h5>
                      <hr className="banner-divider bg-dark mb-2" />
                      <h3 className="banner-title font-weight-bolder text-uppercase ls-25">
                        Trending <br />
                        <span className="font-weight-normal text-capitalize">
                          House Utensil
                        </span>
                      </h3>
                      <a
                        href="shop-banner-sidebar.html"
                        className="btn btn-dark btn-outline btn-rounded btn-sm"
                      >
                        shop now
                      </a>
                    </div>
                  </div>
                </div>
                {"/* End of Banner */*/"}
                <div className="col-lg-9 col-sm-8">
                  <div
                    className="swiper-container swiper-theme"
                    data-swiper-options="{
                      'spaceBetween': 20,
                      'slidesPerView': 2,
                      'breakpoints': {
                          '992': {
                              'slidesPerView': 3
                          },
                          '1200': {
                              'slidesPerView': 4
                          }
                      }
                  }"
                  >
                    <div className="swiper-wrapper row cols-xl-4 cols-lg-3 cols-2">
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Home Sofa</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (5 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$75.99</ins>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-5.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Electric Rice-Cooker
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$215.00</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-2-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/6-2-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                21% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Kitchen Table</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (9 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$75.50</ins>
                              <del className="old-price">$95.68</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-6.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Kitchen Cooker</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$150.60</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-3-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/6-3-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Table Lamp</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "60%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (3 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$45.60</ins>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-7.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                12% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Electric Frying Pan
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (5 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$137.35</ins>
                              <del className="old-price">$155.65</del>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide product-col">
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-4.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                            <div className="product-label-group">
                              <label className="product-label label-discount">
                                18% Off
                              </label>
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">Latest Chair</a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (6 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$70.00</ins>
                              <del className="old-price">$85.00</del>
                            </div>
                          </div>
                        </div>
                        <div className="product-wrap product text-center">
                          <figure className="product-media">
                            <a href="product-default.html">
                              <img
                                src="assets/images/demos/demo1/products/6-8-1.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                              <img
                                src="assets/images/demos/demo1/products/6-8-2.jpg"
                                alt="Product"
                                width={216}
                                height={243}
                              />
                            </a>
                            <div className="product-action-vertical">
                              <a
                                href="#"
                                className="btn-product-icon btn-cart w-icon-cart"
                                title="Add to cart"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-wishlist w-icon-heart"
                                title="Add to wishlist"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-quickview w-icon-search"
                                title="Quickview"
                              />
                              <a
                                href="#"
                                className="btn-product-icon btn-compare w-icon-compare"
                                title="Add to Compare"
                              />
                            </div>
                          </figure>
                          <div className="product-details">
                            <h4 className="product-name">
                              <a href="product-default.html">
                                Automatic Crusher
                              </a>
                            </h4>
                            <div className="ratings-container">
                              <div className="ratings-full">
                                <span
                                  className="ratings"
                                  style={{ width: "100%" }}
                                />
                                <span className="tooltiptext tooltip-top" />
                              </div>
                              <a
                                href="product-default.html"
                                className="rating-reviews"
                              >
                                (9 reviews)
                              </a>
                            </div>
                            <div className="product-price">
                              <ins className="new-price">$220.25</ins>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination" />
                  </div>
                  {"/* End of Produts */*/"}
                </div>
              </div>
            </div>
            {"/* End of Product Wrapper 1 */*/"}
            <h2 className="title title-underline mb-4 ls-normal appear-animate">
              Our Clients
            </h2>
            <div
              className="swiper-container swiper-theme brands-wrapper mb-9 appear-animate"
              data-swiper-options="{
          'spaceBetween': 0,
          'slidesPerView': 2,
          'breakpoints': {
              '576': {
                  'slidesPerView': 3
              },
              '768': {
                  'slidesPerView': 4
              },
              '992': {
                  'slidesPerView': 5
              },
              '1200': {
                  'slidesPerView': 6
              }
          }
      }"
            >
              <div className="swiper-wrapper row gutter-no cols-xl-6 cols-lg-5 cols-md-4 cols-sm-3 cols-2">
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/1.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/2.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/3.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/4.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/5.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/6.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/7.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/8.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/9.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/10.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
                <div className="swiper-slide brand-col">
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/11.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                  <figure className="brand-wrapper">
                    <img
                      src="assets/images/demos/demo1/brands/12.png"
                      alt="Brand"
                      width={410}
                      height={186}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {"/* End of Brands Wrapper */*/"}
            <div className="post-wrapper appear-animate mb-4">
              <div className="title-link-wrapper pb-1 mb-4">
                <h2 className="title ls-normal mb-0">From Our Blog</h2>
                <a
                  href="blog-listing.html"
                  className="font-weight-bold font-size-normal"
                >
                  View All Articles
                </a>
              </div>
              <div className="swiper">
                <div
                  className="swiper-container swiper-theme"
                  data-swiper-options="{
                  'slidesPerView': 1,
                  'spaceBetween': 20,
                  'breakpoints': {
                      '576': {
                          'slidesPerView': 2
                      },
                      '768': {
                          'slidesPerView': 3
                      },
                      '992': {
                          'slidesPerView': 4
                      }
                  }
              }"
                >
                  <div className="swiper-wrapper row cols-lg-4 cols-md-3 cols-sm-2 cols-1">
                    <div className="swiper-slide post text-center overlay-zoom">
                      <figure className="post-media br-sm">
                        <a href="post-single.html">
                          <img
                            src="assets/images/demos/demo1/blogs/1.jpg"
                            alt="Post"
                            width={280}
                            height={180}
                            style={{ backgroundColor: "#4b6e91" }}
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <div className="post-meta">
                          by
                          <a href="#" className="post-author">
                            John Doe
                          </a>
                          <a href="#" className="post-date mr-0">
                            03.05.2021
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            Aliquam tincidunt mauris eurisus
                          </a>
                        </h4>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-dark btn-underline"
                        >
                          Read More
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide post text-center overlay-zoom">
                      <figure className="post-media br-sm">
                        <a href="post-single.html">
                          <img
                            src="assets/images/demos/demo1/blogs/2.jpg"
                            alt="Post"
                            width={280}
                            height={180}
                            style={{ backgroundColor: "#cec9cf" }}
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <div className="post-meta">
                          by
                          <a href="#" className="post-author">
                            John Doe
                          </a>
                          -
                          <a href="#" className="post-date mr-0">
                            03.05.2021
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            Cras ornare tristique elit
                          </a>
                        </h4>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-dark btn-underline"
                        >
                          Read More
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide post text-center overlay-zoom">
                      <figure className="post-media br-sm">
                        <a href="post-single.html">
                          <img
                            src="assets/images/demos/demo1/blogs/3.jpg"
                            alt="Post"
                            width={280}
                            height={180}
                            style={{ backgroundColor: "#c9c7bb" }}
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <div className="post-meta">
                          by
                          <a href="#" className="post-author">
                            John Doe
                          </a>
                          <a href="#" className="post-date mr-0">
                            03.05.2021
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            Vivamus vestibulum ntulla nec ante
                          </a>
                        </h4>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-dark btn-underline"
                        >
                          Read More
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide post text-center overlay-zoom">
                      <figure className="post-media br-sm">
                        <a href="post-single.html">
                          <img
                            src="assets/images/demos/demo1/blogs/4.jpg"
                            alt="Post"
                            width={280}
                            height={180}
                            style={{ backgroundColor: "#d8dce0" }}
                          />
                        </a>
                      </figure>
                      <div className="post-details">
                        <div className="post-meta">
                          by
                          <a href="#" className="post-author">
                            John Doe
                          </a>
                          <a href="#" className="post-date mr-0">
                            03.05.2021
                          </a>
                        </div>
                        <h4 className="post-title">
                          <a href="post-single.html">
                            Fusce lacinia arcuet nulla
                          </a>
                        </h4>
                        <a
                          href="post-single.html"
                          className="btn btn-link btn-dark btn-underline"
                        >
                          Read More
                          <i className="w-icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
            {"/* Post Wrapper */*/"}
            <h2 className="title title-underline mb-4 ls-normal appear-animate">
              Your Recent Views
            </h2>
            <div
              className="swiper-container swiper-theme shadow-swiper appear-animate pb-4 mb-8"
              data-swiper-options="{
          'spaceBetween': 20,
          'slidesPerView': 2,
          'breakpoints': {
              '576': {
                  'slidesPerView': 3
              },
              '768': {
                  'slidesPerView': 5
              },
              '992': {
                  'slidesPerView': 6
              },
              '1200': {
                  'slidesPerView': 8
              }
          }
      }"
            >
              <div className="swiper-wrapper row cols-xl-8 cols-lg-6 cols-md-4 cols-2">
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-1.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Womens Fashion Handbag</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-2.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Electric Frying Pan</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-3.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Black Winter Skating</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-4.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">HD Television</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-5.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Home Sofa</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-6.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">USB Receipt</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-7.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Electric Rice-Cooker</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
                <div className="swiper-slide product-wrap mb-0">
                  <div className="product text-center product-absolute">
                    <figure className="product-media">
                      <a href="https://www.portotheme.com/html/wolmart/product-defaproduct-default.html">
                        <img
                          src="assets/images/demos/demo1/products/7-8.jpg"
                          alt="Category image"
                          width={130}
                          height={146}
                          style={{ backgroundColor: "#fff" }}
                        />
                      </a>
                    </figure>
                    <h4 className="product-name">
                      <a href="product-default.html">Table Lamp</a>
                    </h4>
                  </div>
                </div>
                {"/* End of Product Wrap */*/"}
              </div>
              <div className="swiper-pagination" />
            </div>
            {"/* End of Reviewed Producs */*/"}
          </div>
        </main>

        <footer
          className="footer appear-animate"
          data-animation-options="{
  'name': 'fadeIn'
    }"
        >
          <div className="footer-newsletter bg-primary">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-5 col-lg-6">
                  <div className="icon-box icon-box-side text-white">
                    <div className="icon-box-icon d-inline-flex">
                      <i className="w-icon-envelop3" />
                    </div>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-white text-uppercase font-weight-bold">
                        Subscribe To Our Newsletter
                      </h4>
                      <p className="text-white">
                        Get all the latest information on Events, Sales and
                        Offers.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-9 mt-4 mt-lg-0 ">
                  <form
                    action="#"
                    method="get"
                    className="input-wrapper input-wrapper-inline input-wrapper-rounded"
                  >
                    <input
                      type="email"
                      className="form-control mr-2 bg-white"
                      name="email"
                      id="email"
                      placeholder="Your E-mail Address"
                    />
                    <button className="btn btn-dark btn-rounded" type="submit">
                      Subscribe
                      <i className="w-icon-long-arrow-right" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-4 col-sm-6">
                  <div className="widget widget-about">
                    <a href="demo1.html" className="logo-footer">
                      <img
                        src="assets/images/logo_footer.png"
                        alt="logo-footer"
                        width={144}
                        height={45}
                      />
                    </a>
                    <div className="widget-body">
                      <p className="widget-about-title">
                        Got Question? Call us 24/7
                      </p>
                      <a href="tel:18005707777" className="widget-about-call">
                        1-800-570-7777
                      </a>
                      <p className="widget-about-desc">
                        Register now to get updates on pronot get up icons &amp;
                        coupons ster now toon.
                      </p>
                      <div className="social-icons social-icons-colored">
                        <a
                          href="#"
                          className="social-icon social-facebook w-icon-facebook"
                        />
                        <a
                          href="#"
                          className="social-icon social-twitter w-icon-twitter"
                        />
                        <a
                          href="#"
                          className="social-icon social-instagram w-icon-instagram"
                        />
                        <a
                          href="#"
                          className="social-icon social-youtube w-icon-youtube"
                        />
                        <a
                          href="#"
                          className="social-icon social-pinterest w-icon-pinterest"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h3 className="widget-title">Company</h3>
                    <ul className="widget-body">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Team Member</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="#">Affilate</a>
                      </li>
                      <li>
                        <a href="#">Order History</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">My Account</h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">Track My Order</a>
                      </li>
                      <li>
                        <a href="cart.html">View Cart</a>
                      </li>
                      <li>
                        <a href="login.html">Sign In</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="wishlist.html">My Wishlist</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="widget">
                    <h4 className="widget-title">Customer Service</h4>
                    <ul className="widget-body">
                      <li>
                        <a href="#">Payment Methods</a>
                      </li>
                      <li>
                        <a href="#">Money-back guarantee!</a>
                      </li>
                      <li>
                        <a href="#">Product Returns</a>
                      </li>
                      <li>
                        <a href="#">Support Center</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Term and Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-middle">
              <div className="widget widget-category">
                <div className="category-box">
                  <h6 className="category-name">Consumer Electric:</h6>
                  <a href="#">TV Television</a>
                  <a href="#">Air Condition</a>
                  <a href="#">Refrigerator</a>
                  <a href="#">Washing Machine</a>
                  <a href="#">Audio Speaker</a>
                  <a href="#">Security Camera</a>
                  <a href="#">View All</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Clothing &amp; Apparel:</h6>
                  <a href="#">Mens T-shirt</a>
                  <a href="#">Dresses</a>
                  <a href="#">Mens Sneacker</a>
                  <a href="#">Leather Backpack</a>
                  <a href="#">Watches</a>
                  <a href="#">Jeans</a>
                  <a href="#">Sunglasses</a>
                  <a href="#">Boots</a>
                  <a href="#">Rayban</a>
                  <a href="#">Acccessories</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Home, Garden &amp; Kitchen:</h6>
                  <a href="#">Sofa</a>
                  <a href="#">Chair</a>
                  <a href="#">Bed Room</a>
                  <a href="#">Living Room</a>
                  <a href="#">Cookware</a>
                  <a href="#">Utensil</a>
                  <a href="#">Blender</a>
                  <a href="#">Garden Equipments</a>
                  <a href="#">Decor</a>
                  <a href="#">Library</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Health &amp; Beauty:</h6>
                  <a href="#">Skin Care</a>
                  <a href="#">Body Shower</a>
                  <a href="#">Makeup</a>
                  <a href="#">Hair Care</a>
                  <a href="#">Lipstick</a>
                  <a href="#">Perfume</a>
                  <a href="#">View all</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">Jewelry &amp; Watches:</h6>
                  <a href="#">Necklace</a>
                  <a href="#">Pendant</a>
                  <a href="#">Diamond Ring</a>
                  <a href="#">Silver Earing</a>
                  <a href="#">Leather Watcher</a>
                  <a href="#">Rolex</a>
                  <a href="#">Gucci</a>
                  <a href="#">Australian Opal</a>
                  <a href="#">Ammolite</a>
                  <a href="#">Sun Pyrite</a>
                </div>
                <div className="category-box">
                  <h6 className="category-name">
                    Computer &amp; Technologies:
                  </h6>
                  <a href="#">Laptop</a>
                  <a href="#">iMac</a>
                  <a href="#">Smartphone</a>
                  <a href="#">Tablet</a>
                  <a href="#">Apple</a>
                  <a href="#">Asus</a>
                  <a href="#">Drone</a>
                  <a href="#">Wireless Speaker</a>
                  <a href="#">Game Controller</a>
                  <a href="#">View all</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-left">
                <p className="copyright">
                  Copyright © 2021 Wolmart Store. All Rights Reserved.
                </p>
              </div>
              <div className="footer-right">
                <span className="payment-label mr-lg-8">
                  Were using safe payment for
                </span>
                <figure className="payment">
                  <img
                    src="assets/images/payment.png"
                    alt="payment"
                    width={159}
                    height={25}
                  />
                </figure>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="sticky-footer sticky-content fix-bottom">
        <a href="demo1.html" className="sticky-link active">
          <i className="w-icon-home" />
          <p>Home</p>
        </a>
        <a href="shop-banner-sidebar.html" className="sticky-link">
          <i className="w-icon-category" />
          <p>Shop</p>
        </a>
        <a href="my-account.html" className="sticky-link">
          <i className="w-icon-account" />
          <p>Account</p>
        </a>
        <div className="cart-dropdown dir-up">
          <a href="cart.html" className="sticky-link">
            <i className="w-icon-cart" />
            <p>Cart</p>
          </a>
          <div className="dropdown-box">
            <div className="products">
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Beige knitted elas
                      <br />
                      tic runner shoes
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$25.68</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-1.jpg"
                      alt="product"
                      height={84}
                      width={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
              <div className="product product-cart">
                <div className="product-detail">
                  <h3 className="product-name">
                    <a href="product-default.html">
                      Blue utility pina
                      <br />
                      fore denim dress
                    </a>
                  </h3>
                  <div className="price-box">
                    <span className="product-quantity">1</span>
                    <span className="product-price">$32.99</span>
                  </div>
                </div>
                <figure className="product-media">
                  <a href="product-default.html">
                    <img
                      src="assets/images/cart/product-2.jpg"
                      alt="product"
                      width={84}
                      height={94}
                    />
                  </a>
                </figure>
                <button className="btn btn-link btn-close" aria-label="button">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
            <div className="cart-total">
              <label>Subtotal:</label>
              <span className="price">$58.67</span>
            </div>
            <div className="cart-action">
              <a
                href="cart.html"
                className="btn btn-dark btn-outline btn-rounded"
              >
                View Cart
              </a>
              <a href="checkout.html" className="btn btn-primary  btn-rounded">
                Checkout
              </a>
            </div>
          </div>
        </div>
        <div className="header-search hs-toggle dir-up">
          <a href="#" className="search-toggle sticky-link">
            <i className="w-icon-search" />
            <p>Search</p>
          </a>
          <form action="#" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
        </div>
      </div>

      <a
        id="scroll-top"
        className="scroll-top"
        href="#top"
        title="Top"
        role="button"
      >
        <i className="w-icon-angle-up" />

        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 70 70"
        >
          <circle
            id="progress-indicator"
            fill="transparent"
            stroke="#000000"
            cx={35}
            cy={35}
            r={34}
            style={{ strokeDasharray: "16.4198, 400" }}
          />
        </svg>
      </a>

      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay" />
        <a href="#" className="mobile-menu-close">
          <i className="close-icon" />
        </a>
        <div className="mobile-menu-container scrollable">
          <form action="#" method="get" className="input-wrapper">
            <input
              type="text"
              className="form-control"
              name="search"
              placeholder="Search"
              required=""
            />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
          <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a href="#main-menu" className="nav-link active">
                  Main Menu
                </a>
              </li>
              <li className="nav-item">
                <a href="#categories" className="nav-link">
                  Categories
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-content">
            <div className="tab-pane active" id="main-menu">
              <ul className="mobile-menu">
                <li>
                  <a href="demo1.html">Home</a>
                </li>
                <li>
                  <a href="shop-banner-sidebar.html">Shop</a>
                  <ul>
                    <li>
                      <a href="#">Shop Pages</a>
                      <ul>
                        <li>
                          <a href="shop-banner-sidebar.html">
                            Banner With Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="shop-boxed-banner.html">Boxed Banner</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Full Width Banner
                          </a>
                        </li>
                        <li>
                          <a href="shop-horizontal-filter.html">
                            Horizontal Filter
                            <span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-off-canvas.html">
                            Off Canvas Sidebar
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="shop-infinite-scroll.html">
                            Infinite Ajax Scroll
                          </a>
                        </li>
                        <li>
                          <a href="shop-right-sidebar.html">Right Sidebar</a>
                        </li>
                        <li>
                          <a href="shop-both-sidebar.html">Both Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Shop Layouts</a>
                      <ul>
                        <li>
                          <a href="shop-grid-3cols.html">3 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-4cols.html">4 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-5cols.html">5 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-6cols.html">6 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-7cols.html">7 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-grid-8cols.html">8 Columns Mode</a>
                        </li>
                        <li>
                          <a href="shop-list.html">List Mode</a>
                        </li>
                        <li>
                          <a href="shop-list-sidebar.html">
                            List Mode With Sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Pages</a>
                      <ul>
                        <li>
                          <a href="product-variable.html">Variable Product</a>
                        </li>
                        <li>
                          <a href="product-featured.html">
                            Featured &amp; Sale
                          </a>
                        </li>
                        <li>
                          <a href="product-accordion.html">Data In Accordion</a>
                        </li>
                        <li>
                          <a href="product-section.html">Data In Sections</a>
                        </li>
                        <li>
                          <a href="product-swatch.html">Image Swatch</a>
                        </li>
                        <li>
                          <a href="product-extended.html">Extended Info</a>
                        </li>
                        <li>
                          <a href="product-without-sidebar.html">
                            Without Sidebar
                          </a>
                        </li>
                        <li>
                          <a href="product-video.html">
                            360<sup>o</sup> &amp; Video
                            <span className="tip tip-new">New</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Product Layouts</a>
                      <ul>
                        <li>
                          <a href="product-default.html">
                            Default<span className="tip tip-hot">Hot</span>
                          </a>
                        </li>
                        <li>
                          <a href="product-vertical.html">Vertical Thumbs</a>
                        </li>
                        <li>
                          <a href="product-grid.html">Grid Images</a>
                        </li>
                        <li>
                          <a href="product-masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="product-gallery.html">Gallery</a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">Sticky Info</a>
                        </li>
                        <li>
                          <a href="product-sticky-thumb.html">Sticky Thumbs</a>
                        </li>
                        <li>
                          <a href="product-sticky-both.html">Sticky Both</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="vendor-dokan-store.html">Vendor</a>
                  <ul>
                    <li>
                      <a href="#">Store Listing</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store-list.html">
                            Store listing 1
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-list.html">
                            Store listing 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-list.html">
                            Store listing 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-list.html">
                            Store listing 4
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Vendor Store</a>
                      <ul>
                        <li>
                          <a href="vendor-dokan-store.html">Vendor Store 1</a>
                        </li>
                        <li>
                          <a href="vendor-wcfm-store-product-grid.html">
                            Vendor Store 2
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wcmp-store-product-grid.html">
                            Vendor Store 3
                          </a>
                        </li>
                        <li>
                          <a href="vendor-wc-store-product-grid.html">
                            Vendor Store 4
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul>
                    <li>
                      <a href="blog.html">classNameic</a>
                    </li>
                    <li>
                      <a href="blog-listing.html">Listing</a>
                    </li>
                    <li>
                      <a href="https://www.portotheme.com/html/wolmart/blog-grid.html">
                        Grid
                      </a>
                      <ul>
                        <li>
                          <a href="blog-grid-2cols.html">Grid 2 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-3cols.html">Grid 3 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-4cols.html">Grid 4 columns</a>
                        </li>
                        <li>
                          <a href="blog-grid-sidebar.html">Grid sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                      <ul>
                        <li>
                          <a href="blog-masonry-2cols.html">
                            Masonry 2 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-3cols.html">
                            Masonry 3 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-4cols.html">
                            Masonry 4 columns
                          </a>
                        </li>
                        <li>
                          <a href="blog-masonry-sidebar.html">
                            Masonry sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Mask</a>
                      <ul>
                        <li>
                          <a href="blog-mask-grid.html">Blog mask grid</a>
                        </li>
                        <li>
                          <a href="blog-mask-masonry.html">Blog mask masonry</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="post-single.html">Single Post</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about-us.html">Pages</a>
                  <ul>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="become-a-vendor.html">Become A Vendor</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="error-404.html">Error 404</a>
                    </li>
                    <li>
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="my-account.html">My Account</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                  <ul>
                    <li>
                      <a href="element-products.html">Products</a>
                    </li>
                    <li>
                      <a href="element-titles.html">Titles</a>
                    </li>
                    <li>
                      <a href="element-typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="element-categories.html">Product Category</a>
                    </li>
                    <li>
                      <a href="element-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="element-accordions.html">Accordions</a>
                    </li>
                    <li>
                      <a href="element-alerts.html">Alert &amp; Notification</a>
                    </li>
                    <li>
                      <a href="element-tabs.html">Tabs</a>
                    </li>
                    <li>
                      <a href="element-testimonials.html">Testimonials</a>
                    </li>
                    <li>
                      <a href="element-blog-posts.html">Blog Posts</a>
                    </li>
                    <li>
                      <a href="element-instagrams.html">Instagrams</a>
                    </li>
                    <li>
                      <a href="element-cta.html">Call to Action</a>
                    </li>
                    <li>
                      <a href="element-vendors.html">Vendors</a>
                    </li>
                    <li>
                      <a href="element-icon-boxes.html">Icon Boxes</a>
                    </li>
                    <li>
                      <a href="element-icons.html">Icons</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-tshirt2" />
                    Fashion
                  </a>
                  <ul>
                    <li>
                      <a href="#">Women</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Men</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">New Arrivals</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Best Sellers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Trending</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clothing</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Shoes</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bags</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Accessories</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Jewlery &amp; Watches
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-home" />
                    Home &amp; Garden
                  </a>
                  <ul>
                    <li>
                      <a href="#">Bedroom</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Beds, Frames &amp; Bases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dressers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Nightstands</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kids Beds &amp; Headboards
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armoires</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Living Room</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Coffee Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Futons &amp; Sofa Beds
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cabinets &amp; Chests
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Office</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Office Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Desks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bookcases</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">File Cabinets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Breakroom Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Kitchen &amp; Dining</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Sets</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Kitchen Storage Cabinets
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bashers Racks</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Dining Chairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dining Room Tables
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bar Stools</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-electronics" />
                    Electronics
                  </a>
                  <ul>
                    <li>
                      <a href="#">Laptops &amp; Computers</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Desktop Computers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Monitors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Laptops</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Hard Drives &amp; Storage
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Computer Accessories
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">TV &amp; Video</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">TVs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Audio Speakers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Projectors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Media Streaming Devices
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Digital Cameras</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital SLR Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sports &amp; Action Cameras
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Camera Lenses</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Photo Printer</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Digital Memory Cards
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Cell Phones</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Carrier Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Unlocked Phones
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Phone &amp; Cellphone Cases
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Cellphone Chargers
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-furniture" />
                    Furniture
                  </a>
                  <ul>
                    <li>
                      <a href="#">Furniture</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Sofas &amp; Couches
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Armchairs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Bed Frames</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Beside Tables</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Dressing Tables
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">Light Bulbs</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lamps</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Celling Lights
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Wall Lights</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Bathroom Lighting
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Home Accessories</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Decorative Accessories
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Candals &amp; Holders
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Home Fragrance
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Mirrors</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Clocks</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Garden &amp; Outdoors</a>
                      <ul>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Garden Furniture
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">Lawn Mowers</a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Pressure Washers
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            All Garden Tools
                          </a>
                        </li>
                        <li>
                          <a href="shop-fullwidth-banner.html">
                            Outdoor Dining
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-heartbeat" />
                    Healthy &amp; Beauty
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gift" />
                    Gift Ideas
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-gamepad" />
                    Toy &amp; Games
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ice-cream" />
                    Cooking
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ios" />
                    Smart Phones
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-camera" />
                    Cameras &amp; Photo
                  </a>
                </li>
                <li>
                  <a href="shop-fullwidth-banner.html">
                    <i className="w-icon-ruby" />
                    Accessories
                  </a>
                </li>
                <li>
                  <a
                    href="shop-banner-sidebar.html"
                    className="font-weight-bold text-primary text-uppercase ls-25"
                  >
                    View All Categories
                    <i className="w-icon-angle-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="newsletter-popup mfp-hide">
        <div className="newsletter-content">
          <h4 className="text-uppercase font-weight-normal ls-25">
            Get Up to<span className="text-primary">25% Off</span>
          </h4>
          <h2 className="ls-25">Sign up to Wolmart</h2>
          <p className="text-light ls-10">
            Subscribe to the Wolmart market newsletter to receive updates on
            special offers.
          </p>
          <form
            action="#"
            method="get"
            className="input-wrapper input-wrapper-inline input-wrapper-round"
          >
            <input
              type="email"
              className="form-control email font-size-md"
              name="email"
              id="email2"
              placeholder="Your email address"
              required=""
            />
            <button className="btn btn-dark" type="submit">
              SUBMIT
            </button>
          </form>
          <div className="form-checkbox d-flex align-items-center">
            <input
              type="checkbox"
              className="custom-checkbox"
              id="hide-newsletter-popup"
              name="hide-newsletter-popup"
              required=""
            />
            <label
              htmlfor="hide-newsletter-popup"
              className="font-size-sm text-light"
            >
              Dont show this popup again.
            </label>
          </div>
        </div>
      </div>

      <div className="product product-single product-popup">
        <div className="row gutter-lg">
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="product-gallery product-gallery-sticky">
              <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                <div className="swiper-wrapper row cols-1 gutter-no">
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/1-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/1-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/2-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/2-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/3-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/3-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                  <div className="swiper-slide">
                    <figure className="product-image">
                      <img
                        src="assets/images/products/popup/4-440x494.jpg"
                        data-zoom-image="assets/images/products/popup/4-800x900.jpg"
                        alt="Water Boil Black Utensil"
                        width={800}
                        height={900}
                      />
                    </figure>
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
              <div
                className="product-thumbs-wrap swiper-container"
                data-swiper-options="{
              'navigation': {
                  'nextEl': '.swiper-button-next',
                  'prevEl': '.swiper-button-prev'
              }
          }"
              >
                <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/1-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/2-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/3-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                  <div className="product-thumb swiper-slide">
                    <img
                      src="assets/images/products/popup/4-103x116.jpg"
                      alt="Product Thumb"
                      width={103}
                      height={116}
                    />
                  </div>
                </div>
                <button className="swiper-button-next" />
                <button className="swiper-button-prev" />
              </div>
            </div>
          </div>
          <div className="col-md-6 overflow-hidden p-relative">
            <div className="product-details scrollable pl-0">
              <h2 className="product-title">Electronics Black Wrist Watch</h2>
              <div className="product-bm-wrapper">
                <figure className="brand">
                  <img
                    src="assets/images/products/brand/brand-1.jpg"
                    alt="Brand"
                    width={102}
                    height={48}
                  />
                </figure>
                <div className="product-meta">
                  <div className="product-categories">
                    Category:
                    <span className="product-category">
                      <a href="#">Electronics</a>
                    </span>
                  </div>
                  <div className="product-sku">
                    SKU: <span>MS46891340</span>
                  </div>
                </div>
              </div>
              <hr className="product-divider" />
              <div className="product-price">$40.00</div>
              <div className="ratings-container">
                <div className="ratings-full">
                  <span className="ratings" style={{ width: "80%" }} />
                  <span className="tooltiptext tooltip-top" />
                </div>
                <a href="#" className="rating-reviews">
                  (3 Reviews)
                </a>
              </div>
              <div className="product-short-desc">
                <ul className="list-type-check list-style-none">
                  <li>Ultrices eros in cursus turpis massa cursus mattis.</li>
                  <li>Volutpat ac tincidunt vitae semper quis lectus.</li>
                  <li>Aliquam id diam maecenas ultricies mi eget mauris.</li>
                </ul>
              </div>
              <hr className="product-divider" />
              <div className="product-form product-variation-form product-color-swatch">
                <label>Color:</label>
                <div className="d-flex align-items-center product-variations">
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ffcc01" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ca6d00" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#1c93cb" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#ccc" }}
                  />
                  <a
                    href="#"
                    className="color"
                    style={{ backgroundColor: "#333" }}
                  />
                </div>
              </div>
              <div className="product-form product-variation-form product-size-swatch">
                <label className="mb-1">Size:</label>
                <div className="flex-wrap d-flex align-items-center product-variations">
                  <a href="#" className="size">
                    Small
                  </a>
                  <a href="#" className="size">
                    Medium
                  </a>
                  <a href="#" className="size">
                    Large
                  </a>
                  <a href="#" className="size">
                    Extra Large
                  </a>
                </div>
                <a href="#" className="product-variation-clean">
                  Clean All
                </a>
              </div>
              <div className="product-variation-price">
                <span />
              </div>
              <div className="product-form">
                <div className="product-qty-form">
                  <div className="input-group">
                    <input
                      className="quantity form-control"
                      type="number"
                      min={1}
                      max={10000000}
                    />
                    <button className="quantity-plus w-icon-plus" />
                    <button className="quantity-minus w-icon-minus" />
                  </div>
                </div>
                <button className="btn btn-primary btn-cart">
                  <i className="w-icon-cart" />
                  <span>Add to Cart</span>
                </button>
              </div>
              <div className="social-links-wrapper">
                <div className="social-links">
                  <div className="social-icons social-no-color border-thin">
                    <a
                      href="#"
                      className="social-icon social-facebook w-icon-facebook"
                    />
                    <a
                      href="#"
                      className="social-icon social-twitter w-icon-twitter"
                    />
                    <a
                      href="#"
                      className="social-icon social-pinterest fab fa-pinterest-p"
                    />
                    <a
                      href="#"
                      className="social-icon social-whatsapp fab fa-whatsapp"
                    />
                    <a
                      href="#"
                      className="social-icon social-youtube fab fa-linkedin-in"
                    />
                  </div>
                </div>
                <span className="divider d-xs-show" />
                <div className="product-link-wrapper d-flex">
                  <a
                    href="#"
                    className="btn-product-icon btn-wishlist w-icon-heart"
                  >
                    <span />
                  </a>
                  <a
                    href="#"
                    className="btn-product-icon btn-compare btn-icon-left w-icon-compare"
                  >
                    <span />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
