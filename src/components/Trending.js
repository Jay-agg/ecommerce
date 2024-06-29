import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Text } from "@chakra-ui/react";
import category1 from "../assets/images/category1.webp";
import category2 from "../assets/images/category2.webp";

import category4 from "../assets/images/category4.webp";
import Slider from "react-slick";

const Trending = () => {
  var settings = {
    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    fade: false,
  };
  return (
    <div className="mt-5 w-{100%}">
      <Text fontWeight={"bold"} ml={"40%"} fontSize={"4xl"}>
        Trending Categories
      </Text>
      <Slider {...settings}>
        <div>
          <Image
            src={category1}
            w="95%"
            rounded={"2xl"}
            ml="2.5%"
            mt={5}
            _hover={{ shadow: "lg" }}
          />
        </div>
        <div>
          <Image src={category2} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
        <div>
          <Image src={category4} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
        <div>
          <Image src={category1} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
        <div>
          <Image src={category2} w="95%" rounded={"2xl"} ml="2.5%" mt={5} />
        </div>
      </Slider>
    </div>
  );
};

export default Trending;
