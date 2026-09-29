export function configurarNavegacao(paginas, app) {

    function carregarPagina() {
        const rota = window.location.hash.replace("#", "") || "inicio";

        if (paginas[rota]) {
            app.innerHTML = paginas[rota];
        } else {
            app.innerHTML = paginas.inicio;
        }
    }

    document.addEventListener("click", function (event) {

        const link = event.target.closest("[data-rota]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const rota = link.dataset.rota;

        window.location.hash = rota;
    });

    window.addEventListener("hashchange", carregarPagina);

    carregarPagina();
}