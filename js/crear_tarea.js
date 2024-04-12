// Obtener una referencia al icono de agregar tarea
const mostrarFormularioIcon = document.getElementById('mostrar-formulario-icon');

// Agregar un evento de clic al icono para mostrar el modal
mostrarFormularioIcon.addEventListener('click', function() {
    $('#crearTareaModal').modal('show');
});

// Agregar un evento de clic al botón de guardar en el modal
document.getElementById('guardarTareaBtn').addEventListener('click', function() {
    // Aquí vamos a:  agregar lógica para guardar la tarea
    // Por ejemplo:
    // 1. Obtener los datos del formulario
    // 2. Validar los datos
    // 3. Enviar los datos al servidor
    // 4. Cerrar el modal después de guardar la tarea
    $('#crearTareaModal').modal('hide');
});

// Cerrar el modal cuando se hace clic en el botón de cancelar
document.querySelector('[data-dismiss="modal"]').addEventListener('click', function() {
    $('#crearTareaModal').modal('hide');
});

