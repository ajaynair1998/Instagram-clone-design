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
        container
        spacing={1}
        xs={12}
        sx={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: "2rem",
          ml: "0",
        }}
      >
        <Grid
          item
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

          <Typography variant={"body1"} sx={{ mt: "2rem" }}>
            <b>{props.userName.toUpperCase()}</b>
          </Typography>
        </Grid>

        <Grid
          container
          className="profile-follow-section"
          sx={{
            flexDirection: "row",
            justifyContent: "space-around",
            mt: "2rem",
            gap: "2rem",
            ml: "0",
          }}
        >
          <Grid item fluid sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>
              <b>{props.likes}</b>
            </Typography>
            <Typography
              variant={"subtitle2"}
              sx={{ fontSize: "0.8rem", width: "100px" }}
            >
              POSTS
            </Typography>
          </Grid>
          <Grid item fluid sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>
              <b>{props.likes}</b>
            </Typography>
            <Typography
              variant={"subtitle2"}
              sx={{ fontSize: "0.8rem", width: "100px" }}
            >
              FOLLOWING
            </Typography>
          </Grid>
          <Grid item fluid sx={{ textAlign: "center" }}>
            <Typography variant={"h5"}>
              <b>{props.likes}</b>
            </Typography>
            <Typography
              variant={"subtitle2"}
              sx={{ fontSize: "0.8rem", width: "100px" }}
            >
              FOLLOWERS
            </Typography>
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
