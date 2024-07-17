import React, { useState } from 'react';
import Count from './Count';
import IsFive from './isFive';

const Counters = () => {
const[count1, setCount1]= useState(1);
const[count2, setCount2]= useState(2);

    return (
        <div>
            <h1>Counters</h1>

            <div>
                <Count value={count1} id={1} />
                <button onClick={() => setCount1(count1 + 1)}>+</button>
            </div>

            <div>
                <Count value={count2} id={2} />
                <button onClick={() => setCount2(count2 + 1)}>+</button>
                <IsFive value={count2}/>
            </div>
        </div>
    );
}

export default Counters;
