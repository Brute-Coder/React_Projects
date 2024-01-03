import { useState } from "react";

import Slider from "./Slider";

function App() {
  return (
    <>
      <Slider url={"https://picsum.photos/v2/list"} limit={10} />
    </>
  );
}

export default App;
