import React, { useState } from 'react';

import MouseMoveComponent from './MouseMoveComponent';

const ToggleComponent=()=>{
    const [show, updateShow ] = useState(true);


    return (
        <div>
            <h1>The Demo for Hooks with Lifecycle</h1>
            <button onClick={
                ()=>updateShow(!show)
            }>Toggle</button>
            {
                show && <MouseMoveComponent></MouseMoveComponent>
            }
            <hr/>
            <div>
                <strong>
                    The Toggle COmponent
                </strong>
            </div>
        </div>

    );
};

export default ToggleComponent;