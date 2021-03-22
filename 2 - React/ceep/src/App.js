import React from 'react';
import ListaDeNotas from "./components/ListaDeNotas/index";
import FormularioCadastro from "./components/FormularioCadastro/index";
import "./assets/app.css";
import './assets/index.css';

function App() {
  return (
    <section className="conteudo">
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
