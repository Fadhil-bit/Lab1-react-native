import React from 'react';

interface IncrementProps {
    count: number;
    setCount: (newCount: number) => void;
}

const Increment: React.FC<IncrementProps> = ({ count, setCount }) => {
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default Increment;