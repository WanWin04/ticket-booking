import React from "react";
import { Grid } from "@material-ui/core";

export default function PostList() {
  return (
    <Grid container spacing={2} alignItem="stretch">
      <Grid item xs={12} sm={6}>
        <p>This is post 1</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This is post 2</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This is post 3</p>
      </Grid>
    </Grid>
  );
}
