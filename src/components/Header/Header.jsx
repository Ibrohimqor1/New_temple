import React, { Component } from "react";
import Slider from "react-slick";
import '../../components/Header/Header.css'
import logo_head from '../../images/header.jpg'
export default class SlideChangeHooks extends Component {
  state = {
    activeSlide: 0,
    activeSlide2: 0
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) => this.setState({ activeSlide: next }),
      afterChange: current => this.setState({ activeSlide2: current })
    };
    return (
      <div className=" md:flex center container m-auto">
       <div className="slider pt-8  ">

      
        <Slider {...settings}>
        <div  >
         <img src="https://media.supermart.ae/modules/ps_imageslider/images/45dd911b376c49a64c7afbcf7c9300fcc6ebff8e_Ramadan%20Offer%20web.jpg" alt="" />
          </div>
          <div>
          <img className="header_img" src="https://media.supermart.ae/modules/ps_imageslider/images/568b955a448e701368e5874245e4b1965273f561_Web%20Banner%2010%20Discount.jpg" alt="" />
          </div>
          <div>
          <img className=" header_img "  src="https://media.supermart.ae/modules/ps_imageslider/images/d62ba2c97bc84edca7ae74304a0870c7ae111f70_FGVWRGF@1.5x@1.5x.png" alt="" />
          </div>
          <div>
          <img className="header_img " src="https://www.ocado.com/cmscontent/carousel_banner_image/39271182.jpg?cmdW" alt="" />
  </div>
        </Slider>
        </div>

        <div className="header_rasm2 ">
          <img className="rounded-md p-3 w-68 md:w-72" src="https://www.supermart.ae/img/cms/Fruits-and-Vegetable-Category.png" alt="" />
          <img className="rounded-md p-3 w-62 md:w-72" src="https://www.supermart.ae/img/cms/Meat-and-Chicken-Category.png" alt="" />
        </div>
      </div>
    );
  }
}


