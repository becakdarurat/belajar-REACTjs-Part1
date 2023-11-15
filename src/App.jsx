/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from './components/Headers';


function App() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
            setLikes(likes + 1);
    }

    function freeClick() {
        // if (likes > 0) {
            setLikes(likes - 1);
        // }
    }

    function resetLikes() {
        setLikes(0);
    }

    return (
        <div>
            <button onClick={freeClick}>-</button>
            <span className='kosong'>({likes})</span>
            <button onClick={handleClick}>+</button>
            <button className='reset' onClick={resetLikes}>Reset </button>
        </div>
    );
}

export default App
