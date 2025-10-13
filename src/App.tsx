import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: ` "nav" "main"`,
        lg: `"nav nav" 
            "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        side
      </GridItem>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
