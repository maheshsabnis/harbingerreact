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

# Using Redux
    - npm install --save redux react-redux
        - redux
            - createStore() method
                - Used to create a Global Application State Store Object
                - createStore(reducer, middleware | parameterEnhancer)
                    - reducer
                        - combineReducer() object
                            - Create an immutable object for all reducres so thatb they can be used at aplication level to monitor the application execution and updating Store accodingly
                    - middleware
                        - The applyMiddleware() method taht will encapsulate all Asynchornous Operations managed using
                            - SAGA
                            - THUNK
                    - parameterEnhancer
                        - a Custom Object ceated using 
                        'compose()' object from redux package to create a union of multiple objects passed to the createStire() method. E.g. Middleware and Redux_TOOLS for browser extension   
        - react-redux
            - USed to Connect React Object Model with Redux Object Model for State Management.
                - The 'connect(mapStateToProps, mapDispatchToProps)' method
                    - mapStateToProps
                        - map the State in STore with 'props' of compoent to show data from Store in component
                        - A Subscription of Component with the Store
                    - mapDispatchToProps
                        - map the actions dispatched from UI so that action will be dispatched that will execte actio Creator with Sync and Async logic and generate output action with data (aka Payload). This output action and payload will be lusteded by reducer and reducer will update the payload inn state of the store      
                - export default connect(mapStateToProps,mapDispatchToProps)(<COMPONENT-TO-BE-SUBSCRIBED>)
            - Alternative to connect() ethod using Hoos oin Redux
                - useDispatch(<ACTIOn-NAME>)
                    - Dispatch an action from Component (same as mpDispatchToProps)
                - useSelector(<STATE>)
                    - Same as mapDispatchToProps  
            - Provider
                - The Component that is used to access the Redux store as input pareameter using its 'store' property.
                - This component managed the lifecycle of all other react components in it by providing Redux store to all components in it.               
    - Reducres
        - The Monitor of Actions being dispatched
        - Technically this is a JavaScript 'PURE FUNCTION'     
        - Combine all reducers into a signle reducer object so that when any output action is dispatched with output data and monitored by reducer then the  store will be updated.                    


# Date 01-May-2021

1.  Modify the Solution that will perform the following
    - Show the data in Table inside the ListProductsCompoent.
    - When any row is seleted from the ListProductsComponent, the selected product information must be displayed in text elements of AddProductComponent.
    - The AddProductComponent should have capacility to update the component and show this updated values in the ListProductsomponent 
