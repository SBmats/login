<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SBmats.com</title>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        header {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em;
        }

        section {
            padding: 20px;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        /* Media Queries for Responsive Design */
        @media (max-width: 768px) {
            section {
                padding: 10px;
            }

            #navbar {
                flex-direction: column;
                align-items: center;
            }

            #navbar li {
                margin: 10px 0;
            }

            #hero h1 {
                font-size: 2em;
            }

            #feature .fe-box,
            .product .pro {
                width: 100%;
            }

            #banner h2 {
                font-size: 1.5em;
            }

            #sm-banner .banner-box,
            #banner3 .banner-box {
                width: 100%;
                text-align: center;
            }
        }
    </style>
      <!-- CSS
	============================================ -->
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="bootstrap.min.css">
    <!-- Font Awesome CSS -->
    <link rel="stylesheet" href="font.awesome.min.css">
    <!-- Linear Icons CSS -->
    <link rel="stylesheet" href="linearicons.min.css">
    <!-- Swiper CSS -->
    <link rel="stylesheet" href="swiper-bundle.min.css">
    <!-- Animation CSS -->
    <link rel="stylesheet" href="animate.min.css">
    <!-- Jquery ui CSS -->
    <link rel="stylesheet" href="jquery-ui.min.css">
    <!-- Nice Select CSS -->
    <link rel="stylesheet" href="nice-select.min.css">
    <!-- Magnific Popup -->
    <link rel="stylesheet" href="magnific-popup.css">

    <!-- Main Style CSS -->
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <section id="sign-in">
        <h2>Sign In</h2>
        <form id="signInForm">
            <!-- ... (username and password fields) ... -->
            <button type="button" onclick="signIn()">Sign In</button>
        </form>
    </section>

    <section id="wallet" style="display: none;">
        <h2>Wallet</h2>
        <p id="walletBalance">Balance: $0.00</p>
    </section>
      <!-- Your existing HTML structure here -->
    <section id="header">
         <!-- Your existing header content here -->
        <a href="#"><img src="1.png" class="logo" alt=""></a>
        <div>
            <ul id="navbar">
                <li><a class="active" href="index.html">Home</a></li>
                <li><a href="https://tradgo.in/">Recharge Now</a></li>
                <li><a href="Shop.html">Shop</a></li>
                <li><a href="Shop.html">Blog</a></li>
                <li><a href="https://sbmats.com/">About</a></li>
                <li><a href="https://sbmats.com/">Contact</a></li>
                <li><a href="Shop.html"><i class="far fa-shopping-bag"></i></a></li>
                <button><a href="login.html">login</a></button>
            </ul>
        </div>
    </section>
    <section id="hero">
        <!-- Your existing hero section content here -->
        <h4>Trade-in-offer</h4>
        <h2>super value deals</h2>
        <h1>on all products</h1>
        <p>save more with coupons & up to 70% off!</p>
        <button>Shop now</button>
    </section>

        <section id="feature" class="section-p1">
             <!-- Your existing feature section content here -->
            <div class="fe-box">
                <img src="e1.png" alt="">
                <h6>Free Shipping</h6>
            </div>
            <div class="fe-box">
                <img src="e2.png" alt="">
                <h6>Online Order</h6>
            </div>
            <div class="fe-box">
                <img src="e3.png" alt="">
                <h6>Save Money</h6>
            </div>
            <div class="fe-box">
                <img src="e4.png" alt="">
                <h6>Promotions</h6>
            </div>
            <div class="fe-box">
                <img src="e5.png" alt="">
                <h6>Happy Sell</h6>
            </div>
            <div class="fe-box">
                <img src="e6.jpg" alt="">
                <h6>F24/7 Support</h6>
            </div>
            
        </section>
        
        <section id="product1" class="section-p1">
            <h2>Featured products</h2>
            <p>summer Collection New Morden Design</p>
            <div class="pro-container">
                
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="sproduct.html"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                
            </div>
        </section>
        <section id="banner" class="section-m1">
            <h4>Repair Sercices</h4>
            <h2>Up to <span>70% Off</span> All Products</h2>
            <button class="normal">  Explore more  </button>

        </section>
        <section id="product1" class="section-p1">
            <h2>Featured products</h2>
            <p>summer Collection New Morden Design</p>
            <div class="pro-container">
                
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                <div class="pro">
                    <img src="background.png" alt="">
                    <div class="des">
                        <span>SBmats</span>
                        <h5>Bamboo blinds</h5>
                        <div class="star">
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>

                        </div>
                        <h4>Rs.2500.00</h4>
                    </div>
                    <a href="#"><i class="fal fa-shopping-cart cart"></i></a>

                </div>
                
            </div>
        </section>
        <section id="sm-banner" class="section-p1">
            <div class="banner-box">
                <h4>crezy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span>The best classic dress is on sale at cara</span>
                <button class="wite">Learn Morden</button>

            </div>
            <div class="banner-box">
                <h4>crezy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <span><h4>The best classic dress is on sale at cara</h4></span>
                <button class="wite">Learn Morden</button>

            </div>
            
        </section>
        
        <!-- More sections and content -->


        
        <script src="script.js"></script>

    <!-- Your existing script includes here -->
        <!-- jQuery JS -->
        <script src="jquery-3.6.0.min.js"></script>
        <!-- jQuery Migrate JS -->
        <script src="jquery-migrate-3.3.2.min.js"></script>
        <!-- Modernizer JS -->
        <script src="modernizr-3.7.1.min.js"></script>
        <!-- Bootstrap JS -->
        <script src="bootstrap.bundle.min.js"></script>
    
    
        <!-- Swiper Slider JS -->
        <script src="swiper-bundle.min.js"></script>
        <!-- nice select JS -->
        <script src="nice-select.min.js"></script>
        <!-- Ajaxchimpt js -->
        <script src="jquery.ajaxchimp.min.js"></script>
        <!-- Jquery Ui js -->
        <script src="jquery-ui.min.js"></script>
        <!-- Jquery Countdown js -->
        <script src="jquery.countdown.min.js"></script>
        <!-- jquery magnific popup js -->
        <script src="jquery.magnific-popup.min.js"></script>
    
        <!-- Main JS -->
        <script src="main.js"></script>

    </body>

</html>
