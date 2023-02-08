import { Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react';

const Generation = () => {
    return (
        <Stack spacing={3} w="100%" ml={7}>
            <Flex direction="row" align="center" mt="60px" mb="25px">
                <Image src='/assets/humburger.svg' mr={2} mt={1} h="27px" w="27px" />
                <Heading>Generate your Product Listing</Heading>
            </Flex>
            <Text fontSize="14px">Complete the form on the left to generate your Product Listing.</Text>
            <Text fontSize="14px">Each product generation will use 1 credit.</Text>
            <Text fontSize="14px">The more details you input the better your results will be. </Text>
            <Text fontSize="14px">You can benefit from unlimited revisions for each listing
                (Same inputs with new results).</Text>
        </Stack>
    )
}

export default Generation