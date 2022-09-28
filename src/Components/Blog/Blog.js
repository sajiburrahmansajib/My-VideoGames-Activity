import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='question'>
                <h2>Question 1: How  does react work ?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.<br></br>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ‘V’ denotes the view in MVC. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook.
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. The declarative view makes your code more predictable and easier to debug.
                    A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab. </p>
            </div>
            <div className='question'>
                <h2>Question 2 : What is the difference between Props & state</h2>
                <h4>Props</h4>
                <p>1. The Data is passed from one component to another. <br></br>2. It is Immutable (cannot be modified).<br></br>3. Props can be used with state and functional components. <br></br>4. Props are read-only.</p>
                <h4>State</h4>
                <p>1. The Data is passed within the component only. <br></br> 2. It is Mutable ( can be modified). <br></br> 3. State can be used only with the state components/class component (Before 16.0). <br></br> State is both read and write.</p>

            </div>
            <div className="question">
                <h2>Question 3 : what is the use of useEffect in react ?</h2>
                <p>The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
            </div>

        </div>
    );
};

export default Blog;