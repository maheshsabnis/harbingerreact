import React, {useState,useEffect} from 'react'
import { ProductHttpService } from "./../service/producthttpservice";
import TableComponent from './tableComponent';
import TableEventComponent from './tableEventComponent';
import { DataContext } from "./dataContext";
// immutable object managed by react on UI thread
// for sharing datab across componentts
const StateComponent=()=>{
    const  [x, setX] = useState(0);
    const  [y, setY] = useState(0);
    const  [z, setZ] = useState(0);

    // using Object Literal
    // initial State of emp is {EmpNo:0,EmpName:'',Salary:0, DeptName}
    const [emp, updateEmp] = useState({EmpNo:0,EmpName:'',Salary:0, DeptName:''}); 
    const departments =['IT', 'System', 'HRD'];
    const [employees, updateEmployees] = useState([
        {EmpNo:0,EmpName:'',Salary:0, DeptName:''}
    ]);
    const [products, setProducts] = useState([ { ProductRowId:0, ProductId:'', ProductName:'', CategoryName:'', Manufacturer:'', Description:'', BasePrice:0}]);
    const [product, setProduct] = useState({
        ProductRowId:0, ProductId:'', ProductName:'', CategoryName:'', Manufacturer:'', Description:'', BasePrice:0
    })
    const serv = new ProductHttpService();

    useEffect(()=>{
        serv.getProducts().then((response)=>{
            setProducts(response.data);
        }).catch((error)=>{
            console.log(`Error Occured ${error}`);
        });
    },[]); // dependency array to inform the useEffect() that the state is modified and it can stop now


    // expression method
    const add=()=>{
        // mutate z
        setZ(x+y);
    } 

    const save=()=>{
        // directly mutate the old state of employees by adding new emp in it
        updateEmployees([...employees,  emp
        ]);
        
    }

    const clear=()=>{
        updateEmp({EmpNo:0,EmpName:'',Salary:0, DeptName:''});
    }
    return (
        <div>
            <h2>The  Functional Component with props</h2>
            <div>
                {/* the onChange will dispatch the 'change' action for setX() to mutate the value of x */}
                X : <input type="text"
                 value={x}
                 onChange={(evt)=> setX(parseInt(evt.target.value))}/>
            </div>
            <br/>
            <div>
                Y : <input type="text" value={y}
                onChange={(evt)=> setY(parseInt(evt.target.value))}/>
            </div>
            <br/>
                <input type="button" value="Add"
                 onClick={add}/>
            <br/>
            <div>
               Result:{z}
            </div>
            <hr/>
            <h3>Using Object Literal as state for  State Mutation</h3>
            <div>
                {/* {(evt)=>updateEmp({...emp, EmpNo: parseInt(evt.target.value)})} means that the same object will mutated by checking if the property for mutation is present or not */}

                EmpNo: <input type="text"
                 value={emp.EmpNo}
                 onChange={(evt)=>updateEmp({...emp, EmpNo: parseInt(evt.target.value)})}/>
            </div>
            <br/>
            <div>
                EmpName: <input type="text"
                 value={emp.EmpName}
                 onChange={(evt)=>updateEmp({...emp, EmpName: evt.target.value})}/>
            </div>
            <br/>
            <div>
                Salary: <input type="text"
                 value={emp.Salary}
                 onChange={(evt)=>updateEmp({...emp, Salary: parseInt(evt.target.value)})}/>
            </div>
            <br/>
            <div>
                DeptName: <select value={emp.DeptName}
                 onChange={(evt)=>updateEmp({...emp, DeptName: evt.target.value})}>
                     {
                         departments.map((d,i)=>(
                             <option key={i} value={d}>{d}</option>
                         ))
                     }
                 </select>
            </div>
            <br/>
            <input type="button" value="Save Employee" onClick={save}/>
            <br/>
            <input type="button" value="Clear" onClick={clear}/>
            <hr/>
              <strong>
                     Seleted Value from Child {JSON.stringify(product)}
             </strong>       
        <hr/>
            <div>Employees
                {/* Passing State to Child COmponent using Context
                along with the callback */}
                <DataContext.Provider value={{products,setProduct}}>
                  <TableEventComponent></TableEventComponent>
                </DataContext.Provider>     
                  
            </div>

            <hr/>
            <div>
                {/* {JSON.stringify(products)} */}
            </div>
        </div>
    );
};

export default StateComponent;
