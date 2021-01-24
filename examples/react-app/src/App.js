import Text from "@pixeen/text";
import {setup} from "goober";
import { createElement } from "react";

// Setup goober (move to pixeen provider eventually)
setup(createElement)

const App = () => (
  <Text>Hello!</Text>
);

export default App;
