import React from "react";
import { Box, typography } from "@mui/system";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { Hidden } from "@mui/material";
import { useTheme } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/system";
import { createStyles, makeStyles } from '@mui/styles'

const useStyles= makeStyles((theme) => {
  return {
    palette: {
      mode: "light",
      primary: {
        main: "#fff",
        light: "#fff",
        dark: "#f5f5f5",
      },
    },
    avatar: {
      mx: "auto",
      height: "250px",
      width: "250px",
    },
  };
});

import randomData from "../../libs/randomData.json";

export default function PersonSection(props) {
    const classes=useStyles()
  return (
    
      <Box>
        <Grid fluid className="image-container" sx={{ mt: "1rem" }}>
          <Avatar
            className={classes.avatar}
            variant="rounded"
            src={props.profilePhoto}
            // sx={{ mx: "auto", height: "250px", width: "250px" }}
          />

          <Container fluid>
            <Typography variant={"h5"}>
              <b>{props.userName}</b>
            </Typography>
          </Container>
        </Grid>
      </Box>
   
  );
}
PersonSection.defaultProps = {
  userName: randomData[1].user.instagram_username,
  profilePhoto: randomData[1].urls.regular,
};
