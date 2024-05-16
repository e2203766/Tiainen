import { Box, Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "70vh",
      }}
      points="0,100 50,00, 100,100"
    >
      <Container maxWidth="xl">
        <Typography
          sx={{ color: "primary.main", mx: 2, p: 2, textAlign: "center" }}
          variant="h4"
        >
          A community where you can help and support
        </Typography>

        <Typography sx={{ mx: 2, p: 2, textAlign: "center" }} variant="h6">
          We are together to make this world a better place
        </Typography>

        <Typography
          sx={{ mx: 2, p: 2, mb: 4, textAlign: "justify" }}
          variant="p"
        >
          Some motivation speech about us and mission <br />
          <br />
          about how we doing this
          <br />
          <br />
          some call to action
          <a
            href="//my link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong> @KostyaChi</strong>
          </a>
          .
          <br />
          <br />
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
