// ... el código inicial que pegaste ...
'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a title="location" href="#location">Ubicación</a>
            <a title="about" href="#about">Horarios</a>
            <a title="works" href="#works">Servicios</a>
            <a title="happy" href="#happy">Clientes Felices</a>
            <a title="us" href="#us">Nosotros</a>
            <a title="blog" href="#blog">Productos</a>
            <a title="contact" href="#contact">Contacto</a>
            <a title="carrusel" href="#carrusel">Marcas</a>
            <a title="mercadolibre" href="#mercadolibre">Mercadolibre</a>
            </div>
          </div>
          </nav>
      </div>
    )
  }
}
// ... el código inicial que pegaste ...

const domContainer = document.querySelector('#navbar_container');
ReactDOM.render(e(NavBar), domContainer);