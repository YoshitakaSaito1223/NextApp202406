"use client";

import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type Joke = {
  type: string;
  setup: string;
  punchline: string;
  id: number;
};

export default function JokeAPI() {
  const [joke, setJoke] = useState<Joke | null>(null);
  const [isShow,setIsShow]=useState(false);

  const handleShowPunchline=()=>{
    setIsShow(true);
  }

  async function getJoke() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/jokes/random"
    )
      .then((response) => response.json())
      .then((data) => {
        setJoke(data);
        setIsShow(false);
      });
  }

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <Container sx={{mt:2}}>
      <Grid container justifyContent="left" alignItems="left">
        <Grid item xs={12}>
          <Typography variant="h6">setup</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4">{joke?.setup}</Typography>
        </Grid>
        <Grid item xs={12} sx={{mt:2}}>
          <Typography variant="h6">Punchline</Typography>
        </Grid>
        <Grid item xs={12} >
          <Typography variant="h4" sx={isShow?{backgroundColor:"white"}:{backgroundColor:"black"}}>{joke?.punchline}</Typography>
        </Grid>
        <Grid item xs={12} sx={{mt:3}}>
          <Button variant="outlined" onClick={handleShowPunchline} sx={{mr:2}}>
            Show Punchline
          </Button>
          <Button variant="contained" onClick={getJoke}>
            Get a new joke
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
