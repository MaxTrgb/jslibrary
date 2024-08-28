import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, useLoaderData, Outlet, useSearchParams } from 'react-router-dom';

const Users = () => {
    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     getUsers();
    // }, []);

    // const getUsers = async () => {
    //     const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     setUsers(data);
    // }   

    const users = useLoaderData();
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') || '');
    const searchHandler = (e) => {
        setTextSearch(e.target.value);
        setSearch({q: e.target.value});
    }
    const filterUsers = (user) => {
        return user.name.toLowerCase().includes(textSearch.toLowerCase());
    }
    return (
        <div>
            <h1>Users</h1>
            <input type="text" value={textSearch} onChange={searchHandler} placeholder="Search" />
            <ul>
                {users.filter(filterUsers).map(user => (
                    <li key={user.id}>
                        <NavLink to={`/users/${user.id}`}>
                            {user.name}
                        </NavLink>

                    </li>
                ))}
            </ul>

            <Outlet />
        </div>
    );
}

export default Users;
