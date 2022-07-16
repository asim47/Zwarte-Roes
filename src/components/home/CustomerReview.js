import React, { useRef } from "react";
import Slider from "react-slick";
import { Card } from "reactstrap";
import Stars from "../../assests/icons/Stars.png";
import rightarrow from "../../assests/icons/rightarrow.png";
import leftarrow from "../../assests/icons/leftarrow.png";
import { yellow } from "../../constants/index";
const CustomerReview = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    // autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: false,
    swipe: false,
    pauseOnHover: false,
  };
  const sliderRef = useRef(null);
  console.log(sliderRef);
  return (
    <>
      <div className="review-wrap">
        {" "}
        <div className="row d-flex justify-content-center ">
          <div className="col-lg-6  ">
            <h4 className="reviw-heading">WHAT OUR CUSTOMERS ARE SAYING...</h4>
            <div
              className="rightarrows"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <img src={rightarrow} alt="" />
            </div>
            <div
              onClick={() => sliderRef.current.slickNext()}
              className="leftarrow"
            >
              {" "}
              <img src={leftarrow} alt="" />
            </div>
          </div>
          <div className="col- ">
            <Slider  ref={sliderRef} {...settings} style={{ width: "560px", overflow:"hidden" }}>
              <div>
                <Card className="slider-card">
                  <div className="row name-row mb-2">
                    <div className="col- d-flex justify-content-center  ">
                      <div className="j-avatar">
                        <span>J</span>
                      </div>
                    </div>
                    <div className="col- reviewinfo ">
                      <h6 className="name-reviw">Jeroen Overwater</h6>
                      <div className="verified">
                        <span>GEVERIFIEERD</span>
                      </div>
                      <div className="date">
                        <span>3/2/2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center  my-4">
                    <img src={Stars} alt="" />
                  </div>
                  <div className=" d-flex justify-content-center  my-3 ">
                    <span className="coffe-name">Heerlijke koffie</span>
                  </div>
                  <div className=" d-flex justify-content-center  my-lg-3  reviw-dialog">
                    <p>
                      Goeie snelle levering met leuk persoonlijk kaartje. Kan ik
                      waarderen. Nog lekker ook, ben er nog niet uit wat de favo
                      is ;)
                    </p>
                  </div>
                  <div className="over d-flex justify-content-center  my-3">
                    <h6>
                      over <span>Proefpakket verse koffiebonen</span>
                    </h6>
                  </div>
                </Card>
              </div>
              <div>
                <Card className="slider-card">
                  <div className="row name-row mb-2">
                    <div className="col- d-flex justify-content-center  ">
                      <div className="j-avatar">
                        <span>J</span>
                      </div>
                    </div>
                    <div className="col- reviewinfo ">
                      <h6 className="name-reviw">Jeroen Overwater</h6>
                      <div className="verified">
                        <span>GEVERIFIEERD</span>
                      </div>
                      <div className="date">
                        <span>3/2/2022</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center  my-4">
                    <img src={Stars} alt="" />
                  </div>
                  <div className=" d-flex justify-content-center  my-3 ">
                    <span className="coffe-name">Heerlijke koffie</span>
                  </div>
                  <div className=" d-flex justify-content-center  my-3 reviw-dialog">
                    <p>
                      Goeie snelle levering met leuk persoonlijk kaartje. Kan ik
                      waarderen. Nog lekker ook, ben er nog niet uit wat de favo
                      is ;)
                    </p>
                  </div>
                  <div className="over d-flex justify-content-center  my-3">
                    <h6>
                      over <span>Proefpakket verse koffiebonen</span>
                    </h6>
                  </div>
                </Card>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerReview;
