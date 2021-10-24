import React from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
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
          flexWrap: "wrap",
        }}
      >
        {props.featuredStories.map((item) => {
          return (
            <Avatar
              key={item.id}
              variant="rounded"
              src={item.img}
              sx={{ height: "8rem", width: "8rem", mr: "1rem", mt: "1rem" }}
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
          flexWrap: "wrap",
        }}
      >
        {props.featuredStories.map((item) => {
          return (
            <Avatar
              key={item.id}
              variant="rounded"
              src={item.img}
              sx={{
                height: "10rem",
                width: "10rem",
                mr: "1rem",
                ml: "0",
                mt: "1rem",
              }}
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
    randomStories.push({img:randomData[i].urls.regular,id:randomData[i].id});
  }
  return randomStories;
};

PhotosSection.defaultProps = {
  featuredStories: returnRandomStories(randomData),
};
