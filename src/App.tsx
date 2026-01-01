import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button/Button';
import ExpandableText from './components/ExpandableText';
function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>Click me</Button>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta vero facilis temporibus iure
        sit aspernatur excepturi, quo recusandae consequatur reiciendis odio eos repudiandae iusto
        nihil suscipit cupiditate, voluptatem vitae. Quaerat?
      </ExpandableText>
    </div>
  );
}

export default App;
