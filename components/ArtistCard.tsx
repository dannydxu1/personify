import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Img,
  HStack,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";

const ArtistCard = () => {
  return (
    <Box
      my={3}
      mx={[0, 5]}
      overflow="hidden"
      bg="white"
      border="1px"
      borderColor="black"
      boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      borderRadius="md"
      maxW="sm"
      w="120px"
    >
      <HStack  borderBottom="1px" borderColor="black">
        <Box
          w="30px"
          h="30px"
          rounded="full"
          overflow="hidden"
          ml={1}
          boxShadow="3px 3px 6px rgba(0, 0, 0, 0.2)"
        >
          <Img
            src="/drake_bbl.jpg"
            roundedTop="sm"
            objectFit="cover"
            w="50"
            h="50px"
            alt="Blog Image"
          />
        </Box>
        <Heading color="black" fontSize="lg" noOfLines={1}>
          Drake
        </Heading>
      </HStack>
      <Box p={3}>
        <Box
          bg="black"
          display="inline-block"
          px={2}
          py={1}
          color="white"
          mb={2}
        >
          <Text fontSize="xs" fontWeight="medium">
            Hip-Hop/Rap
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ArtistCard;
