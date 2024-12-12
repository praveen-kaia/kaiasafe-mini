"use client";

import React, { useState, useRef, useEffect } from "react";
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
import providerContext from "../context";
import {
  Web3,
  TxType,
  AccountKeyType,
  getPublicKeyFromPrivate,
} from "@kaiachain/web3js-ext";
import { jwtDecode } from "jwt-decode";
import { SAFENAMES } from "../utils/constants";

const Form1 = ({ walletData, setWalletName }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Flex alignItems={"flex-end"} gap={"10px"}>
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
          Select name of your Safe Account
        </Text>
      </Flex>
      <Divider mt="10px" mb="10px" style={{ borderColor: "#303033" }} />
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Name
          </FormLabel>
          <Input
            style={{ borderColor: "#303033" }}
            id="first-name"
            placeholder="Joyous KAIROS Safe"
            defaultValue={walletData.name}
            onChange={(event) => {
              setWalletName(event);
            }}
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
            placeholder="KAIROS"
          />
        </FormControl>
      </Flex>
      <Text fontSize="sm" pt="20px">
        By continuing, you agree to our
        <span style={{ color: "#12FF80" }}>&nbsp;terms of use</span> and
        <span style={{ color: "#12FF80" }}>&nbsp;privacy policy</span>.
      </Text>
    </>
  );
};

const Form2 = ({ walletData, setWalletData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [showNewContact, setShowNewContact] = useState(false);
  const [invitationEmail, setInvitationEmail] = useState("");

  const sendInvitation = () => {
    let token = window.localStorage.getItem("token");
    fetch("http://localhost:3001/invitations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: token, // or token.idToken
      },
      body: JSON.stringify({ email: invitationEmail, walletId: walletData.id }),
    }).then(async (res) => {
      console.log(res);
      if (!res.ok) {
        throw new Error(
          `Problem while connecting wallet. Please try again.`
        );
      }
      const json = await res.json();
      console.log("Created");
      let emails = walletData.signers;
      emails.push({ email: invitationEmail })
      setWalletData({ ...walletData, signers: emails })
      // toast({
      //   title: "Account invitation sent.",
      //   description: "Waiting for acceptance.",
      //   status: "success",
      //   duration: 3000,
      //   isClosable: true,
      // });
    });
  }

  return (
    <>
      <Flex alignItems={"flex-end"} gap={"10px"}>
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
          Signers and confirmations
        </Text>
      </Flex>
      <Text fontSize="sm" pt="3px" pl="40px">
        Set the signer wallets of your Safe Account and how many need to confirm
        to execute a valid transaction
      </Text>
      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Heading size="md" pt="3px">
        Owners
      </Heading>
      <Stack
        divider={<StackDivider style={{ borderColor: "rgb(48, 48, 51)" }} />}
        spacing="4"
        pl={"20px"}
        mt={"20px"}
      >
        {walletData.signers.map((_wallet, _index) => (
          <Flex
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <HStack pt="2">
                <Badge isRound={true} mb="2px" colorScheme={"gray"}>
                  {_index + 1}
                </Badge>{" "}
                <Text fontSize="sm" ml="10px">
                  {_wallet.email}
                </Text>
              </HStack>
            </Box>
            <HStack spacing={"4"}>
              {/* <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="15px"
              size="sm"
              icon={<CheckIcon />}
            /> */}
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="teal"
                aria-label="Done"
                ffontSize="15px"
                size="sm"
                icon={<DeleteIcon />}
              />
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="15px"
                size="sm"
                icon={<FaRepeat />}
              />
              <IconButton
                isRound={true}
                variant="solid"
                colorScheme="teal"
                aria-label="Done"
                fontSize="15px"
                size="sm"
                icon={<ViewIcon />}
              />
            </HStack>
          </Flex>
        ))}
        {/* <Flex
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <HStack pt="2">
              <Badge mb="2px" colorScheme={"gray"}>
                2
              </Badge>{" "}
              <Text fontSize="sm" ml="10px">
                pravn1729@gmail.com
              </Text>
            </HStack>
          </Box>
          <HStack spacing={"4"}>
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="15px"
              size="sm"
              icon={<CheckIcon />}
            />
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              ffontSize="15px"
              size="sm"
              icon={<DeleteIcon />}
            />
            <IconButton
              isRound={true}
              variant="solid"
              colorScheme="teal"
              aria-label="Done"
              fontSize="15px"
              size="sm"
              icon={<FaRepeat />}
            />
          </HStack>
        </Flex> */}
      </Stack>
      <Button
        style={{ color: "rgb(18, 255, 128)" }}
        variant="transparent"
        mt="30px"
        mr="5%"
        onClick={onOpen}
      >
        + Add new owner
      </Button>

      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Heading size="md" pt="20px" pl="10px">
        Threshold
      </Heading>
      <Text fontSize="sm" pt="5px" pl="10px">
        Any transaction requires the confirmation of:
      </Text>

      <HStack pt="30px" pl="10px">
        <FormControl width={"70px"}>
          <Select placeholder="1">
            <option>1</option>
            <option>2</option>
          </Select>
        </FormControl>
        <Text fontSize="sm" pt="3px" pl="5px">
          out of 2 signers(s)
        </Text>
      </HStack>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent backgroundColor={"rgb(28, 28, 28)"}>
          {!showNewContact ? (
            <>
              <ModalHeader>Search in your Address book</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  {/* <FormLabel>First name</FormLabel> */}
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <SearchIcon color="gray.300" />
                    </InputLeftElement>
                    <Input
                      _hover={{
                        borderColor: "#3182CE",
                      }}
                      borderColor={"#303033"}
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
                      <Button
                        variant={"transparent"}
                        onClick={() => {
                          setShowNewContact(true);
                        }}
                      >
                        <Icon fontSize="25px" as={BsPersonFillAdd} />{" "}
                        &nbsp;&nbsp;
                        <Text color={"rgb(18, 255, 128)"}>New contact</Text>
                      </Button>
                    </CardBody>
                  </>

                  {/* <CardBody style={{ minHeight: "300px" }}>
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
              </CardBody> */}
                </Card>
              </ModalBody>
            </>
          ) : (
            <>
              <ModalHeader>Invite New Contact</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                {/* <FormControl>
                  <FormLabel>Contact Name</FormLabel>
                  <Input
                    style={{ borderColor: "#303033" }}
                    ref={initialRef}
                    placeholder="Enter invitation"
                  />
                </FormControl> */}
                <FormControl mt={"10px"}>
                  <FormLabel>Invitation Email</FormLabel>
                  <Input
                    style={{ borderColor: "#303033" }}
                    ref={initialRef}
                    placeholder="Enter invitation email"
                    defaultValue={invitationEmail}
                    onChange={(event) => {
                      setInvitationEmail(event.target.value)
                    }}
                  />
                </FormControl>

                <HStack mt={"30px"}>
                  <Button
                    variant={"solid"}
                    backgroundColor={"rgb(18, 255, 128)"}
                    color={"#000000"}
                    onClick={sendInvitation}
                  >
                    <Text>Invite New Contact</Text>
                  </Button>
                </HStack>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

const Form3 = () => {
  return (
    <>
      <Flex alignItems={"flex-end"} gap={"10px"}>
        <Box
          width="30px"
          height="30px"
          bg="green"
          borderRadius={"50%"}
          textAlign={"center"}
          alignContent={"center"}
        >
          3
        </Box>
        <Text fontSize="xl" pt="20px">
          Review
        </Text>
      </Flex>
      <Text fontSize="sm" pt="3px" pl="40px">
        You're about to create a new Safe Account and will have to confirm the
        transaction with your connected wallet.
      </Text>
      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Stack spacing="4" pl={"20px"} mt={"20px"}>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}>
            Network
          </Text>
          <HStack>
            <IconButton
              colorScheme="transparent"
              icon={<Image width="15px" height="15px" src="/icon.svg" />}
            />
            <Text fontSize="sm">KAIROS</Text>
          </HStack>
        </Flex>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}>
            Name
          </Text>
          <HStack>
            <Text fontSize="sm">Laughing KAIROS Safe</Text>
            <IconButton colorScheme="transparent" />
          </HStack>
        </Flex>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}>
            Signers
          </Text>
          <HStack>
            <Text fontSize="sm">Laughing KAIROS Safe</Text>
            <IconButton colorScheme="transparent" />
          </HStack>
        </Flex>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}></Text>
          <HStack>
            <Text fontSize="sm">Laughing KAIROS Safe</Text>
            <IconButton colorScheme="transparent" />
          </HStack>
        </Flex>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}>
            Threshold
          </Text>
          <HStack>
            <Text fontSize="sm">1 out of 1 signers(s)</Text>
            <IconButton colorScheme="transparent" />
          </HStack>
        </Flex>
      </Stack>

      <Divider mt="15px" mb="10px" style={{ borderColor: "#303033" }} />

      <Stack
        // divider={<StackDivider style={{ borderColor: "rgb(48, 48, 51)" }} />}
        spacing="4"
        pl={"20px"}
        mt={"20px"}
      >
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}>
            Est. network fee
          </Text>
          <HStack>
            <Text
              fontSize="md"
              fontWeight={"600"}
              backgroundColor={"#1B2A22"}
              p={"1"}
              borderRadius={"3px"}
            >
              ~ 0.00853 KAIA
            </Text>
          </HStack>
        </Flex>
        <Flex
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Text fontSize="sm" width={"30%"}></Text>
          <HStack>
            <Text fontSize="sm" color={"#636669"}>
              You will have to confirm a transaction with your connected wallet.
            </Text>
          </HStack>
        </Flex>
      </Stack>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const router = useRouter();

  let decoded = {};
  if (typeof window !== "undefined") {
    let token = window.localStorage.getItem("token");
    decoded = jwtDecode(token);
    console.log(decoded);
  }

  const [isForm1Valid, setIsForm1Valid] = useState(false);
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
    setProfile,
  } = React.useContext(providerContext);

  const [walletData, setWalletData] = useState({
    walletId: 0,
    name: "",
    signers: [],
    threshold: 0,
  });

  useEffect(() => {
    if(profile && profile.email && walletData.signers.length == 0) {
      let signers = walletData.signers;
      signers.push({ email: profile.email, status: "accepted" })
      setWalletData({ ...walletData, signers})
    }
    
  }, [profile])

  useEffect(() => {
    // getAddressBook
  });

  useEffect(() => {
    // getsigners
  });

  const setWalletName = (_event) => {
    // validation
    let _name = _event.target.value;
    if (_name) {
      setWalletData({ ...walletData, name: _name });
      setIsForm1Valid(true);
    } else {
      setIsForm1Valid(false);
    }
  };

  const createAccount = async () => {
    const privateKey = await web3Auth.provider.request({
      method: "eth_private_key",
    });
    const senderAccount1 = web3Instance.eth.accounts.privateKeyToAccount(
      "0x" + privateKey
    );
    const pub1 = getPublicKeyFromPrivate("0x" + privateKey); // store public key in database itself

    let tx = {
      type: TxType.AccountUpdate,
      from: senderAccount1.address,
      gasLimit: 1_000_000,
      key: {
        type: AccountKeyType.WeightedMultiSig,
        threshold: 1,
        keys: [[1, pub1]],
      },
    };

    const signResult1 = await senderAccount1.signTransaction(tx);
    console.log("rawTx1", signResult1.rawTransaction);
    try {
      const receipt = await web3Instance.eth.sendSignedTransaction(
        signResult1.rawTransaction
      );
      console.log("receipt", receipt);

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Box rounded="lg" maxWidth={800} width={"100%"} m="10px auto" as="form">
        <Heading size="md" pt="20px" pb="10px">
          Create new Safe Account
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
          {step === 1 ? (
            <Form1 walletData={walletData} setWalletName={setWalletName} />
          ) : step === 2 ? (
            <Form2 walletData={walletData} setWalletData={setWalletData} />
          ) : (
            <Form3 walletData={walletData} />
          )}
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

                {step == 3 ? (
                  <></>
                ) : (
                  <Button
                    w="9rem"
                    isDisabled={!isForm1Valid}
                    onClick={() => {
                      debugger;
                      if (step == 1) {
                        // get localstorage value
                        let token = window.localStorage.getItem("token");
                        if (walletData.walletId == 0) {
                          // create api
                          fetch("http://localhost:3001/wallets", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              token: token, // or token.idToken
                            },
                            body: JSON.stringify({ name: walletData.name }),
                          }).then(async (res) => {
                            console.log(res);
                            if (!res.ok) {
                              throw new Error(
                                `Problem while connecting wallet. Please try again.`
                              );
                            }
                            const json = await res.json();
                            console.log("Created");
                            // toast({
                            //   title: "Account initiated.",
                            //   description: "We've drafted an account for you.",
                            //   status: "success",
                            //   duration: 3000,
                            //   isClosable: true,
                            // });
                          });
                        } else {
                          // update api
                          // fetch("http://localhost:3001/wallets", {
                          //   method: "PUT",
                          //   headers: {
                          //     "Content-Type": "application/json",
                          //     "token": token, // or token.idToken
                          //   },
                          //   body: JSON.stringify({ name: walletData.name }),
                          // }).then(async (res) => {
                          //   console.log(res);
                          //   if (!res.ok) {
                          //     throw new Error(`Problem while connecting wallet. Please try again.`);
                          //   }
                          //   const json = await res.json();
                          //   console.log("Updated")
                          //   toast({
                          //     title: "Account updated.",
                          //     description: "We've drafted an account for you.",
                          //     status: "success",
                          //     duration: 3000,
                          //     isClosable: true,
                          //   });
                          // });
                        }
                        
                      } 
                      setStep(step + 1);
                        if (step === 3) {
                          setProgress(100);
                        } else {
                          setProgress(progress + 33.33);
                        }
                    }}
                    style={{ backgroundColor: "#12FF80" }}
                  >
                    Save & Proceed
                  </Button>
                )}
              </Flex>
              {step === 3 ? (
                <Button
                  w="7rem"
                  backgroundColor={"#12FF80"}
                  color={"#000000DE"}
                  variant="solid"
                  onClick={createAccount}
                >
                  Create
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
