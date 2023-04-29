import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories,setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[]);
    return (
        <div>
            <h2>All Category:{categories.length}</h2>
            <div>
                {
                   categories.map(category => <p key={category.id}>
                    <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
                   </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;