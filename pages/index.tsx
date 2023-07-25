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

import ArtistCard from "../components/ArtistCard";

const HomePage = () => {
  return (
    <Box
      w="100vw"
      h="100vh"
      rounded="40px"
      position="relative"
      bgGradient={[
        "linear(to-t, green.300, black)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Flex pt="20vh" zIndex={1}>
        <Text
          color="white"
          fontFamily="inter"
          fontWeight="bold"
          fontSize="5xl"
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
      <ArtistCard />
    </Box>
  );
};

export default HomePage;
