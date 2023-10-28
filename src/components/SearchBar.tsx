import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react";
import {AiOutlineSearch} from "react-icons/ai"

interface Props {
    searchQuery: string;
    onChangeQuery: (query: string) => void;
}

const SearchBar = ({searchQuery, onChangeQuery}:Props) => {
    const ref = useRef<HTMLInputElement>(null);
    
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onChangeQuery(ref.current.value);
    }}>
        <InputGroup>
            <InputLeftElement children={<AiOutlineSearch/>}/>
            <Input ref={ref} borderRadius="20px" placeholder="Search games..." variant="filled"/>
        </InputGroup>
    </form>
  )
}

export default SearchBar