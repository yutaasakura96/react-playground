import { useState } from 'react';

const ConditionalRendering = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div>
      <h1>Conditional Rendering</h1>
      {isLoggedIn ? <p>Welcome, User</p> : <p>Please Login</p>}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ConditionalRendering;
