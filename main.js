$(document).ready(function () {
    $("#btn-cadastrar").click(function (event) {
        event.preventDefault();
        let novoitemLista = $('#insira_tarefa').val();
        let itemLista = $('<li>').text(novoitemLista);
        $('#lista-de-tarefas').append(itemLista);
      $('#lista-de-tarefas').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
      });
      $('#texto_insere').val('');
      
});

  $("#btn-limpar").click(function (event) {
    event.preventDefault();
    $('#lista-de-tarefas').empty();
    })
})