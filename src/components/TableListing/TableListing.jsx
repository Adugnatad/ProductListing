import { Box, Button, Checkbox, Flex, Heading, Input, InputGroup, InputLeftElement, Stack, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import { MdDeleteForever } from "react-icons/md"
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai"
import { FiEdit2, FiSearch } from "react-icons/fi"
import { Icon } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'

const TableListing = () => {

    const tableData = [
        {
            name: "aleur de Sel ",
            brand: "cablissima",
            id: "78342"
        },
        {
            name: "eleur de Sel ",
            brand: "aablissima",
            id: "18343"
        },
        {
            name: "dleur de Sel ",
            brand: "dablissima",
            id: "58344"
        },
        {
            name: "dleur de Sel ",
            brand: "dablissima",
            id: "08344"
        },
        {
            name: "dleur de Sel ",
            brand: "dablissima",
            id: "98344"
        },
        {
            name: "dleur de Sel ",
            brand: "dablissima",
            id: "38344"
        }
    ]
    const [sortName, setSortName] = useState(0);
    const [sortBrand, setSortBrand] = useState(0);
    const [sortIds, setSortIds] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [sortedData, setSortedData] = useState(tableData);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

    useEffect(() => {
        if (sortName === 0) {
            setSortedData(tableData);
        } else if (sortName === 1) {
            const data = [...tableData].sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            setSortedData(data)
        } else if (sortName === 2) {
            const data = [...tableData].sort((a, b) =>
                a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
            setSortedData(data)
        }

    }, [sortName])

    useEffect(() => {
        if (sortBrand === 0) {
            setSortedData(tableData);
        } else if (sortBrand === 1) {
            const data = [...tableData].sort((a, b) =>
                a.brand.toLowerCase() < b.brand.toLowerCase() ? -1 : 1)
            setSortedData(data)
        } else if (sortBrand === 2) {
            const data = [...tableData].sort((a, b) =>
                a.brand.toLowerCase() > b.brand.toLowerCase() ? -1 : 1)
            setSortedData(data)
        }

    }, [sortBrand])

    useEffect(() => {
        if (sortIds === 0) {
            setSortedData(tableData);
        } else if (sortIds === 1) {
            const data = [...tableData].sort((a, b) =>
                a.id.toLowerCase() < b.id.toLowerCase() ? -1 : 1)
            setSortedData(data)
        } else if (sortIds === 2) {
            const data = [...tableData].sort((a, b) =>
                a.id.toLowerCase() > b.id.toLowerCase() ? -1 : 1)
            setSortedData(data)
        }

    }, [sortIds])


    useEffect(() => {
        const dataToSearch = tableData;
        const data = dataToSearch.filter((row) => (row.name).toLowerCase().includes(searchText.toLowerCase()));
        setSortedData(data);
    }, [searchText])

    const SortByName = () => {
        if (sortName >= 2) {
            setSortName(0);
        } else {
            setSortName(sortName + 1);
        }
    }

    const SortByBrand = () => {
        if (sortBrand >= 2) {
            setSortBrand(0);
        } else {
            setSortBrand(sortBrand + 1);
        }
    }

    const SortById = () => {
        if (sortIds >= 2) {
            setSortIds(0);
        } else {
            setSortIds(sortIds + 1);
        }
    }


    const selectRow = (id) => {
        const selectedRow = document.getElementById(id);
        selectedRow.classList.toggle('selected')
    }
    const selectTable = () => {
        const selectedRow = document.getElementById('tableBody');
        selectedRow.classList.toggle('selected')
    }
    const deleteRow = (id) => {
        const data = sortedData.filter(rows => rows.id !== id);
        setSortedData(data);
    }
    const paginate = (direction) => {
        const pageNumber = tableData.length / rowsPerPage;
        if (direction === "back") {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            }
        } else if (direction === "forward") {
            if (currentPage < pageNumber) {
                setCurrentPage(currentPage + 1)
            }
        }
    }
    return (
        <TableContainer mx={{ md: 10 }} h="100%">
            <Flex direction={{ sm: "column", md: "row" }} justifyContent={{ md: "space-between" }} align="center" px="30px" my={{ sm: "40px", md: "60px" }}>
                <Heading mb={3}>Listings</Heading>
                <Stack spacing={4} w={{ sm: "100%", md: "fit-content" }}>
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            children={<FiSearch color='gray.300' />}
                        />
                        <Input type="text" w={{ sm: "100%", md: "300px" }} placeholder="Search" onChange={(e) => setSearchText(e.target.value)} />
                    </InputGroup>
                </Stack>
            </Flex>
            <Table variant='simple'>
                <Thead bgColor="#F5F9FB">
                    <Tr>
                        <Th w="10px"><Checkbox onChange={() => selectTable()} /></Th>
                        <Th cursor="pointer" _hover={{ color: '#F96F02' }} onClick={SortByName}>
                            Name
                            {sortName === 2 && <Icon as={AiOutlineArrowDown} ml={3} />}
                            {sortName === 1 && <Icon as={AiOutlineArrowUp} ml={3} />}
                        </Th>
                        <Th cursor="pointer" _hover={{ color: '#F96F02' }} onClick={SortByBrand}>
                            Brand
                            {sortBrand === 2 && <Icon as={AiOutlineArrowDown} ml={3} />}
                            {sortBrand === 1 && <Icon as={AiOutlineArrowUp} ml={3} />}
                        </Th>
                        <Th cursor="pointer" _hover={{ color: '#F96F02' }} onClick={SortById}>
                            ID
                            {sortIds === 2 && <Icon as={AiOutlineArrowDown} ml={3} />}
                            {sortIds === 1 && <Icon as={AiOutlineArrowUp} ml={3} />}
                        </Th>
                        <Th w="50px"></Th>
                    </Tr>
                </Thead>
                <Tbody id='tableBody'>
                    {currentRows.map(data => (
                        <Tr key={data.id} id={data.id}>
                            <Td><Checkbox onChange={() => selectRow(data.id)} /></Td>
                            <Td cursor="pointer" onClick={() => selectRow(data.id)}>{data.name}</Td>
                            <Td>{data.brand}</Td>
                            <Td>{data.id}</Td>
                            <Td>
                                <Icon as={MdDeleteForever} mr={2} cursor="pointer" onClick={() => deleteRow(data.id)} />
                                <Icon as={FiEdit2} cursor="pointer" mr={2} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <Box display="flex" flexDirection={{ sm: "column", md: "row" }} alignItems="center" justifyContent="space-between" px="20px" py="10px" w="100%">
                <Text fontSize={15} color="" my={3}>Showing {indexOfFirstRow} to {indexOfLastRow} of {tableData.length} results</Text>
                <Flex direction="row" align="center">
                    <Button variant='outline' mr={3} onClick={() => paginate("back")}>Previous</Button>
                    <Button variant='outline' onClick={() => paginate("forward")}>Next</Button>
                </Flex>
            </Box>
        </TableContainer>
    )
}

export default TableListing