import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Products = (image, text) => {
  return (
    <div>
      <VStack borderColor={"black"} borderWidth={2} rounded={"xl"}>
        <Image src={image} />
        <Text>{text}</Text>
        <ButtonGroup>
          <IconButton />
          <IconButton />
        </ButtonGroup>
      </VStack>
    </div>
  );
};

export default Products;
