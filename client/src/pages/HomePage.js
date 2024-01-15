import React from "react";
import { Container } from "@material-ui/core";

import Header from '../components/Header/index.HomePage.js';
import PostList from "../components/PostList/index.PostList.js";

export default function HomePage() {
  return <Container maxWidth="lg" className={{}}>
    <Header />
    <PostList />
  </Container>
}
