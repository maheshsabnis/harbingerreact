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
    - Using Thunk Middleware
        - npm install --save redux-thunk

    - Multi-Page Server Side Application
        - Adv.
            - Mutiple pages can have the React Component 
            - Reactive UI with Rich UX
        - Limitations
            - Decide the no of COmponents to be renderd using 'one-server-side-page'    
    - Deploy Front-End app and server-side app seperately
        - Adv.
            - Single Deployment for all components
            - Independent App
            - Easy for Maintenence
        - Limitations
            - Not easy to Represent as a Single-Page-App by default, the reason is React is Library and not a frwk
    - React Router for SPA
        - react-router-dom
            - npm install --save react-router-dom
        - BrowserRouter
            - a Component that provides platform for navigation across components
                - Router.Provder
                    - The Context that is used to manage the navigation history for URL based Navigations as well as the explicit navigation request                        
                        - history is a map objects from Router
                        - Router is an object that contains the following information
                            - Switch
                                - The Dictionary of Route expressions
                                - Route
                                    - Object that contains following route metainfo
                                        - exact
                                            - the Query for Exact Path match
                                        - path
                                            - the URL for routing
                                        - component
                                            - The component to navigate to
                                - Redirect
                                    - object with 'to' property for default routing
                                - Link
                                    - Object with 'to' property for defing the route query
            - The BrowserROuter is responsible for MOunting and UnMounting the Child COmponent in it i.e. lifecycle management                                             

- Code-Splitting
    - The concept for dividing the front0end logic in separate files
    - The React Lazy Loading using following Objects
        - React.lazy(callback);
        - Suspense component
            - This 'ExoticComponent'
                - The component that will work under specificn conditions
            - The Suspense component has the 'fallback' property
                - THis property rebders the fallbak UI is the component is delayed
    - Lazy Loading Recommendations
        - Make sure that the component is loaded lazyly inside the ErroBoundry            
    - Is using Routing then the Suspense component will be present inside the ROuter
        - import {BrowserRouter as Router, Route, Switch}

        <Router>
            <Suspense fallback={}>
               <Switch>
                 <Route exact path="/" component={}></Route>
               </Switch>
            </Suspense>
        </Router>         




# Date 01-May-2021

1.  Modify the Solution that will perform the following
    - Show the data in Table inside the ListProductsCompoent.
    - When any row is seleted from the ListProductsComponent, the selected product information must be displayed in text elements of AddProductComponent.
    - The AddProductComponent should have capacility to update the component and show this updated values in the ListProductsomponent 


# Date 08-May-2021

1. Integrate the Redux with Routing so that, the data from the Store will be used for Update and Delete COmponents. Means the Parameterized Route will query to the store to look for the data and load it in view for Update and Delete. Once the Update and Delete is successful after the REST call, then the store must be updated accodingly  