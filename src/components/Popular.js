import {
  ButtonGroup,
  HStack,
  Heading,
  IconButton,
  Image,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  Wrap,
  Box,
} from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";
import { LiaCartPlusSolid } from "react-icons/lia";
import React from "react";
import phone1 from "../assets/images/phone1.jpg";

const Popular = () => {
  return (
    <Box mt={5} px={{ base: 4, md: 10 }}>
      <HStack flexWrap="wrap">
        <Heading w="full" textAlign={{ base: "center", md: "left" }} mb={4}>
          Popular Products
        </Heading>
        <UnorderedList
          listStyleType="none"
          display="flex"
          flexWrap="wrap"
          justifyContent={{ base: "center", md: "flex-end" }}
          w="full"
          mb={4}
        >
          {["All", "Electronics", "Furnishing", "Groceries"].map((category) => (
            <ListItem
              key={category}
              mx={2}
              fontWeight="semibold"
              _hover={{
                cursor: "pointer",
                opacity: "60%",
                transition: "opacity 0.2s ease-in-out",
              }}
            >
              {category}
            </ListItem>
          ))}
        </UnorderedList>
      </HStack>

      <VStack alignItems="flex-start" spacing={10}>
        {["Smartphones", "Laptops", "Accessories"].map((category) => (
          <VStack key={category} alignItems="flex-start" w="full" spacing={4}>
            <Text fontWeight="semibold" fontSize="lg" ml={2}>
              {category}
            </Text>
            <Box
              display="flex"
              overflowX="scroll"
              pb={4}
              css={{
                "&::-webkit-scrollbar": {
                  height: "6px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#CBD5E0",
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  background: "#A0AEC0",
                },
              }}
            >
              {Array(8)
                .fill("")
                .map((_, index) => (
                  <Box
                    key={index}
                    flex="0 0 auto"
                    borderWidth={2}
                    rounded="xl"
                    p={2}
                    m={2}
                    _hover={{
                      shadow: "md",
                      transform: "translateY(-5px)",
                      transitionDuration: "0.2s",
                      transitionTimingFunction: "ease-in-out",
                    }}
                  >
                    <VStack>
                      <Image src={phone1} />
                      <Text>Asus ROG</Text>
                      <ButtonGroup>
                        <IconButton icon={<TbHeartPlus />} />
                        <IconButton icon={<LiaCartPlusSolid />} />
                      </ButtonGroup>
                    </VStack>
                  </Box>
                ))}
            </Box>
          </VStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Popular;
