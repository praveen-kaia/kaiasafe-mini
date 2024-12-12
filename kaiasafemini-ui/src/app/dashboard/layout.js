"use client";

import React, { ReactNode } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  HStack,
  Stack,
  Divider,
  Button,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { FaQrcode, FaRegCopy, FaExternalLinkAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { ReactText } from "react";
import { useRouter } from "next/navigation";
import { PiCoinsFill } from "react-icons/pi";
import { RiTokenSwapLine } from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { IoSwapVerticalOutline } from "react-icons/io5";
const LinkItems = [
  { name: "Home", icon: FiHome, url: "/dashboard" },
  { name: "Assets", icon: PiCoinsFill },
  { name: "Swap", icon: RiTokenSwapLine },
  { name: "Transactions", icon: IoSwapVerticalOutline, url: "/dashboard/transactions" },
  { name: "Address book", icon: TbAddressBook, url: "/dashboard/address-book" },
  { name: "Settings", icon: FiSettings, url: "/dashboard/settings" },
];

export default function RootLayout({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        width="100%"
        height="100vh"
        marginLeft={"0px"}
        bg={useColorModeValue("", "gray.900")}
      >
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
          width={"100%"}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
          style={{ border: "1px solid green", width: "100%" }}
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav
          display={{ base: "flex", md: "none" }}
          onOpen={onOpen}
          style={{
            position: "absolute",
            top: "-8px",
          }}
        />
        <Box p="4" width={"100%"} ml={"0px"}>
          {children}
        </Box>
      </Box>
    </>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
    const router = useRouter();
  return (
    <Box
      bg={useColorModeValue("", "gray.900")}
      borderRight="1px"
      borderRightColor={"rgb(48, 48, 51)"}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Text
        textAlign={"center"}
        fontSize="sm"
        fontFamily="monospace"
        fontWeight="bold"
        p={"5px"}
        backgroundColor={"#000"}
      >
        KAIROS
      </Text>
      <Flex
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        gap={"5px"}
        p={"10px"}
        mt={"10px"}
        style={{ width: "100%", position: "relative" }}
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
            Laughing KAIROS Safe
          </Text>
          <Text width={"100%"} isTruncated fontSize="sm">
            0x403cdfdsfdsafdsafdsafdsafdsfF834
          </Text>
          <Text fontWeight={"600"} fontSize="sm">
            0.13 USD
          </Text>
        </Stack>
      </Flex>
      <HStack spacing={"4"} justifyContent={"center"} alignItems={"center"}>
        <IconButton
          variant="solid"
          colorScheme="blackAlpha"
          color={"#12FF80"}
          aria-label="Done"
          fontSize="15px"
          size="sm"
          icon={<FaQrcode />}
        />
        <IconButton
          variant="solid"
          colorScheme="blackAlpha"
          color={"#12FF80"}
          aria-label="Done"
          fontSize="15px"
          size="sm"
          icon={<FaRegCopy />}
        />
        <IconButton
          variant="solid"
          colorScheme="blackAlpha"
          color={"#12FF80"}
          aria-label="Done"
          fontSize="15px"
          size="sm"
          icon={<FaExternalLinkAlt />}
        />
      </HStack>
      <Box width={"100%"} p={"10px"}>
        <Button variant={"solid"} bgColor={"rgb(18, 255, 128)"} width={"100%"} onClick={() => {
            router.push("/dashboard/new-transaction");
            return;
        }}>
          <Text fontSize={"14px"}>New transaction</Text>
        </Button>
      </Box>

      <Divider style={{ borderColor: "#303033" }} />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} onClick={() => {
            router.push(link.url);
        }}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      _hover={{
        bg: "gray.800",
        color: "white",
      }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.800",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      justifyContent="flex-start"
      style={{
        position: "absolute",
      }}
      {...rest}
    >
      <IconButton
        variant="outline"
        color="white"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      {/* <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text> */}
    </Flex>
  );
};
