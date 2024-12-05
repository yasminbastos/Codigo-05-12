//importanto a classe fornecedor
import Fornecedor from './Fornecedor.js';

class FornecedorPessoa extends Fornecedor{
    constructor(nome="Sem nome",fone="(00)-0000-0000",rg="12.135.743-6",cpf="123.456.789-89"){
        super(nome,fone);
        this.rg = rg;
        this.cpf = cpf;
    }
//RG método get e set
    setrg(rg){
        this.rg = rg;
    }
    getrg(){
        return this.rg;
    }
    setcpf(cpf){
        this.cpf = cpf;
    }
    getcpf(){
        return this.cpf;
    }
}
export default FornecedorPessoa;
