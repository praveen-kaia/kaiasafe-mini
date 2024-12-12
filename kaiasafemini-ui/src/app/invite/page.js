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
import { HiDotsVertical } from "react-icons/hi";
import { FaRepeat } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { PiCoinsFill } from "react-icons/pi";
import {
  CHAIN_NAMESPACES,
  IProvider,
  WALLET_ADAPTERS,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import { Web3 } from "@kaiachain/web3js-ext";
import { jwtDecode } from "jwt-decode";
import { getPublicCompressed } from "@toruslabs/eccrypto";

export default function NewTransaction() {
  const router = useRouter();

  const loginAndAccept = async () => {
    debugger;
    try {
      const clientId =
        "BMDSlXJYj59V0vk6tK01oXbccOIAjagWfkiuvsPM1mnhqea6k4pYYdLKp5dKpPYMdlUez5i1wj-B3Hu4jZOJ5Wg";

      const chainConfig = {
        chainNamespace: "eip155",
        chainId: "0x3e9",
        rpcTarget: "https://public-en-kairos.node.kaia.io",
        displayName: "Klaytn Testnet",
        blockExplorer: "https://baobab.scope.klaytn.com/",
        ticker: "KLAY",
        tickerName: "KLAY",
        logo: "https://docs.kaia.io/img/favicon.ico",
      };

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig: chainConfig },
      });
      const web3auth = new Web3Auth({
        uiConfig: {
          appName: "Kaia Safe Mini",
          logoLight:
            "https://cdn.prod.website-files.com/66a8ba5239a3fbe8e678da2a/66a8ba5239a3fbe8e678daaa_Footer%20Logo.svg",
          logoDark:
            "https://cdn.prod.website-files.com/66a8ba5239a3fbe8e678da2a/66a8ba5239a3fbe8e678daaa_Footer%20Logo.svg",
          mode: "dark",
        },
        clientId,
        web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
        privateKeyProvider: privateKeyProvider,
      });
      await web3auth.initModal({
        modalConfig: {
          [WALLET_ADAPTERS.AUTH]: {
            label: "auth",
            loginMethods: {
              google: {
                showOnModal: true,
              },
              facebook: {
                showOnModal: false,
              },
              twitter: {
                showOnModal: false,
              },
              reddit: {
                showOnModal: false,
              },
              discord: {
                showOnModal: false,
              },
              twitch: {
                showOnModal: false,
              },
              apple: {
                showOnModal: false,
              },
              line: {
                showOnModal: false,
              },
              github: {
                showOnModal: false,
              },
              kakao: {
                showOnModal: false,
              },
              linkedin: {
                showOnModal: false,
              },
              weibo: {
                showOnModal: false,
              },
              wechat: {
                showOnModal: false,
              },
              email_passwordless: {
                showOnModal: false,
              },
              sms_passwordless: {
                showOnModal: false,
              },
              farcaster: {
                showOnModal: false,
              },
              passkeys: {
                showOnModal: false,
              },
              authenticator: {
                showOnModal: false,
              },
            },
            // setting it to false will hide all social login methods from modal.
            showOnModal: true,
          },
        },
      });
      let web3, _provider;
      _provider = await web3auth.connect();
      const user = await web3auth.getUserInfo();

      const app_scoped_privkey = await web3auth.provider?.request({
        method: "eth_private_key", // use "private_key" for other non-evm chains
      });
      const app_pub_key = getPublicCompressed(
        Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
      ).toString("hex");
      debugger;
      const urlSearchString = window.location.search;
      const params = new URLSearchParams(urlSearchString);
      const invitationToken = params.get('token')
      fetch("http://localhost:3001/accept", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + user.idToken, // or token.idToken
        },
        body: JSON.stringify({ idToken: user.idToken, appPubKey: app_pub_key, invitationToken: invitationToken}),
      }).then(async (res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`Problem while connecting wallet. Please try again.`);
        }
        const json = await res.json();
        console.log(json);
      })
    }catch(err) {
      console.log("Throw an error here");
      console.log(err)
      // TODO
    }
  }

  return (
    <>
      <Flex
        rounded="lg"
        width={"100%"}
        maxWidth={"600px"}
        margin={"20px auto"}
        flexDirection={"column"}
      >
        {/* <Flex justifyContent={"space-between"}>
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
        </Flex> */}
        <Box
          backgroundColor={"rgb(28, 28, 28)"}
          rounded="lg"
          maxWidth={800}
          p={10}
          as="form"
          mt={"20px"}
        >
          <Text fontWeight={"600"}>Invitation Pending</Text>
          <Flex flexDirection={"column"}>
            <Flex mt={"15px"} borderRadius={"10px"} border={"1px solid #303033"} justifyContent={"space-between"} alignItems={"center"}>
              <Flex
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                gap={"5px"}
                p={"10px"}
                mt={"10px"}
                style={{ position: "relative" }}
              >
                {/* <Box
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
                </Box> */}
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
                    XXXX XXXX XXXX
                  </Text>
                  
                </Stack>
              </Flex>
              <HStack gap={"10"} mr={"10px"}>
                <Text>KAIROS</Text>
                <HiDotsVertical />
              </HStack>
            </Flex>
          </Flex>
          <Flex mt={"15px"} flexDirection={"column"}>
          <Text color={"rgb(99, 102, 105)"} textAlign={"center"}>
            Draft Multisig account on Kaia Network.
          </Text>
          <Button
            color={"#12FF80"}
            variant="none"
            mt={"10px"}
            mr="5%"
            onClick={loginAndAccept}
          >
            Login & Accept Invite
          </Button>
          </Flex>
          
        </Box>
      </Flex>
    </>
  );
}
