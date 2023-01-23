import { Box, Button, Flex, Heading, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineReload } from "react-icons/ai"
import { MdContentCopy } from "react-icons/md"
import copy from 'copy-to-clipboard';
import { AiFillFilePdf } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { useState } from 'react';
import TypewriterComponent from 'typewriter-effect';

const Listing = () => {
    const [showPaywall, setShowPaywall] = useState(false);
    const product = [
        {
            title: "Fleur de Sel - Premium Sea salt from Guerande France - Flaky Sea Salt from the Celtic Sea - Salt Cork box - 3.5 Oz (100g)",
            subtitle: [
                "AUTHENTIC HAND HARVESTED SALT: Tablissima french sea salt is carefully harvested by hand from the surface of salt ponds in the Guérande region of France. Centuries-old harvesting techniques are used to harvest a 100% natural salt that will provide a delicate taste to your food and make every bite delicious.",
                "ARTISANAL SEA SALT: Our Guérande Fleur de Sel is classified as IGP (Protected Geographical Indication), which guarantees you its origin, its natural production method and it's harvesting techniques. Our salt comes from a production with no pesticides, nor herbicides, no fossil nor carbon Energy.",
                "CAVIAR OF SALT: This finishing salt is loved by the best culinary professionals. Rich in minerals and lower in sodium than regular salt, it will give a delicate and subtle taste to any of your favourite dishes.",
                "MADE IN FRANCE: Our sea salt is harvested on the salt marshes of Guérande in France. Delicately picked from the surface of the water, it’s neither washed nor treated and drips naturally on our salt flats. Trusted by the best Chefs.",
                "PREMIUM CORK BOX : Our Fleur de Sel sea salt comes in a premium carton box with a cork lid produced in France. The eco-friendly cardboard packaging and decorative cork lid make it a beautiful addition to any kitchen."
            ]
        }
    ]

    const productDescription = [
        {
            title: "Enhance any Dish",
            body: "A sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones."
        },
        {
            title: "Enhance any Dish",
            body: "A sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones."
        },
        {
            title: "Enhance any Dish",
            body: "A sprinkle of fleur de sel sea salt is a must-have for any culinary enthusiast. Its unique flavor offers a gourmet experience that truly elevates the taste of any dish. This delicate sea salt enhances the natural flavors of a meal, making it more enjoyable and memorable. With its subtle, yet distinct flavor, it is sure to bring an extra special touch to any culinary masterpiece. It is a great accompaniment for a variety of dishes, from fish and seafood to salads and desserts. With fleur de sel sea salt, you can easily transform ordinary meals into extraordinary ones."
        }
    ]

    const copyText = (text) => {
        copy(text, {
            debug: true,
            message: 'Press #{key} to copy',
        });
    }
    return (
        <>
            <Heading mt="60px" mb="40px">Your Product Listing</Heading>
            <Stack spacing={10} pl={7}>
                <Stack spacing={3} w="90%">
                    {product.map((pr, index) => (
                        <Box key={index}>
                            <Text fontSize="30px" fontWeight="semibold" mb={5}>{pr.title}
                                <Button variant='link' _hover={{
                                    textDecoration: 'none',
                                }} > <Icon as={AiOutlineReload} mr={2} ml={4} boxSize={6} /> </Button>
                                <Button onClick={() => copyText(pr.title)} variant='link' _hover={{
                                    textDecoration: 'none',
                                }}>  <Icon as={MdContentCopy} mr={2} boxSize={6} /> </Button>
                            </Text>

                            <UnorderedList spacing={4}>
                                {pr.subtitle?.map((subt, index) =>
                                (<ListItem key={index} fontSize="14px">
                                    <TypewriterComponent
                                        options={{
                                            strings: subt,
                                            autoStart: true,
                                            delay: 30,
                                            cursor: ""
                                        }}
                                    />
                                    <Button variant='link' _hover={{
                                        textDecoration: 'none',
                                    }} > <Icon as={AiOutlineReload} mr={2} ml={4} boxSize={5} /> </Button>
                                    <Button onClick={() => copyText(subt)} variant='link' _hover={{
                                        textDecoration: 'none',
                                    }}>  <Icon as={MdContentCopy} mr={2} boxSize={5} /> </Button>
                                </ListItem>

                                )
                                )}
                            </UnorderedList>
                        </Box>
                    ))}
                </Stack>
                <Flex position="relative" direction='column' align="center" justifyContent="center">
                    <Stack spacing={3} ml={7} w={{ sm: "100%", md: "90%" }} filter={showPaywall && "blur(5px)"} userSelect={showPaywall && "none"} pointerEvents={showPaywall && "none"} position="relative">
                        <Text fontSize='32px' fontWeight="bold">Product Description</Text>
                        {productDescription.map((pd, index) => (
                            <>
                                <Flex direction="row" align="center">
                                    <Text fontWeight="bold" fontSize="17px">{pd.title}</Text>
                                    <Button variant='link' _hover={{
                                        textDecoration: 'none',
                                    }} > <Icon as={AiOutlineReload} mr={2} ml={4} boxSize={5} /> </Button>
                                    <Button onClick={() => copyText(pd.body)} variant='link' _hover={{
                                        textDecoration: 'none',
                                    }}>  <Icon as={MdContentCopy} mr={2} boxSize={5} /> </Button>
                                </Flex>
                                <Text fontWeight="">
                                    <TypewriterComponent
                                        options={{
                                            strings: pd.body,
                                            autoStart: true,
                                            delay: 30,
                                            cursor: ""
                                        }}
                                    />
                                    {/* {pd.body} */}
                                </Text>
                            </>
                        ))}
                    </Stack>

                    <Flex display={!showPaywall ? "none" : "flex"} direction="column" align="center" w={{ sm: "250px", md: "380px" }} py={3} px={2} backgroundColor="#F4A023E0" color="#fff" position="absolute" >
                        <Text fontWeight="bold">Generate full Product Listings Includes</Text>
                        <UnorderedList>
                            <ListItem>Includes Description</ListItem>
                            <ListItem>Includes inclusion of SEO Keywords</ListItem>
                            <ListItem>Includes Exports to TXT or DOC</ListItem>
                        </UnorderedList>
                        <Button variant='link' color="#fff" mt={5} _hover={{
                            textDecoration: 'none',
                        }}>UPGRADE NOW</Button>
                    </Flex>
                </Flex>
                <Stack direction='row' justifyContent="center" spacing={4} filter={showPaywall && "blur(2px)"} userSelect={showPaywall && "none"} pointerEvents={showPaywall && "none"}>
                    <Button leftIcon={<AiFillFilePdf />} colorScheme='brand' variant='solid'>
                        Export PDF
                    </Button>
                    <Button leftIcon={<FcDocument />} colorScheme='brand' variant='solid'>
                        Export Word
                    </Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Listing