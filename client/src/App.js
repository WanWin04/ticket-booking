import { useDispatch } from "react-redux";
import * as actions from "./redux/action";

function App() {
  const dispatch = useDispatch();

  dispatch(actions.getPosts.getPostsRequest());

  return <p>App</p>;
}

export default App;
