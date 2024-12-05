import Fornecedor from './Fornecedor.js';
import FornecedorPessoa from './FornecedorPessoa.js';

//criando objeto
const fornecedor = new Fornecedor("Pedro", "(11)1234-5678");

console.log(`Dados do Fornecedor:
Nome:${fornecedor.getNome()}
Fone:${fornecedor.getFone()}`
);

const fornecedorPessoa = new FornecedorPessoa("Giovana", "(11)5678-1234", "12.165.355-8","123.456.789-09");

console.log(`Dados do Fornecedor Pessoa:
Nome:${fornecedorPessoa.getNome()}
Fone:${fornecedorPessoa.getFone()}
RG:${fornecedorPessoa.getrg()}
CPF:${fornecedorPessoa.getcpf()}`
);