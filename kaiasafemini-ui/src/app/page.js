"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { CHAIN_NAMESPACES, IProvider, WALLET_ADAPTERS, WEB3AUTH_NETWORK } from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import Web3 from "web3";
import { useRouter } from "next/navigation";
import providerContext from './context'
import React, { ReactNode } from 'react'

export default function Home() {


  const router = useRouter();
  const { setAddress, address, setWeb3Instance, web3Instance, setIsLoggedIn, isLoggedIn, web3Auth, setWeb3Auth } = React.useContext(providerContext)
    

  const login = async () => {
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
          logoLight: "https://cdn.prod.website-files.com/66a8ba5239a3fbe8e678da2a/66a8ba5239a3fbe8e678daaa_Footer%20Logo.svg",
          logoDark: "https://cdn.prod.website-files.com/66a8ba5239a3fbe8e678da2a/66a8ba5239a3fbe8e678daaa_Footer%20Logo.svg",
          mode: "dark",
        },
        clientId,
        web3AuthNetwork: WEB3AUTH_NETWORK.TESTNET,
        privateKeyProvider: privateKeyProvider,
      });
      await web3auth.initModal({ modalConfig: {
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
              showOnModal: false
            },
            authenticator: {
              showOnModal: false
            }
          },
          // setting it to false will hide all social login methods from modal.
          showOnModal: true,
        },
      }});
      let web3, _address, _provider;
      _provider = await web3auth.connect();
      setWeb3Auth(web3auth)
      web3 = new Web3(_provider);
      setWeb3Instance(web3);
      const user = await web3auth.getUserInfo();
      console.log(user);


      _address = (await web3.eth.getAccounts())[0];
      console.log(_address);
      setAddress(_address);

      // const privateKey = await web3auth.provider.request({
      //     method: "eth_private_key"
      // });
      // console.log("Private key is: ");
      // console.log(privateKey);

      _provider.on("accountsChanged", async (_accounts) => {
        setAddress(_accounts[0]);
        setIsLoggedIn(false);
        // navigate("/");
        router.push("/");
      });
      // navigate to login page
      router.push("/home");

      return;
    } catch (err) {
      console.log(err);
      setAddress(null);
        setIsLoggedIn(false);
        // navigate("/");
        router.push("/");
    }
  };

  return (
    <>
        <Box style={{width: '100%',  backgroundColor: 'lightblue', borderRadius: "10px"}} m={"20px"} color={"#141414"}>
          <Flex pl={"10%"} pt={"60px"} flexDirection={"column"} gap={"2"}>
            <Heading>
              Try Kaia Abstraction protocol
            </Heading>
            <Text>
              The Decentralized Kaia multisig protocol and asset management platform.
            </Text>
            <Text mt={"20px"} fontWeight={"600"}>
              <Flex alignItems={"center"} gap={"2"}>
              <MdCheckCircle/> Easy use of Multi sig wallet with your Email.
              </Flex>
              
            </Text>
            <Text fontWeight={"600"}>
            <Flex alignItems={"center"} gap={"2"}>
              <MdCheckCircle/> Use Kaia core protocol Multisig.
              </Flex>
              
            </Text>
            <Text fontWeight={"600"}>
            <Flex alignItems={"center"} gap={"2"}>
              <MdCheckCircle/> No complexity of smart contracts.
              </Flex>
              
            </Text>
          </Flex>
          
        </Box>
        <Box style={{width: '100%'}} m={"20px"} color={"#FFFFFF"}>
          <Flex pl={"10%"} pt={"60px"} flexDirection={"column"} gap={"2"} alignItems={"center"}>
            <Heading textAlign={"center"}>
              KaiaSafe Mini
            </Heading>
            <Heading size="md" pt="40px" textAlign={"center"}>
              Get started
            </Heading>
            <Text textAlign={"center"}>
              Connect your wallet to create a new Safe Account or open an existing one
            </Text>
            <Button
            mt={"20px"}
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"black"}
            bg={"rgb(18, 255, 128)"}
            _hover={{
              bg: "green.500",
            }}
            onClick={login}
          >
            Connect wallet
          </Button> 
          </Flex>
          
        </Box>
    </>
  );
}
