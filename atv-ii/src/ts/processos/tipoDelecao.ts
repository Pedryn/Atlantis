import Processo from "../abstracoes/processo";
import MenuTipoDelecao from "../menus/menuTipoDelecao";
import DeletarDependente from "./deletarDependente";
import DeletarTitular from "./deletarTitular";

export default class TipoDelecao extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoDelecao()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new DeletarTitular()
                this.processo.processar()
                break;
            case 2:
                this.processo = new DeletarDependente()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}