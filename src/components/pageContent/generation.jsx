import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Generation = () => {
    return (
        <Stack spacing={3} w="400px" ml={7}>
            <Text fontSize={40} fontWeight="bold" mt="60px" mb="30px">Generate your
                Product Listing</Text>
            <Text fontSize="14px">Complete the form on the left to generate your Product Listing.</Text>
            <Text fontSize="14px">Each product generation will use 1 credit.</Text>
            <Text fontSize="14px">The more details you input the better your results will be. </Text>
            <Text fontSize="14px">You can benefit from unlimited revisions for each listing
                (Same inputs with new results).</Text>
        </Stack>
    )
}

export default Generation