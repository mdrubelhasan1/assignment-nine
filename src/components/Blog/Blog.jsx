import React from 'react';

const Blog = () => {
    return (
        <div className='m-10 bg-gray-300 p-10'>
            <h3 className='font-bold'>* When should you use context Api?</h3>
            <p>If you pass porp down multiple level of the component tree, we use context API.
                Avoiding prop driling we use context API.
            </p>
            <h3 className='font-bold'>* What is custom Hook?</h3>
            <p>Hooks are reusable functions.When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook.</p>
            <h3 className='font-bold'>* What is useRef hook?</h3>
            <p> The useRef Hook allows you to persist values between renders.It can be    used to store a mutable value that does not cause a re-render when updated.
                It can be used to access a DOM element directly.
            </p>
            <h3 className='font-bold'>* What is useMemo?</h3>
            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. const cachedValue = useMemo(calculateValue, dependencies) useMemo(calculateValue, dependencies)</p>
        </div>
    );
};

export default Blog;