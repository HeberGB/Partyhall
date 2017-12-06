module.exports = class Mesa {
  constructor (nombre, invitados = []) {
    this.nombre = nombre
    this.entrada = $('#entrada').val()
    this.sopa = $('#sopa').val()
    this.pasta = $('#pasta').val()
    this.fuerte = $('#fuerte').val()
    this.guarnicion = $('#guarnicion').val()
    this.invitados = invitados
    this.x = 0
    this.y = 0
  }
}