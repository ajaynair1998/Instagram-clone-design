import React from "react";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import randomData from "../../libs/randomData.json";
import Divider from "@mui/material/Divider";
import { Button } from "@mui/material";
import { Hidden } from "@mui/material";

// ICONS
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import PeopleIcon from "@mui/icons-material/People";
import People from "@mui/icons-material/People";
import PrimarySearchAppBar from "../Navbar/Navbar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SendIcon from '@mui/icons-material/Send';

function ProfileSection(props) {
  return (
    <Box p={2} sx={{ backgroundColor: "#f5f5f5" }}>
      <Grid
        fluid
        container
        spacing={1}
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
          <Container sx={{ mt: "2rem" }} className="divider-profile-section">
            <Divider variant="fullWidth" />
          </Container>
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
        <Container sx={{ mt: "2rem" }} className="divider-profile-section">
          <Divider variant="fullWidth" />
        </Container>

        <Box
          container
          fluid
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            justifySelf: "flex-start",
            width: "100%",
            gap: "10%",
            mt: "1rem",
            pl: "1rem",
            alignItems: "center",
          }}
        >
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <HomeIcon variant="subtitle1" sx={{}} />
            <Typography variant="subtitle1">Feed</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="explore-button"
          >
            <SearchIcon variant="subtitle1" sx={{}} />
            <Typography>Explore</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <WhatshotIcon/>
            <Typography variant="subtitle1">Trending Tags</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <AutoFixHighIcon />
            <Typography>Top Posts</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <People />

            <Typography>People</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <NotificationsIcon/>
            <Typography>Notifications</Typography>
          </Box>
          <Box
            fluid
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              justifySelf: "flex-start",
              width: "100%",
              gap: "10%",
              mt: "1rem",
              pl: "1rem",
              alignItems: "center",
            }}
            className="feed-button"
          >
            <SendIcon/>
            <Typography>Direct</Typography>
          </Box>
        </Box>
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
