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
} from "@chakra-ui/react";
import { TbHeartPlus } from "react-icons/tb";
import { LiaCartPlusSolid } from "react-icons/lia";

import { easeInOut } from "framer-motion";
import phone1 from "../assets/images/phone1.jpg";
import phone2 from "../assets/images/phone2.jpg";
import phone3 from "../assets/images/phone3.jpg";
import phone4 from "../assets/images/phone4.jpg";
import phone5 from "../assets/images/phone5.jpg";
import React from "react";
import Products from "./Header/Products";

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
      <VStack alignItems={"left"} ml={20}>
        <Text mt={10} ml={10} fontWeight={"semibold"} fontSize={"lg"}>
          Smartphones
        </Text>
        <HStack className="mt-5" ml={10} mr={5} overflow={"scroll"}>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
        </HStack>
      </VStack>

      <VStack alignItems={"left"} ml={20}>
        <Text mt={10} ml={10} fontWeight={"semibold"} fontSize={"lg"}>
          Smartphones
        </Text>
        <HStack className="mt-5" ml={10} mr={5} overflow={"scroll"}>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
        </HStack>
      </VStack>
      <VStack alignItems={"left"} ml={20}>
        <Text mt={10} ml={10} fontWeight={"semibold"} fontSize={"lg"}>
          Smartphones
        </Text>
        <HStack className="mt-5" ml={10} mr={5} overflow={"scroll"}>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
          <div>
            <VStack
              borderWidth={2}
              rounded={"xl"}
              p={2}
              _hover={{
                shadow: "md",
                transform: "translateY(-5px)",
                transitionDuration: "0.2s",
                transitionTimingFunction: "ease-in-out",
              }}
            >
              <Image src={phone1} />
              <Text>Asus ROG</Text>
              <ButtonGroup>
                <IconButton icon={<TbHeartPlus />} />
                <IconButton icon={<LiaCartPlusSolid />} />
              </ButtonGroup>
            </VStack>
          </div>
        </HStack>
      </VStack>
    </div>
  );
};

export default Popular;
