import { HStack, Heading, ListItem, UnorderedList } from "@chakra-ui/react";
import { easeInOut } from "framer-motion";
import React from "react";

const Popular = () => {
  return (
    <div className="mt-5">
      <HStack>
        <Heading ml={"10%"}>Popular Products</Heading>
        <UnorderedList listStyleType={"none"} ml={"auto"} mr={"10%"}>
          <HStack spacing={4} fontWeight={"semibold"}>
            <ListItem
              _hover={{
                cursor: "pointer",
                opacity: "60%",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              All
            </ListItem>
            <ListItem
              _hover={{
                cursor: "pointer",
                opacity: "60%",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Electronics
            </ListItem>
            <ListItem
              _hover={{
                cursor: "pointer",
                opacity: "60%",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Furnishing
            </ListItem>
            <ListItem
              _hover={{
                cursor: "pointer",
                opacity: "60%",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              Groceries
            </ListItem>
          </HStack>
        </UnorderedList>
      </HStack>
    </div>
  );
};

export default Popular;
