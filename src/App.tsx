/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useAddUserMutation, useFetchUsersQuery } from './redux/api/api';

const App = () => {
  const  { data, isLoading,  } = useFetchUsersQuery(undefined);
  const [postUser] = useAddUserMutation();
  const [newUser, setNewUser] = useState({ name: '', age: '' });
 const usersData = data?.data


  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      await postUser(newUser).unwrap();
      setNewUser({ name: '', age: '' });

    } catch (error) {
      console.error("Failed to post user: ", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }



  return (
    <div>
      <h1>Hello World</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newUser.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newUser.age}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
      </form>
      <h2>Users List</h2>
      <ul>
        {data && usersData.length > 0 ? (
          usersData.map((user:{
            
            name: string;
            age: number;
            id: string;
          }) => (
            <li key={user.id}>
              {user.name} - {user.age} years old
            </li>
          ))
        ) : (
          <p>No users available</p>
        )}
      </ul>
    </div>
  );
};

export default App;
