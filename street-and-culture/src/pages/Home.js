import React, { useState, useEffect } from 'react';
import './Home.css';
import { Helmet } from 'react-helmet';

// home page background images
import homeBg1 from '../assets/images/home-bg1.jpg';
import homeBg2 from '../assets/images/home-bg2.jpg';
import homeBg3 from '../assets/images/home-bg3.jpg';
import recommendedImage from '../assets/images/recommended-image.jpg'

// import slick carousel
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import brand logos
import urbanLogo from '../assets/brands/97urban.webp';
import ftyLogo from '../assets/brands/fty.webp';
import nikeLogo from '../assets/brands/SAsdf-150x150.png';
import harritonLogo from '../assets/brands/dasd.png'
import spyderLogo from '../assets/brands/dasda.png'
import calvinkleinLogo from '../assets/brands/dgb.png'
import pumaLogo from '../assets/brands/DGF.png'
import gildanLogo from '../assets/brands/dsafsdf.png'
import hakleyLogo from '../assets/brands/ERTHRF.png'
import northfaceLogo from '../assets/brands/saDFGHD.png'
import flexfitLogo from '../assets/brands/sadfghn.png'
import adidasLogo from '../assets/brands/sadf.png'
import alstyleLogo from '../assets/brands/Untitled-1-150x150.png';
import ogioLogo from '../assets/brands/sdf.png';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [homeBg1, homeBg2, homeBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  const brands = [
    { name: 'Nike', logo: nikeLogo },
    { name: 'Adidas', logo: adidasLogo },
    { name: 'Puma', logo: pumaLogo },
    { name: 'Free The Youth', logo: ftyLogo },
    { name: 'Harriton', logo: harritonLogo },
    { name: 'The North Face', logo: northfaceLogo },
    { name: 'Spyder', logo: spyderLogo },
    { name: 'Calvin Klein', logo: calvinkleinLogo },
    { name: 'Gildan', logo: gildanLogo },
    { name: 'Hakley', logo: hakleyLogo },
    { name: 'Flexfit', logo: flexfitLogo },
    { name: 'AlStyle', logo: alstyleLogo },
    { name: '97 Urban', logo: urbanLogo },
    { name: 'Ogio', logo: ogioLogo },

  ];

  return (
    <div className="home">
      <Helmet>
        <title>Home - Revolver</title>
      </Helmet>
      {/* Banner Section */}
      <div className="banner-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Street culture banner ${index + 1}`}
            className={`banner-image ${currentImage === index ? 'active' : ''}`}
          />
        ))}
        <h1 className="banner-overlay">CULTURE, BEYOND THE STREET</h1>
        <p className="banner-description">A platform for street clothing brand owners to advertise and sell their products.</p>
      </div>
      {/* Banner Section End */}
      
      {/* Featured Brands Section */}
      <section className="featured-brands">
        <h2>FEATURED BRANDS</h2>
        <div className="brands-carousel">
          <Slider {...sliderSettings}>
            {brands.map((brand, index) => (
              <div key={index} className="brand-item">
                <img src={brand.logo} alt={brand.name} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Featured Brands Section End */}

      {/* Best Selling Products */}
      {/* Best Selling Products End */}

      {/* Recommended Fit Section */}
      <div className="recommended-main-container">
        <div className="fit-image">
          <img src={recommendedImage} alt="" />
        </div>
        <div className="image-text">
          <h1>Shine the street</h1>
          <h2>Discover Your Style</h2>
          <p>Looking for a functional yet trendy fit? The SWTS Archer Bag from streetwear is your go-to option. With its minimalist crescent design and spacious interior, it’s the perfect cross bag for carrying all your essentials in streetwear style.</p>
          <button>Shop Now</button>
        </div>
      </div>
      {/* Recommended Fit Section End */}

      {/* Reviews */}
      {/* Reviews End */}
    </div>
  );
};

export default Home;
