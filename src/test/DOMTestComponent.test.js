import React from 'react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DOMTestComponent from './../componentfortest/domtestcomponent';

// create a test suit

describe('The DOM Tetsing of the Component',()=>{
    // define global object for the Test Suit sonthat they can be used across all Test Cases
    let domContainer = null;
    // define  common settings for all test case
    beforeEach(()=>{
        // create a DOM Tree memory
        domContainer = document.createElement('div');
        // append this element indocument body
        document.body.appendChild(domContainer);
    });

    // write the test case
    it('should render the value of message property passed as props to component',()=>{
        // arrange: setup the requirements for executing test e.g. veriable, constants, etc.
        // act
        act(()=>{
            render(<DOMTestComponent message="Mahesh"/>, domContainer);
        });
        // assert: check if the test is succesful or failed
        expect(domContainer.textContent).toBe('Hello, Mahesh');
    });

    it('should render the message as Mr. UnKnown to component',()=>{
        // arrange: setup the requirements for executing test e.g. veriable, constants, etc.
        // act
        act(()=>{
            render(<DOMTestComponent/>, domContainer);
        });
        // assert: check if the test is succesful or failed
        expect(domContainer.textContent).toBe('Hello, Mr. Unknown');
    });



    // define clean for common settings when all tests are completed
    afterEach(()=>{
        // clean up the DOM
        unmountComponentAtNode(domContainer);
        domContainer.remove(); // remove from Memory
        domContainer = null;
    });
});