import React from "react";
import {
  Heading,
  Box,
  Text,
  Flex,
  Spacer,
  Center,
  HStack,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
//local imports
import GenreHeader from "../components/GenreHeader";
import MusicCatalog from "../components/MusicCatalog";
import ShortcutIconFooter from "../components/ShortcutIconFooter";
import UserIconHeader from "../components/UserIconHeader";

const HomePage = () => {
  return (
    <Box w="100vw" h="100vh" rounded="40px" bg="gray">
      <Flex pt="20vh">
        <Text
          color="black"
          fontFamily="inter"
          fontWeight="medium"
          fontSize="3xl"
          ml={3}
        >
          Podcasts
        </Text>
        <Spacer />
        <HStack spacing={0} mr={3}>
          <Center w="30px" h="30px" bg="dark_gray" borderRadius="80%">
            <Icon as={FaChevronLeft} color="white" boxSize="1em" />
          </Center>
          <Center w="30px" h="30px" bg="dark_gray" borderRadius="80%">
            <Icon as={FaChevronRight} color="white" boxSize="1em" />
          </Center>
        </HStack>
      </Flex>
    </Box>
  );
};

export default HomePage;
