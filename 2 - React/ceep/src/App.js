import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/app.css";
import './assets/index.css';
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Notas';
class App extends Component {

  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.adicionarNota} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
          <ListaDeNotas
            notas={this.notas.notas}
            apagarNota={this.notas.apagarNota} />
        </main>
      </section>
    );
  }
}

export default App;
