import { useState } from "react";
import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Grid
        templateAreas="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={2}
      >
        <GridItem rowSpan={1} colSpan={3}>
          <NavBar />
        </GridItem>
        <GridItem rowStart={2} colSpan={1}>
          <h1>Left aside</h1>
        </GridItem>
        <GridItem rowStart={2} colStart={2} colSpan={2}>
          <h1>Main</h1>
        </GridItem>
        <GridItem rowStart={2} colStart={3} colSpan={3}>
          <h1>Right aside</h1>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
