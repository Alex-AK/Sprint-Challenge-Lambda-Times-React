#

[ ] What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Proptypes is a dependency used in React as a way to check if the data you are passing to components (props) matches the intended type set up by the user. This is one way in JavaScript to ensure improper data types are not being passed through components. It’s an additional way to maintain working code and add accurate error handling to your project.

#

[ ] Describe a life-cycle event in React?
A React life cycle has been compared to biological life. Each component has a life cycle, as in birth, aging, and death. When the component mounts, it is considered birth. Once the component mounts it waits to receive new data (props) and runs and update method when it does. At the end of a component’s life, it will unmount. These are considered areas in your program you can run setStates, run methods, or add what is often called hooking in to the components lifecycle.

#

[ ] Explain the details of a Higher Order Component?
Higher order component is a component built to accept one or more components are parameters. When a component is passed through a HOC, the argument receives the state and methods of the HOC. This is a good way to handle conditional rendering and pass down reusable methods which may be needed in multiple components.

#

[ ] What are three different ways to style components in React? Explain some of the benefits of each.
There are several ways to style a React app and it’s largely dependent on user preference or guidelines established by the project’s owner. You can use vanilla CSS, a preprocessor such as SASS, SCSS or LESS, use styled-components library, or use reactstrap (a set of preprogrammed components with styles).

#
