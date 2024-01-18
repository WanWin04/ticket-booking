import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";

import Header from "../components/Header/index.Header.js";
import PostList from "../components/PostList/index.PostList.js";
import useStyles from "./styles.pages.js";
import { showModal } from "../redux/action/index.action.js";
import PostModel from "../components/PostModal/index.PostModal.js";

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openPostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <PostModel />
      <Fab color="primary" className={classes.fab} onClick={openPostModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
}
