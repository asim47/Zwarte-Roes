import React,{ useRef }  from "react";
import bluearrow1 from "../../assests/icons/bluearrow1.png";
import bluearrow from "../../assests/icons/bluearrow.png";
import Slider from "react-slick";
import { yellow, white, orange } from "../../constants/index";
import { Button } from "@mui/material";
import { Card } from "reactstrap";
import Stars from "../../assests/icons/Stars.png";
import productrecom from "../../assests/images/productrecom.png"
import bluelinerec from "../../assests/images/bluelinerec.png"

const Recomended = () => {
    const Recomended = {
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        // autoplay: true,
        autoplaySpeed: 3000,
        swipeToSlide: false,
        swipe: false,
        pauseOnHover: false,
      };
      const sliderRef = useRef(null);
  return (
    <>
      <div className="container-fluid">
        <div className="row recomd-row">
          <div className="col-lg-8">
            <h4 className="recom-hd">RECOMMENDED FOR YOU!</h4>
          </div>
          <div className="col-3">
            <div className="pill">
              <img src={bluearrow1}   onClick={() => sliderRef.current.slickPrev()} alt="" />
              <img src={bluearrow}          onClick={() => sliderRef.current.slickNext()} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
<div className="row">
<div className="  slider-col">
            <Slider  ref={sliderRef} {...Recomended} style={{ width: "1400px", overflow:"hidden" }}>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
              <div>
                <Card className="slider-card-recom">
                  <img src={productrecom} alt="" />
                  <h5  className="recom-sli-hd" >COLOMBIA GIRALDO</h5>
                  <h6 className="tags-recom">chocolate • red fruit • caramel</h6>
                  <div className="d-flex justify-content-center  my-3">
                    <img className="strs-recom" src={Stars} alt="" />
                  </div>
                  <p className="price-re">v.a. €8,75</p>

                  <Button
              className="rcom-btn"
              style={{
                backgroundColor: yellow,
                textAlign: "center",
                textTransform: "lowercase",
                fontFamily: "Quicksand",
                color: white,
                width: "10em",
                height: "2.7em",
                borderRadius: "45px",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              show options
            </Button>
                </Card>
              </div>
            </Slider>
          </div>
</div>
<img src={bluelinerec} className="blue-line" alt="" />
      </div>
    </>
  );
};

export default Recomended;
