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


- Implement the shouldComponentyUpdate() explicitely to control the re-render calls or else derive the component from the React.PureComponent
- When the Parent Component wants to attach a callback to the child component  then the Callback references gets executed for changes in Parent and child both components using 'props'. 

``` javascript
import React , {useState} from 'react';
import { Fragment } from 'react';

function ChildComponent(props){
    return (
        <div>
            <h2>The Child Component</h2>
            <button onClick={props.func}>Value in Child</button>
        </div>
    );
}

function ParentComponent(){
    const [counter, setCounter] = useState(0);

    return(
        <Fragment>
            <h1>The Parent Component</h1>
            <button onClick={()=>setCounter(counter +1)}>Update Counter</button>
            <hr />
            {/* Binding the funciton from the parent compoen to the child component using the props */}
            <ChildComponent func={()=>setCounter(counter+1)}></ChildComponent>
            <hr />
            <strong>
                {counter}
            </strong>
        </Fragment>
    );
}


export default ParentComponent;

```

in above case the child component will receive new instance of the 'func' props from parent for each re-rendering bacause of the state the proprty.
- To avoid new instance for props for 'function callback' from parent to child, use th 'useCallback' hook. This hook will accept the dependency parameter and will memorize this parameter with function reference so that new props function callback instance will ne be passed again and agin from parent to child   
- Use Code Splitting for Lazy Loading usign React.lazy()
- USe the spread on an object immutation for updating the same object by adding new values or updating a specific property from the object
    - [...depts, dept]
- Loading a list/table with large amount of data (please avoid) 
    - react-virtualized or react-window

# Managing the React App's Sessions w.r.t. Server Calls     
    - Authenticate the React App user w.r.t. server using on the User Based Identity 
        - The React App user MUST pass UserName and Password to the server
    - Once the User is authentictaed the server MUST provide an Identity Key to the React App's current instance running in the browser
        - The Identity MUST be the Token
            - JSON Web Token (JWT)
            - Any other Identity Token Value e.g. SAML Token from Azure AD, AWS Identity Tokens
        - The React App must save this token in the Browser's process
            - Browser's storages e.g. localStorage, sessionStorage, Redux Store
        - Each call from the Reat App must carry this token so that teh Server Understands this token as a active session, then check for 'expiry' with the token validation and if the token is valid and not expired, then the resonse ti provided back to react app     
        - If the token is expired close the session from server  
# Creating RICH UI/UX apps using React.js
- UI / UX Planning
    - What is the complexity of UI requirements?
        - Chart
        - DataTable
        - Large Volume List
        - Diaglog Box
    - What is the behavior Expected from UI (known as UX)?
        - Charts must be of different types (Line, Bar, Pie). They must have data supplied in 2-D Array
        - DataTable must generate rows and columns dynamically. Theer must exist pagination, sorting, serarch, ect. facilities.
        - Large Volumn data List with Infine Scrilling with performance
        - Transparent Div
    - Is it possible to implement it using default object model of React.js?
        - To implement it, the react must be known with Hands-on
        - The complete knowledge of the React is required
    - How much time it will take to implement it?
        - MUST be planned 
        - Use Third Party Libraries
            - What about the Customize needs for the UI?
    - How many developers will ne dedicated to implement?
        - ?????
    - Is this UI/UX is frequently required across pages?
        - May be across one project in most of the pages
        - Multiple Projects across organization
    - What is the amount of data structres and propertis must be uses?
        - Data Structure will help in providing structured data for UI and UX
        - properties will help in defining behaviors and events for the UI and UX

# Facts of React
1. It is a Library for UI / View
2. Uses Component(s) as a Compositional Pattern for the UI / UX
3. Reusability is explicit based on UI / UX needs
4. Data Properties are not inbuilt they must be defined using 'props' or 'context'        

# Chart.js
    - Library used to design charts in React Application
    - react-chartjs-2 is the wrapper for Chart.js for React Apps
    - Bar, Line, Pie Charts
        - All these exposes the 'data' props
            - data is the state for chart which acepts the charts data e.g. X & Y Axis Data, legends, title, etc.
          - Flexi Chart creation
            - Create a chart from Scratch
# Data Driven Documents aka d3.js
    - dimple.js
    - c3.js
# Creating Charts w/o having any dependency on Third-Party Libraries                
    - HTMl 5 with either Canvas or SGV (Recommended) along with CSS3 to create charts

# Creating RICH UI using Standard Libraries
    - Option 1:
        - Create all UI / UX yourself
            - Adv: 
                - You have complete control on design and implementation
                - You can modify it as per the requirements
                - Easy for developres to educate on it
            - Limitations:
                - If more time is taken to develop UI then this may delay the app dev. time limit
                - The project MUST have dedicated team for creating such UI / US elements
                - It must be necessray for you to allocate capable developres to implement this
    - Option 2
        - Use Third party library
            - React Material UI aka Material UI
            - Adv:
                - Rich set of elements for UI
                - Ready to use functionality
                - Can be integrated easily in the application
            Limitation:
                - Afterall it is Open Source, you need to look for support for any customization
                - This has seperate learning curve
                - Any modification in behavior of existing UI element will require additional time and no gurantee of easy customization            
        - Use or explore other thir party UI libs
            https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/        


# React Tetsting
- DOM Tree Testing for Elements Rendering
    - Create an in-memory proxy for DOM Tree
    - Create a container element for DOM Tree
    - Iterate over it 
- DOM Testing w.r.t. Events
    - Create an in-memory proxy for DOM Tree
    - Create a container element for DOM Tree
    - Iterate over it 
    - Dispatch Events explicitely usign Code as Bubble event
- @testing-library/jest-dom, @testing-library/react, @testing-library/user-event
    - The bove libraries are availble only in 'create-react-app' CLI
    - Integration between React and Jest for testing DOM in memory
        - react-dom
            - render() method
                - Create a DOM and make it ready for Mount
            - unmountComponentAtNode() method
                - UnMount the DOM Tree from Memory
        react-dom/test-utils
            - The React Inbuild Testing Object Model
            - the 'act' object, this is used to 
                - Monitor DOM
                - Iterate over the DOM
                - Monitor Changes in DOM
                - Look for Events on DOM elements        
    - If the app is created from scracth w/o React CLI then for testing use following libraries created by React+Air BnB
        - Enzyme
        - React-Adapter-Enzyme-16    
    - https://www.webnethelper.com/2019/08/configuring-reactjs-1687-application.html
- The fine name containing test must be nameds as
    - <Comppnent_Name>.test.js
    - <Component_Name>.spec.js
- to run init tests use the following command
    - npm run test
        - this will read all files as xxxx.test.js or xxxx.spec.js and exeute them 








        
# Date 01-May-2021

1.  Modify the Solution that will perform the following
    - Show the data in Table inside the ListProductsCompoent.
    - When any row is seleted from the ListProductsComponent, the selected product information must be displayed in text elements of AddProductComponent.
    - The AddProductComponent should have capacility to update the component and show this updated values in the ListProductsomponent 


# Date 08-May-2021

1. Integrate the Redux with Routing so that, the data from the Store will be used for Update and Delete COmponents. Means the Parameterized Route will query to the store to look for the data and load it in view for Update and Delete. Once the Update and Delete is successful after the REST call, then the store must be updated accodingly  

# Date 15-May-2021
1. Write a test on the React Component which will show /hide the div tag based on the button click