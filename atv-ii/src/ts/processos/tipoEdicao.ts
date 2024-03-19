import Processo from "../abstracoes/processo";
import MenuTipoEdicao from "../menus/menuTipoEdição";
import EditarClienteDependente from "./editarClienteDependente";
import EditarClienteTitular from "./editarClienteTitular";

export default class TipoEdicao extends Processo{
    constructor(){
        super()
        this.menu = new MenuTipoEdicao()
    }

    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero(`Qual a opção desejada? `)
        switch (this.opcao){
            case 1:
                this.processo = new EditarClienteTitular
                this.processo.processar()
                break;
            case 2:
                this.processo = new EditarClienteDependente
                this.processo.processar()
                break;
        }
    }
}