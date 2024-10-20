import { useState, useEffect } from 'react';
import '../App.css';

const Test1 = () => {
    const [count, setCount] = useState(0);
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <h1>State ( Stan )</h1>
            <h2>
                window width: {windowSize.width},
                height: {windowSize.height}
            </h2>
            <div className="card">
                <button onClick={() =>
                    setCount((count) => count + 1)}
                >
                    count is {count}
                </button>
            </div>
        </>
    );
};

export default Test1;
