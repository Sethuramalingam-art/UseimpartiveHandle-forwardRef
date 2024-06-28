//https://vinodht.medium.com/call-child-component-method-from-parent-react-bb8db1112f55


//The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed 
//with the ref object which provides a reference to any DOM element. Although this hook is used in rare cases, it has some most advanced functionality.

//Syntax:
//useImperativeHandle(ref, createHandle, [deps])

//component C
import React from 'react';

const ComponentC = React.forwardRef((props, ref) => {
  const myFunction = () => {
    console.log("Function in Component C triggered!");
  };

  React.useImperativeHandle(ref, () => ({
    myFunction,
  }));

  return <div>Component C</div>;
});

export default ComponentC;

//component B
import React, { useRef } from 'react';
import ComponentC from './ComponentC';

const ComponentB = React.forwardRef((props, ref) => {
  const componentCRef = useRef();

  React.useImperativeHandle(ref, () => ({
    triggerComponentCFunction: () => {
      if (componentCRef.current) {
        componentCRef.current.myFunction();
      }
    },
  }));

  return (
    <div>
      Component B
      <ComponentC ref={componentCRef} />
    </div>
  );
});

export default ComponentB;

//component A
mport React, { useRef } from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
  const componentBRef = useRef();

  const triggerFunctionInC = () => {
    if (componentBRef.current) {
      componentBRef.current.triggerComponentCFunction();
    }
  };

  return (
    <div>
      Component A
      <button onClick={triggerFunctionInC}>Trigger Function in C</button>
      <ComponentB ref={componentBRef} />
    </div>
  );
};

export default ComponentA;
