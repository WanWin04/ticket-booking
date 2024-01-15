import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action";

import Post from "./Post";
import { postsState$ } from "../../redux/selectors/index.selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  console.log(`[PostList - posts]`, posts);

  React.useEffect(() => {
    dispatch(actions.getPost.getPostRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItem="stretch">
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Post />
      </Grid>
    </Grid>
  );
}
