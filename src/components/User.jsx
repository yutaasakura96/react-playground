import { useState } from "react";

const User = () => {
  // const [firstName, setFirstName] = useState('John');
  // const [lastName, setLastName] = useState('Doe');
  // const [email, setEmail] = useState('johndoe@mail.com');

  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com'
  });


  // const updateUser = () => {
  //   setFirstName('Jane');
  //   setLastName('Doe');
  //   setEmail('janedoe@mail.com');
  // }

  const updateUser = () => {
    setUser({
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'janedoe@example.com'
    });
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <button onClick={updateUser}>Update</button>
    </div>
  );
}

export default User;
