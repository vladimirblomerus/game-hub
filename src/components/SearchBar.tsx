import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import {AiOutlineSearch} from "react-icons/ai"

const SearchBar = () => {
  return (
    <InputGroup>
        <InputLeftElement children={<AiOutlineSearch/>}/>
        <Input borderRadius="20px" placeholder="Search games..." variant="filled"/>
    </InputGroup>
  )
}

export default SearchBar