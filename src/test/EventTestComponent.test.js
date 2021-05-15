import React from 'react';
import { render,unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import EventTestComponent from './../componentfortest/eventtestcomponent';


describe('The DOM Tetsing of the Component for Events',()=>{
    
    let domContainer = null;
    // define  common settings for all test case
    beforeEach(()=>{
        // create a DOM Tree memory
        domContainer = document.createElement('div');
        // append this element indocument body
        document.body.appendChild(domContainer);
    });

    // write the test case
    it('should render the value Switch On when the button is clicked',()=>{
        act(()=>{
            render(<EventTestComponent/>, domContainer);
        });
        // get the button
        const button = document.querySelector('button');
        // check for inital message as 'Swich Off'
        expect(button.innerHTML).toBe('Swich Off');

        // dispatch event
        act(()=>{
            button.dispatchEvent(new MouseEvent("click", {bubbles:true}));
        });

        // check that once the button is clicked the innerHtml has to be Switch On
        expect(button.innerHTML).toBe('Switch On');

    });

  


    // define clean for common settings when all tests are completed
    afterEach(()=>{
        // clean up the DOM
        unmountComponentAtNode(domContainer);
        domContainer.remove(); // remove from Memory
        domContainer = null;
    });
});
