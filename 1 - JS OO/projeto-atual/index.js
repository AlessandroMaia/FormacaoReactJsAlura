import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 10000000000);
const cliente2 = new Cliente("Alice", 500000000450);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1001);
const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice); 
console.log(contaPoupanca);
console.log("Quantidade de contas correntes: ", ContaCorrente.numeroDeContas); 
