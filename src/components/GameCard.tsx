import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} loading="lazy" />
      <CardBody>
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack marginTop={2} alignItems="self-end">
          <Heading fontSize="2xl">{game.name}</Heading>
          <Emoji rating={game.rating_top}/>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
