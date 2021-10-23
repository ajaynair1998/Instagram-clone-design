import React from "react";
import { useState } from "react";
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

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import VerifiedIcon from "@mui/icons-material/Verified";

import randomData from "../../libs/randomData.json";

export default function SearchSection(props) {
  let [selectedPerson, selectPerson] = useState("");


  console.log(selectedPerson);
  return (
    <Box>
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        {props.data.map((item) => {
          return item.user.name == selectedPerson ? (
            <ListItem alignItems="flex-start" sx={{ bgcolor: "primary.dark" }} onClick={()=>props.selectPerson(item)}>
              <ListItemAvatar>
                <Avatar alt={item.user.name} src={item.urls.thumb} />
              </ListItemAvatar>
              <ListItemText
                primary={item.user.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.user.bio}
                  </React.Fragment>
                }
              />
            </ListItem>
          ) : (
            <ListItem
              alignItems="flex-start"
              onMouseOver={() => selectPerson(item.user.name)}
              onClick={()=>props.selectPerson(item)}
            >
              <ListItemAvatar>
                <Avatar alt={item.user.name} src={item.urls.thumb} />
              </ListItemAvatar>
              <ListItemText
                primary={item.user.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.user.bio}
                  </React.Fragment>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

const returnTenRandomData = (randomData) => {
  let tenRandomData = [];
  for (let i = 0; i < 7; i++) {
    tenRandomData.push(randomData[i]);
  }
  return tenRandomData;
};

SearchSection.defaultProps = {
  data: returnTenRandomData(randomData),
};
