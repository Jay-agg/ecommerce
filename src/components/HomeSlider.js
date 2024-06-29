import React from "react";
import Slider from "react-slick";
import slider1 from "../assets/images/slider1.jpg";
import { Divider, Image } from "@chakra-ui/react";
import slider2 from "../assets/images/slider2.jpg";

var settings = {
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
};

const HomeSlider = () => {
  return (
    <div>
      <Slider {...settings}>
        <div>
          <Image src={slider1} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
        <div>
          <Image src={slider2} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
