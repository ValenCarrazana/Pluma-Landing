// Esta linea garantiza que todo lo que se ejecute dentro de ready
// se ejecute solo cuando el html esté 100% cargado
$(document).ready(() => {
  console.log("JQuery Cargado");

  // Cuando hacemos click en "suscribirme" de los form abreviados, abrimos el popup del form completo
  $("#btn-enviar-formulario").click(() => {
    abrirFeedback();
    trasladarDatosDelFormCompletoAFeedback();
  });

  // Cuando se envía el formulario, evitamos la recarga automática de la página
  $("form").submit((event) => {
    event.preventDefault();
  });

  // Cuando hacemos click en la cruz de los popup, los cerramos
  $(".cerrar").click(() => {
    cerrarPopup();
  });
});

function cerrarPopup() {
  $(".popup-contenedor.feedback").addClass("oculto");
}

function abrirFeedback() {
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function trasladarDatosDelFormCompletoAFeedback() {
  const inputNombre = $("#nombre");
  const inputEmail = $("#email");

  const nombre = inputNombre.val();
  const email = inputEmail.val();

  const spanNombre = $("#dato-nombre");
  const spanEmail = $("#dato-email");

  spanNombre.html(nombre);
  spanEmail.html(email);
}