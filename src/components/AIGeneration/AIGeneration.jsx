import { Formik, Form, setIn } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormLabel,
  Text,
  Image,
  Input,
  Stack,
  Box,
  Button,
  Flex,
  RadioGroup,
  Radio,
  Textarea,
  Heading,
  Tooltip,
  Spinner,
  Link,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  InfoIcon,
  SettingsIcon,
} from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";
import { AiOutlineReload } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { ChipInput } from "../Chip/Chip";
import PageContent from "../pageContent/pageContent";
import { useEffect, useRef, useState } from "react";

const AIGeneration = ({ generation }) => {
  const [progress, setProgress] = useState(0);
  const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
  const AIGenerationSchema = Yup.object().shape({
    productName: Yup.string().required("Required"),
    productFeatures: Yup.string().required("required"),
    seoKeywords: Yup.array()
      .min(3, "atleast 3 keywords required")
      .required("required"),
  });
  const [Overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (progress < 100 && Overlay) {
      setTimeout(() => {
        setProgress(progress + 1);
      }, 50);
    } else {
      setOverlay(false);
      setProgress(0);
    }
  }, [progress, Overlay]);

  return (
    <Flex w="100%" direction={{ sm: "column", md: "row" }} position="relative">
      <Flex
        display={Overlay ? "flex" : "none"}
        alignItems="flex-start"
        justifyContent="center"
        w="100%"
        h="100%"
        bgColor="#FFFFFFBF"
        position="absolute"
        top="0"
        zIndex={2}
      >
        <Box
          height="100vh"
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <CircularProgress value={progress} color="#5A0505" size={55}>
            <CircularProgressLabel>{progress}%</CircularProgressLabel>
          </CircularProgress>
        </Box>
      </Flex>
      <Box
        w={{ sm: "90%", md: "30%" }}
        my="60px"
        px={10}
        mx={{ sm: "auto", md: 0 }}
        borderRightWidth="1px"
      >
        <Flex direction="row" align="center" mb="30px">
          <Image src="/assets/FiSettings.svg" mr={2} />
          <Heading>AI Generation</Heading>
        </Flex>
        <Formik
          initialValues={{
            productName: "",
            brand: "",
            productFeatures: "",
            seoKeywords: [],
            bulletPoin1: "",
            bulletPoin2: "",
            bulletPoin3: "",
            bulletPoin4: "",
            bulletPoin5: "",
            bulletPointsLenth: "1",
            bulletPointsEmoji: "1",
            descriptionEmoji: "1",
          }}
          validationSchema={AIGenerationSchema}
          onSubmit={(values) => {
            setOverlay(true);
            // alert(JSON.stringify(values, null, 2))
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <FormControl w="100%" mb={3}>
                <FormLabel
                  color="#000"
                  fontWeight="bold"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  Product / Listing Name:
                  <Tooltip hasArrow label="Product" placement="top" bg="black">
                    <button>
                      <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                    </button>
                  </Tooltip>
                </FormLabel>
                <Input
                  variant="filled"
                  placeholder="Fleur de Sel Sea Salt"
                  name="productName"
                  onChange={handleChange}
                  value={values.productName}
                />
                {errors.productName && touched.productName ? (
                  <Text fontSize={14} color="#ff0000">
                    {errors.productName}
                  </Text>
                ) : null}
              </FormControl>
              <FormControl w="100%" mb={3}>
                <FormLabel
                  color="#000"
                  fontWeight="bold"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  Brand: [Optional]
                  <Tooltip hasArrow label="Brand" placement="top" bg="black">
                    <button>
                      <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                    </button>
                  </Tooltip>
                </FormLabel>
                <Input
                  variant="filled"
                  placeholder="Tablissima"
                  name="brand"
                  onChange={handleChange}
                  value={values.brand}
                />
              </FormControl>
              <FormControl w="100%" mb={3}>
                <FormLabel
                  color="#000"
                  fontWeight="bold"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  Product Features:
                  <Tooltip hasArrow label="Features" placement="top" bg="black">
                    <button>
                      <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                    </button>
                  </Tooltip>
                </FormLabel>
                <Textarea
                  variant="filled"
                  placeholder="Sea Salt, Fleur de Sel, Caviar of Salt, Made in France, Trusted by the best chefs"
                  name="productFeatures"
                  onChange={handleChange}
                  value={values.productFeatures}
                  h={20}
                />
                {errors.productFeatures && touched.productFeatures ? (
                  <Text fontSize={14} color="#ff0000">
                    {errors.productFeatures}
                  </Text>
                ) : null}
              </FormControl>
              <FormControl w="100%" mb={3}>
                <FormLabel
                  color="#000"
                  fontWeight="bold"
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                >
                  SEO Keywords:
                  <Tooltip hasArrow label="SEO" placement="top" bg="black">
                    <button>
                      <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                    </button>
                  </Tooltip>
                </FormLabel>
                <ChipInput
                  initialSeos={[
                    "Fleur de Sel",
                    "Flaky Sea Salt",
                    "Hand Harvested",
                  ]}
                  name="seoKeywords"
                  onChange={handleChange}
                  setFieldValue={setFieldValue}
                  disabled={true}
                />
                {errors.seoKeywords && touched.seoKeywords ? (
                  <Text fontSize={14} color="#ff0000">
                    {errors.seoKeywords}
                  </Text>
                ) : null}
              </FormControl>
              <Flex
                direction="row"
                align="center"
                my={7}
                cursor="pointer"
                onClick={() => {
                  setShowAdvancedOptions(!showAdvancedOptions);
                }}
              >
                <Flex direction="row" align="center">
                  {showAdvancedOptions ? (
                    <ChevronDownIcon mr={1} boxSize={5} />
                  ) : (
                    <ChevronRightIcon mr={1} boxSize={5} />
                  )}
                  <Text fontWeight="bold"> Advanced [Optional]</Text>
                </Flex>
                <Tooltip
                  hasArrow
                  label="Advanced Options"
                  placement="top"
                  bg="black"
                >
                  <button>
                    <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                  </button>
                </Tooltip>
              </Flex>
              {showAdvancedOptions && (
                <>
                  <FormControl w="100%">
                    <FormLabel
                      color="#909090"
                      fontWeight="bold"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                    >
                      Bullet Points Focus: [Optional]
                      <Tooltip
                        hasArrow
                        label="Focus"
                        placement="top"
                        bg="black"
                      >
                        <button>
                          <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                        </button>
                      </Tooltip>
                    </FormLabel>
                    <Stack spacing={3}>
                      <Input
                        variant="filled"
                        placeholder="Hand Harvested"
                        name="bulletPoin1"
                        onChange={handleChange}
                        value={values.bulletPoin1}
                      />
                      <Input
                        variant="filled"
                        placeholder="Artisanal Salt"
                        name="bulletPoin2"
                        onChange={handleChange}
                        value={values.bulletPoin2}
                      />
                      <Input
                        variant="filled"
                        placeholder="Caviar of Salt"
                        name="bulletPoin3"
                        onChange={handleChange}
                        value={values.bulletPoin3}
                      />
                      <Input
                        variant="filled"
                        placeholder="France"
                        name="bulletPoin4"
                        onChange={handleChange}
                        value={values.bulletPoin4}
                      />
                      <Input
                        variant="filled"
                        placeholder="Quality cork box"
                        name="bulletPoin5"
                        onChange={handleChange}
                        value={values.bulletPoin5}
                      />
                    </Stack>
                  </FormControl>
                  <FormControl w="100%" my={7}>
                    <FormLabel
                      color="#909090"
                      fontWeight="bold"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                    >
                      Bullet Points Length: [Optional]
                      <Tooltip
                        hasArrow
                        label="Length"
                        placement="top"
                        bg="black"
                      >
                        <button>
                          <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                        </button>
                      </Tooltip>
                    </FormLabel>
                    <RadioGroup defaultValue={values.bulletPointsLenth}>
                      <Flex direction={{ sm: "column", md: "row" }}>
                        <Radio
                          value="1"
                          name="bulletPointsLenth"
                          onChange={() => setFieldValue("bulletPointsLenth", 1)}
                          mr={7}
                        >
                          150 Char.
                        </Radio>
                        <Radio
                          value="2"
                          name="bulletPointsLenth"
                          onChange={() => setFieldValue("bulletPointsLenth", 2)}
                          mr={7}
                        >
                          250 Char.
                        </Radio>
                        <Radio
                          value="3"
                          name="bulletPointsLenth"
                          onChange={() => setFieldValue("bulletPointsLenth", 3)}
                          mr={7}
                        >
                          300 Char.
                        </Radio>
                      </Flex>
                    </RadioGroup>
                  </FormControl>
                  <FormControl w="100%" mb={7}>
                    <FormLabel
                      color="#909090"
                      fontWeight="bold"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                    >
                      Bullet Points Emoji : [Optional]
                      <Tooltip
                        hasArrow
                        label="Emoji"
                        placement="top"
                        bg="black"
                      >
                        <button>
                          <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                        </button>
                      </Tooltip>
                    </FormLabel>
                    <RadioGroup defaultValue={values.bulletPointsEmoji}>
                      <Flex direction={{ sm: "column", md: "row" }}>
                        <Radio
                          value="1"
                          name="bulletPointsEmoji"
                          onChange={() => setFieldValue("bulletPointsEmoji", 1)}
                          mr={7}
                        >
                          None
                        </Radio>
                        <Radio
                          value="2"
                          name="bulletPointsEmoji"
                          onChange={() => setFieldValue("bulletPointsEmoji", 2)}
                          mr={7}
                        >
                          Tick (✔️)
                        </Radio>
                        <Radio
                          value="3"
                          name="bulletPointsEmoji"
                          onChange={() => setFieldValue("bulletPointsEmoji", 3)}
                          mr={7}
                        >
                          AI Generated (⭐ 🇧🇷🇮🇹)
                        </Radio>
                      </Flex>
                    </RadioGroup>
                  </FormControl>
                  <FormControl w="100%" mb={7}>
                    <FormLabel
                      color="#909090"
                      fontWeight="bold"
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                    >
                      Descriptions Emoji : [Optional]
                      <Tooltip
                        hasArrow
                        label="Descriptions Emoji"
                        placement="top"
                        bg="black"
                      >
                        <button>
                          <InfoIcon mx={1} boxSize={3} alignSelf="center" />{" "}
                        </button>
                      </Tooltip>
                    </FormLabel>
                    <RadioGroup defaultValue={values.descriptionEmoji}>
                      <Flex direction={{ sm: "column", md: "row" }}>
                        <Radio
                          value="1"
                          name="descriptionEmoji"
                          onChange={() => setFieldValue("descriptionEmoji", 1)}
                          mr={7}
                        >
                          None
                        </Radio>
                        <Radio
                          value="2"
                          name="descriptionEmoji"
                          onChange={() => setFieldValue("descriptionEmoji", 2)}
                          mr={7}
                        >
                          Tick (✔️)
                        </Radio>
                        <Radio
                          value="3"
                          name="descriptionEmoji"
                          onChange={() => setFieldValue("descriptionEmoji", 3)}
                          mr={7}
                        >
                          AI Generated (⭐ 🇧🇷🇮🇹)
                        </Radio>
                      </Flex>
                    </RadioGroup>
                  </FormControl>
                </>
              )}

              {generation ? (
                <Button
                  type="submit"
                  colorScheme="brand"
                  w="fit-content"
                  mb={10}
                >
                  Generate a Listing with AI{" "}
                </Button>
              ) : (
                <Link href="/home">
                  <Button colorScheme="brand" w="fit-content" mb={10}>
                    <Flex direction="row" align="center">
                      <Image src="/assets/buttonIcon.svg" alt="" mx={3} />
                      <Text mb={1}>Copy this Listing</Text>
                      <Image src="/assets/buttonIcon.svg" alt="" mx={3} />
                    </Flex>
                  </Button>
                </Link>
              )}
              <Stack spacing={1} display="flex" alignItems="flex-start">
                <Flex direction="row" align="center">
                  <Icon as={AiOutlineReload} color="#7182A4" mr={2} />
                  <Text color="#7182A4">Generate New content</Text>
                </Flex>
                <Flex direction="row" align="center">
                  <Icon as={MdContentCopy} color="#7182A4" mr={2} />
                  <Text color="#7182A4">Copy and Paste</Text>
                </Flex>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
      <PageContent generation={generation} setOverlay={setOverlay} />
    </Flex>
  );
};

export default AIGeneration;
