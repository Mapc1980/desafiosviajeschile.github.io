$(document).ready(function() {

    $("a").click(function(event) {
        var gato = this.hash
        
        $("html, body").animate(
            {

                scrollTop: $(gato).offset().top -70
            },
            800
        )
    

    })


})

$(document).ready(function() {
    // Agregar controlador de eventos click al botón "Enviar"
    $("#enviarCorreo").click(function(event) {
        // Evitar que el formulario se envíe automáticamente
        event.preventDefault();

        // Obtener el valor del campo de texto
        var comentario = $("#exampleFormControlTextarea1").val();

        // Verificar si el campo de texto está vacío
        if (comentario.trim() === "") {
            // Mostrar mensaje de alerta si el campo de texto está vacío
            alert("Por favor, completa los campos de Nombre Asunto y Comentario");
        } else {
            // Si el campo de texto no está vacío, enviar el formulario
            alert("Correo enviado");
            // Aquí podrías enviar el formulario usando AJAX o el método submit() del formulario
            // Ejemplo: $("form").submit();
        }
    });
});