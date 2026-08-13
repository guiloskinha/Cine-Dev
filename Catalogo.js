export default class Catalogo {
    #listaDeMidias;
    constructor() {
        this.#listaDeMidias = [];
    }
    adicionar(midia) {
        this.#listaDeMidias.push(midia);
        this.renderizar();
    }

    renderizar() {
        const container = document.getElementById("containerCatalogo");
        container.innerHTML = "";
        this.#listaDeMidias.forEach(midia => {

            container.innerHTML += midia.obterDad
        })
    }
}