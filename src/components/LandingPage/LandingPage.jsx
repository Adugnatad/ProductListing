import React from 'react'
import {
    Text,
    Image,
    Box,
} from '@chakra-ui/react'
const LandingPage = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" w='75%' color="#fff" className=' bg-gradient-to-br from-[#000000] to-[#880808]'>
            <Image src='/assets/logo.png' alt='' />
            <Text fontSize='50' fontWeight="bold" textAlign="center" className=' leading-normal'>SuperCharge your Product <br /> Listing with AI!</Text>
            <Box display='flex' flexDirection="column" alignItems="center" mt={50} w="100%">
                <Text fontSize='20' fontWeight="bold" mb={20}>Trusted by more than 300 Brands</Text>
                <Box display="flex" flexDirection="row" alignItems="center" backgroundColor="#fff" py={3} px={10} w="80%">
                    <Box mr={10}>
                        <Image src='/assets/logo1.webp' alt='' width={100} />
                    </Box>
                    <Box mr={10}>
                        <Image src='/assets/logo2.svg' alt='' width={100} />
                    </Box>
                    <Box mr={10}>
                        <Image src='/assets/logo3.svg' alt='' width={100} />
                    </Box>
                    <Box mr={10}>
                        <Image src='/assets/logo4.webp' alt='' width={100} />
                    </Box>
                    <Box mr={10}>
                        <Image src='/assets/logo5.svg' alt='' width={100} mr={10} />
                    </Box>
                    <Box mr={10}>
                        <Image src='/assets/logo6.svg' alt='' width={100} />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage