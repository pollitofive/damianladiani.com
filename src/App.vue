<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Damián Ladiani</span>
        <img-profile></img-profile>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <template v-for="item in items_menu_es">
            <menu-item :id="item.id" :descripcion="item.descripcion"></menu-item>
          </template>
        </ul>
      </div>
    </nav>
    <div class="container-fluid p-0">
      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <my-data></my-data>
          <my-info></my-info>
          <p class="lead mb-5">
            Soy desarrollaor web, trabajé en el Ejército Argentino,
            Ministerio de Defensa y actualmente estoy trabajando en el Ministerio de Seguridad.
            Me considero una persona proactiva, apasionada de la programación y del liderazgo.
            Mi objectivo es convertirme en ingeniero en sistemas y ser un excelente profesional.
          </p>
          <social-media></social-media>
        </div>
      </section>
      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experiencia</h2>

          <experience position="Programador Freelance" description="Programador de sistemas, paginas y APIs en PHP, algunos proyectos solo y otros con amigos, para diferentes propósitos" time="Desde 2009" company=""></experience>

          <experience position="Desarrollador Web Semi Senior" company="Ministerio de seguridad" description="Analista programador desarrollando algunos proyectos, principalmente en laravel. Desarrollo frontend con css3 y html5, aplicando librerías como JQuery, Vue.js o bootstrap" time="Agosto 2013 - Hoy"></experience>

          <experience position="Desarrollador Web Semi Senior" company="Ministerio de Defensa" description="Programador de sistemas web con backend en PHP y bases de datos en mysql." time="Junio 2011 - Julio 2013"></experience>

          <experience position="Desarrollador Web Junior" company="Ejército Argentino" description="Programador en un sistema logístico en el Ejército Argentino. Durante los últimos meses, líder del equipo de desarrollo." time="Octubre 2006 - Mayo 2011"></experience>

        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Educación</h2>

          <education university="CAECE" career="Ingeniería en sistemas" time="Agosto 2014 - Algún dia, espero"></education>

          <education university="Universidad Tecnológica Nacional(UTN)" career="Técnico superior en sistemas informáticos" time="Marzo 2011 - Diciembre 2012"></education>

          <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Highland</h3>
              <div class="subheading mb-3">He estudiado 3 años inglés en el instituto Highland(Grand Bourg)</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">Marzo 2010 - Diciembre 2011</span>
              <br>
              <span class="text-primary">Marzo 2015 - Diciembre 2015</span>
            </div>
          </div>

          <education university="Universidad Tecnológica Nacional(UTN)" career="Técnico superior en programación" time="Febrero 2008 - Febrero 2011"></education>

        </div>
      </section>


      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Habilidades</h2>

          <div class="subheading mb-3">Lenguajes de Programación, herramientas</div>

          <languajes-tools></languajes-tools>

          <div class="subheading mb-3">Experiencia con las tecnologías</div>

          <my-skills></my-skills>

        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Intereses</h2>
          <p>Cuando no estoy trabajando o estudiando, me gusta mirar cursos en linea sobre nuevas tecnologías.</p>
          <p>Por otro lado, disfruto mirar series y películas. Me encanta ver fútbol y jugar de vez en cuando con mis amigos algún juego en linea. Cuando puedo, voy a correr o a nadar también.</p>
          <p>Me considero un amante de los viajes. Viajo siempre que puedo porque disfruto conocer lugares nuevos, hacer trekking y contemplar hermosos paisajes</p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>

import ImageProfile from './Components/image-profile.vue'
import MenuItem from './Components/menu-item.vue'
import MyData from './Components/my-data.vue'
import MyInfo from './Components/my-info.vue'
import SocialMedia from './Components/social-media.vue'
import Experience from './Components/experience.vue'
import Education from './Components/education.vue'
import LanguajesTools from './Components/languajes-tools.vue'
import MySkills from './Components/my-skills.vue'

export default {
  components: {
    'img-profile': ImageProfile,
    'menu-item': MenuItem,
    'my-data': MyData,
    'my-info': MyInfo,
    'social-media': SocialMedia,
    'experience': Experience,
    'education': Education,
    'languajes-tools': LanguajesTools,
    'my-skills': MySkills
  },
  name: 'app',
  data () {
    return {
      items_menu_es: [{
          'id': '#about',
          'descripcion': 'Sobre mi'
        },
        {
          'id': '#experience',
          'descripcion': 'Experiencia'
        },
        {
          'id': '#education',
          'descripcion': 'Educación'
        },
        {
          'id': '#skills',
          'descripcion': 'Habilidades'
        },
        {
          'id': '#interests',
          'descripcion': 'Intereses'
        },
        {
          'id': '../en/',
          'descripcion': 'EN'
        }]
    }
  }
}
</script>
