import { Box, Button, Flex, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import Generation from './generation';
import Listing from './Listing';
const PageContent = ({ generation }) => {




    return (
        <Box w={{ sm: "100%", md: "60%" }} px={10} mb="50px">
            {!generation ? <Generation /> : <Listing />}

        </Box >
    )
}

export default PageContent