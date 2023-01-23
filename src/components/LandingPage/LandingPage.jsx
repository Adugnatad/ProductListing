import React from 'react'
import {
    Text,
    Image,
    Box,
    Flex,
} from '@chakra-ui/react'
const LandingPage = () => {
    return (
        <Box display='flex' flexDirection='column' alignItems="center" justifyContent="center" w={{ sm: '100%', md: '75%' }} py={{ sm: 10, md: 0 }} px={{ sm: 2, md: 0 }
        } color="#fff" className='bg-gradient-to-br from-[#000000] to-[#880808]' >
            <Image src='/assets/logo.png' alt='' />
            <Text fontSize={{ sm: '20', md: '50' }} fontWeight="bold" textAlign="center" className=' leading-normal'>SuperCharge your Product <br /> Listing with AI!</Text>
            <Box display='flex' flexDirection="column" alignItems="center" mt={50} w="100%">
                <Text fontSize='20' fontWeight="bold" mb={{ sm: 0, md: 20 }}>Trusted by more than 300 Brands</Text>
                <Box display={{ sm: "none", md: "flex" }} flexDirection="column" py={3} px={10} w={"80%"}>
                    <Flex direction="row" align="center" justify="center" mb={4}>
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo1.webp' alt='' width={100} />
                        </Box>
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo2.webp' alt='' width={100} />
                        </Box>
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo3.webp' alt='' width={100} />
                        </Box>
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo4.webp' alt='' width={100} />
                        </Box>
                    </Flex>
                    <Flex direction="row" align="center" justify="center">
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo7.webp' alt='' width={100} />
                        </Box>
                        <Box mr={{ sm: 0, md: 10 }}>
                            <Image src='/assets/logo6.webp' alt='' width={100} />
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Box >
    )
}

export default LandingPage