import React, { Component } from "react";
import Slider from "react-slick";
import '.././Categories/categories.css'
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 9,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container m-auto h-40 content-center bg-amber-50 pt-3 ">
        
        <Slider {...settings}>
        <div className="content-center  ">
<img src="https://media.supermart.ae/img/c/41-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
 <img src="https://media.supermart.ae/img/c/400-0_thumb.jpg" alt="" />
 <h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/38-0_thumb.jpg" alt="" />

<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/108-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
 <img src="https://media.supermart.ae/img/c/42-0_thumb.jpg" alt="" />
 <h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
 <img src="https://media.supermart.ae/img/c/113-0_thumb.jpg" alt="" />
 <h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>
<div>
<img src="https://media.supermart.ae/img/c/39-0_thumb.jpg" alt="" />
<h2 className=" pl-5 text-white-500">Tomatto</h2>
</div>



        </Slider>
      </div>
    );
  }
}









