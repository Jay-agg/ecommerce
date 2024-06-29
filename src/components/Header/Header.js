import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import LogoIcon from "../../assets/images/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <HStack pt={3} pl={3}>
        <Box>
          <Image src={LogoIcon} width={20} />
        </Box>
        <InputGroup ml={5} w="70%" mr={3}>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input type="tel" placeholder="What are you looking for?" />
        </InputGroup>
        <Button leftIcon={<FaRegHeart />} variant="outline">
          {" "}
          Wishlist
        </Button>
        <Button ml="auto" leftIcon=<IoCartOutline />>
          Cart{" "}
        </Button>
        <IconButton mr={5} icon=<FaUserAlt />></IconButton>
      </HStack>
      <Divider orientation="horizontal" mt={3} />
    </div>
  );
};

export default Header;
