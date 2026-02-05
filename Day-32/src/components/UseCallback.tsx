import  { useState } from "react";

const funcSet = new Set();

const UseCallback = () => {
    const [prev, setPrev] = useState(0);
    const [num, setNum] = useState(0);

    const incPrev = () => setPrev(prev + 1);
    const decPrev = () => setPrev(prev - 1);
    const incNum = () => setNum(num + 1);

    funcSet.add(incPrev);
    funcSet.add(decPrev);
    funcSet.add(incNum);
    alert(funcSet.size);

    return (
        <div>
            <h2>Without useCallback Hook</h2>
            <button onClick={incPrev}>Increase Counter</button>
            <button onClick={decPrev}>Decrease Counter</button>
            <button onClick={incNum}>Increase Number</button>
        </div>
    );
};

export default UseCallback;