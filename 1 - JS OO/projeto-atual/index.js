import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 10000000000);
const cliente2 = new Cliente("Alice", 500000000450);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice); 
console.log(contaPoupanca);
console.log("Quantidade de contas correntes: ", ContaCorrente.numeroDeContas); 

const diretor = new Diretor("Rodrigo", 10000, 12345678910);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12345678911);

const estaLogado = SistemaAutenticacao.login(diretor, "123456");

console.log(estaLogado);

