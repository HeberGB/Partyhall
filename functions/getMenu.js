module.exports = function (comida) {
  if (comida == 'entrada') {
    return `
    <h5 class="center-align">Entradas</h5>
    <p class="center-align">Jitomates rellenos de atún
    <br>Rollitos de jamón con ensalada de la casa
    <br>Perlas de melón al kirsch
    <br>Coctel de frutas de temporada
    <br>Ensalada verde
    <br>Ensalada de berros y champiñón con crema agria
    <br>Crepas de champiñón
    <br>Calabacitas rellenas del chef
    </p>`
  } else if (comida == 'sopa') {
    return `
    <h5 class="center-align">Sopas y cremas</h5>
    <p class="center-align">Crema de tres quesos
    <br>Crema de champiñón
    <br>Crema de elote
    <br>Crema de zanahoria
    <br>Crema de cilantro
    <br>Crema de chile poblano
    <br>Crema de morrón
    <br>Crema de chícharos
    <br>Crema de espinacas
    <br>Crema de calabacitas
    <br>Crema de verduras
    <br>Crema campesina
    <br>Crema de zetas con nuez
    <br>Crema de brócoli
    <br>Crema de papa
    <br>Crema de cilantro con nuez
    <br>Sopa Azteca
    <br>Sopa de Cebolla
    <br>Sopa de lentejas
    <br>Sopa de tortillas
    <br>Sopa de papas
    <br>Consomé de pollo con tallarines
    <br>Consomé de pollo con verduras
    <br>Consomé de pollo con arroz</p>`
  } else if (comida == 'pasta') {
    return `
    <h5 class="center-align">Pastas</h5>
    <p class="center-align">Codito
    <br>Codito a la italiana
    <br>Spaguetti a la crema
    <br>Spaguetti a la italiana
    <br>Spaguetti a la boloñesa
    <br>Spaguetti al chipotle
    <br>Spaguetti a la florentina
    <br>Tallarines en salsa de champiñones</p>`
  } else if (comida == 'fuerte') {
    return `
    <h5 class="center-align">Plato fuerte de cerdo</h5>
    <p class="center-align">Escalopas de cerdo en salsa greavy
      <br> Medallones de cerdo en salsa de mostaza
      <br> Lomo relleno con frutos secos en salsa de tamarindo
      <br> Loma a la ciruela
      <br> Pierna de cerdo en salsa de manzana
      <br> Lomo de cerdo en salsa de naranja</p>
    <h5 class="center-align">Plato fuerte de pollo</h5>
    <p class="center-align">Pechuga a la crema
      <br>Pechuga a las tres pimientas
      <br>Pechuga almendrada
      <br>Pechuga en salsa de champiñones
      <br>Pechuga Cordón blue
      <br>Pechuga rellena de queso
      <br>Suprema rellena de champiñones en salsa de poblano
      <br>Pechuga rellena de espinacas en salsa de mostaza
      <br>Pechuga rellena de jamón y queso Oaxaca</p>`
  } else if (comida == 'guarnicion') {
    return `
    <h5 class="center-align">Guarniciones</h5>
    <p class="center-align">Ejotes salteados a la mantequilla y perejil
      <br>Vegetales al vapor
      <br>Ensalada de manzana con pasitas
      <br>Zanahorias bichy
      <br>Ejotes salteados a las finas hierbas
      <br>Zanahoria al horno con jengibre y miel
      <br>Papitas al perejil
      <br>Puré de papa
      <br>Papa al horno
      <br>Puré de espinaca
      <br>Papitas salteadas con queso parmesano y perejil
      <br>Ensalada rusa</p>`
  } else return `<p>No existe esa comida :(</p>`
}