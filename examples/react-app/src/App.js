import Text from "@pixeen/text";
import {setup} from "goober";
import * as React from "react";

// Setup goober (move to pixeen provider eventually)
setup(React.createElement)

const App = () => (
  <Text>Hello!</Text>
);

export default App;
