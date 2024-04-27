import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import "./BackGround.css";

const Slide = ({ images, currentIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const titles = [
    "UTM library Sultanah Zanariah",
    "Masjid Sultan Ismail",
    "UTM INTERNATIONAL",
  ];
  const descriptions = ["Description 1", "Description 2", "Description 3"];

  const mapUrls = [
    "https://maps.app.goo.gl/FkQRVPxzTAsxxJXm9",
    "https://maps.app.goo.gl/Y57zV3i9qkPNRdL78",
    "https://maps.app.goo.gl/rG2CRJoFp3TdXHY7A",
  ];

  const goToPreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="h-100 min-vh-100 d-flex align-items-center text-light"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="container d-flex flex-column align-items-center justify-between">
        <h2 className="text-center p-50">
          Welcome To <span className="text-danger">UTM I-FIND</span>
        </h2>
        <h1 className="text-center fw-semibold">{titles[currentImageIndex]}</h1>
        <p className="text-center">{descriptions[currentImageIndex]}</p>
        <div className="d-flex flex-column flex-sm-row align-items-center">
          {mapUrls.map(
            (url, index) =>
              currentImageIndex === index && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <button
                    type="button"
                    className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                  >
                    View in Map
                  </button>
                </a>
              )
          )}
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
            >
              Contact Us
            </button>
          </Link>
        </div>
        <div className="position-absolute bottom-0 start-0 m-5">
          <button
            type="button"
            className="btn btn-light mx-2 flex flex-colum"
            onClick={goToPreviousSlide}
          >
            <ArrowLeft size={28} color="#dc3545" />
          </button>
          <button
            type="button"
            className="btn btn-light mx-2"
            onClick={goToNextSlide}
          >
            <ArrowRight size={28} color="#dc3545" />
          </button>
        </div>
      </div>
    </div>
  );
};

Slide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export { Slide };
