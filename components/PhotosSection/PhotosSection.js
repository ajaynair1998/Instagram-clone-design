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
import { createStyles, makeStyles } from "@mui/styles";

import VerifiedIcon from "@mui/icons-material/Verified";

import randomData from "../../libs/randomData.json";

export default function PhotosSection(props) {
  return (
    <Box sx={{ backgroundColor: "#fff" }} p={3}>
      <Box sx={{ marginTop: "1rem" }}>
        <Typography variant="h6">
          <b>Featured Stories</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          mt: "1rem",
          flexWrap:"wrap"
        }}
      >
        {props.featuredStories.map((item) => {
          return (
            <Avatar
              variant="rounded"
              src={item}
              sx={{ height: "8rem", width: "8rem", mr: "1rem",mt:"1rem" }}
            />
          );
        })}
      </Box>
      <Box sx={{ marginTop: "4rem" }}>
        <Typography variant="h6">
          <b>Photo Feed</b>
        </Typography>
      </Box>
       <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          mt: "1rem",
          flexWrap:"wrap"
        }}
      >
        {props.featuredStories.map((item) => {
          return (
            <Avatar
              variant="rounded"
              src={item}
              sx={{ height: "10rem", width: "10rem", mr: "1rem",ml:"0",mt:"1rem" }}
            />
          );
        })}
        
      </Box>
    </Box>
  );
}

let returnRandomStories = (randomData) => {
  let randomStories = [];
  for (let i = 5; i < 10; i++) {
    randomStories.push(randomData[i].urls.regular);
  }
  return randomStories;
};

PhotosSection.defaultProps = {
  featuredStories: returnRandomStories(randomData),
};
