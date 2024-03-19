import Menu from "../interfaces/menu";

export default class MenuEditarTitular implements Menu{
    mostrar(): void {
        console.log(`****************************`);
        console.log(`| Por favor, selecione uma opção para editar...`);
        console.log(`----------------------`);
        console.log(`| Opções para titular: `)
        console.log(`----------------------`);
        console.log(`| 1 - Nome: `);
        console.log(`| 2 - Nome Social: `);
        console.log(`| 3 - Endereço: `);
        console.log(`| 4 - Telefone: `);
        console.log(`| 5 - Documentos: `);
        console.log(`****************************`);
        console.log(`| 0 - Sair`);
        console.log(`----------------------`);
    }
}