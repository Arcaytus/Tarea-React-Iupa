import React from 'react';
import ReactDOM from 'react-dom';



function ArticleContainer(props) {
  return <div>
    {props.children}</div>
}

function Title(props) {
  return <h1>{props.children}</h1>;
} 

function Paragraph(props) {
  return <p>
    {props.children}</p>
}

function EnNegrita(props) {
  return <p>{props.children}</p>
}

function DeColorRojo(props) {
  return <p style= {{fontStyle: 'italic', color: 'red'}} >
    {props.children}</p>
}

function App() {
   // Uso del componente Title con el valor "Hola Mundo!"
   // Uso de los componentes 'ArticleContainer', 'Paragraph', 'EnNegrita', 'DeColorRojo'
  return (
  <ArticleContainer>
    <Title>
      Hola <i>mundo</i>! 
    </Title>
    <Paragraph>
        Párrafo de mi articulo
        <EnNegrita>
          <DeColorRojo>Importante!</DeColorRojo>
        </EnNegrita>
      </Paragraph>
    </ArticleContainer>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
