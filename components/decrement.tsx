import React from 'react';

interface DecrementProps {
    count: number;
    setCount: (newCount: number) => void;
}

const Decrement: React.FC<DecrementProps> = ({ count, setCount }) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default Decrement;