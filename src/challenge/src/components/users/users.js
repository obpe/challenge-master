import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import './users.css';

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const base_url = 'http://localhost:3000/users/';
      fetch(base_url)
        .then(res => res.json())
        .then(data => setUser(data));
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2><b>All Users</b></h2>
      <h3>Users and their age</h3>
      <div className="users">
        <Table responsive>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {user.map(person => (
              <tr>
                <td>{person.username}</td>
                <td>{person.age}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default Users;