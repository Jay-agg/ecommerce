import { Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo.png";

const Footer1 = () => {
  return (
    <div className="ml-auto my-24 pt-5">
      <div>
        <Image src={logo} w={"20%"} />
      </div>
      <div className="mt-3">
        <Text>Your everyday store</Text>
        <Text>231 Street, North Ave.</Text>
        <Text>Call us at +91312484212</Text>
      </div>
    </div>
  );
};

export default Footer1;
