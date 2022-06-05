import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Link } from "react-router-dom";

const list = [
  {
    title: "Vamos",
    createdAt: Date.now(),
    author: "ohoraming",
  },
  {
    title: "Test",
    createdAt: Date.now(),
    author: "ohoraming",
  },
];

export default function FolderList() {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {list.map((item) => (
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ImageIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Link to={item.title.toLowerCase()}>{item.title}</Link>}
            secondary={new Date(item.createdAt).toLocaleString()}
          />
        </ListItem>
      ))}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Work' secondary='Jan 7, 2014' />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary='Vacation' secondary='July 20, 2014' />
      </ListItem> */}
    </List>
  );
}
