import Menu from "../interfaces/menu";

export default class MenuEditarDependente implements Menu{
    mostrar(): void {
        console.log(`****************************`);
        console.log(`| Por favor, selecione uma opção para editar...`);
        console.log(`----------------------`);
        console.log(`| Opções para titular: `)
        console.log(`----------------------`);
        console.log(`| 1 - Nome: `);
        console.log(`| 2 - Nome Social: `);
        console.log(`| 3 - Documentos: `);
        console.log(`****************************`);
        console.log(`| 0 - Sair`);
        console.log(`----------------------`);
    }
}