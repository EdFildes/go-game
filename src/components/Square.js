import React, {useState} from 'react';


const Square = function(props){
    let [hasCounter, setCounter] = useState(false)
    let [color, setCounterColor] = useState(null)

    const size = 100

    function handleclick(){
        if(!hasCounter){
            setCounter(true)
            setCounterColor(props.color)
            props.makeMove(props.pos, props.color)
        }
    }
    
    return(
        <svg width={size} height={size} onClick={handleclick}>
            <line x1={size/2} x2={size/2} y1="0" y2={size} stroke="grey" strokeWidth="5"/>
            <line x1="0" x2={size} y1={size/2} y2={size/2} stroke="grey" strokeWidth="5"/>
            {hasCounter ? <circle cx={size/2} cy={size/2} r={size/4} stroke="black" fill={color} strokeWidth="1"/> : null}
        </svg>
    )
}

export default Square 