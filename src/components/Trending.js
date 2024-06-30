import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import category1 from "../assets/images/category1.webp";
import category2 from "../assets/images/category2.webp";
import category4 from "../assets/images/category4.webp";

const Trending = () => {
  return (
    <Box mt={5} w="full" px={{ base: 4, md: 10 }}>
      <Text
        fontWeight="bold"
        textAlign="center"
        fontSize={{ base: "2xl", md: "4xl" }}
        mb={5}
      >
        Trending Categories
      </Text>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={4}>
        {[category1, category2, category4, category1, category2, category4].map(
          (src, index) => (
            <Box key={index}>
              <Image
                src={src}
                w="full"
                rounded="2xl"
                _hover={{
                  transform: "translateY(-5px)",
                  transitionDuration: "0.2s",
                  transitionTimingFunction: "ease-in-out",
                }}
              />
            </Box>
          )
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Trending;
