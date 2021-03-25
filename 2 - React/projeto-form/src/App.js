import { Container, Typography } from '@material-ui/core';
import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro onSubmit={onSubmitForm} validarCpf={validarCpf}/>
    </Container>
  );
}

function onSubmitForm(dados) {
  console.log("Nome: ", dados.nome);
  console.log("Sobrenome: ", dados.sobrenome);
  console.log("Cpf: ", dados.cpf);
  console.log("Promoções: ", dados.promocoes);
  console.log("Novidades: ", dados.novidades);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos!" }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
