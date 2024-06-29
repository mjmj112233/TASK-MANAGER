// src/UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch data from the API
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
                        <p>{user.first_name} {user.last_name}</p>
                        <p>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;