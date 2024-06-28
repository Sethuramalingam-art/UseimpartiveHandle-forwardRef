https://vinodht.medium.com/call-child-component-method-from-parent-react-bb8db1112f55


The useImperativeHandle hook works in the similar phase of useRef hook but only it allows us to modify the instance that is going to be passed with the ref object which provides a reference to any DOM element. Although this hook is used in rare cases, it has some most advanced functionality.

Syntax:

useImperativeHandle(ref, createHandle, [deps])
