import { Container, Typography } from '@material-ui/core';
import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro aoEnviar={onSubmitForm} validarCpf={validarCpf}/>
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

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos!" }
  } else {
    return { valido: true, texto: "" }
  }
}

export default App;
