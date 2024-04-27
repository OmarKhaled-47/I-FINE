import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ChooseSection from "../../components/ChooseSection/ChooseSection";
import StartCoursesImg from "../../utils/images/start-courses-img.jpg";
import FaqAccordion from "../../components/FaqAccordion/FaqAccordion";
import { Card } from "react-bootstrap";
import Blog1Img from "../../utils/images/blog1-img.jpg";
import Blog2Img from "../../utils/images/blog2-img.jpg";
import Blog3Img from "../../utils/images/blog3-img.jpg";
import { Slide } from "./BackGround";

const blogs = [
  {
    id: 1,
    img: [Blog1Img],
    title: "Event 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 2,
    img: [Blog2Img],
    title: "Event 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
  {
    id: 3,
    img: [Blog3Img],
    title: "Event 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.",
  },
];

function Home() {
  const [bgImages, setBgImages] = useState([]);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    setBgImages(["pic1.jpeg", "pic2.jpeg", "pic3.jpeg"]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) =>
        prevIndex === bgImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [bgImages]);

  return (
    <div className="home-page">
      <Slide images={bgImages} currentIndex={currentBgIndex} />

      <div className="py-5">
        <ChooseSection />
      </div>

      <div className="py-5 bg-light">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-around">
            <div className="col-lg-5">
              <h2 className="text-capitalize">2024 start courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, placeat.
              </p>
              <Link to="/courses">
                <button
                  type="button"
                  className="btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0"
                >
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-5 mt-5 mt-lg-0">
              <img src={StartCoursesImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <FaqAccordion />
      </div>

      <div className="blog-section text-light py-5">
        <div className="container d-flex flex-column align-items-center">
          <h2 className="text-center text-capitalize mb-5">
            Latest on the Activities
          </h2>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-6 col-lg-4">
                <Link to="/blog" className="text-decoration-none">
                  <Card className="h-100 shadow scale-hover-effect">
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className="p-md-5">
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type="button" className="btn btn-danger btn-lg mt-5">
              Check more Events
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
