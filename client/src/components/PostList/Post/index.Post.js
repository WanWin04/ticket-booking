import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { MoreVertIcon } from "@material-ui/icons/MoreVert";
import { FavoriteIcon } from "@material-ui/icons/Favorite";

export default function Post() {
  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title="This is title"
        subheader="2024"
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia image="" title="Title" />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          This is Title Post
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          This is Content Post
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            100 likes
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
