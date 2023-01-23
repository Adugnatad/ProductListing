import { Box, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <Flex flexDirection="column" w="100%" bgColor="#000" align="center" pt="5" pb="7">
            <Image src='/assets/footerLogo.svg' />
        </Flex>
    )
}

export default Footer