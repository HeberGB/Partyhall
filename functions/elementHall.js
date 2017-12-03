module.exports = function (element, id) {
  
  if (element == 'mesa') {
    $('#salon').prepend(`<div id="mesa${id}" class="draggable drag-drop mesa tooltip"><img src="../assets/mesa.png" alt="mesa icon"></div>
    <span class="tooltiptext"></span>`)
    $('#mesas').append(`<option value="${id}">Mesa ${id+1}</option>` )
  } else if (element == 'mesero') {
    $('#salon').prepend(`<div id="mesero${id}" class="draggable drag-drop mesero tooltip"><img src="../assets/mesero.png" alt="mesero icon"></div>
    <span class="tooltiptext"></span>`)
  } else if (element == 'musica') {
    $('#salon').prepend(`<div id="musica${id}" class="draggable drag-drop musica tooltip"><img src="../assets/musica.png" alt="musica icon"></div>
    <span class="tooltiptext"></span>`)
  } else if (element == 'bocina') {
    $('#salon').prepend(`<div id="bocina${id}" class="draggable drag-drop bocina tooltip"><img src="../assets/bocina.png" alt="bocina icon"></div>
    <span class="tooltiptext"></span>`)
  }
}