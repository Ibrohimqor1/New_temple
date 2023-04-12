import React, { Component } from "react";
import Slider from "react-slick";
import '../../components/Header/Header.css'
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
      <div className="container m-auto">
       
        <Slider {...settings}>
        <div >
         <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_2_1600x.jpg?v=1680606941" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_2_1600x.jpg?v=1680606941" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_2_1600x.jpg?v=1680606941" alt="" />
          </div>
          <div>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Banner-Wave-Select-Desktop_2_1600x.jpg?v=1680606941" alt="" />
  </div>
        </Slider>
      </div>
    );
  }
}


