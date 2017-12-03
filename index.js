require('hammerjs')
require('materialize-css')
const getMenu = require('./functions/getMenu')

let $ = require('jquery')
let navMaker = require('./functions/navMaker')

$(document).ready(() => {
  $('header').html(navMaker())
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
  })
  setInterval(function(){
    $('.carousel').carousel('next')
  }, 2000)
  $('#menu').html(getMenu('entrada'))
  $('.entrada').click(function(){
    $('#menu').html(getMenu('entrada'))
  })
  $('.sopa').click(function(){
    $('#menu').html(getMenu('sopa'))
  })
  $('.pasta').click(function(){
    $('#menu').html(getMenu('pasta'))
  })
  $('.fuerte').click(function(){
    $('#menu').html(getMenu('fuerte'))
  })
  $('.guarnicion').click(function(){
    $('#menu').html(getMenu('guarnicion'))
  })

})