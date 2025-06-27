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
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          padding: 0,
          listStyle: 'none',
          cursor: 'pointer',
        }}
      >
        {users.map(user => (
          <Link
            to={`/user/${user.id}`}
            className="usersUl"
            key={user.id}
            style={{
              flex: '0 0 calc(20% - 10px)',
              boxSizing: 'border-box',
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '5px 5px 5px black',
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src="https://avatars.mds.yandex.net/i?id=d44a2f9b7950ac31d2f42efc65d5e508bb88c229-5239568-images-thumbs&n=13"
              alt="userimg"
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                marginBottom: 8,
              }}
            />
            <div>{user.name}</div>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Users;
