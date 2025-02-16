import { useState } from "react";
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-cyan/theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button label="Submit" />
    </>
  );
}

export default App;
