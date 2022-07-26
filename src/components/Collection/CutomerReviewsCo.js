import React, { useRef } from "react";
import Slider from "react-slick";
import { Card } from "reactstrap";
import Stars from "../../assests/icons/Stars.png";
import rightarrow from "../../assests/icons/rightarrow.png";
import leftarrow from "../../assests/icons/leftarrow.png";
import { yellow } from "../../constants/index";
const CutomerReviewsCo = () => {
  const settings = {
    dots: true,

    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    // autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    swipe: false,
    pauseOnHover: false,
    slidesToScroll: 4,

  };

  return (
    <>
      <div className="custm-wrap ">
        <div className="custom-co-head">
          <h4 className="cut-co">WHAT OTHER CUSTOMERS ARE SAYING...</h4>
        </div>

        <div className="col-12">
          <Slider
            className="slider-co"
            style={{ width: "1370px" }}
            {...settings}
          >
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
            <div className="card-co-wrap">
              <Card className="slider-co-card card-co">
                <div className="row name-row mb-2">
                  <div className="col- d-flex justify-content-center  ">
                    <div className="j-avatar info-co">
                      <span>J</span>
                    </div>
                  </div>
                  <div className="col- reviewinfo  ">
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
                <div className="over d-flex justify-content-center over-co ">
                  <h6>
                    over <span>Proefpakket verse koffiebonen</span>
                  </h6>
                </div>
              </Card>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default CutomerReviewsCo;
