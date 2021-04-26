let response = receiveFirst().then((r)=>{
    // success of first
    receivedSecond().then((r1)=>{
        // second call success
    })
})

// USe Seperate Promise Calls
p1
p2
p3
// Use Promise.all(), 10 overloads
// Promise.all(T1)
// Promise.all(T1,,,,,,,,T10)
    - Promise divide the execution into Micro Tasks



 # Exception Management in React-Component
1. Use try..catch block in render() of the 'Class-Component' to manage the execption and render the fallback UI 

# React 16.8+
-  Functional Components with Hooks
    - Say bye bye to Class Components    
- The Function that host the HTML as inline DOM 
    - Reusable DOM w/o any state
- The Funcation that returns HTML and can have following
    - State
        - UniDirectional Data Flow
            - data will be flowned in one direction
                - State Binding from Component to DOM
                - Events Listenerer on DOM to State Properties
    - Hooks for State
        - useState()
            - FUnction that accepts an initial state of and the Callback to mutate the state   
                - useState(S:InitialState, CallBack)
                    - CallBack: function(newState) {S=newState}
                        - Mutate the Same Object DIrectly with newState
                            - Pirmitive Types
                                - S=newState 
                                    - The Direct Value Overwrite
                            - Object Types
                                - If S = {id:1,name:''};     
                                    - CallBack({STATE MUTATION for Each Property Seperately})
                                    - CallBack({...S, property:newState})     
                                -   function useState<T>(initialState: T | (() => T)): [T, Dispatch<SetStateAction<T>>];  
                                    - Where T is State
        - useEffect()
            - The Combination of componentDidMount() and componentWillUnMount()
                - useEffect(()=>{<Logic-to-be-executed-post-endering-LIKECOMPONENTDIDMOUNT>} return ()=> {<LOGIC-TO-BE-EXECUTED-DURING-COMPONENT-UNMOUNTING>}, [dependency-array-to-inform-that-the-state-is-changed])
                    - [dependency-array-to-inform-that-the-state-is-changed]
                        - this will inform the useEffect() that the state is modified so "STOP EXECUTING"                                   
    - Props
    - Events
    - Lifecycle



