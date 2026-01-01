import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Click me</Button>
    </div>
  );
}

export default App;
