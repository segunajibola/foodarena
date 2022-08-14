import React, {Component} from 'react'
import CarouselSlider from "react-carousel-slider";

let data = [
 {
    des: "",
    imgSrc: "https://images.unsplash.com/photo-1660490966948-218f35953796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    des: "",
    imgSrc: "https://images.unsplash.com/photo-1660490966948-218f35953796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    des: "",
    imgSrc: "https://images.unsplash.com/photo-1660490966948-218f35953796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
  }
];
let sliderBoxStyle = {
  height: "200px"
  //, width: "200px"
  // , background: "tranparent"
};

let itemsStyle = {
  // ,height: "100%", padding: "0px"
  // , padding: "15px"
  // , background: "#FFCA28"
  // , borderRadius: "4px"
  // , margin: "0px 0px", padding: "0px"
};

let textBoxStyle = {
  // textAlign: "left"
  // ,width:"50%"
  // , background: "transparent"
  // , fontSize: "36px"
  // , fontWeight: 300
};

let buttonSetting = {
  // placeOn: "middle-inside"
  // ,hoverEvent: true,
  // , style: {
  //   left: {
  //     margin: "0px 0px 0px 10px"
  //   },
  //   right: {
  //     margin: "0px 10px 0px 0px"
  //   }
  // }
};

let manner = {
  // autoSliding: {interval: "4s"}
  //, duration: "0.3s"
};

const Slider = () => (
  <CarouselSlider
    slideItems={data}
    manner={manner}
    buttonSetting={buttonSetting}
    sliderBoxStyle={sliderBoxStyle}
    itemsStyle={itemsStyle}
    textBoxStyle={textBoxStyle}
  />
);

export default Slider;