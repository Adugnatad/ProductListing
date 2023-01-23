import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Text } from '@chakra-ui/react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import React from 'react'

const Account = () => {
    const LoginSchema = Yup.object().shape({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <Box display="flex" flexDirection="column" alignItems="center" my="60px">
            <Heading alignSelf="flex-start" ml="80px" mb="30px">Your Account</Heading>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: ''
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2))
                }}>
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <Stack display="flex" flexDirection="column" align="center" mt={20} w="65%" mx="4%">
                        <Heading size="xl" alignSelf="start" mb={5}>Profile settings</Heading>
                        <Flex flexDirection={{ sm: "column", md: "row" }} w="100%">
                            <FormControl w="100%" mr={7}>
                                <FormLabel color="#686868">First name</FormLabel>
                                <Input size='md' w="100%" name='firstName' className='outline-0 border-[1px] border-[#ddd' onChange={handleChange} value={values.firstName} />
                                {errors.firstName && touched.firstName ? (<Text fontSize={14} color="#ff0000">{errors.firstName}</Text>) : null}
                            </FormControl>
                            <FormControl w="100%">
                                <FormLabel color="#686868">Last name</FormLabel>
                                <Input size='md' w="100%" name='lastName' className='outline-0 border-[1px] border-[#ddd' onChange={handleChange} value={values.lastName} />
                                {errors.lastName && touched.lastName ? (<Text fontSize={14} color="#ff0000">{errors.lastName}</Text>) : null}
                            </FormControl>
                        </Flex>

                        <FormControl w="100%" >
                            <FormLabel color="#686868">Email</FormLabel>
                            <Input size='md' w="100%" name='email' className='outline-0 border-[1px] border-[#ddd' onChange={handleChange} value={values.email} />
                            {errors.email && touched.email ? (<Text fontSize={14} color="#ff0000">{errors.email}</Text>) : null}
                        </FormControl>

                        <Box w="100%">
                            <hr className='mt-5' />
                        </Box>
                        <Button onClick={handleSubmit} colorScheme='brand' color="#fff" alignSelf={{ md: "flex-start" }}>Save</Button>
                    </Stack>
                )}
            </Formik>

            <Stack display="flex" flexDirection="column" align="center" w={{ sm: "90%", md: "65%" }} mt={20}>
                <Text fontSize="25px" fontWeight="bold">Billing</Text>
                <Text fontSize="18px" color="#586A7E" fontWeight="semibold">Available credits</Text>
                <Flex flexDirection={{ sm: "column", md: "row" }} align="center" justify="center" w="100%">
                    <Flex direction="column" justify="center" align={{ sm: "center", md: "normal" }} borderWidth="1px" borderRadius="7px" p={7} mr={{ md: 7 }} mb={{ sm: 4, md: 0 }} w={{ sm: "100%", md: "33%" }}>
                        <Flex direction="row" align="center">
                            <Text fontSize="14px" fontWeight="bold" color="#586A7E" mr={2}>Total credits</Text>
                            <InfoOutlineIcon color="#ddd" />
                        </Flex>
                        <Text fontSize="28px" fontWeight="bold">208,000</Text>
                        <Text fontSize="12px" color="#586A7E">0% of plan credits used</Text>
                    </Flex>
                    <Flex direction="column" justify="center" align={{ sm: "center", md: "normal" }} borderWidth="1px" borderRadius="7px" p={7} mr={{ md: 7 }} mb={{ sm: 4, md: 0 }} w={{ sm: "100%", md: "33%" }}>
                        <Flex direction="row" align="center">
                            <Text fontSize="14px" fontWeight="bold" color="#586A7E" mr={2}>Plan credits</Text>
                            <InfoOutlineIcon color="#ddd" />
                        </Flex>
                        <Text fontSize="28px" fontWeight="bold">50,000</Text>
                        <Text fontSize="12px" color="#586A7E">0% of plan credits used</Text>
                    </Flex>
                </Flex>
                <Flex direction="column" align={{ sm: "center", md: "start" }} p={4} pt={10} w="100%" borderWidth="1px" borderRadius="7px" >
                    <Flex direction="column" ml={5} >
                        <Text fontSize={16} fontWeight="medium" mb={3}>Subscription</Text>
                        <Flex direction="row" align="center">
                            <Text mr={2} fontSize="18px" fontWeight="semibold">Boss Mode</Text>
                            <Button color='#50D18E' borderColor="#50D18E" variant='outline' fontSize="14px" height="25px" width="60px">ACTIVE</Button>
                        </Flex>
                        <Text fontSize={16} color="#586A7E">50000 word credits</Text>
                        <Text fontSize={16} color="#586A7E">Billing cycle renews in 21 days</Text>
                    </Flex>
                    <Flex my={3} alignSelf={{ sm: "center", md: "flex-end" }} flexWrap="wrap" color="#586A7E">
                        <Button height={30} mr={3} mb={2}>Edit payment details</Button>
                        <Button height={30} variant="outline">Edit plan</Button>
                    </Flex>
                </Flex>
                <Flex flexDirection={{ sm: "column", md: "row" }} justify={{ md: "space-between" }} align="center" borderWidth="1px" borderRadius="7px" w="100%" px={5} py={6} my={3}>
                    <Flex direction="column" mb={4} textAlign={{ sm: "center", md: "start" }}>
                        <Text color="#5C82F9" fontWeight="bold" fontSize="18px">Get 2 months free ✌</Text>
                        <Text color="#586A7E">Pay annually to get 2 months free.</Text>
                    </Flex>
                    <Button colorScheme='brand' color="#fff" height={30}>View details</Button>
                </Flex>
                <Flex flexDirection={{ sm: "column", md: "row" }} justify={{ md: "space-between" }} align="center" borderWidth="1px" borderRadius="7px" w="100%" px={5} py={6} my={3}>
                    <Flex direction="column" mb={4} textAlign={{ sm: "center", md: "start" }}>
                        <Text fontWeight="bold" fontSize="18px">Invoices</Text>
                        <Text color="#586A7E">View your payment history</Text>
                    </Flex>
                    <Button variant="outline" color="#586A7E" height={30}>View billing history</Button>
                </Flex>

            </Stack>
        </Box >
    )
}

export default Account