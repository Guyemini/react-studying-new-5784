import React, { useState } from "react";
import Button from "./Component/Button";

const App = () => {
  const [color, setColor] = useState("transparent");
  const [color2, setTextColor] = useState("yellow");
  return (
    <div>
      <Button onClick={() => setColor("red")} />
      <div
        style={{
          width: 100,
          height: 100,
          backgroundColor: color,
          marginTop: 10,
          color: color2
        }}
      >1</div>
    </div>
  );
};

export default App;
