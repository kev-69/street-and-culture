import React, { useState, useEffect } from 'react';
import './Home.css';
import { Eye } from 'lucide-react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { bestSellingData } from '../helpers/data';

// home page background images
import homeBg1 from '../assets/images/home-bg1.jpg';
import homeBg2 from '../assets/images/home-bg2.jpg';
import homeBg3 from '../assets/images/home-bg3.jpg';
import recommendedImage from '../assets/images/recommended-image.jpg'

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

const featuredBrandsSliderSettings = {
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

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow next`} onClick={onClick} />;
};

// Custom Previous Arrow
const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} custom-arrow prev`} onClick={onClick} />;
};

const bestSellingSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4, 
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />, 
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 4 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 3 }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ]
};

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [homeBg1, homeBg2, homeBg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
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
          <Slider {...featuredBrandsSliderSettings}>
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
      <main className="main-content">
      <section className="best-selling">
      <div className="best-selling-container">
        <h2>Best Selling</h2>
        <Slider {...bestSellingSliderSettings}>
          {bestSellingData.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-images">
                <img src={product.images.one} alt={product.title} className="front" />
                <img src={product.images.two} alt={product.title} className="back" />
              </div>
              <div className="product-info">
                <div>
                  <span className="product-title">{product.title}</span> - <span className="product-brand">{product.brandName}</span>
                </div>
                <div className="product-action">
                  <a href="#" className="view-product">
                    View Product <Eye className="eye-icon" />
                  </a>
                  <span>{product.rating} ★</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
      {/* Best Selling Products End */}

      {/* Recommended Fit Section */}
      <section className="recommended-main-container">
        <div className="fit-image">
          <img src={recommendedImage} alt="" />
        </div>
        <div className="image-text">
          <h1>Shine the street</h1>
          <h2>Discover Your Style</h2>
          <p>Looking for a functional yet trendy fit? The SWTS Archer Bag from streetwear is your go-to option. With its minimalist crescent design and spacious interior, it’s the perfect cross bag for carrying all your essentials in streetwear style.</p>
          <button>Shop Now</button>
        </div>
      </section>
      {/* Recommended Fit Section End */}
      </main>
      {/* Reviews */}
      {/* Reviews End */}
    </div>
  );
};

export default Home;
