 
import React,{useState} from 'react';


const EventTestComponent=()=>{
      const [value, setValue] = useState(false);  

      return(
          <div>
               <button
                onClick={()=>{
                    setValue(previousState => !previousState);
                }}
               >
                  {value === true ? "Switch On": "Swich Off"} 
               </button>
          </div> 
      );
};

export default EventTestComponent;