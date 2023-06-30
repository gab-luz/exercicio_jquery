$(document).ready(function () {
    $("#btn-cadastrar").click(function (event) {
        event.preventDefault();
        let novoitemLista = $('#insira_tarefa').val();
        let itemLista = $('<li>').text(novoitemLista);
        $('#lista-de-tarefas').append(itemLista);
        $('#texto_insere').val('');
});

  $("#btn-limpar").click(function (event) {
    event.preventDefault();
    $('#lista-de-tarefas').empty();
    })
})