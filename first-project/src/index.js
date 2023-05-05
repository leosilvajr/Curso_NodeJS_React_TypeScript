import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Renderizar um componente que se chama App, no caso o arquivo
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);
