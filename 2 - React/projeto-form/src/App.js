import { Container, Typography } from '@material-ui/core';
import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';
import { validarCpf, validarSenha } from './models/Cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{ cpf: validarCpf, senha: validarSenha }} >
        <FormularioCadastro aoEnviar={onSubmitForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log("Email:", dados.email);
  console.log("Senha: ", dados.senha);
  console.log("Nome: ", dados.nome);
  console.log("Sobrenome: ", dados.sobrenome);
  console.log("Cpf: ", dados.cpf);
  console.log("Promoções: ", dados.promocoes);
  console.log("Novidades: ", dados.novidades);
  console.log("CEP: ", dados.cep);
  console.log("Endereço: ", dados.cep);
  console.log("Número: ", dados.numero);
  console.log("Estado: ", dados.estado);
  console.log("Cidade: ", dados.cidade);
}



export default App;
