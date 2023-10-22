import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const sortTypes = ["Relevance", "Date added", "Name", "Release date", "Popularity", "Average rating"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem key="1">Relevance</MenuItem>
        <MenuItem key="2">Date added</MenuItem>
        <MenuItem key="3">Name</MenuItem>
        <MenuItem key="4">Release date</MenuItem>
        <MenuItem key="5">Popularity</MenuItem>
        <MenuItem key="6">Average rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
