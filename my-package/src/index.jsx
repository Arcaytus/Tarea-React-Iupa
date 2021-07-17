import React from 'react';
import ReactDOM from 'react-dom';

// ahora nuestro componente usa el objeto `props`
// y una propiedad definida dentro que se llama `value`
function Title(props) {
  return <h1>{props.value}</h1>;
} 

function App() {
   // Uso del componente Title con el valor "Hola Mundo!"
  return (
  <>
  <Title value="Hola mundo!" />
  <Title value="Hello world!" />)
  </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
