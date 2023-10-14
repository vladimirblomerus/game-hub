import { Badge } from "@chakra-ui/react";

const CriticScore = ({ score }: { score: number }) => {
  const color = score >= 80 ? "green" : score >= 65 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="1rem" paddingX="2" paddingY={1.25} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
