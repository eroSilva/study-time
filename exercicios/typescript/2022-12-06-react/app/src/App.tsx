import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <List
        title="Título da Lista"
        cards={[
          {
            title: "Título do Card",
            description: "Description do Card",
            image: {
              src: "https://placeimg.com/320/230",
              alt: "Texto alternativo da imagem",
            },
            link: {
              href: "https://www.corinthians.com",
              label: "Clique aqui",
            },
          },
          {
            title: "Título do Card 2",
            description: "Description do Card 2",
            image: {
              src: "https://placeimg.com/320/230",
              alt: "Texto alternativo da imagem",
            },
            link: {
              href: "https://www.corinthians.com",
              label: "Clique aqui",
            },
          },
        ]}
      />
    </div>
  );
}

export default App;
