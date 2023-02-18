import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Checkbox,
    CheckboxGroup,
    Text,
    Image,
    Input,
    Stack,
    Box,
    Link,
    Button,
    Center,
    Heading,
    Flex,
    Spinner
} from '@chakra-ui/react'
import { Formik } from 'formik';
import { FcGoogle } from 'react-icons/fc';
import LandingPage from '../components/LandingPage/LandingPage';
import * as Yup from 'yup';
import { useState } from 'react';



const Login = () => {
    const [Overlay, setOverlay] = useState(false);
    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required("required"),
    });
    return (
        <Box display="flex" flexDirection={{ sm: "column-reverse", md: "row" }} alignItems={{ sm: "center", md: "normal" }} justifyContent={{ sm: "start", md: "between" }} w="full" minH="100vh">
            <Box width={{ sm: "90%", md: "30%" }} display="flex" flexDirection="column" alignItems="center" justifyContent="center" py={5} position="relative">
                <Flex display={Overlay ? "flex" : "none"} alignItems="center" justifyContent="center" w="100%" h="100%" bgColor="#5A05052F" position="absolute" top="0" zIndex={2}>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='#5A0505'
                        size='xl'
                    />
                </Flex>
                <Box display="flex" flexDirection="column" mx={10} w="90%">
                    <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" w="100%" mb={3} className='self-start'>
                        <Heading mb={3}>Sign in</Heading>
                        <Box display="flex" flexDirection="row" alignItems="center">
                            <Text fontSize="14px" mr={1}>or</Text>
                            <Link color="#5897f9" href='#' fontSize="14px"> create an account</Link>
                        </Box>
                    </Box>
                    <Button
                        w="100%"
                        variant={'outline'}
                        leftIcon={<FcGoogle />}
                        className="border-[1px] py-1">
                        <Center w="100%">
                            <Text>Continue with Google</Text>
                        </Center>
                    </Button>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="center" w="90%" my={8} >
                    <Box display="flex" flexDirection="row" alignItems="center" w="100%">
                        <hr className='w-full' />
                        <Text mx={3} className='mx-3'>or</Text>
                        <hr className='w-full' />
                    </Box>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            setOverlay(true)
                            alert(JSON.stringify(values, null, 2))
                        }}>
                        {({ values, errors, touched, handleChange, handleSubmit }) => (

                            <Box w="100%" spacing={3}>

                                <FormControl w="100%">
                                    <FormLabel color="#686868">Email</FormLabel>
                                    <Input size='md' w="100%" name='email' className='outline-0 border-[1px] border-[#ddd' onChange={handleChange} value={values.email} />
                                    {errors.email && touched.email ? (<Text fontSize={14} color="#ff0000">{errors.email}</Text>) : null}
                                </FormControl>
                                <FormControl w="100%">
                                    <FormLabel color="#686868">Password</FormLabel>
                                    <Input type="password" size='md' w="100%" name='password' className='outline-0 border-[1px] border-[#ddd]' onChange={handleChange} value={values.password} />
                                    {errors.password && touched.password ? (<Text fontSize={14} color="#ff0000">{errors.password}</Text>) : null}
                                </FormControl>
                                <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" mt={4} w="100%">
                                    <Checkbox defaultChecked>Remember me</Checkbox>
                                    <Button onClick={handleSubmit} colorScheme='blue'>Sign In</Button>
                                </Box>
                                <Link color="#5897f9" href='#' fontSize="14px">Forgot your password?</Link>

                            </Box>
                        )}
                    </Formik>
                </Box>
            </Box>
            <LandingPage />
        </Box>
    )
}

export default Login