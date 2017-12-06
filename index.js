require('hammerjs')
require('materialize-css')
let $ = require('jquery')
const alertify = require('alertifyjs')
const interact = require('interactjs')
const Tooltip = require('tooltip.js')
const getMenu = require('./functions/getMenu')
const elementHall = require('./functions/elementHall')
const User = require('./functions/User')
const Evento = require('./functions/Evento')
const Mesero = require('./functions/ObjetoExtra')
const Musica = require('./functions/ObjetoExtra')
const Bocina = require('./functions/ObjetoExtra')

let navMaker = require('./functions/navMaker')
let currentUser
let mesaId = 0
let meseroId = 0
let musicaId = 0
let bocinaId = 0

function dragMoveListener(event) {
  var target = event.target,
    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.webkitTransform =
    target.style.transform =
    'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

$(document).ready(() => {

  let path = window.location.pathname
  path = path.substr(0, path.indexOf('views'))
  //Inicio de sesión
  if (new RegExp('reservaciones').test(document.URL)) {
    alertify.prompt('Introduce tu usuario').setting({
      'closable': false,
      'labels': {
        ok: 'Siguiente',
        cancel: 'Registrarse'
      },
      'onok': function (evt, value) {
        if (currentUser = JSON.parse(localStorage.getItem(value))) {
          setTimeout(function () {
            alertify.prompt('Introduce tu contraseña').setting({
              'type': 'password',
              'closable': false,
              'labels': {
                ok: 'Iniciar sesión',
                cancel: 'Cancelar'
              },
              'onok': function (evt, value) {
                if (value == currentUser.contrasena) {
                  alertify.success('Sesión iniciada')
                } else {
                  alertify.error('Contraseña incorrecta :(')
                  setTimeout(function () {
                    location.href = path + 'index.html'
                  }, 650)
                }
              },
              'oncancel': function () {
                alertify.error('Cancelado')
                location.href = path + 'index.html'
              }
            }).setHeader('<em> Login </em> ').show()
          }, 100)

        } else {
          alertify.error('No existe el usuario :(')
          setTimeout(function () {
            location.href = path + 'index.html'
          }, 650)
        }
      },
      'oncancel': function () {
        alertify.error('Cancelado')
        location.href = path + 'views/signup.html'
      }
    }).setHeader('<em> Login </em> ').show()
  }
  //Drag and drop
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
  window.dragMoveListener = dragMoveListener
  //Navbar
  $('header').html(navMaker())
  //Carousel
  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  })
  setInterval(function () {
    $('.carousel').carousel('next')
  }, 2000)
  //Eventos
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

  $('#registrar').click(function () {
    const nombre = $('#nombre').val()
    const apellido = $('#apellido').val()
    const nick = $('#nick').val()
    const contrasena = $('#contrasena').val()
    localStorage.setItem(nick, JSON.stringify(new User(nombre, apellido, nick, contrasena)))
    document.getElementById('registro').reset()
  })

  let evento = new Evento()
  $('#eventos').change(function () {
    evento.tipo = $('#eventos').val()
  })
  $('#calendario').change(function () {
    evento.fecha = $('#calendario').val()
  })
  $('#hora').change(function () {
    evento.hora = $('#hora').val()
  })
  $('#mesa').click(function () {
    evento.mesas.push(elementHall('mesa', mesaId))
    // elementHall('mesa', mesaId)
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
  let invitados
  let clicks = 0
  let mesa_pasada
  $('#invitado').click(function (invitado) {
    if (mesa_pasada != $('#mesas').val()) clicks = 0
    if (clicks != 0) {
      invitados.dispose()
      console.log(clicks)
    }
    if ($('#mesas').val()) {
      mesa_pasada = $('#mesas').val()
      evento.mesas[$('#mesas').val()].invitados.push($('#nombreInvitado').val())
      let referenceElement = $('#mesa-' + $('#mesas').val())
      invitados = new Tooltip(referenceElement, {
        placement: 'top', // or bottom, left, right, and variations
        title: `Invitados:
        ${evento.mesas[$('#mesas').val()].invitados.join('\n')}`
      })
      clicks++
      alertify.success('Invitado agregado')
    } else alertify.error('No selecionaste la mesa')
  })
  $('#guardar').click(function () {
    for (let i = 0; i < mesaId; i++) {
      evento.mesas[i].x = $('#mesa-' + i).attr('data-x')
      evento.mesas[i].y = $('#mesa-' + i).attr('data-y')
    }
    for (let i = 0; i < meseroId; i++) {
      evento.meseros.push(new Mesero())
      evento.meseros[i].x = $('#mesero-' + i).attr('data-x')
      evento.meseros[i].y = $('#mesero-' + i).attr('data-y')
    }
    for (let i = 0; i < musicaId; i++) {
      evento.musica.push(new Musica())
      evento.musica[i].x = $('#musica-' + i).attr('data-x')
      evento.musica[i].y = $('#musica-' + i).attr('data-y')
    }
    for (let i = 0; i < bocinaId; i++) {
      evento.bocinas.push(new Bocina())
      evento.bocinas[i].x = $('#bocina-' + i).attr('data-x')
      evento.bocinas[i].y = $('#bocina-' + i).attr('data-y')
    }
    currentUser.evento = evento
    localStorage.setItem(currentUser.nick, JSON.stringify(currentUser))
    alertify.success('Evento guardado')
  })
  $('#restaurar').click(function () {
    let backup = JSON.parse(localStorage.getItem(currentUser.nick))
    const backupEvento = backup.evento
    // $('#eventos').val(backupEvento.tipo)
    // $('#calendario').val(backupEvento.fecha)
    // $('#hora').val(backupEvento.hora)
    // console.log(backupEvento.mesas.length)
    for (let i = 0; i < backupEvento.mesas.length; i++) {
      elementHall('mesa', i,
        backupEvento.mesas[i].entrada,
        backupEvento.mesas[i].sopa,
        backupEvento.mesas[i].pasta,
        backupEvento.mesas[i].fuerte,
        backupEvento.mesas[i].guarnicion)
      let referenceElement = $('#mesa-' + i)
      invitados = new Tooltip(referenceElement, {
        placement: 'top', // or bottom, left, right, and variations
        title: `Invitados:
          ${backupEvento.mesas[i].invitados.join('\n')}`
      })
    }
    for (let i = 0; i < backupEvento.meseros.length; i++) {
      elementHall('mesero', i)
    }
    for (let i = 0; i < backupEvento.musica.length; i++) {
      elementHall('musica', i)
    }
    for (let i = 0; i < backupEvento.bocinas.length; i++) {
      elementHall('bocina', i)
    }

    for (let i = 0; i < backupEvento.mesas.length; i++) {
      document.getElementById('mesa-' + i).setAttribute('style', `transform: translate(${backupEvento.mesas[i].x}px, ${backupEvento.mesas[i].y}px);`)
    }
    for (let i = 0; i < backupEvento.meseros.length; i++) {
      document.getElementById('mesero-' + i).setAttribute('style', `transform: translate(${backupEvento.meseros[i].x}px, ${backupEvento.meseros[i].y}px);`)
    }
    for (let i = 0; i < backupEvento.musica.length; i++) {
      document.getElementById('musica-' + i).setAttribute('style', `transform: translate(${backupEvento.musica[i].x}px, ${backupEvento.musica[i].y}px);`)
    }
    for (let i = 0; i < backupEvento.bocinas.length; i++) {
      document.getElementById('bocina-' + i).setAttribute('style', `transform: translate(${backupEvento.bocinas[i].x}px, ${backupEvento.bocinas[i].y}px);`)
    }
  })
})