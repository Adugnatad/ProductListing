import { Box, Button, Flex, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import Generation from './generation';
import Listing from './Listing';
const PageContent = ({ generation, setOverlay }) => {




    return (
        <Box w={{ sm: "100%", md: "70%" }} px={10} mb="50px">
            {!generation ? <Generation /> : <Listing setOverlay={setOverlay} />}

        </Box >
    )
}

export default PageContent