import React from "react";
import bestprice from "../../assets/images/bestprice.svg";
import crazydeals from "../../assets/images/dailydeals.svg";
import collection from "../../assets/images/huge collection.svg";
import returns from "../../assets/images/easy returns.svg";
import freedel from "../../assets/images/freedel.svg";
import {
  Card,
  HStack,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Footer1 from "./Footer1";

const Footer = () => {
  return (
    <div className="bg-stone-200 rounded-t-3xl p-3 mt-5">
      <Wrap spacing={4} justify="center" mt={5}>
        <WrapItem>
          <Card p={5} w="100%">
            <HStack spacing={4}>
              <Image src={bestprice} />
              <Text fontWeight={"semibold"}>Best Prices</Text>
            </HStack>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card p={5} w="100%">
            <HStack spacing={4}>
              <Image src={crazydeals} />
              <Text fontWeight={"semibold"}>Crazy Deals</Text>
            </HStack>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card p={5} w="100%">
            <HStack spacing={4}>
              <Image src={collection} />
              <Text fontWeight={"semibold"}>Huge Collection</Text>
            </HStack>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card p={5} w="100%">
            <HStack spacing={4}>
              <Image src={returns} />
              <Text fontWeight={"semibold"}>Free Returns</Text>
            </HStack>
          </Card>
        </WrapItem>
        <WrapItem>
          <Card p={5} w="100%">
            <HStack spacing={4}>
              <Image src={freedel} />
              <Text fontWeight={"semibold"}>Free Delivery</Text>
            </HStack>
          </Card>
        </WrapItem>
      </Wrap>
      <VStack mt={5}>
        <Footer1 />
      </VStack>
    </div>
  );
};

export default Footer;
