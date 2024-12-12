"use client";

import React, { useRef } from "react";
import {
  Text,
  Heading,
  Box,
  Flex,
  HStack,
  Button,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  InputGroup,
  InputLeftElement
} from "@chakra-ui/react";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

export default function Home() {
  return (
    <Box pl={{ base: 100, md: 60 }}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Heading
            as="h2"
            fontSize={"16px"}
            color={"#A1A3A7"}
            fontWeight={"500"}
          >
            Total asset value
          </Heading>
          <Heading size="xl" pt="10px" fontWeight={"500"}>
            0.13 USD
          </Heading>
        </Box>
        <HStack>
          <Button
            borderColor={"#12FF80"}
            color={"#12FF80"}
            variant="outline"
            w="9rem"
            mr="5%"
          >
            <FiArrowUpRight /> &nbsp;&nbsp;Send
          </Button>
          <Button
            borderColor={"#12FF80"}
            color={"#12FF80"}
            variant="outline"
            w="9rem"
            mr="5%"
          >
            <FiArrowDownLeft /> &nbsp;&nbsp;Receive
          </Button>
        </HStack>
      </Flex>
      <Flex mt={"60px"} flexDirection={"column"}>
        <Text fontSize="md" fontWeight="bold" p={"5px"}>
          Pending transactions
        </Text>
        <Flex
          flexDirection={"column"}
          backgroundColor={"#1C1C1C"}
          borderRadius={"5px"}
          alignItems={"center"}
          p={"30px"}
          mt={"10px"}
        >
          <Image src="/pendingrecords.png" width={"100px"} height={"100px"} />
          <Text color={"#A1A3A7"} mt={"10px"}>
            This Safe Account has no queued transactions
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
