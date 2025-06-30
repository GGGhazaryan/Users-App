import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <ul className="ul1"
      >
        {users.map(user => (
          <Link
            to={`/user/${user.id}`}
            className="usersUl"
            key={user.id}
            style={{

            }}
          >
            <img
              src="https://avatars.mds.yandex.net/i?id=d44a2f9b7950ac31d2f42efc65d5e508bb88c229-5239568-images-thumbs&n=13"
              alt="userimg"
              className="user-img"
            />

            <div>{user.name}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Users;
