import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 10000000000);
const cliente2 = new Cliente("Alice", 500000000450);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
const contaCorrenteAlice = new ContaCorrente(cliente2, 1002);
contaCorrenteRicardo.transferir(100, contaCorrenteAlice);

console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice); 
console.log("Quantidade de contas: ", ContaCorrente.numeroDeContas); 
