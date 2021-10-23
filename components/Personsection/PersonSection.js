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

export default function PersonSection(props) {
  return (
<Box sx={{ background: "#fff" }} p={3}>

      <Button variant="text" sx={{ pl: "0" }}>
        <Typography color="black">{"<-"} Back to people</Typography>{" "}
      </Button>
      <Grid className="image-container" sx={{ mt: "2rem" }}>
        <Grid item md={3} xs={5} sm={5}>
          <Avatar
            variant="rounded"
            src={props.profilePhoto}
            sx={{ height: "250px", width: "250px", mx: "auto" }}
          />
        </Grid>
      </Grid>
      <Box direction="row" sx={{ justifyContent: "flex-start", mx: "auto" }}>
        <Typography variant={"h5"} sx={{ textAlign: "start", mt: "1rem" }}>
          <b>{props.userName}</b>{" "}
          <VerifiedIcon sx={{ color: "blue", mb: "-0.3rem" }} />
        </Typography>
      </Box>
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "flex-start",
          gap: "1rem",
          mt: "1rem",
        }}
      >
        <Typography>
          <b> {props.photos} Photos</b>
        </Typography>

        <Typography>
          <b> {props.followers} Followers</b>
        </Typography>
      </Box>

      <Box sx={{ mt: "1rem" }}>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nostrum, eveniet, pariatur architecto nihil porro iste tempora eos
          tenetur incidunt.
        </Typography>
      </Box>

      <Box sx={{ mt: "2rem" }} className="divider-profile-section">
        <Divider variant="fullWidth" />
      </Box>

      <Box sx={{ mt: "1rem" }}>
        <Typography>
          <b>Favourite Tags</b>
        </Typography>
        <Typography variant="body2" sx={{ mt: "0.5rem" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          magnam corporis recusandae neque facilis a animi itaque dolorem?
          Saepe, cumque.
        </Typography>
      </Box>

      <Box sx={{ mt: "1rem" }}>
        <Typography>
          <b>Activity</b>
        </Typography>
        <Typography variant="body2" sx={{ mt: "0.5rem" }}>
          Proffessional photographer
        </Typography>
      </Box>

      <Box sx={{ mt: "1rem" }}>
        <Typography>
          <b>Location</b>
        </Typography>
        <Typography variant="body2" sx={{ mt: "0.5rem" }}>
          Paris ,France
        </Typography>
      </Box>

      <Box sx={{ mt: "1rem" }}>
        <Typography>
          <b>Favourite profiles</b>
        </Typography>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "flex-start",
            gap: "0.5rem",
            mt: "1rem",
          }}
        >
          {props.favouriteProfiles.map((item) => {
            return <Avatar src={item} variant={"rounded"} key={item}></Avatar>;
          })}
        </Box>
      </Box>
    </Box>
  );
}

let favouriteProfiles = (randomData) => {
  let thumbNails = [];
  for (let i = 0; i < 4; i++) {
    thumbNails.push(randomData[i].urls.thumb);
  }
  return thumbNails;
};
PersonSection.defaultProps = {
  userName: randomData[1].user.instagram_username,
  profilePhoto: randomData[1].urls.regular,
  photos: "500",
  followers: "3K",
  favouriteProfiles: favouriteProfiles(randomData),
};
