// import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";

// const Slide = ({ images, currentIndex }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, [images]);

//   // Assuming titles and descriptions are arrays of strings corresponding to each image
//   const titles = ["Title 1", "Title 2", "Title 3"];
//   const descriptions = ["Description 1", "Description 2", "Description 3"];

//   return (
//     <div
//       className="h-100 min-vh-100 d-flex align-items-center text-light"
//       style={{
//         backgroundImage: `linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(${images[currentImageIndex]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         transition: "background-image 0.5s ease-in-out",
//       }}
//     >
//       <div className="container d-flex flex-column align-items-center">
//         <h1 className="text-center fw-semibold">{titles[currentImageIndex]}</h1>
//         <p className="text-center">{descriptions[currentImageIndex]}</p>
//         <div className="d-flex flex-column flex-sm-row align-items-center">
//           <Link to="/courses">
//             <button
//               type="button"
//               className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
//             >
//               Our Courses
//             </button>
//           </Link>
//           <Link to="/contact">
//             <button
//               type="button"
//               className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
//             >
//               Contact Us
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// Slide.propTypes = {
//   images: PropTypes.arrayOf(PropTypes.string).isRequired,
//   currentIndex: PropTypes.number.isRequired,
// };

// export { Slide };

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

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

  const titles = ["Place 1", "Place 2", "Place 3"];
  const descriptions = ["Description 1", "Description 2", "Description 3"];

  const mapUrls = [
    "https://maps.google.com/?q=latitude,longitude1",
    "https://maps.google.com/?q=latitude,longitude2",
    "https://maps.google.com/?q=latitude,longitude3",
  ];

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
      <div className="container d-flex flex-column align-items-center">
        <h2>Welcome To</h2>
        <h2>UTM I-FIND</h2>
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
                    View Map
                  </button>
                </a>
              )
          )}
          <Link to="/courses">
            <button
              type="button"
              className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
            >
              Our Courses
            </button>
          </Link>
          <Link to="/contact">
            <button
              type="button"
              className="btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
            >
              Contact Us
            </button>
          </Link>
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
