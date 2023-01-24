import { Box, Button, Flex, Heading, Image, Input, Link, Text } from '@chakra-ui/react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useState } from 'react'
import LandingPage from '../LandingPage/LandingPage';

const ResetPassword = () => {
    const [showCode, setShowCode] = useState(false);
    const ResetSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <Box display="flex" flexDirection={{ sm: "column-reverse", md: "row" }} alignItems={{ sm: "center", md: "normal" }} justifyContent={{ sm: "start", md: "between" }} w="full" h="100vh">
            <Flex w={{ sm: "90%", md: "30%" }} display="flex" flexDirection="column" alignItems="center" justifyContent="center" position="relative">

                <Flex direction="column" align="center" >
                    <Heading mb={2}>Reset Password</Heading>
                    {!showCode ?
                        <Text fontSize="14px" color="#000" textAlign="center">Please enter your email to reset your password.</Text>
                        : <Text fontSize="14px" color="#000" textAlign="center">Please enter the code sent to your email.</Text>
                    }
                </Flex>
                <Formik
                    initialValues={{
                        email: '',

                    }}
                    validationSchema={ResetSchema}
                    onSubmit={(values) => {
                        setShowCode(true);
                    }}>
                    {({ errors, touched, handleSubmit, handleChange, values }) => (
                        <Flex direction="column" align="flex-start" w="90%">
                            {!showCode && <Input placeholder='Email' mt={5} color="#fff" name="email" onChange={handleChange} value={values.email} />}
                            {errors.email && touched.email ? (<Text fontSize={14} color="#ff0000">{errors.email}</Text>) : null}
                            {showCode && <Input type="number" placeholder='Code' color="#fff" mt={5} name="code" onChange={handleChange} value={values.code} />}
                            {errors.code && touched.code ? (<Text fontSize={14} color="#ff0000">{errors.code}</Text>) : null}
                            <Button onClick={handleSubmit} colorScheme="blue" alignSelf="center" w="100%" mt={5}>{!showCode ? 'Reset' : 'submit'}</Button>
                            <Link color="#5897f9" href='#' fontSize="14px" alignSelf="center" my={4}>Go back to Login page</Link>
                        </Flex>
                    )}
                </Formik>
            </Flex>
            <LandingPage />
        </Box>
    )
}

export default ResetPassword