import React, { useState } from 'react';
import './EightBall.css';

function EightBall({answers}){
    //set up state for cur color and msg text
    const [currentColor, setCurrentColor] = useState("black");
    const [currentMsg, setCurrentMsg] = useState("Think of a Question");
    
    const handleClick = () => {
        const randomIdx = Math.floor(Math.random()* answers.length);
        const randomAnswer = answers[randomIdx];
        setCurrentColor(randomAnswer.color);
        setCurrentMsg(randomAnswer.msg);
    };
    return (
        <div className='eight-ball'>
            <div  className = 'inside'
            style={{ backgroundColor: currentColor}} 
            onClick = {handleClick}>
                <p className='answer'>{currentMsg}</p>
            </div>
        </div>
    );
};

export default EightBall;