import React from "react";
import Slider from "react-slick";
import { Box, Image } from "@chakra-ui/react";
import slider1 from "../assets/images/slider1.jpg";
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
    <Box mt={5} w="full">
      <Slider {...settings}>
        <Box>
          <Image
            src={slider1}
            w={{ base: "90%", md: "95%" }}
            rounded="2xl"
            ml="auto"
            mr="auto"
            mt={5}
            objectFit="cover"
          />
        </Box>
        <Box>
          <Image
            src={slider2}
            w={{ base: "90%", md: "95%" }}
            rounded="2xl"
            ml="auto"
            mr="auto"
            mt={5}
            objectFit="cover"
          />
        </Box>
      </Slider>
    </Box>
  );
};

export default HomeSlider;
