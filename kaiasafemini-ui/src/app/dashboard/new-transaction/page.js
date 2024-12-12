"use client";

import { useState, useRef } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Text,
  Divider,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  StackDivider,
  IconButton,
  InputLeftElement,
  HStack,
  Icon,
  createIcon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  SearchIcon,
  AddIcon,
  CheckIcon,
  DeleteIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { FaRepeat } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { PiCoinsFill } from "react-icons/pi";

export default function NewTransaction() {
  const router = useRouter();
  return (
    <>
      <Box
        pl={{ base: 100, md: 80 }}
        rounded="lg"
        width={"100%"}
        m="50px auto"
        as="form"
      >
        <Box
          backgroundColor={"rgb(28, 28, 28)"}
          rounded="lg"
          maxWidth={800}
          p={10}
          as="form"
        >
          <ButtonGroup w="100%">
            <Flex w="100%" mt="20px" justifyContent={"space-around"}>
              <VStack alignItems={"flex-start"} spacing={"5"}>
                <Image width="70px" height="70px" src="/transaction.png" />
                <Heading size="xl">New transaction</Heading>
              </VStack>
              <VStack alignItems={"flex-start"} spacing={"5"}>
                <HStack>
                  <PiCoinsFill />
                  <Heading size="md">Assets</Heading>
                </HStack>

                <Button
                  backgroundColor={"#12FF80"}
                  color={"#000000DE"}
                  variant="solid"
                  w="14rem"
                  mr="5%"
                  onClick={() => {
                    router.push("/dashboard/send-tokens");
                  }}
                >
                  Send tokens
                </Button>
                <Button
                  backgroundColor={"#12FF80"}
                  color={"#000000DE"}
                  variant="solid"
                  w="14rem"
                  mr="5%"
                >
                  Send NFTs
                </Button>
              </VStack>
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
