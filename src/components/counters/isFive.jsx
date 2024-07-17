import {React, memo, useMemo} from 'react';

let render = 0;

const IsFive = ({value}) => {
    console.log(`IsFive render: ${++render}`);

    const  getResult =()=>{
        let i =0;

        while(i<1000000000){
            i++;
        }
        return value === 5 ? "Five" : "Not five";
    }

    const result = useMemo(getResult,[]);

    return <div>{result}</div>;
}

export default memo(IsFive);
