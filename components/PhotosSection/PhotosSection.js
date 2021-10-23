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
    <Box sx={{ backgroundColor: "#f5f5f5" }} p={3}>
      <Box sx={{ height: "100%", backGroundColor: "black", marginTop: "1rem" }}>
        <Typography variant="h6">
          <b>Featured Stories</b>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          mt:"1rem"
        }}
      >
        {props.featuredStories.map((item) => {
          return (
            <Avatar
              variant="rounded"
              src={item}
              sx={{ height: "100px", width: "auto", mr: "auto" }}
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
