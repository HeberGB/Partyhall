module.exports = class User {
  constructor(nombre, apellido, nick, contrasena) {
    this.nombre = nombre
    this.apellido = apellido
    this.nick = nick
    this.contrasena = contrasena
    this.evento = null
    this.fecha = null
    this.hora = null
  }
}