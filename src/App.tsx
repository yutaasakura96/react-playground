import Alert from "./components/Alert";
import Button from "./components/Button";
function App() {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Button onClick={() => console.log('Clicked')}>Click me</Button>
    </div>
  );
}

export default App;
