$(document).ready(function() {
    $('fieldset#complejidad input').on('click', function() {
        $('small#complejidad-descripción').html($(this).attr('data-descripcion'));
    });
});