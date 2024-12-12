"use client";

import { useState, useRef, useEffect } from "react";
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
import { HiDotsVertical } from "react-icons/hi";
import { FaRepeat } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { PiCoinsFill } from "react-icons/pi";

export default function NewTransaction() {
  const router = useRouter();
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    fetch("http://localhost:3001/wallets", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": token, // or token.idToken
      }
    }).then(async (res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(`Problem while connecting wallet. Please try again.`);
      }
      const json = await res.json();
      console.log(json.data);
      setWallets(json.data.wallets)
    })
  }, [])
  return (
    <>
      <Flex
        rounded="lg"
        width={"100%"}
        maxWidth={"600px"}
        margin={"20px auto"}
        flexDirection={"column"}
      >
        <Flex justifyContent={"space-between"}>
          <Heading>Safe accounts</Heading>
          <Button
            backgroundColor={"#12FF80"}
            color={"#000000DE"}
            variant="solid"
            mr="5%"
            onClick={() => {
              router.push("/new-safe");
            }}
          >
            Create Safe Account
          </Button>
        </Flex>
        <Box
          backgroundColor={"rgb(28, 28, 28)"}
          rounded="lg"
          maxWidth={800}
          p={10}
          as="form"
          mt={"20px"}
        >
          <Text fontWeight={"600"}>My accounts</Text>
          <Flex flexDirection={"column"}>
            {  wallets && wallets.map((_wallet) => 
            <Flex key={_wallet.id} mt={"15px"} borderRadius={"10px"} border={"1px solid #303033"} justifyContent={"space-between"} alignItems={"center"}>
              <Flex
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={"5px"}
                p={"10px"}
                mt={"10px"}
                style={{ position: "relative" }}
              >
                <Box
                  width="20px"
                  height="20px"
                  bg="#12FF80"
                  borderRadius={"50%"}
                  textAlign={"center"}
                  alignContent={"center"}
                  style={{
                    position: "absolute",
                    top: "15px",
                    fontSize: "10px",
                    color: "#000",
                  }}
                >
                  1/1
                </Box>
                <div
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiIHNoYXBlLXJlbmRlcmluZz0ib3B0aW1pemVTcGVlZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJoc2woMjY5IDUzJSA1MSUpIiBkPSJNMCwwSDhWOEgweiIvPjxwYXRoIGZpbGw9ImhzbCgzNTQgODMlIDUzJSkiIGQ9Ik0xLDBoMXYxaC0xek02LDBoMXYxaC0xek0yLDBoMXYxaC0xek01LDBoMXYxaC0xek0zLDBoMXYxaC0xek00LDBoMXYxaC0xek0xLDFoMXYxaC0xek02LDFoMXYxaC0xek0zLDFoMXYxaC0xek00LDFoMXYxaC0xek0wLDJoMXYxaC0xek03LDJoMXYxaC0xek0xLDJoMXYxaC0xek02LDJoMXYxaC0xek0yLDJoMXYxaC0xek01LDJoMXYxaC0xek0wLDNoMXYxaC0xek03LDNoMXYxaC0xek0zLDNoMXYxaC0xek00LDNoMXYxaC0xek0wLDRoMXYxaC0xek03LDRoMXYxaC0xek0xLDRoMXYxaC0xek02LDRoMXYxaC0xek0yLDRoMXYxaC0xek01LDRoMXYxaC0xek0wLDVoMXYxaC0xek03LDVoMXYxaC0xek0xLDVoMXYxaC0xek02LDVoMXYxaC0xek0yLDVoMXYxaC0xek01LDVoMXYxaC0xek0wLDZoMXYxaC0xek03LDZoMXYxaC0xek0xLDZoMXYxaC0xek02LDZoMXYxaC0xek0wLDdoMXYxaC0xek03LDdoMXYxaC0xek0yLDdoMXYxaC0xek01LDdoMXYxaC0xek0zLDdoMXYxaC0xek00LDdoMXYxaC0xeiIvPjxwYXRoIGZpbGw9ImhzbCg2NiA2OCUgNjclKSIgZD0iTTMsMmgxdjFoLTF6TTQsMmgxdjFoLTF6TTIsNmgxdjFoLTF6TTUsNmgxdjFoLTF6TTMsNmgxdjFoLTF6TTQsNmgxdjFoLTF6TTEsN2gxdjFoLTF6TTYsN2gxdjFoLTF6Ii8+PC9zdmc+")',
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                ></div>
                <Stack spacing={"0.1rem"} width={"80%"}>
                  <Text width={"100%"} isTruncated fontSize="sm">
                    {_wallet.name}
                  </Text>
                  <Text width={"100%"} isTruncated fontSize="sm">
                    0x403cdfdsfdsafdsafdsafdsafdsfF834
                  </Text>
                </Stack>
              </Flex>
              <HStack gap={"10"} mr={"10px"}>
                <Text>KAIROS</Text>
                <HiDotsVertical />
              </HStack>
            </Flex>
            ) }
          </Flex>
          { (!wallets || (wallets && wallets.length == 0)) && <Flex mt={"15px"} flexDirection={"column"}>
          <Text color={"rgb(99, 102, 105)"} textAlign={"center"}>
            No Accounts found. Create a new Multisig Account on Kaia Network.
          </Text>
          <Button
            color={"#12FF80"}
            variant="none"
            mt={"10px"}
            mr="5%"
            onClick={() => {
              router.push("/new-safe");
            }}
          >
            Create a safe account
          </Button>
          </Flex>
}
        </Box>
      </Flex>
    </>
  );
}
