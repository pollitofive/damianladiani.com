<template>
  <div>

    <app-menu :items_menu="items_menu" languaje="es"></app-menu>

    <div class="container-fluid p-0">

      <app-about :my_description="my_description"></app-about>

      <app-experience :experiences="experiences" title="Experiencia"></app-experience>

      <app-education :items_education="items_education" title="Educación"></app-education>

      <app-skills title="Habilidades" sub_title_one="Lenguajes de Programación, herramientas" sub_title_two="Experiencia con las tecnologías"></app-skills>

      <app-interests title="Intereses" :items_interests="items_interests"></app-interests>

    </div>
  </div>
</template>

<script>


import AppMenu from './page/menu.vue'
import AppAbout from './page/about.vue'
import Experience from './page/experience.vue'
import Education from './page/education.vue'
import Skills from './page/skills.vue'
import Interests from './page/interests.vue'

export default {
  components: {
    'app-menu': AppMenu,
    'app-about': AppAbout,
    'app-experience': Experience,
    'app-education': Education,
    'app-skills': Skills,
    'app-interests': Interests
  },
  name: 'app',
  data () {
    return {

      my_description: "Soy desarrollador web, trabajé en el Ejército Argentino, Ministerio de Defensa y actualmente estoy trabajando en el Ministerio de Seguridad. Me considero una persona proactiva, apasionada de la programación y del liderazgo. Mi objectivo es convertirme en ingeniero en sistemas y ser un excelente profesional.",
      items_menu: [{
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
        }],
      experiences: [
        {
          position: 'Programador Freelance',
          description: 'Programador de sistemas, paginas y APIs en PHP, algunos proyectos solo y otros con amigos, para diferentes propósitos',
          time: 'Desde 2009',
          company: ''
        },
        {
          position: 'Desarrollador Web Semi Senior',
          description: 'Analista programador desarrollando algunos proyectos, principalmente en laravel. Desarrollo frontend con css3 y html5, aplicando librerías como JQuery, Vue.js o bootstrap',
          time: 'Agosto 2013 - Hoy',
          company: 'Ministerio de seguridad'
        },
        {
          position: 'Desarrollador Web Semi Senior',
          description: 'Programador de sistemas web con backend en PHP y bases de datos en mysql.',
          time: 'Junio 2011 - Julio 2013',
          company: 'Ministerio de Defensa'
        },
        {
          position: 'Desarrollador Web Junior',
          description: 'Programador en un sistema logístico en el Ejército Argentino. Durante los últimos meses, líder del equipo de desarrollo.',
          time: 'Octubre 2006 - Mayo 2011',
          company: 'Ejército Argentino'
        }
      ],
      items_education: [
        {
          university: 'CAECE',
          career: 'Ingeniería en sistemas',
          time: 'Agosto 2014 - Algún dia, espero',
          second_time: ''
        },
        {
          university: 'Universidad Tecnológica Nacional(UTN)',
          career: 'Técnico superior en sistemas informáticos',
          time: 'Marzo 2011 - Diciembre 2012',
          second_time: ''
        },
        {
          university: 'Highland',
          career: 'He estudiado 3 años inglés en el instituto Highland(Grand Bourg)',
          time: 'Marzo 2010 - Diciembre 2011',
          second_time: 'Marzo 2015 - Diciembre 2015'
        },
        {
          university: 'Universidad Tecnológica Nacional(UTN)',
          career: 'Técnico superior en programación',
          time: 'Febrero 2008 - Febrero 2011',
          second_time: ''
        },
      ],
      items_interests: [
        {
          'description': 'Cuando no estoy trabajando o estudiando, me gusta mirar cursos en linea sobre nuevas tecnologías.'
        },
        {
          'description': 'Por otro lado, disfruto mirar series y películas. Me encanta ver fútbol y jugar de vez en cuando con mis amigos algún juego en linea. Cuando puedo, voy a correr o a nadar también.'
        },
        {
          'description': 'Me considero un amante de los viajes. Viajo siempre que puedo porque disfruto conocer lugares nuevos, hacer trekking y contemplar hermosos paisajes.'
        }
      ]
    }
  }
}
</script>
