import React, { useState } from 'react';
import Signin from './component/signin';
import Register from './component/Register';
import Users from './component/Users';

const App = () => {
  const [toggler, setToggler] = useState(false); 
  const [users, setUsers] = useState([])

  return (
    <main className=' flex w-screen h-screen overflow-y-auto text-black p-10 bg-gray-100'>
      <div className='w-[70%]'>
      {toggler ? (
        <Signin users={users} setUsers={setUsers} toggler={toggler} setToggler={setToggler}/>
        ) : (
          <Register users={users} setUsers={setUsers} toggler={toggler} setToggler={setToggler}/>
          )}
      </div>
      <Users/>
    </main>
  );
};

export default App;
