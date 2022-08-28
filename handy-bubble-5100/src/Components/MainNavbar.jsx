import {
    Box,
    Image,
    Input,
    InputGroup,
    InputLeftElement,

    Text,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import LoginDrawer from "./LoginDrawer";
import PopHover from "./PopHover";

export default function MainNavbar() {
    return (
        <Box
            style={{
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                display: "flex",
                justifyContent: "space-between",
                padding: "1rem",
                boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                // border: "1px solid red",
                position: "fixed",
                top: "1.6rem",
                width: "100%",
            }}
        >

            <Box ml="9em" mr="2rem" cursor="pointer">
                <Image
                    width="7rem"
                    src="https://m.licious.in/image/rebranding/svg/licious-logo.svg"
                />
            </Box>

            <Box display="flex" mr="2rem" cursor="pointer">
                <Box>
                    <Image src="https://m.licious.in/image/rebranding/svg/location-dropdown.svg" />
                </Box>

                <Box cursor="pointer">
                    <Text>BANGALURU</Text>
                    <Box display="flex">
                        <Text>Indiranagar, Bangal...</Text>
                        <Image
                            style={{ width: "1rem", cursor: "pointer" }}
                            src="https://m.licious.in/image/chevron.svg"
                        />
                    </Box>
                </Box>
            </Box>

            <Box mr="2rem" cursor="pointer">

                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<SearchIcon color="red.500" />}
                    />
                    <Input width="30rem" type="text" placeholder="Search for any delicious product" />
                </InputGroup>
            </Box>
            <Box >
                <PopHover />
            </Box>


            <Box >
                <LoginDrawer />
            </Box>
            <Box mr="8rem" display="flex" alignItems="center" cursor="pointer">

                <Image width="35px"

                    src="https://m.licious.in/image/rebranding/png/Cart_v2.png"
                    alt="tag"

                />{" "}
                Cart
            </Box>

        </Box >
    );
}
