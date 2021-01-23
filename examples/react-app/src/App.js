import Text from "@pixeen/text";
import {setup} from "goober";
import * as React from "react";

// Setup goober (move to pixeen provider eventually)
setup(React.createElement)

function App() {
  return (
    <div className="App">
      <Text>this is a text with reset</Text>
    </div>
  );
}

export default App;
