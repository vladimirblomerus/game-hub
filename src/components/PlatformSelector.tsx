import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? "Platform: " + selectedPlatform?.name : "Platforms"}
      </MenuButton>
      <MenuList onChange={(value) => console.log(value)}>
        {data.results.map((platform) => (
          <MenuItem
            key={platform.id}
            bgColor={platform.id === selectedPlatform?.id ? "gray.200" : ""}
            color={platform.id === selectedPlatform?.id ? "gray.900" : ""}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
