import { Box, Button, Flex, Image, Input, Link, Text } from '@chakra-ui/react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import { useState } from 'react'

const ResetPassword = () => {
    const [showCode, setShowCode] = useState(false);
    const ResetSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
    });
    return (
        <Flex direction="column" align="center" justify="center" width="100%" height="100vh" bgColor="#fff">
            <Flex direction="column" align="center" justify="center" borderWidth="1px" w="40%" h="70%" bgColor="#4C0505" position="relative" borderRadius="5px">
                <Box position="absolute" top="10"><Image src='/assets/logo.png' /></Box>
                <Flex direction="column" align="center" mt="10">
                    <Text fontSize="18px" color="#F96F02">Reset Password</Text>
                    {!showCode ?
                        <Text fontSize="14px" color="#fff">Please enter your email to reset your password.</Text>
                        : <Text fontSize="14px" color="#fff">Please enter your the code sent to your email.</Text>
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
                        <Flex direction="column" align="flex-start" w="60%">
                            {!showCode && <Input placeholder='Email' mt={5} color="#fff" name="email" onChange={handleChange} value={values.email} />}
                            {errors.email && touched.email ? (<Text fontSize={14} color="#ff0000">{errors.email}</Text>) : null}
                            {showCode && <Input type="number" placeholder='Code' color="#fff" mt={5} />}
                            <Button onClick={handleSubmit} colorScheme="brand" alignSelf="center" w="100%" mt={5}>{!showCode ? 'Reset' : 'submit'}</Button>
                            <Link color="#5897f9" href='#' fontSize="14px" alignSelf="center" my={4}>Go back to Login page</Link>
                        </Flex>
                    )}
                </Formik>
            </Flex>
        </Flex>
    )
}

export default ResetPassword