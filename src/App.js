import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };
  const options = [
    {
      label: "Red",
      value: "Red",
    },
    {
      label: "Green",
      value: "Green",
    },
    {
      label: "Blue",
      value: "Blue",
    },
  ];
  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
      <Dropdown
        options={options}
        value={selection}
        onChange={handleSelection}
      />
    </div>
  );
}

export default App;
