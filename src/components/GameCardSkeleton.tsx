import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius="10px" overflow="hidden">
      <Card.Body>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
