import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  searchQuery: string;
  onChangeQuery: (query: string) => void;
}

const NavBar = ({searchQuery, onChangeQuery}:Props) => {
  return (
    <HStack paddingInline={3}>
      <Image src={logo} boxSize="60px" />
      <SearchBar searchQuery={searchQuery} onChangeQuery={onChangeQuery}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
