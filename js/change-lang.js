$(".flags-laguages .change-lang").each(function () {

  // Obtengo el idioma del click
  var country = $(this).attr("country");

  var rutaActual = window.location.href;

  const regex = /\/((\w{2})\/?$|(\w{2})\/)/gm;

  var nuevaRuta = rutaActual.replace(regex, '/' + country + '/');

  $(this).attr("href", nuevaRuta);

});