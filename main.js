const form = document.getElementById("agenda-contatos");
let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const inputnome = document.getElementById("nome-agenda");
    const inputnumero = document.getElementById("numero-agenda");
    const inputanotacoes = document.getElementById("anotacoes-agenda");
    
    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputnumero.value}</td>`;
    linha += `<td>${inputanotacoes.value}</td>`;

    linhas += linha;

    const corpotabela = document.querySelector(`tbody`);
    corpotabela.innerHTML = linhas;

    inputnome.value = '';
    inputnumero.value = '';
    inputanotacoes.value = '';
});