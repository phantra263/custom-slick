import arrowLeft from './left-arrow.png'
import arrowRight from './right-arrow.png'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';




function App() {
  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    slidesToScroll: 1,
    speed: 500,
    slidesToShow: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };
  const slider = React.useRef(null);

  return (
    <div className="App">

      <div className="slick-banner">

        <button className="btn left-btn" onClick={() => slider?.current?.slickPrev()}><img src={arrowLeft} /></button>
        <button className="btn right-btn" onClick={() => slider?.current?.slickNext()}><img src={arrowRight} /></button>

        <Slider ref={slider} {...settings}>
          <div>
            <img src="https://dummyimage.com/400x281/000/fff" />
          </div>
          <div>
            <img src="https://dummyimage.com/400x281/000/fff" />
          </div>
          <div>
            <img src="https://dummyimage.com/400x281/000/fff" />
          </div>
          <div>
            <img src="https://dummyimage.com/400x281/000/fff" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
