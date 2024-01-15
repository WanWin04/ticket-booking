import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import Header from "../components/Header/index.Header.js";
import PostList from "../components/PostList/index.PostList.js";
import useStyles from "./styles.pages.js";

export default function HomePage() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      
      <Fab color="primary" className={classes.fab}>
        <AddIcon />
      </Fab>
    </Container>
  );
}
