import React,{useState} from 'react';
import { SecurityService } from "./../service/secuerityService";
const SessionComponent=()=>{

    const [message,setMessage] = useState('');
    const [data,setData] = useState([]);
    const serv = new SecurityService();

    const register=()=>{
        let user = {
            "Id": 2,
            "UserName": "tejas",
            "Password": "tejas",
            "Email": "tejas@msit.com"
        };
        serv.registerUser(user).then((resp)=>{
              setMessage(resp.data.message) ; 
        }).catch((error)=>{
            setMessage(`Error Occured ${error}`) ; 
        });
    };

    const auth=()=>{
        let user = {
           
            "UserName": "tejas",
            "Password": "tejas",
           
        };
        serv.authUser(user).then((resp)=>{
              setMessage(`User Authenticated Successfully ${resp.data.token}`) ; 
              // save the token in sesionStorage
              sessionStorage.setItem('token',resp.data.token );
        }).catch((error)=>{
            setMessage(`Error Occured ${error}`) ; 
        });
    };
    
    const getValues=()=>{
        // read tokne from the sessionStorage
        let token = sessionStorage.getItem('token');
        serv.getData(token)
            .then((resp)=>{
                setData(resp.data.response);
            })
            .catch((error)=>{
                setMessage(`Error Occured ${error}`) ; 
            });
    };

    return(
        <div className="container">
             <input type="button" value="Register User" className="btn btn-primary"
              onClick={register}/>

             <hr />
             <input type="button" value="Auth User" className="btn btn-success" onClick={auth}/>

             <hr />
             <input type="button" value="Get Data" onClick={getValues} className="btn btn-warning"/>
             <hr />
             <div className="container">
                 <strong>
                    {message}
                 </strong>
             </div>
             <hr />
             <div className="container">
                 <strong>
                     Data Received from Server
                     <br />
                     {JSON.stringify(data)}
                 </strong>
             </div>
        </div>
    );


};


export default SessionComponent;