import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Cliente from "../modelos/cliente";

export default class ListagemDependentesTitular extends Processo {
    private clientes: Cliente[];

    constructor() {
        super();
        this.clientes = Armazem.InstanciaUnica.Clientes;
    }

    processar(): void {
        console.clear();

        const documentoTitular = this.entrada.receberTexto('| Insira o número do documento do cliente titular: ');

        const clienteTitular = this.clientes.find(cliente => cliente.Documentos.some(doc => doc.Numero === documentoTitular));

        if (clienteTitular) {
            console.log(`Dependentes do cliente titular (${clienteTitular.Nome}):`);
            for (const dependente of clienteTitular.Dependentes) {
                const impressor = new ImpressaorCliente(dependente);
                console.log(impressor.imprimir());
            }
        } else {
            console.log('Cliente titular não encontrado :(');
        }
    }
}
