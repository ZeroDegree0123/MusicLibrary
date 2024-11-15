import { useRef } from "react";
import { Input } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

// revisit lesson to add search icon

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form>
      <Input
        ref={ref}
        borderRadius={20}
        placeholder="Search Music..."
        variant="subtle"
        bg="gray.700"
      />
    </form>
  );
};

export default SearchInput;
