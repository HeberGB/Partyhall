const Mesa = require('./Mesa')
const Tooltip = require('tooltip.js')


module.exports = function (element, id, 
  entrada = $('#entrada').val(), 
  sopa = $('#sopa').val(),
  pasta = $('#pasta').val(),
  fuerte = $('#fuerte').val(),
  guarnicion = $('#guarnicion').val()) {

  if (element == 'mesa') {
    $('#salon').prepend(`<div id="mesa-${id}" class="draggable drag-drop mesa tooltip"><img src="../assets/mesa.png" alt="mesa icon"></div>
    <span class="tooltiptext"></span>`)
    $('#mesas').append(`<option value="${id}">Mesa ${id+1}</option>`)
    let referenceElement = $('#mesa-' + id)
    let menu = new Tooltip(referenceElement, {
      placement: 'bottom', // or bottom, left, right, and variations
      title: `Menu:
      ${entrada}
      ${sopa}
      ${pasta}
      ${fuerte}
      ${guarnicion}`,
    })
    return new Mesa(`mesa-${id}`)
  } else if (element == 'mesero') {
    $('#salon').prepend(`<div id="mesero-${id}" class="draggable drag-drop mesero tooltip"><img src="../assets/mesero.png" alt="mesero icon"></div>
    <span class="tooltiptext"></span>`)
  } else if (element == 'musica') {
    $('#salon').prepend(`<div id="musica-${id}" class="draggable drag-drop musica tooltip"><img src="../assets/musica.png" alt="musica icon"></div>
    <span class="tooltiptext"></span>`)
  } else if (element == 'bocina') {
    $('#salon').prepend(`<div id="bocina-${id}" class="draggable drag-drop bocina tooltip"><img src="../assets/bocina.png" alt="bocina icon"></div>
    <span class="tooltiptext"></span>`)
  }
}