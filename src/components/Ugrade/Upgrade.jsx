import { Button, Flex, FormControl, FormLabel, Heading, Stack, Switch, Text } from '@chakra-ui/react'
import React from 'react'



const Upgrade = () => {
    return (
        <Flex direction="column" align="flex-start" m={7} my="60px">
            <Heading ml="70px" mb="30px">Upgrade your Account</Heading>
            <Flex direction="column" align="center" w="100%" py={3} px={5} my={10} alignSelf="center">
                <FormControl display='flex' alignItems='center' w="fit-content" px={2} py={2} bgColor="#fff" borderRadius={5}>
                    <FormLabel htmlFor='email-alerts' mb='0'>
                        Pay Monthly and Save!
                    </FormLabel>
                    <Switch id='email-alerts' colorScheme='brand' defaultChecked />
                </FormControl>
                <Flex w="100%" flexDirection={{ sm: "column", md: "row" }} justifyContent="center" align={{ sm: "center", md: "normal" }}>
                    <Flex direction="column" align="center" bgColor="#fff" borderWidth={1} py={4} px={3} my={3} mr={{ md: 10 }} w={{ sm: "90%", md: "290px" }} borderRadius="10px">
                        <Stack textAlign="center" spacing={1} mb={5}>
                            <Text fontSize="20px" fontWeight="bold">Lite</Text>
                            <Text fontSize="14px" fontWeight="medium">For Beginners</Text>
                        </Stack>
                        <Stack textAlign="center" spacing={1} mb="60px">
                            <Text fontSize="20px" fontWeight="bold">10 Listings</Text>
                            <Text fontSize="14px" fontWeight="medium">SEO Optimization</Text>
                            <Text fontSize="14px" fontWeight="medium">Title Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Bullet Points Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Description Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Export Listing</Text>
                            <Text fontSize="14px" fontWeight="medium">Unlimited Revisions</Text>
                            <Text fontSize="14px" fontWeight="medium">English Only</Text>
                        </Stack>
                        <Stack textAlign="center" mb={5}>
                            <Flex>
                                <Text fontSize={18} fontWeight="bold" color="#C4C4C4">$</Text>
                                <Text fontSize={40} fontWeight="bold" lineHeight="10">49</Text>
                                <Text fontSize={16} fontWeight="semibold" color="#C4C4C4" alignSelf="flex-end" lineHeight="10">/month</Text>
                            </Flex>
                            <Text color="#C4C4C4" fontSize="13px" >Billed Monthly</Text>

                        </Stack>
                        <Button colorScheme='orange' variant='outline' height="30px" width="150px" borderRadius={3}>
                            Start Now
                        </Button>
                    </Flex>
                    <Flex direction="column" align="center" bgColor="#fff" borderWidth={1} borderColor="#F96F02" py={4} px={3} my={3} mr={{ md: 10 }} w={{ sm: "90%", md: "290px" }} borderRadius="10px" position="relative">
                        <Text fontSize="11px" color="#fff" bgColor="#F96F02" p="0.5" borderBottomLeftRadius="3" borderTopRightRadius="10px" position="absolute" top="0" right="-0.1">MOST POPULAR</Text>
                        <Stack textAlign="center" spacing={1} mb={5}>
                            <Text fontSize="20px" fontWeight="bold">Professional</Text>
                            <Text fontSize="14px" fontWeight="medium">For Specialists</Text>
                        </Stack>
                        <Stack textAlign="center" spacing={1} mb="60px">
                            <Text fontSize="20px" fontWeight="bold">10 Listings</Text>
                            <Text fontSize="14px" fontWeight="medium">SEO Optimization</Text>
                            <Text fontSize="14px" fontWeight="medium">Title Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Bullet Points Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Description Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Export Listing</Text>
                            <Text fontSize="14px" fontWeight="medium">Unlimited Revisions</Text>
                            <Text fontSize="14px" fontWeight="medium">English Only</Text>
                        </Stack>
                        <Stack textAlign="center" mb={5}>
                            <Flex>
                                <Text fontSize={18} fontWeight="bold" color="#C4C4C4">$</Text>
                                <Text fontSize={40} fontWeight="bold" lineHeight="10">99</Text>
                                <Text fontSize={16} fontWeight="semibold" color="#C4C4C4" alignSelf="flex-end" lineHeight="10">/month</Text>
                            </Flex>
                            <Text color="#C4C4C4" fontSize="13px" >Billed Monthly</Text>

                        </Stack>
                        <Button colorScheme='orange' variant='outline' height="30px" width="150px" borderRadius={3}>
                            Start Now
                        </Button>
                    </Flex>
                    <Flex direction="column" align="center" bgColor="#fff" borderWidth={1} py={4} px={3} my={3} mr={{ md: 10 }} w={{ sm: "90%", md: "290px" }} borderRadius="10px">
                        <Stack textAlign="center" spacing={1} mb={5}>
                            <Text fontSize="20px" fontWeight="bold">Custom</Text>
                            <Text fontSize="14px" fontWeight="medium">For Teams</Text>
                        </Stack>
                        <Stack textAlign="center" spacing={1} mb="60px">
                            <Text fontSize="20px" fontWeight="bold">10 Listings</Text>
                            <Text fontSize="14px" fontWeight="medium">SEO Optimization</Text>
                            <Text fontSize="14px" fontWeight="medium">Title Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Bullet Points Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Description Content</Text>
                            <Text fontSize="14px" fontWeight="medium">Export Listing</Text>
                            <Text fontSize="14px" fontWeight="medium">Unlimited Revisions</Text>
                            <Text fontSize="14px" fontWeight="medium">English Only</Text>
                        </Stack>
                        <Stack textAlign="center" mb={5}>
                            <Flex>
                                {/* <Text fontSize={18} fontWeight="bold" color="#C4C4C4">$</Text> */}
                                <Text fontSize={40} fontWeight="bold" lineHeight="10">Custom</Text>
                                {/* <Text fontSize={16} fontWeight="semibold" color="#C4C4C4" alignSelf="flex-end" lineHeight="10">/month</Text> */}
                            </Flex>
                            <Text color="#C4C4C4" fontSize="13px" >Billed Annually</Text>

                        </Stack>
                        <Button colorScheme='orange' variant='outline' height="30px" width="150px" borderRadius={3}>
                            Start Now
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Text fontSize={18} fontWeight="bold" alignSelf="center">Downgrade to Free</Text>
        </Flex>
    )
}

export default Upgrade