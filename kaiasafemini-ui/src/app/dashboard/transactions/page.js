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
  InputLeftElement,
  Input,
  Stack,
} from "@chakra-ui/react";
import {
  SearchIcon,
  AddIcon,
  CheckIcon,
  DeleteIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { FaRegCopy } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box pl={{ base: 100, md: 60 }}>
      <Flex justifyContent={"space-between"}>
        <Box>
          <Heading size="xl" pt="10px" fontWeight={"500"}>
            Transactions
          </Heading>
        </Box>
      </Flex>

      <Tabs colorScheme={"green"} borderColor={"#303033"}>
  <TabList mt={"30"} >
    <Tab>Queue</Tab>
    <Tab>History</Tab>
    <Tab>Messages</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      
    <Flex mt={"60px"} flexDirection={"column"}>
        <TableContainer>
          <Table
            variant="simple"
            backgroundColor={"rgb(28, 28, 28)"}
            borderRadius={"10px"}
          >
            <Thead>
              <Tr >
                <Th borderColor={"#303033"}>Name</Th>
                <Th borderColor={"#303033"}>Address</Th>
                <Th borderColor={"#303033"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor={"#303033"}>Witty KAIROS Safe</Td>
                <Td borderColor={"#303033"}>
                  <Flex
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"5px"}
                    style={{ width: "100%", position: "relative" }}
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
                    <HStack spacing={"4"}>
                      <Text width={"100%"} isTruncated fontSize="sm">
                        0x403cdfdsfdsafdsafdsafdsafdsfF834
                      </Text>
                      <FaRegCopy color={"#636669"} />
                      <LuExternalLink color={"#636669"} />
                    </HStack>
                  </Flex>
                </Td>
                <Td borderColor={"#303033"}>
                  <HStack spacing={"4"}>
                    <FaRegCopy color={"#636669"} />
                    <LuExternalLink color={"#636669"} />
                    <Button
                      backgroundColor={"#12FF80"}
                      color={"#000000DE"}
                      variant="solid"
                      w="5rem"
                      mr="5%"
                      onClick={() => {
                        router.push("/dashboard/send-tokens");
                      }}
                    >
                      Send
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td borderColor={"#303033"}>Superior KAIROS Safe</Td>
                <Td borderColor={"#303033"}>
                  <Flex
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"5px"}
                    style={{ width: "100%", position: "relative" }}
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
                    <HStack spacing={"4"}>
                      <Text width={"100%"} isTruncated fontSize="sm">
                        0x403cdfdsfdsafdsafdsafdsafdsfF834
                      </Text>
                      <FaRegCopy color={"#636669"} />
                      <LuExternalLink color={"#636669"} />
                    </HStack>
                  </Flex>
                </Td>
                <Td borderColor={"#303033"}>
                  <HStack spacing={"4"}>
                    <FaRegCopy color={"#636669"} />
                    <LuExternalLink color={"#636669"} />
                    <Button
                      backgroundColor={"#12FF80"}
                      color={"#000000DE"}
                      variant="solid"
                      w="5rem"
                      mr="5%"
                      onClick={() => {
                        router.push("/dashboard/send-tokens");
                      }}
                    >
                      Send
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </TabPanel>
    <TabPanel>
      
    <Flex mt={"60px"} flexDirection={"column"}>
        <TableContainer>
          <Table
            variant="simple"
            backgroundColor={"rgb(28, 28, 28)"}
            borderRadius={"10px"}
          >
            <Thead>
              <Tr >
                <Th borderColor={"#303033"}>Name</Th>
                <Th borderColor={"#303033"}>Address</Th>
                <Th borderColor={"#303033"}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td borderColor={"#303033"}>Witty KAIROS Safe</Td>
                <Td borderColor={"#303033"}>
                  <Flex
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"5px"}
                    style={{ width: "100%", position: "relative" }}
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
                    <HStack spacing={"4"}>
                      <Text width={"100%"} isTruncated fontSize="sm">
                        0x403cdfdsfdsafdsafdsafdsafdsfF834
                      </Text>
                      <FaRegCopy color={"#636669"} />
                      <LuExternalLink color={"#636669"} />
                    </HStack>
                  </Flex>
                </Td>
                <Td borderColor={"#303033"}>
                  <HStack spacing={"4"}>
                    <FaRegCopy color={"#636669"} />
                    <LuExternalLink color={"#636669"} />
                    <Button
                      backgroundColor={"#12FF80"}
                      color={"#000000DE"}
                      variant="solid"
                      w="5rem"
                      mr="5%"
                      onClick={() => {
                        router.push("/dashboard/send-tokens");
                      }}
                    >
                      Send
                    </Button>
                  </HStack>
                </Td>
              </Tr>
              <Tr>
                <Td borderColor={"#303033"}>Superior KAIROS Safe</Td>
                <Td borderColor={"#303033"}>
                  <Flex
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                    gap={"5px"}
                    style={{ width: "100%", position: "relative" }}
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
                    <HStack spacing={"4"}>
                      <Text width={"100%"} isTruncated fontSize="sm">
                        0x403cdfdsfdsafdsafdsafdsafdsfF834
                      </Text>
                      <FaRegCopy color={"#636669"} />
                      <LuExternalLink color={"#636669"} />
                    </HStack>
                  </Flex>
                </Td>
                <Td borderColor={"#303033"}>
                  <HStack spacing={"4"}>
                    <FaRegCopy color={"#636669"} />
                    <LuExternalLink color={"#636669"} />
                    <Button
                      backgroundColor={"#12FF80"}
                      color={"#000000DE"}
                      variant="solid"
                      w="5rem"
                      mr="5%"
                      onClick={() => {
                        router.push("/dashboard/send-tokens");
                      }}
                    >
                      Send
                    </Button>
                  </HStack>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </TabPanel>
    <TabPanel>
      Upcoming
    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>
  );
}
