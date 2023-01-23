import { Box, Button, Flex, Image, Input, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ResetPassword = () => {
    return (
        <Flex direction="column" align="center" justify="center" width="100%" height="100vh" bgColor="#fff">
            <Flex direction="column" align="center" justify="center" borderWidth="1px" w="40%" h="70%" bgColor="#4C0505" position="relative" borderRadius="5px">
                <Box position="absolute" top="10"><Image src='/assets/logo.png' /></Box>
                <Flex direction="column" align="center" mt="10">
                    <Text fontSize="18px" color="#F96F02">Reset Password</Text>
                    <Text fontSize="14px" color="#fff">Please enter your email to reset your password.</Text>
                </Flex>
                <Flex direction="column" align="flex-start" w="60%">
                    <Input placeholder='Email' my={5} color="#fff" />
                    {/* <Input type="number" placeholder='Code' color="#fff" mb={4} /> */}
                    <Button colorScheme="brand" alignSelf="center" w="100%">Reset</Button>
                    <Link color="#5897f9" href='#' fontSize="14px" alignSelf="center" my={4}>Go back to Login page</Link>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default ResetPassword