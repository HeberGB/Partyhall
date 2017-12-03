require('hammerjs')
require('materialize-css')
const interact = require('interactjs')
const getMenu = require('./functions/getMenu')
const elementHall = require('./functions/elementHall')

let $ = require('jquery')
let navMaker = require('./functions/navMaker')
let mesaId = 0
let meseroId = 0
let musicaId = 0
let bocinaId = 0

$(document).ready(() => {
  interact('.draggable').draggable({
    inertia: true,
    restrict: {
      restriction: 'parent',
      endOnly: true,
      elementRect: {
        top: 0,
        left: 0,
        bottom: 1,
        right: 1
      }
    },
    autoScroll: true,
    onmove: dragMoveListener,
    onend: function (event) {
      var textEl = event.target.querySelector('p')

      textEl && (textEl.textContent =
        'moved a distance of ' +
        (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
          Math.pow(event.pageY - event.y0, 2) | 0))
        .toFixed(2) + 'px')
    }
  })
  interact('.dropzone').dropzone({
    accept: ['mesa', 'mesero', 'musica', 'bocina'],
    overlap: 0.75,

    ondropactivate: function (event) {
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget,
        dropzoneElement = event.target

      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
      // draggableElement.textContent = 'Dragged in'
    },
    ondragleave: function (event) {
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
      // event.relatedTarget.textContent = 'Dragged out'
    },
    ondrop: function (event) {
      event.relatedTarget.style.border = 'solid white 1px'
    },
    ondropdeactivate: function (event) {
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })

  function dragMoveListener (event) {
    var target = event.target,
      x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
      y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.webkitTransform =
      target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }
  window.dragMoveListener = dragMoveListener
  $('header').html(navMaker())
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  })
  setInterval(function () {
    $('.carousel').carousel('next')
  }, 2000)
  $('#menu').html(getMenu('entrada'))
  $('.entrada').click(function () {
    $('#menu').html(getMenu('entrada'))
  })
  $('.sopa').click(function () {
    $('#menu').html(getMenu('sopa'))
  })
  $('.pasta').click(function () {
    $('#menu').html(getMenu('pasta'))
  })
  $('.fuerte').click(function () {
    $('#menu').html(getMenu('fuerte'))
  })
  $('.guarnicion').click(function () {
    $('#menu').html(getMenu('guarnicion'))
  })
  $('select').material_select()
  $('.datepicker').pickadate({
    monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
    format: 'dd mm yyyy',
    selectMonths: true,
    selectYears: 15,
    today: 'Hoy',
    clear: 'Borrar',
    close: 'Ok',
    closeOnSelect: false
  })
  $('.timepicker').pickatime({
    default: 'now',
    fromnow: 0,
    format: 'h:i A',
    cleartext: 'Borrar',
    donetext: 'Ok',
    canceltext: 'Cancelar',
    autoclose: false,
    ampmclickable: true
  })
  $('#mesa').click(function () {
    elementHall('mesa', mesaId)
    mesaId++
    $('#mesas').material_select()
  })
  $('#mesero').click(function () {
    elementHall('mesero', meseroId)
    meseroId++
  })
  $('#musica').click(function () {
    elementHall('musica', musicaId)
    musicaId++
  })
  $('#bocina').click(function () {
    elementHall('bocina', bocinaId)
    bocinaId++
  })
  $('#invitado').click(function (invitado) {

  })
})
