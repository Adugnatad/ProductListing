import { Formik } from "formik";
import * as Yup from "yup";
import {
  Text,
  Input,
  Stack,
  Box,
  Link,
  Button,
  Center,
  Heading,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import LandingPage from "../components/LandingPage/LandingPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [Overlay, setOverlay] = useState(false);
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("required"),
  });
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection={{ sm: "column-reverse", md: "row" }}
      alignItems={{ sm: "center", md: "normal" }}
      justifyContent={{ sm: "start", md: "between" }}
      w="full"
      minH="100vh"
    >
      <Box
        w={{ sm: "90%", md: "30%" }}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Flex
          display={Overlay ? "flex" : "none"}
          alignItems="center"
          justifyContent="center"
          w="100%"
          h="100%"
          bgColor="#5A05052F"
          position="absolute"
          top="0"
          zIndex={2}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#5A0505"
            size="xl"
          />
        </Flex>
        <Box w="90%" display="flex" flexDirection="column" mx={10}>
          <Heading mb={2}>Sign up</Heading>
          <Box display="flex" flexDirection="row">
            <Text mr={2}>or </Text>
            <Link color="#5897f9" href="#">
              sign in to your account
            </Link>
          </Box>
        </Box>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            setOverlay(true);
            setTimeout(() => {
              navigate("/");
            }, [2000]);
          }}
        >
          {({ values, errors, touched, handleChange, handleSubmit }) => (
            <Box
              my={8}
              display="flex"
              flexDirection="column"
              alignItems="start"
              w="90%"
            >
              <Box w="100%">
                <Stack spacing={4}>
                  <Input
                    placeholder="First name"
                    size="md"
                    className="border-[1px] px-2 py-1"
                    name="firstName"
                    onChange={handleChange}
                    value={values.firstName}
                  />
                  {errors.firstName && touched.firstName ? (
                    <Text fontSize={14} color="#ff0000">
                      {errors.firstName}
                    </Text>
                  ) : null}
                  <Input
                    placeholder="Last name"
                    size="md"
                    className="border-[1px] px-2 py-1"
                    name="lastName"
                    onChange={handleChange}
                    value={values.lastName}
                  />
                  {errors.lastName && touched.lastName ? (
                    <Text fontSize={14} color="#ff0000">
                      {errors.lastName}
                    </Text>
                  ) : null}
                  <Input
                    placeholder="Email"
                    size="md"
                    className="border-[1px] px-2 py-1"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {errors.email && touched.email ? (
                    <Text fontSize={14} color="#ff0000">
                      {errors.email}
                    </Text>
                  ) : null}
                  <Input
                    placeholder="Password"
                    type="password"
                    size="md"
                    className="border-[1px] px-2 py-1"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {errors.password && touched.password ? (
                    <Text fontSize={14} color="#ff0000">
                      {errors.password}
                    </Text>
                  ) : null}
                </Stack>
              </Box>
              <Text fontSize={13} my={3} color="#bbb">
                This page is protected by reCAPTCHA, and subject to the Google
                <Link color="#5897f9" href="#" ml={1}>
                  Privacy Policy
                </Link>{" "}
                and
                <Link color="#5897f9" href="#" ml={1}>
                  Terms of service.
                </Link>
              </Text>
              {/* <Checkbox defaultChecked>I agree to the Dropbox Terms</Checkbox> */}
              <Stack
                spacing={5}
                mt={5}
                w="100%"
                alignItems={{ sm: "center", md: "flex-start" }}
              >
                <Button
                  onClick={handleSubmit}
                  colorScheme="blue"
                  w={{ sm: "216.33px", md: "90%" }}
                >
                  Sign up
                </Button>
                {/* <Button
                  w={{ sm: "fit-content", md: "90%" }}
                  maxW={"lg"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                  className="border-[1px] py-1"
                >
                  <Center w={{ md: 300 }}>
                    <Text>Continue with Google</Text>
                  </Center>
                </Button> */}
              </Stack>
            </Box>
          )}
        </Formik>
      </Box>
      <LandingPage />
    </Box>
  );
}

export default Signup;
