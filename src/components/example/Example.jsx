import React, { useState } from 'react';
import "./Example.css";

const Example = () => {

    const [count, setCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState({ name: "John", age: 25 });
    const [age, setAge] = useState(user.age);


    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount(count - 1);
    };

    const changeAge = () => {
        setUser({ ...user, age: age });
    };
    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <hr />


            <button onClick={() => setVisible(!visible)}>Show</button>
            {visible && <div>Lorem, ipsum dolor</div>}
            <hr />


            <h4>{user.name}, {user.age}</h4>

            <div>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <button onClick={changeAge}>Change age</button>
            <hr />

        </div>
    );
}

export default Example;