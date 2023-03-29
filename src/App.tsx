import "./App.css";

import * as React from "react";

import useConfig from "./components/useConfig";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, createTheme, IconButton, ThemeProvider, Toolbar, Typography } from "@mui/material";

/**
 * Our Web Application
 */
export default function App() {
  const config = useConfig();
  const theme = createTheme({
    palette: {
      primary: {
        main: config.app.THEME_PRIMARY,
      },
      secondary: {
        main: config.app.THEME_SECONDARY,
      },
    },
  });

  const SocialIcons = () => (
    <Box>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="linkedin"
        href="https://www.linkedin.com/in/cody-t-h-c-647ab962"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton edge="end" color="inherit" aria-label="github" href="https://github.com/codyit" target="_blank">
        <GitHubIcon />
      </IconButton>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
              Cody T.-H. Chiu
            </Typography>

            <SocialIcons />
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
