export default class Catalogo { // essa classepode ser exportada por outros arquivos j.s
    #listaDeMidias; // declara uma propriedade e essa propriedade ela e privada e ela so pode ser acessada dentro da classe catalogo
    constructor() { // e um metodo especial da Classe ela executa automaticamente
        this.#listaDeMidias = []; // this e um objeto atual
        // criar um array vazio, ou seja o catalogo comeca sem nenhum elemento
    }
    adicionar(midia) {
        this.#listaDeMidias.push(midia);
        this.renderizar();
    }

    renderizar() {
        const container = document.getElementById("containerCatalogo");
        container.innerHTML = "";
        this.#listaDeMidias.forEach(midia => {

            container.innerHTML += midia.obterDadosHTML();
        });
    } // dia 13/08

    static filtrarPorGenero(catalagoInstanciado, generoAlvo) {
return catalagoInstanciado.#listaDeMidias.
m => m.genero.tol
    }
}