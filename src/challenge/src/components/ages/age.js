import React, { useState } from 'react';
import './age.css';
import { Table } from 'react-bootstrap';

const Age = ({ item }) => {
  const [userAges, setUserAges] = useState({});

  useEffect(() => {
    const getUserAge = () => {
      const baseAgeUrl = 'http://localhost:3000/users/age/'
      const url = baseAgeUrl + item;

      if (url == baseAgeUrl) {
        return;
      }

      fetch(url)
        .then(res => res.json())
        .then(data => getUserAge(data))
    };

    getUserAge();
  }, [item]);


  return (
    <div className='userAge'>
      <Table responsive>
        <thead>
          <tr>
            <th>Age</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(userAges).map(age => (
            <tr>
              <td>{age}</td>
              <td>{userAges[age]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Age;