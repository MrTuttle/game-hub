// src/components/NavBar.tsx

import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="3.75rem" />
      <Text>navBar</Text>
    </HStack>
  );
};

export default NavBar;
