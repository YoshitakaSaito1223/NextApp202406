import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function NotFound() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ height: "90vh",width:"100%" }}
        direction="column"
      >
        <Typography variant="h1">404 Not Found</Typography>

        <Button href="/">Take Me Back To Home</Button>
      </Grid>
    </>
  );
}
