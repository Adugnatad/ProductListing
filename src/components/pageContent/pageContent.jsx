import { Box, Button, Flex, Link, ListItem, Stack, Text, UnorderedList } from '@chakra-ui/react'
import Generation from './generation';
import Listing from './Listing';
const PageContent = () => {




    return (
        <Box w="60%" px={10} mb="50px">
            <Listing />
            {/* <Generation /> */}

        </Box >
    )
}

export default PageContent