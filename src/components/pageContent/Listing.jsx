import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import copy from "copy-to-clipboard";
import { AiFillFilePdf } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { useEffect, useState } from "react";
import TypewriterComponent from "typewriter-effect";
import Typewriter from "typewriter-effect";
import { Highlight } from "@chakra-ui/react";

const Listing = ({ setOverlay }) => {
  const [showPaywall, setShowPaywall] = useState(false);
  const [typewriterEffect, setTypewriterEffect] = useState({
    title: true,
    subtitles: true,
    description: true,
  });

  const product = [
    {
      title:
        "Fleur de Sel - Premium Sea salt from Guerande France - Flaky Sea Salt from the Celtic Sea - Salt Cork box - 3.5 Oz (100g)",
      subtitle: [
        "AUTHENTIC HAND HARVESTED SALT: Tablissima french sea salt is carefully harvested by hand from the surface of salt ponds in the Guérande region of France. Centuries-old harvesting techniques are used to harvest a 100% natural salt that will provide a delicate taste to your food and make every bite delicious.",
        "ARTISANAL SEA SALT: Our Guérande Fleur de Sel is classified as IGP (Protected Geographical Indication), which guarantees you its origin, its natural production method and it's harvesting techniques. Our salt comes from a production with no pesticides, nor herbicides, no fossil nor carbon Energy.",
        "CAVIAR OF SALT: This finishing salt is loved by the best culinary professionals. Rich in minerals and lower in sodium than regular salt, it will give a delicate and subtle taste to any of your favourite dishes.",
        "MADE IN FRANCE: Our sea salt is harvested on the salt marshes of Guérande in France. Delicately picked from the surface of the water, it’s neither washed nor treated and drips naturally on our salt flats. Trusted by the best Chefs.",
        "PREMIUM CORK BOX : Our Fleur de Sel sea salt comes in a premium carton box with a cork lid produced in France. The eco-friendly cardboard packaging and decorative cork lid make it a beautiful addition to any kitchen.",
      ],
    },
  ];
  const keywords = ["Fleur de Sel", "Flaky Sea Salt"];

  const productDescription = [
    {
      title: "Enhance any Dish",
      body: "A sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones.",
    },
    {
      title: "Enhance any Dish",
      body: "B sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones.",
    },
    {
      title: "Enhance any Dish",
      body: "A sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones.",
    },
  ];

  const copyText = (text) => {
    copy(text, {
      debug: true,
      message: "Press #{key} to copy",
    });
  };

  return (
    <Box w="100%">
      <Flex direction="row" align="center" mt="60px" mb="25px">
        <Image src="/assets/humburger.svg" mr={2} />
        <Heading>Your Product Listing</Heading>
      </Flex>
      <Stack spacing={10} pl={7}>
        <Stack spacing={3} w={{ sm: "100%", md: "90%" }}>
          <Text fontSize="22px" fontWeight="bold">
            Product Title
          </Text>
          {product.map((pr, index) => (
            <Box key={index}>
              <Flex direction="row" align="flex-start">
                {typewriterEffect.title ? (
                  <Text
                    fontSize="30px"
                    fontWeight="semibold"
                    mb={5}
                    borderWidth="1px"
                    p="2"
                    w="100%"
                  >
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(pr.title)
                          .callFunction(() => {
                            setTypewriterEffect({
                              ...typewriterEffect,
                              title: false,
                            });
                          })
                          .start();
                      }}
                      options={{
                        cursor: "",
                        delay: 30,
                      }}
                    />
                  </Text>
                ) : (
                  <Text
                    fontSize="30px"
                    fontWeight="semibold"
                    mb={5}
                    borderWidth="1px"
                    p="2"
                    w="100%"
                  >
                    <Highlight
                      query={keywords}
                      styles={{ color: "#18A9FB", fontWeight: "bold" }}
                    >
                      {pr.title}
                    </Highlight>
                  </Text>
                )}
                <Flex direction="column" align="center" justify="center">
                  <Button
                    onClick={() => setOverlay(true)}
                    variant="link"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <Icon as={AiOutlineReload} mb={2} boxSize={6} />{" "}
                  </Button>
                  <Button
                    onClick={() => copyText(pr.title)}
                    variant="link"
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <Icon as={MdContentCopy} boxSize={6} />{" "}
                  </Button>
                </Flex>
              </Flex>
              <Text fontSize="22px" fontWeight="bold" mb={5}>
                Bullet Points
              </Text>
              {pr.subtitle?.map((subt, index) => (
                <Flex key={index} fontSize="14px" align="flex-start">
                  <Box borderWidth="1px" p={2} px={4} mb={4} w="100%">
                    <UnorderedList>
                      <ListItem>
                        {typewriterEffect.subtitles ? (
                          <Typewriter
                            onInit={(typewriter) => {
                              typewriter
                                .typeString(subt)
                                .callFunction(() => {
                                  setTypewriterEffect({
                                    ...typewriterEffect,
                                    title: false,
                                    subtitles: false,
                                  });
                                })
                                .start();
                            }}
                            options={{
                              cursor: "",
                              delay: 30,
                            }}
                          />
                        ) : (
                          <Text fontSize="14px">
                            <Highlight
                              query={keywords}
                              styles={{ color: "#18A9FB", fontWeight: "bold" }}
                            >
                              {subt}
                            </Highlight>
                          </Text>
                        )}
                      </ListItem>
                    </UnorderedList>
                  </Box>
                  <Flex
                    onClick={() => setOverlay(true)}
                    direction="column"
                    align="center"
                    justify="center"
                  >
                    <Button
                      variant="link"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      <Icon as={AiOutlineReload} mb={2} boxSize={5} />{" "}
                    </Button>
                    <Button
                      onClick={() => copyText(subt)}
                      variant="link"
                      _hover={{
                        textDecoration: "none",
                      }}
                    >
                      {" "}
                      <Icon as={MdContentCopy} boxSize={5} />{" "}
                    </Button>
                  </Flex>
                </Flex>
              ))}
            </Box>
          ))}
        </Stack>
        <Flex
          position="relative"
          direction="column"
          align="flex-start"
          justifyContent="center"
        >
          <Text fontSize="22px" fontWeight="bold" mb={5}>
            Product Description
          </Text>
          <Stack
            direction="row"
            ml={2}
            alignItems="flex-start"
            w={{ sm: "100%", md: "90%" }}
            filter={showPaywall && "blur(5px)"}
            userSelect={showPaywall && "none"}
            pointerEvents={showPaywall && "none"}
            position="relative"
          >
            <Box borderWidth="1px" p={2} px={2} w="100%">
              {productDescription.map((pd, index) => (
                <Box key={index} mb={2}>
                  <Flex direction="row" align="center">
                    <Text fontWeight="bold" fontSize="17px">
                      {!showPaywall ? (
                        <TypewriterComponent
                          options={{
                            strings: pd.title,
                            autoStart: true,
                            delay: 30,
                            cursor: "",
                          }}
                        />
                      ) : (
                        pd.title
                      )}
                    </Text>
                  </Flex>
                  <Text>
                    {typewriterEffect.description && !showPaywall ? (
                      <Typewriter
                        onInit={(typewriter) => {
                          typewriter
                            .typeString(pd.body)
                            .callFunction(() => {
                              setTypewriterEffect({
                                title: false,
                                subtitles: false,
                                description: false,
                              });
                            })
                            .start();
                        }}
                        options={{
                          cursor: "",
                          delay: 30,
                        }}
                      />
                    ) : (
                      <Text>
                        <Highlight
                          query={keywords}
                          styles={{ color: "#18A9FB", fontWeight: "bold" }}
                        >
                          {pd.body}
                        </Highlight>
                      </Text>
                    )}
                  </Text>
                </Box>
              ))}
            </Box>
            <Flex direction="column" align="center" justify="center">
              <Button
                onClick={() => setOverlay(true)}
                variant="link"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {" "}
                <Icon as={AiOutlineReload} mb={2} boxSize={5} />{" "}
              </Button>
              <Button
                variant="link"
                _hover={{
                  textDecoration: "none",
                }}
              >
                {" "}
                <Icon as={MdContentCopy} boxSize={5} />{" "}
              </Button>
            </Flex>
          </Stack>

          <Flex
            display={!showPaywall ? "none" : "flex"}
            direction="column"
            align="center"
            alignSelf="center"
            w={{ sm: "250px", md: "380px" }}
            py={3}
            px={2}
            backgroundColor="#F4A023E0"
            color="#fff"
            position="absolute"
          >
            <Text fontWeight="bold">
              Generate full Product Listings Includes
            </Text>
            <UnorderedList>
              <ListItem>Includes Description</ListItem>
              <ListItem>Includes inclusion of SEO Keywords</ListItem>
              <ListItem>Includes Exports to TXT or DOC</ListItem>
            </UnorderedList>
            <Button
              variant="link"
              color="#fff"
              mt={5}
              _hover={{
                textDecoration: "none",
              }}
            >
              UPGRADE NOW
            </Button>
          </Flex>
        </Flex>
        <Stack
          direction={{ sm: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ sm: "center", md: "normal" }}
          spacing={4}
          filter={showPaywall && "blur(2px)"}
          userSelect={showPaywall && "none"}
          pointerEvents={showPaywall && "none"}
        >
          <Button
            leftIcon={<AiFillFilePdf />}
            colorScheme="brand"
            variant="solid"
            w="fit-content"
          >
            Export PDF
          </Button>
          <Button
            leftIcon={<FcDocument />}
            colorScheme="brand"
            variant="solid"
            w="fit-content"
          >
            Export Word
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Listing;
