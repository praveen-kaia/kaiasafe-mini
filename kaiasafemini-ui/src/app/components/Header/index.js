"use client";
import { getPublicCompressed } from "@toruslabs/eccrypto";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  background,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { MdLogout } from "react-icons/md";
import {
  CHAIN_NAMESPACES,
  IProvider,
  WALLET_ADAPTERS,
  WEB3AUTH_NETWORK,
} from "@web3auth/base";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { Web3Auth } from "@web3auth/modal";
import { Web3 } from "@kaiachain/web3js-ext";
import { useRouter, usePathname } from "next/navigation";
import providerContext from "../../context";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  const currentPath = usePathname();
  const [balance, setBalance] = useState(0);
  const {
    setAddress,
    address,
    setWeb3Instance,
    web3Instance,
    setIsLoggedIn,
    isLoggedIn,
    web3Auth,
    setWeb3Auth,
    profile,
    setProfile
  } = React.useContext(providerContext);
  const UNIT = "KAIA";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // check if jwt expired. if expired clear localstorage item and route to home page
        let token = window.localStorage.getItem("token");
        if(token) {
          let decoded = jwtDecode(token)
          // also check the expiry time and logout accordingly
          if(decoded) {
            // TODO: relogin
            relogin();
          }
          console.log(decoded)
        }
        
    }
  }, []);

  const relogin = async() => {
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
      let web3, _address, _provider;
      _provider = await web3auth.connect();
      setWeb3Auth(web3auth);
      web3 = new Web3(_provider);
      setWeb3Instance(web3);
      const user = await web3auth.getUserInfo();
      console.log(user);

      _address = (await web3.eth.getAccounts())[0];
      console.log(_address);
      setAddress(_address);
      setProfile({...profile, email: user.email});
      let _balance = await web3.eth.getBalance(_address);
      _balance = web3.utils.fromWei(_balance, "ether");

      setBalance(_balance);

      _provider.on("accountsChanged", async (_accounts) => {
        setAddress(_accounts[0]);
        setIsLoggedIn(false);
        router.push("/");
      });
    }catch(err) {

    }
  }
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
      let web3, _address, _provider;
      _provider = await web3auth.connect();
      setWeb3Auth(web3auth);
      web3 = new Web3(_provider);
      setWeb3Instance(web3);
      const user = await web3auth.getUserInfo();
      console.log(user);

      _address = (await web3.eth.getAccounts())[0];
      console.log(_address);
      setAddress(_address);
      setProfile({...profile, email: user.email});
      let _balance = await web3.eth.getBalance(_address);
      _balance = web3.utils.fromWei(_balance, "ether");

      setBalance(_balance);

      _provider.on("accountsChanged", async (_accounts) => {
        setAddress(_accounts[0]);
        setIsLoggedIn(false);
        router.push("/");
      });
      const app_scoped_privkey = await web3auth.provider?.request({
        method: "eth_private_key", // use "private_key" for other non-evm chains
      });
      const app_pub_key = getPublicCompressed(
        Buffer.from(app_scoped_privkey.padStart(64, "0"), "hex")
      ).toString("hex");
      debugger;
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + user.idToken, // or token.idToken
        },
        body: JSON.stringify({ appPubKey: app_pub_key }),
      }).then(async (res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`Problem while connecting wallet. Please try again.`);
        }
        const json = await res.json();
        console.log(json);
        if (json && json.success) {
          if (typeof window !== "undefined") {
            window.localStorage.setItem("token", json.data.token);
          }
          console.log("CURRENT PATH IS "+currentPath)
          if(currentPath === '/') {
            router.push("/home");
          }
          
        } else {
          window.localStorage.removeItem("token");
          router.push("/");
          // TODO: throw an alert
        }
      });
    } catch (err) {
      console.log(err);
      setAddress(null);
      setIsLoggedIn(false);
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("token");
      }
      router.push("/");
    }
  };

  const disconnect = async () => {
    setAddress(null);
    setIsLoggedIn(false);
    debugger;
    await web3Auth.logout();
    router.push("/");
  };

  return (
    <Box style={{ position: "fixed", top: "0px", left: "0px", right: "0px" }}>
      <Flex
        style={{
          backgroundColor: "rgb(28, 28, 28)",
          borderBottom: "1px solid #303033",
        }}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={"solid"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("white", "gray.800")}
            fontWeight={600}
            onClick={() => {
              router.push("/home");
            }}
          >
            Kaia Safe Mini
          </Text>
        </Flex>
        { currentPath !== '/invite' &&
        <Stack
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          style={{ paddingRight: "5px" }}
        >
          {address ? (
            <>
              <Menu>
                <MenuButton
                  as={Button}
                  // _hover={{ bg: 'gray.400' }}
                  rounded={"full"}
                  variant={""}
                  cursor={"pointer"}
                  minW={0}
                  color={"white"}
                  _active={{
                    color: "white",
                  }}
                >
                  <Flex
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"5px"}
                  >
                    <div
                      style={{
                        backgroundImage:
                          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4IDgiIHNoYXBlLXJlbmRlcmluZz0ib3B0aW1pemVTcGVlZCIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij48cGF0aCBmaWxsPSJoc2woMjY5IDUzJSA1MSUpIiBkPSJNMCwwSDhWOEgweiIvPjxwYXRoIGZpbGw9ImhzbCgzNTQgODMlIDUzJSkiIGQ9Ik0xLDBoMXYxaC0xek02LDBoMXYxaC0xek0yLDBoMXYxaC0xek01LDBoMXYxaC0xek0zLDBoMXYxaC0xek00LDBoMXYxaC0xek0xLDFoMXYxaC0xek02LDFoMXYxaC0xek0zLDFoMXYxaC0xek00LDFoMXYxaC0xek0wLDJoMXYxaC0xek03LDJoMXYxaC0xek0xLDJoMXYxaC0xek02LDJoMXYxaC0xek0yLDJoMXYxaC0xek01LDJoMXYxaC0xek0wLDNoMXYxaC0xek03LDNoMXYxaC0xek0zLDNoMXYxaC0xek00LDNoMXYxaC0xek0wLDRoMXYxaC0xek03LDRoMXYxaC0xek0xLDRoMXYxaC0xek02LDRoMXYxaC0xek0yLDRoMXYxaC0xek01LDRoMXYxaC0xek0wLDVoMXYxaC0xek03LDVoMXYxaC0xek0xLDVoMXYxaC0xek02LDVoMXYxaC0xek0yLDVoMXYxaC0xek01LDVoMXYxaC0xek0wLDZoMXYxaC0xek03LDZoMXYxaC0xek0xLDZoMXYxaC0xek02LDZoMXYxaC0xek0wLDdoMXYxaC0xek03LDdoMXYxaC0xek0yLDdoMXYxaC0xek01LDdoMXYxaC0xek0zLDdoMXYxaC0xek00LDdoMXYxaC0xeiIvPjxwYXRoIGZpbGw9ImhzbCg2NiA2OCUgNjclKSIgZD0iTTMsMmgxdjFoLTF6TTQsMmgxdjFoLTF6TTIsNmgxdjFoLTF6TTUsNmgxdjFoLTF6TTMsNmgxdjFoLTF6TTQsNmgxdjFoLTF6TTEsN2gxdjFoLTF6TTYsN2gxdjFoLTF6Ii8+PC9zdmc+")',
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                      }}
                    ></div>
                    <Stack spacing={"0.1rem"} width={"80%"} color={"#FFFFFF"}>
                      <Text width={"200px"} isTruncated fontSize="sm">
                        {address}
                      </Text>
                      <Text fontWeight={"600"} fontSize="sm">
                        {balance} {UNIT}
                      </Text>
                    </Stack>
                    <Icon
                      as={ChevronDownIcon}
                      transition={"all .25s ease-in-out"}
                      transform={isOpen ? "rotate(180deg)" : ""}
                      w={6}
                      h={6}
                    />
                  </Flex>
                </MenuButton>
                <MenuList backgroundColor={"rgb(28, 28, 28)"}>
                  {/* <MenuItem>KAIA MAINNET</MenuItem>
              <MenuDivider /> */}
                  <MenuItem
                    onClick={disconnect}
                    backgroundColor={"transparent"}
                    color={"#FFFFFF"}
                    justifyContent={"space-between"}
                  >
                    Disconnect &nbsp;
                    <MdLogout />
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Button
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
              Connect
            </Button>
          )}
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={""}
              cursor={"pointer"}
              minW={0}
              color={"white"}
              _active={{
                color: "white",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image
                  width="20px"
                  style={{ marginRight: "5px" }}
                  src="https://eco-klaytn-safe-asset.s3.ap-northeast-2.amazonaws.com/klaytnsafe/cfg/media/chains/8217/chain_logo.png"
                />
                <Text style={{ fontWeight: "400" }}>KAIROS</Text>{" "}
                <Icon
                  as={ChevronDownIcon}
                  transition={"all .25s ease-in-out"}
                  transform={isOpen ? "rotate(180deg)" : ""}
                  w={6}
                  h={6}
                />
              </div>
            </MenuButton>
            <MenuList backgroundColor={"rgb(28, 28, 28)"}>
              {/* <MenuItem>KAIA MAINNET</MenuItem>
              <MenuDivider /> */}
              <MenuItem backgroundColor={"transparent"}
                    color={"#FFFFFF"}>KAIROS</MenuItem>
            </MenuList>
          </Menu>
        </Stack> }
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Inspiration",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "#",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "#",
      },
    ],
  },
  {
    label: "Find Work",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "#",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "#",
      },
    ],
  },
  {
    label: "Learn Design",
    href: "#",
  },
  {
    label: "Hire Designers",
    href: "#",
  },
];
