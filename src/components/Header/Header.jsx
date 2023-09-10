import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Header = () => {
  const linkColor = useColorModeValue("white", "black");
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("black", "white")}
        color={useColorModeValue("white", "black")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          align="center"
          justify={{ base: "center", md: "start" }}
        >
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt=""
              height={30}
              display={{ sm: "none", md: "flex" }}
            />
          </Link>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <Stack direction={"row"} spacing={4}>
              {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                  <Link
                    p={3}
                    href={navItem.page ?? "#"}
                    fontSize={"sm"}
                    fontWeight={500}
                    color={linkColor}
                    borderRadius="10px"
                    _hover={{
                      textDecoration: "none",
                      backgroundColor: "#2C4058",
                    }}
                  >
                    {navItem.label}
                  </Link>
                </Box>
              ))}
            </Stack>
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          {/* <Button
            as={"a"}
            p={3}
            fontSize={"sm"}
            fontWeight={400}
            variant="link"
            color="#fff"
            _hover={{
              textDecoration: "none",
              backgroundColor: "#2C4058",
            }}
            href={"#"}
          >
            2 Credits
          </Button> */}
          <Link href="/upgrade">
            <Button
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg="#3182CE"
            >
              Upgrade
            </Button>
          </Link>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
};

export default Header;

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"center"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "New",
    page: "/new",
  },
  {
    label: "Listings",
    page: "/listing",
  },
  {
    label: "Account",
    page: "/account",
  },
];
