import React from "react";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./Footer.css";
import { yellow} from "@mui/material/colors";
import { HashLink } from "react-router-hash-link";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

// copyright function for generate year automatically
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Developed with 🖤 by ChiKo"}
      <strong>
        <a
          className="text-style"
          href="https://some my link"
          target="_blank"
          rel="noreferrer noopener"
        >
          ChiKo
        </a>{" "}
      </strong>
      {"Copyright ©"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <footer>
      <Box
        className="sticky-container"
        sx={{
          bgcolor: "secondary.main",
          color: "text.primary",
          pb: 2,
          top: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ m: "auto" }} item xs={12} sm={6} md={4}>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ mr: 2, display: { xs: "flex", md: "flex" } }}
                  style={{ justifyContent: "center" }}
                >
                  {" "}
                  <Avatar
                    className="avatar"
                    sx={{ mt: 1, mb: 1, mr: 1, bgcolor: "white" }}
                    style={{ justifyContent: "center" }}
                  >
                    <HealingTwoToneIcon color="primary" fontSize="Small" />
                  </Avatar>
                  TIAINEN ASSOCIATION
                </Typography>
                <Divider />
              </Box>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mt: 1, bgcolor: yellow[500] }}>
                  <LocationOnIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://www.google.com/maps/place/Ristinummen+seurakuntakeskus/@63.0913235,21.7189249,17z/data=!4m6!3m5!1s0x46878a8c6b53a0a1:0x9d0eec9b037928d2!8m2!3d63.0909935!4d21.7212081!16s%2Fg%2F11cmnmbvp5?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vaasa, Ristinummen seurakuntakeskus.
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: yellow[500] }}
                >
                  <EmailIcon />
                </Avatar>
                <a className="text-style" href="mailto:kgchigrin.fin@gmail.com">
                  kgchigrin.fin@gmail.com
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: yellow[500] }}>
                  <CallIcon />
                </Avatar>
                <a className="text-style" href="mobile:+358408100387">
                  +358408100387
                </a>
              </Stack>
            </Grid>

            {/* ----------service part ---------------*/}
            <Grid item xs={12} sm={4}>
              <Root>
                <Divider>
                  <Chip label="Our directions" />
                </Divider>
              </Root>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/doctors#doctors"
                  color="inherit"
                >
                  Our team
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/services#services"
                  color="inherit"
                >
                  our projects
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink
                  className="text-style"
                  to="/appointment#appointment"
                  color="inherit"
                >
                  Contact us
                </HashLink>
              </Box>

              <Box sx={{ p: 2 }}>
                <HashLink className="text-style" to="/register" color="inherit">
                  Register in assosiation{" "}
                </HashLink>
              </Box>
            </Grid>

            {/* ----------social media part ------------*/}

            <Grid item xs={12} sm={4}>
              <Root>
                <Divider>
                  <Chip label="Find us on social media" />
                </Divider>
              </Root>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar
                  className="avatar"
                  sx={{ mb: 1, mt: 1, bgcolor: yellow[500] }}
                >
                  <InstagramIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://www.instagram.com/           /"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TIAINEN on Instagram
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: yellow[500] }}>
                  <LinkedInIcon />
                </Avatar>
                <a
                  className="text-style"
                  href="https://www.linkedin.com/in/           /"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Head of TIAINEN on LinkedIn
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: yellow[500] }}>
                  <LinkedInIcon/>
                </Avatar>
                <a
                  className="text-style"
                  href="https://github.com/              "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TIAINEN on GitHub or Facebook or...
                </a>
              </Stack>

              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{ m: 1 }}
              >
                <Avatar className="avatar" sx={{ mb: 1, bgcolor: yellow[500] }}>
                  <LinkedInIcon/>
                </Avatar>
                <a
                  className="text-style"
                  href="https://nuforum.se/what_we_do/panel-discussions             "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discussion forum
                </a>
              </Stack>
            </Grid>
          </Grid>
          <Divider sx={{ mb: 2 }} />
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
