import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/action";

import Post from "./Post/";
import { postsState$ } from "../../redux/selectors";

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItem="stretch">
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
