// Nested HTML Components in ReactJS
const parent = React.createElement(
   'div', {id : "parent"}, 
   React.createElement('div', {id : "child"},
      React.createElement('div', {id : "grandchild"},
         React.createElement('h1', {id : "heading"}, 'Namste React from heading tag!')
      )
   )
);

// for more than 1 child element, we can use array of elements as well
const antotherParent = React.createElement(
   'div', {id : "parent"}, 
   React.createElement('div', {id : "child"},
      [  React.createElement('div', {id : "grandchild1"},
         [  React.createElement('h1', {id : "heading"}, 'Namste React from heading tag from grandchild1!'),
            React.createElement('h2', {id : "subheading"}, 'Namste React from subheading tag from grandchild1!')]
         ),
         React.createElement('div', {id : "grandchild2"},
         [  React.createElement('h1', {id : "heading"}, 'Namste React from heading tag from grandchild2!'),
            React.createElement('h2', {id : "subheading"}, 'Namste React from subheading tag from grandchild2!')]
         )
      ]
   )
);

// Above code looks very complex and hard to read. So, we can use JSX to make it more readable.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(antotherParent);

console.log(antotherParent);
