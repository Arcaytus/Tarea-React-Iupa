import React from 'react';
import ReactDOM from 'react-dom';
import {ArticleContainer} from "./Components/ArticleContainer";
import {Title} from "./Components/Title";
import {Paragraph} from "./Components/Paragraph";
import EnNegrita from "./Components/EnNegrita";
import DeColorRojo from "./Components/DeColorRojo";







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
