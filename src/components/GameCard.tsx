import { Card, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList.tsx";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius="10px" overflow="hidden">
      <Card.Body>
        <Image src={game.background_image} alt={game.name} />
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
