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
  Image,
  Icon,
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ArtistCard from "../components/ArtistCard";

const HomePage = () => {
  return (
    <Box w="100vw" h="100vh" position="relative">
      <Flex pt="1vh" zIndex={1} justifyContent="center">
        {/*Username*/}
        <Text
          fontFamily="inter"
          fontWeight="bold"
          fontSize="2xl"
          ml={3}
          bgClip="text"
          bgGradient="linear(to-br, #1DB954, #383838)"
          textShadow="3px 3px 6px rgba(0, 0, 0, 0.2)"
        >
          danny
        </Text>
        <Spacer />
        {/*Profile Picture*/}
        <HStack>
          <Box
            w="25px"
            h="25px"
            rounded="full"
            overflow="hidden"
            mr={3}
            boxShadow="3px 3px 6px rgba(0, 0, 0, 0.2)"
          >
            <Image
              src="/danny_pfp.png"
              alt="User Avatar"
              objectFit="cover"
              w="full"
              h="full"
            />
          </Box>
        </HStack>
      </Flex>
      <ArtistCard />
    </Box>
  );
};

export default HomePage;
