import { Button, HStack } from "@chakra-ui/react";

function App() {
  return (
    <HStack justify="center" minH="100vh" bg="gray.50">
      <Button colorPalette="blue">Play Game 🎮</Button>
      <Button variant="outline">Settings ⚙️</Button>
    </HStack>
  );
}

export default App;
