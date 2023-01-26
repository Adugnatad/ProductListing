import {
    Flex,
    Input,
    Tag,
    TagLabel,
    TagCloseButton,
    Box,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";



export const Chip = ({ seo, onCloseClick }) => {

    return (
        <Tag key={seo} borderRadius={5} variant="solid" backgroundColor="#BEE3F8" color="#000" m={2} >
            <TagLabel>{seo}</TagLabel>
            <TagCloseButton
                onClick={() => {
                    onCloseClick(seo);
                }}
            />
        </Tag>
    )
}


export const ChipInput = ({ initialSeos, setFieldValue, disabled }) => {
    const [inputValue, setInputValue] = useState("");
    const [seos, setSeos] = useState(initialSeos);

    useEffect(() => {
        setFieldValue("seoKeywords", seos)
    }, [seos])


    const seoExists = (seo) => seos.includes(seo);

    const addSeos = (seosToAdd) => {
        const validatedSeos = seosToAdd
            .map((e) => e.trim())
            .filter((seo) => !seoExists(seo));

        const newSeos = [...seos, ...validatedSeos];

        setSeos(newSeos);
        setInputValue("");
    };

    const removeSeos = (seo) => {
        const index = seos.findIndex((e) => e === seo);
        if (index !== -1) {
            const newSeos = [...seos];
            newSeos.splice(index, 1);
            setSeos(newSeos);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (["Backspace", "Delete"].includes(e.key) && inputValue.length === 0) {
            e.preventDefault();
            const newSeos = [...seos];
            newSeos.pop();
            setSeos(newSeos);
        }
        if (["Enter", "Tab", ","].includes(e.key)) {
            e.preventDefault();

            addSeos([inputValue]);
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();

        const pastedData = e.clipboardData.getData("text");
        const pastedSeos = pastedData.split(",");
        addSeos(pastedSeos);
    };

    const handleCloseClick = (seo) => {
        if (!disabled) {
            removeSeos(seo);
        }
    };

    const [width, setWidth] = useState(1);
    const ref = useRef(null);
    return (
        <>
            <Box w="100%" borderWidth="1px" borderRadius="lg" backgroundColor="#EDF2F7" p={3} >
                <Flex direction="row" justifyContent="start" w="100%" cursor="pointer" onClick={() => ref.current.focus()}>
                    <Flex direction="row" flexWrap="wrap">
                        {seos.map((seo) => (
                            <Chip seo={seo} key={seo} onCloseClick={handleCloseClick} />
                        ))}
                        <Input
                            disabled={disabled}
                            py={2}
                            ref={ref}
                            variant='unstyled'
                            w={`${width}px`}
                            type="text"
                            onPaste={handlePaste}
                            onKeyDown={handleKeyDown}
                            onKeyDownCapture={() => setWidth((inputValue.length + 1) * 8)}
                            onChange={handleChange}
                            value={inputValue}
                        />

                    </Flex>
                </Flex>
            </Box>
        </>
    );
};
