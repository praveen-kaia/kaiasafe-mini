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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { BsPersonFillAdd } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
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

const Form1 = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Flex gap={"10px"} justifyContent={"space-between"}>
        <HStack alignItems={"flex-end"}>
          <Box
            width="30px"
            height="30px"
            bg="green"
            borderRadius={"50%"}
            textAlign={"center"}
            alignContent={"center"}
          >
            1
          </Box>
          <Text fontSize="xl" pt="20px">
            Send tokens
          </Text>
        </HStack>
        <HStack alignItems={"flex-end"}>
          <Text fontSize="xl" pt="20px">
            Nonce #
          </Text>
        </HStack>
      </Flex>
      <Divider mt="10px" mb="10px" style={{ borderColor: "#303033" }} />
      <Flex>
        <FormControl>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Receipient address
          </FormLabel>
          <Input
            style={{ borderColor: "#303033" }}
            id="first-name"
            placeholder="Joyous KAIROS Safe"
          />
        </FormControl>
      </Flex>
      <Flex mt="20px">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Amount
          </FormLabel>
          <Input
            style={{ borderColor: "#303033" }}
            id="first-name"
            placeholder="0"
          />
        </FormControl>

        <FormControl width={"20%"}>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            &nbsp;
          </FormLabel>
          <Input
            isDisabled={true}
            style={{ borderColor: "#303033" }}
            id="last-name"
            placeholder="1 KLAY"
          />
        </FormControl>
      </Flex>
    </>
  );
};

const Form2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Flex gap={"10px"} justifyContent={"space-between"}>
        <HStack alignItems={"flex-end"}>
          <Box
            width="30px"
            height="30px"
            bg="green"
            borderRadius={"50%"}
            textAlign={"center"}
            alignContent={"center"}
          >
            2
          </Box>
          <Text fontSize="xl" pt="20px">
            Send tokens
          </Text>
        </HStack>
        <HStack alignItems={"flex-end"}>
          <Text fontSize="xl" pt="20px">
            Nonce #
          </Text>
        </HStack>
      </Flex>
      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Stack pl={"20px"} mt={"20px"}>
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Text fontSize="sm" ml="10px" width={"20%"}>
            Send
          </Text>
          <Text>KLAY 1</Text>
        </Flex>
        <Flex flexDirection={"row"} alignItems={"center"}>
          <Text fontSize="sm" ml="10px" width={"20%"}>
            To
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
              <HStack spacing={"4"}>
                <Text width={"100%"} isTruncated fontSize="sm">
                  0x403cdfdsfdsafdsafdsafdsafdsfF834
                </Text>
                <FaRegCopy />
                <LuExternalLink />
              </HStack>
            </Stack>
          </Flex>
        </Flex>
      </Stack>
      <Accordion mt={"20px"} style={{ border: "0px" }}>
        <AccordionItem
          p={"5px"}
          borderRadius={"10px"}
          border={"1px solid #303033"}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Transaction details
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <Flex flexDirection={"column"} fontFamily={"sans-serif"}>
              <Text fontWeight={"600"} fontSize={"11px"} color={"#636669"}>
                NATIVE TOKEN TRANSFER
              </Text>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  to(address):
                </Text>
                <Text fontSize={"16px"}>Witty KAIROS Safe</Text>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  
                </Text>
                <HStack gap={"4"}>
                <Text fontSize={"16px"}>kairos:0x9F11...7d66</Text>
                <FaRegCopy color={"#636669"} />
                <LuExternalLink color={"#636669"} />
                </HStack>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  value(uint256):
                </Text>
                <Text fontSize={"16px"}>1000000000000000000</Text>
              </Flex>
            </Flex>
            <Text mt={"20px"} fontWeight={"600"} fontSize={"11px"} color={"#636669"}>
                ADVANCED DETAILS
              </Text>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  safeTxGas:
                </Text>
                <Text fontSize={"16px"}>0</Text>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  baseGas:
                </Text>
                <Text fontSize={"16px"}>0</Text>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  refundReceiver:
                </Text>
                <HStack gap={"4"}>
                <Text fontSize={"16px"}>kairos:0x0000...0000</Text>
                <FaRegCopy color={"#636669"} />
                <LuExternalLink color={"#636669"} />
                </HStack>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  Raw data:
                </Text>
                <HStack gap={"4"}>
                <Text fontSize={"16px"}>0 bytes</Text>
                <FaRegCopy color={"#636669"} />
                </HStack>
              </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Heading size="md" pt="20px" pl="10px">
        Execute
      </Heading>
      <Text fontSize="sm" pt="5px" pl="10px">
        You're about to create and execute this transaction.
      </Text>

      <Accordion mt={"20px"} style={{ border: "0px" }}>
        <AccordionItem
          p={"5px"}
          borderRadius={"10px"}
          border={"1px solid #303033"}
        >
          <h2>
            <AccordionButton>
              <Flex width={"100%"} flexDirection={"row"} justifyContent={"space-between"}>
                <Text textAlign="left">
                  Estimated fee
                </Text>
                <HStack>
                  <Text>0.00357 KLAY</Text>
                <AccordionIcon />
                </HStack>
                
              </Flex>
              
              
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} >
            <Flex flexDirection={"column"} fontFamily={"sans-serif"}>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  Wallet nonce:
                </Text>
                <Text fontSize={"16px"}>105</Text>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  Gas limit:
                </Text>
                <Text fontSize={"16px"}>129971</Text>
              </Flex>
              <Flex flexDirection={"row"}>
                <Text fontSize={"16px"} color={"#A1A3A7"} width={"30%"}>
                  Gas price (Gwei):
                </Text>
                <Text fontSize={"16px"}>27.5</Text>
              </Flex>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"rgb(28, 28, 28)"}>
          <ModalHeader>Search in you Address book</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              {/* <FormLabel>First name</FormLabel> */}
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  style={{ borderColor: "#303033" }}
                  ref={initialRef}
                  placeholder="Search by Name/Email/Wallet Address"
                />
              </InputGroup>
            </FormControl>

            <Card
              backgroundColor={"rgb(28, 28, 28)"}
              style={{ color: "#5F6368" }}
            >
              <>
                <CardHeader style={{ textAlign: "center" }}>
                  <Heading size="md">
                    No results found for 'pravn1729@gmail.com'
                  </Heading>
                </CardHeader>
                <CardHeader>
                  <Heading size="sm">More</Heading>
                </CardHeader>

                <CardBody style={{ minHeight: "300px" }}>
                  <Button variant={"transparent"}>
                    <Icon fontSize="25px" as={BsPersonFillAdd} /> &nbsp;&nbsp;
                    <Text color={"rgb(18, 255, 128)"}>New contact</Text>
                  </Button>
                </CardBody>
              </>

              <CardBody style={{ minHeight: "300px" }}>
                <Stack
                  divider={<StackDivider style={{ borderColor: "#5F6368" }} />}
                  spacing="4"
                >
                  <Flex
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Praveen Kumar Reddy
                      </Heading>
                      <HStack pt="2">
                        <Icon fontSize="18px" as={MdEmail} ml="10px" />
                        <Text fontSize="sm" ml="10px">
                          pravn1729@gmail.com
                        </Text>
                      </HStack>
                      <HStack>
                        <IconButton
                          colorScheme="transparent"
                          icon={
                            <Image
                              style={{ filter: "grayscale(100%)" }}
                              width="15px"
                              height="15px"
                              src="/icon.svg"
                            />
                          }
                        />
                        <Text fontSize="sm">
                          0x4838B106FCe9647Bdf1E7877BF73cE8B0BAD5f97
                        </Text>
                      </HStack>
                    </Box>
                    <IconButton
                      isRound={true}
                      variant="solid"
                      colorScheme="teal"
                      aria-label="Done"
                      fontSize="20px"
                      icon={<AddIcon />}
                    />
                  </Flex>

                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Overview
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Check out the overview of your clients.
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Analysis
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      See a detailed analysis of all your business clients.
                    </Text>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const router = useRouter();
  return (
    <>
      <Box
        rounded="lg"
        width={"100%"}
        m="10px auto"
        as="form"
        pl={{ base: 100, md: 80 }}
      >
        <Heading size="md" pt="20px" pb="10px">
          New transaction
        </Heading>
        <Progress
          colorScheme="green"
          height="4px"
          mt="10px"
          value={progress}
          isAnimated
        ></Progress>
        <Box
          // borderWidth="1px"
          backgroundColor={"rgb(28, 28, 28)"}
          rounded="lg"
          // shadow="1px 1px 3px rgba(0,0,0,0.3)"
          maxWidth={800}
          pb={6}
          pr={6}
          pl={6}
          as="form"
        >
          {step === 1 ? <Form1 /> : <Form2 />}
          <Divider mt="20px" style={{ borderColor: "#303033" }} />
          <ButtonGroup w="100%">
            <Flex w="100%" mt="20px" justifyContent="space-between">
              <Flex w="100%" justifyContent="space-between">
                {step == 1 ? (
                  <>
                    <Button
                      onClick={() => {}}
                      isDisabled={step === 1}
                      colorScheme="green"
                      variant="outline"
                      w="7rem"
                      mr="5%"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 33.33);
                    }}
                    isDisabled={step === 1}
                    colorScheme="green"
                    variant="outline"
                    w="7rem"
                    mr="5%"
                  >
                    Back
                  </Button>
                )}

                {step == 2 ? (
                  <></>
                ) : (
                  <Button
                    w="7rem"
                    isDisabled={step === 2}
                    onClick={() => {
                      setStep(step + 1);
                      if (step === 2) {
                        setProgress(100);
                      } else {
                        setProgress(progress + 50);
                      }
                    }}
                    style={{ backgroundColor: "#12FF80" }}
                  >
                    Next
                  </Button>
                )}
              </Flex>
              {step === 2 ? (
                <Button
                  w="7rem"
                  backgroundColor={"#12FF80"}
                  color={"#000000DE"}
                  variant="solid"
                  onClick={() => {
                    router.push("/dashboard");
                    return;
                    toast({
                      title: "Account created.",
                      description: "We've created an account for you.",
                      status: "success",
                      duration: 3000,
                      isClosable: true,
                    });
                  }}
                >
                  Execute
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
