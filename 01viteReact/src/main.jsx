import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>My First React App</h1>
      <p>This is a simple React application.</p>
      <p>It is built using Vite and React.</p>
      <p>Feel free to explore the code and make changes.</p>
      <p>Happy coding!</p>
      <h2>Let's get started with React!</h2>
    </div>
  );
}
const ReactElement = React.createElement('a', {
  href: 'https://react.dev', target: '_blank', rel: 'noopener noreferrer'
}, 'click me to learn more about React');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ReactElement}
  </StrictMode>,
)
