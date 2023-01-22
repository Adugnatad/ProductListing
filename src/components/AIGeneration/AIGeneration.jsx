import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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
    Flex,
    RadioGroup,
    Radio,
    Textarea,
    Heading
} from '@chakra-ui/react'

import { ChevronDownIcon, ChevronRightIcon, InfoIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react'
import { AiOutlineReload } from "react-icons/ai"
import { MdContentCopy } from "react-icons/md"
import { EmailChipInput } from '../Chip/Chip';
import PageContent from '../pageContent/pageContent';
import { useState } from 'react';

const AIGeneration = ({ generation }) => {
    const [showAdvancedOptions, setShowAdvancedOptions] = useState(false);
    const AIGenerationSchema = Yup.object().shape({
        productName: Yup.string().required('Required'),
        productFeatures: Yup.string().required('required'),
        seoKeywords: Yup.array().min(3, 'atleast 3 keywords required').required('required'),
    });
    return (
        <Flex w="100%" direction={{ sm: "column", md: "row" }}>
            <Box w={{ sm: "90%", md: "35%" }} my="60px" px={10} mx={{ sm: "auto", md: 0 }}>
                <Heading mb="30px">AI Generation</Heading>
                <Formik
                    initialValues={{
                        productName: '',
                        brand: '',
                        productFeatures: '',
                        seoKeywords: [],
                        bulletPoin1: '',
                        bulletPoin2: '',
                        bulletPoin3: '',
                        bulletPoin4: '',
                        bulletPoin5: '',
                        bulletPointsLenth: '1',
                        bulletPointsEmoji: '1',
                        descriptionEmoji: '1',
                    }}
                    validationSchema={AIGenerationSchema}
                    onSubmit={(values) => {
                        alert(JSON.stringify(values, null, 2))
                    }}>
                    {({ values, errors, touched, handleChange, handleSubmit, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <FormControl w="100%" mb={3}>
                                <FormLabel color="#000" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                    Product / Listing Name:
                                    <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                </FormLabel>
                                <Input variant='filled' placeholder='Fleur de Sel Sea Salt' name='productName' onChange={handleChange} value={values.productName} />
                                {errors.productName && touched.productName ? (<Text fontSize={14} color="#ff0000">{errors.productName}</Text>) : null}
                            </FormControl>
                            <FormControl w="100%" mb={3}>
                                <FormLabel color="#000" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                    Brand: [Optional]
                                    <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                </FormLabel>
                                <Input variant='filled' placeholder='Tablissima' name='brand' onChange={handleChange} value={values.brand} />
                            </FormControl>
                            <FormControl w="100%" mb={3}>
                                <FormLabel color="#000" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                    Product Features:
                                    <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                </FormLabel>
                                <Textarea variant='filled' placeholder='Sea Salt, Fleur de Sel, Caviar of Salt, Made in France, Trusted by the best chefs' name='productFeatures' onChange={handleChange} value={values.productFeatures} h={20} />
                                {errors.productFeatures && touched.productFeatures ? (<Text fontSize={14} color="#ff0000">{errors.productFeatures}</Text>) : null}
                            </FormControl>
                            <FormControl w="100%" mb={3}>
                                <FormLabel color="#000" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                    SEO Keywords:
                                    <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                </FormLabel>
                                <EmailChipInput initialSeos={["Fleur de Sel", "Flaky Sea Salt", "Hand Harvested"]} name="seoKeywords" onChange={handleChange} setFieldValue={setFieldValue} />
                                {errors.seoKeywords && touched.seoKeywords ? (<Text fontSize={14} color="#ff0000">{errors.seoKeywords}</Text>) : null}
                            </FormControl>
                            <Flex direction="row" align="center" my={7} cursor="pointer" onClick={() => { setShowAdvancedOptions(!showAdvancedOptions) }}>
                                <Flex direction="row" align="center">
                                    {showAdvancedOptions ?
                                        <ChevronDownIcon mr={1} boxSize={5} />
                                        : <ChevronRightIcon mr={1} boxSize={5} />}
                                    <Text fontWeight="bold"> Advanced [Optional]</Text>
                                </Flex>
                                <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                            </Flex>
                            {showAdvancedOptions &&
                                <>
                                    <FormControl w="100%" >
                                        <FormLabel color="#909090" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                            Bullet Points Focus: [Optional]
                                            <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                        </FormLabel>
                                        <Stack spacing={3}>
                                            <Input variant='filled' placeholder='Hand Harvested' name="bulletPoin1" onChange={handleChange} value={values.bulletPoin1} />
                                            <Input variant='filled' placeholder='Artisanal Salt' name="bulletPoin2" onChange={handleChange} value={values.bulletPoin2} />
                                            <Input variant='filled' placeholder='Caviar of Salt' name="bulletPoin3" onChange={handleChange} value={values.bulletPoin3} />
                                            <Input variant='filled' placeholder='France' name="bulletPoin4" onChange={handleChange} value={values.bulletPoin4} />
                                            <Input variant='filled' placeholder='Quality cork box' name="bulletPoin5" onChange={handleChange} value={values.bulletPoin5} />
                                        </Stack>
                                    </FormControl>
                                    <FormControl w="100%" my={7}>
                                        <FormLabel color="#909090" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                            Bullet Points Lengh: [Optional]
                                            <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                        </FormLabel>
                                        <RadioGroup defaultValue={values.bulletPointsLenth}>
                                            <Flex direction="row">
                                                <Radio value='1' name="bulletPointsLenth" onChange={() => setFieldValue("bulletPointsLenth", 1)} mr={7}>
                                                    150 Char.
                                                </Radio>
                                                <Radio value='2' name="bulletPointsLenth" onChange={() => setFieldValue("bulletPointsLenth", 2)} mr={7}>
                                                    250 Char.
                                                </Radio>
                                                <Radio value='3' name="bulletPointsLenth" onChange={() => setFieldValue("bulletPointsLenth", 3)} mr={7}>
                                                    300 Char.
                                                </Radio>
                                            </Flex>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl w="100%" mb={7}>
                                        <FormLabel color="#909090" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                            Bullet Points Emoji : [Optional]
                                            <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                        </FormLabel>
                                        <RadioGroup defaultValue={values.bulletPointsEmoji}>
                                            <Flex direction="row">
                                                <Radio value='1' name="bulletPointsEmoji" onChange={() => setFieldValue("bulletPointsEmoji", 1)} mr={7}>
                                                    None
                                                </Radio>
                                                <Radio value='2' name="bulletPointsEmoji" onChange={() => setFieldValue("bulletPointsEmoji", 2)} mr={7}>
                                                    Tick (✔️)
                                                </Radio>
                                                <Radio value='3' name="bulletPointsEmoji" onChange={() => setFieldValue("bulletPointsEmoji", 3)} mr={7}>
                                                    AI Generated
                                                    (⭐ 🇧🇷🇮🇹)
                                                </Radio>
                                            </Flex>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormControl w="100%" mb={7}>
                                        <FormLabel color="#909090" fontWeight="bold" display="flex" flexDirection="row" alignItems="center">
                                            Descriptions Emoji : [Optional]
                                            <InfoIcon mx={1} boxSize={3} alignSelf="center" />
                                        </FormLabel>
                                        <RadioGroup defaultValue={values.descriptionEmoji}>
                                            <Flex direction="row">
                                                <Radio value='1' name="descriptionEmoji" onChange={() => setFieldValue("descriptionEmoji", 1)} mr={7}>
                                                    None
                                                </Radio>
                                                <Radio value='2' name="descriptionEmoji" onChange={() => setFieldValue("descriptionEmoji", 2)} mr={7}>
                                                    Tick (✔️)
                                                </Radio>
                                                <Radio value='3' name="descriptionEmoji" onChange={() => setFieldValue("descriptionEmoji", 3)} mr={7}>
                                                    AI Generated
                                                    (⭐ 🇧🇷🇮🇹)
                                                </Radio>
                                            </Flex>
                                        </RadioGroup>
                                    </FormControl>
                                </>
                            }

                            <Button type='submit' colorScheme='blue' w="90%" mb={10}>
                                {generation ? "Generate a Listing with AI" :
                                    (<Flex direction="row" align="center">
                                        <Image src='/assets/buttonIcon.svg' alt='' mx={3} />
                                        <Text mb={1}>Copy this Listing</Text>
                                        <Image src='/assets/buttonIcon.svg' alt='' mx={3} />
                                    </Flex>
                                    )}
                            </Button>
                            <Stack spacing={1} display="flex" alignItems="flex-start">
                                <Button variant='link' _hover={{
                                    textDecoration: 'none',
                                }}>
                                    <Icon as={AiOutlineReload} mr={2} />
                                    <Text>Generate New content</Text>
                                </Button>
                                <Button variant='link' _hover={{
                                    textDecoration: 'none',
                                }}>
                                    <Icon as={MdContentCopy} mr={2} />
                                    <Text>Copy and Paste</Text>
                                </Button>
                            </Stack>
                        </Form>

                    )}
                </Formik>
            </Box>
            <Box w="50px" mt="60px" bgGradient='linear(to-r, #fff, #fafafa, #ddd)' />
            <PageContent generation={generation} />
        </Flex >
    )
}

export default AIGeneration