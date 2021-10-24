import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import randomData from "../../libs/randomData.json";

export default function SearchSection(props) {
  let [selectedPerson, selectPerson] = useState("");
  return (
    <Box>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          maxHeight: "60rem",
          overflow: "auto",
        }}
      >
        {props.data.map((item) => {
          return item.id == selectedPerson ? (
            <ListItem
            key={item.id}
              alignItems="flex-start"
              sx={{ bgcolor: "primary.dark" }}
              onClick={() => props.selectPerson(item)}
            >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.photos[0]?.urls?.thumb} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.bio}
                  </React.Fragment>
                }
              />
            </ListItem>
          ) : (
            <ListItem
            key={item.id}
              alignItems="flex-start"
              onMouseOver={() => selectPerson(item.id)}
              onClick={() => props.selectPerson(item)}
            >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.photos[0]?.urls?.thumb} />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.bio}
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
  for (let i = 0; i < 15; i++) {
    tenRandomData.push(randomData[i]);
  }
  return tenRandomData;
};

SearchSection.defaultProps = {
  data: returnTenRandomData(randomData),
};
