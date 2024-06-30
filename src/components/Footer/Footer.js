import React from "react";
import bestprice from "../../assets/images/bestprice.svg";
import crazydeals from "../../assets/images/dailydeals.svg";
import collection from "../../assets/images/huge collection.svg";
import returns from "../../assets/images/easy returns.svg";
import freedel from "../../assets/images/freedel.svg";
import { Card, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Footer1 from "./Footer1";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";

const Footer = () => {
  return (
    <div className="bg-stone-200 rounded-t-3xl p-3 mt-5">
      <HStack mt={5}>
        <Card m={2} px={100} py={5}>
          <HStack>
            <Image src={bestprice} />
            <Text fontWeight={"semibold"}>Best Prices</Text>
          </HStack>
        </Card>
        <Card m={2} px={100} py={5}>
          <HStack>
            <Image src={crazydeals} />
            <Text fontWeight={"semibold"}>Crazy Deals</Text>
          </HStack>
        </Card>
        <Card m={2} px={100} py={5}>
          <HStack>
            <Image src={collection} />
            <Text fontWeight={"semibold"}>Huge Collection</Text>
          </HStack>
        </Card>
        <Card m={2} px={100} py={5}>
          <HStack>
            <Image src={returns} />
            <Text fontWeight={"semibold"}>Free Returns</Text>
          </HStack>
        </Card>
        <Card m={2} px={100} py={5}>
          <HStack>
            <Image src={freedel} />
            <Text fontWeight={"semibold"}>Free Delivery</Text>
          </HStack>
        </Card>
      </HStack>
      <VStack>
        <Footer1 />
      </VStack>
    </div>
  );
};

export default Footer;
