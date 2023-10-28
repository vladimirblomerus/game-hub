import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner marginTop="10" marginLeft="35%" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {data.results.map((genre: Genre) => (
          <ListItem key={genre.id} padding={1}>
            <HStack>
              <Image 
                boxSize="32px" 
                objectFit="cover" 
                borderRadius={8} 
                src={getCroppedImageUrl(genre.image_background)} 
              />
              <Button
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                fontSize={selectedGenre?.id === genre.id ? "xl" : "lg"}
                onClick={() => onSelectGenre(genre)}
                whiteSpace="normal"
                textAlign="left"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
