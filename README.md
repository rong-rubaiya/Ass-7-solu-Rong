## What is JSX, and why is it used?
JSX, which stands for JavaScript XML, is a syntax extension for JavaScript primarily used with React to describe the structure of user interfaces. It allows developers to write HTML-like code directly within their JavaScript files



## What is the difference between State and Props?
In React, Props are data passed from a parent component to a child component, are read-only (immutable) within the child, and are used for configuration and communication. State is data managed internally within a component, is mutable, and allows the component to track and update its own data over time in response to user interactions or events. 



## What is the useState hook, and how does it work?
The useState hook in React is a function that lets functional components manage their own "state," which is data that can change and needs to be remembered across renders. It works by taking an initial value and returning an array with two items: the current state value and a function to update it. When you use the updater function with a new value, React re-renders the component, ensuring the UI reflects the updated state. 


## How can you share state between components in React?
Sharing state between components in React can be achieved through several methods, depending on the relationship between the components and the complexity of the state management required.



## How is event handling done in React?
Event handling in React is accomplished by attaching event handlers directly to JSX elements, similar to how inline event handlers are used in HTML, but with key differences:

CamelCase Naming Convention: React event handler names are written in camelCase, such as onClick, onChange, onSubmit, onMouseOver, etc., instead of the lowercase names used in standard HTML (e.g., onclick).

Passing Functions as Handlers: Instead of passing a string of JavaScript code, React expects a function reference as the value of the event handler attribute. This function will be executed when the event occurs.