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
  useBreakpointValue,
} from "@chakra-ui/react";
import LogoIcon from "../../assets/images/logo.png";
import { FaSearch, FaRegHeart, FaUserAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const Header = () => {
  const inputWidth = useBreakpointValue({ base: "60%", md: "70%" });
  const showText = useBreakpointValue({ base: false, md: true });

  return (
    <Box>
      <HStack pt={3} pl={3} spacing={4} justifyContent="space-between">
        <Box>
          <Image src={LogoIcon} width={{ base: 16, md: 20 }} />
        </Box>
        <InputGroup w={inputWidth}>
          <InputLeftElement pointerEvents="none">
            <FaSearch />
          </InputLeftElement>
          <Input
            type="tel"
            placeholder="What are you looking for?"
            size={{ base: "sm", md: "md" }}
          />
        </InputGroup>
        <HStack spacing={3}>
          {showText ? (
            <Button leftIcon={<FaRegHeart />} variant="outline">
              Wishlist
            </Button>
          ) : (
            <IconButton
              icon={<FaRegHeart />}
              aria-label="Wishlist"
              variant="outline"
            />
          )}
          {showText ? (
            <Button leftIcon={<IoCartOutline />}>Cart</Button>
          ) : (
            <IconButton icon={<IoCartOutline />} aria-label="Cart" />
          )}
          {showText ? (
            <Button mr={2} leftIcon={<FaUserAlt />}>
              Sign In
            </Button>
          ) : (
            <IconButton mr={2} icon={<FaUserAlt />} aria-label="Sign In" />
          )}
        </HStack>
      </HStack>
      <Divider orientation="horizontal" mt={3} />
    </Box>
  );
};

export default Header;
