import React from "react";
import Heading from "./components/Heading";
import Form from "./components/Form";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Banner from "./components/Banner";

function Home() {
  return (
    <>
      {/* <div className="GreenMintBackground.png" /> */}
      <Banner />

      <Container maxWidth="sm">
        <Box sx={{ my: 20
          
          
            }}>

          { <Heading
            variant="h2"
            sx={{
              my: 9,
              textAlign: "center",
              fontSize: 30,
              
            }}
          /> }
          <Form />
        </Box>
      </Container>
    </>
  );
}

export default Home;
