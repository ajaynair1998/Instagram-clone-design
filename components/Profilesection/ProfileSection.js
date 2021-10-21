import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import randomData from "../../libs/randomData.json";

function ProfileSection(props) {
  return (
    <Box p={2} sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid
        fluid
        spacing={1}
        xs={12}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "2rem",
        }}
      >
        <Grid
          item
          container
          className="avatar-section"
          sx={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.5rem",
          }}
        >
          <Avatar
            src={props.profilePhoto}
            sx={{ mx: "auto" }}
            style={{
              height: "100px",
              width: "100px",
              border: "2px solid red",
            }}
          />

          <Typography variant={"body1"}>
            <b>{props.userName.toUpperCase()}</b>
          </Typography>
        </Grid>

        <Grid
        xs={3}
          fluid
          className="profile-follow-section"
          sx={{ flexDirection: "row", justifyContent: "center", mt: "2rem" }}
        >
          <Grid item sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>
              <b>{props.likes}</b>
            </Typography>
            <Typography variant={"subtitle1"}>POSTS</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

ProfileSection.defaultProps = {
  profilePhoto: randomData[0].urls.regular,
  userName: randomData[0].user.instagram_username,
  likes: randomData[0].user.total_likes,
};

export default ProfileSection;
