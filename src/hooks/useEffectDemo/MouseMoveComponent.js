import React, { useState, useEffect } from 'react';

const MouseMoveComponent=()=>{

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);


    const detectMousePositions=(evt)=>{
        setX(evt.clientX);
        setY(evt.clientY);
    };


    useEffect(()=>{
        console.log('Mouse Move Called');
        // global event subscrition
        window.addEventListener('mousemove', detectMousePositions);  
        // return a cleanup funciton from the useEffect()
        return ()=>{
            console.log('Unmounted the component');
            window.removeEventListener('mousemove', detectMousePositions);  
        };
    },[]);


    return (
        <div>
            Use Effect x = {x} and y = {y}
        </div>
    );
};

export default MouseMoveComponent;
