module.exports = function(){
  let indexURL = 'index.html'
  let quienesURL = 'views/quienes.html'
  let nosotrosURL = 'views/nosotros.html'
  let menuURL = 'views/menu.html'
  let reservacionesURL = 'views/reservaciones.html'
  let contactoURL = 'views/contacto.html'
  const isInViews = (url) => new RegExp('views').test(url)
  
  if(isInViews(document.URL)){
    indexURL = '../index.html'
    nosotrosURL = 'nosotros.html'
    menuURL = 'menu.html'
    reservacionesURL = 'reservaciones.html'
    contactoURL = 'contacto.html'
  }
  return `
  <nav>
  <div class="nav-wrapper">
    <a href="${indexURL}" class="brand-logo left logo">Partyhall.</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>
        <a href="${indexURL}">
          Inicio
        </a>
      </li>
      <li>
        <a href="${nosotrosURL}">
          Quienes somos
        </a>
      </li>
      <li>
        <a href="${menuURL}">
          Nuestro menu
        </a>
      </li>
      <li>
        <a href="${reservacionesURL}">
          Reservaciones
        </a>
      </li>
      <li>
        <a href="${contactoURL}">
          Contacto
        </a>
      </li>
    </ul>
  </div>
</nav>`
}