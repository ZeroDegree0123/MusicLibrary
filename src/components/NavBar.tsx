import { Button, HStack, Image } from "@chakra-ui/react";
import { GoHome } from "react-icons/go";
import { PiBrowsersLight } from "react-icons/pi";

import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="center" width="full">
        <Button
          bg="gray.700"
          borderRadius="full"
          padding={0}
          margin={2}
          size="xl"
        >
          <GoHome color="white" />
        </Button>
        <SearchInput />
        <Button
          bg="gray.700"
          borderRadius="full"
          padding={0}
          margin={2}
          size="xl"
        >
          <PiBrowsersLight color="white" />
        </Button>
      </HStack>
    </>
  );
};

export default NavBar;
