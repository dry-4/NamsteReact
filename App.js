import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

//  React.createElement => Object => HTMLElement(render)

const heading = React.createElement('h1', { id: 'heading' }, 'Namste React!!!');
console.log(heading);

// JSX heading (JSX is not HTML, it is HTML like JavaScript)
// JSX is not pure JavaScript, js engine can't understand it,
// so we need to convert it(transpiled) to pure JavaScript, which is handled by parcel or webpack using (Babel)
// JSX => React.createElement => Object => HTMLElement(render)
// for multiple line JSX code, we need to wrap it in paranthesis ()

// React Element
const jsxHeading = <h1 className="head">Namaste React using JSX!!!</h1>;

// React Component
// Class Based Component => Old method of creating React Component
// Functional Component => New method of creating React Component

// React Functional Component -> It is a JavaScript function which returns React/JSX Element
// Note - Always start component name with capital letter

const Title = () => {
  return <h1 className="head">Namaste React Title Component 🚀🚀!!!</h1>;
};

// React Component composition -> Rendring component inside another component
const Heading = () => (
  <div id="container">
    {/* <Title /> */}
    {/* <Title></Title> */}
    {Title()}
    <h1 className="head">Namaste React Functional Component!!!</h1>;
  </div>
);

// How to render React Element inside React Component

const element = <h1 className="head">Namaste React!!!</h1>; // this is React Object/ JavaScript Object

// In JSX we can write JavaScript expression inside curly braces {}
// In JSX we can't write JavaScript statement like if else, for loop, switch case etc
// In JSX we can write JavaScript expression like variable, function call, ternary operator etc

const Heading2 = () => (
  <div id="container">
    {element}
    <h1 className="head">Namaste React Functional Component!!!</h1>;
  </div>
);

// React Class Based Component -> It is a JavaScript class which extends React.Component class and returns React/JSX Element in render method

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(jsxHeading);

//way to render React Component
root.render(<Heading2 />);
console.log(jsxHeading);
