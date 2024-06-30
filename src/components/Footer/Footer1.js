import { Box, Center, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/images/logo.png";

const Footer1 = () => {
  return (
    <Box py={10} className="bg-stone-200">
      <Center>
        <Image src={logo} boxSize={{ base: "50%", md: "30%", lg: "20%" }} />
      </Center>
      <Center>
        <Stack spacing={2} mt={5} textAlign="center">
          <Text>Your everyday store</Text>
          <Text>231 Street, North Ave.</Text>
          <Text>Call us at +91312484212</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Footer1;
