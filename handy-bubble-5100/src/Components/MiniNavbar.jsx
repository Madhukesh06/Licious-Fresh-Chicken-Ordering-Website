import {
  Box,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

const MiniNavbar = () => {
  return (
    <Box
      style={{
        display: "flex",
        padding: "0.8px",
        alignContent: "center",
        justifyContent: "space-between",
        backgroundColor: "#EAEAEA",
        fontSize: "1rem",
        alignItem: "center",
        fontFamily: "sans-serif",

      }}
    >
      <Menu>
        <Box>
          <MenuButton ml="10rem" mr="1rem">
            Why Licious?
          </MenuButton>
          <MenuButton mr="1rem"><li > Download app </li></MenuButton>
          <MenuButton mr="1rem">
            <Image src="https://m.licious.in/image/apple-logo.svg" alt="tag" />
          </MenuButton>
          <MenuButton mr="20rem">
            <Image src="https://m.licious.in/image/google-play.svg" alt="tag" />
          </MenuButton>
        </Box>
      </Menu >

      <Menu>
        <Box>
          <MenuButton mr="2rem">  FSSC Certification </MenuButton>
          <MenuButton mr="2rem"><li>About Us</li></MenuButton>
          <MenuButton mr="2rem"><li>Careers@Licious</li></MenuButton>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton mr="8rem" isActive={isOpen}>
                  {isOpen ? <li>Contact Us</li> : <li>Contact Us</li>}
                </MenuButton>
                <MenuList>
                  <MenuItem>1800-4190-786</MenuItem>
                  <Divider />
                  <MenuItem>Talktous@licious.com</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      </Menu >
    </Box >
  );
};
export default MiniNavbar;
