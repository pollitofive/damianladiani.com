<template>
  <div>

    <app-menu :items_menu="items_menu" languaje="es"></app-menu>

    <div class="container-fluid p-0">

      <app-about :my_description="my_description"></app-about>

      <app-experience :experiences="experiences" title="Experiencia"></app-experience>

      <app-my-projects :projects="projects" title="Mis proyectos"></app-my-projects>

      <app-education :items_education="items_education" title="Educación"></app-education>

      <app-skills title="Habilidades"></app-skills>

      <app-interests title="Intereses" :items_interests="items_interests"></app-interests>

    </div>
  </div>
</template>

<script>


import AppMenu from './page/menu.vue'
import AppAbout from './page/about.vue'
import Experience from './page/experience.vue'
import MyProjects from './page/my-projects.vue'
import Projects from './page/projects.vue'
import Education from './page/education.vue'
import Skills from './page/skills.vue'
import Interests from './page/interests.vue'

export default {
  components: {
    'app-menu': AppMenu,
    'app-about': AppAbout,
    'app-experience': Experience,
    'app-my-projects': MyProjects,
    'app-projects': Projects,
    'app-education': Education,
    'app-skills': Skills,
    'app-interests': Interests
  },
  name: 'app',
  data () {
    return {

      my_description: "Soy desarrollador web, trabajé en el Ejército Argentino, Ministerio de Defensa de la Nación, Ministerio de Seguridad de la Nación y actualmente estoy trabajando en la compañia Metrotel. Me considero una persona proactiva, apasionada de la programación y del liderazgo. Me gusta aprender algo nuevo todos los días para así ser un mejor profesional.",
      items_menu: [{
          'id': '#about',
          'descripcion': 'Sobre mi'
        },
        {
          'id': '#experience',
          'descripcion': 'Experiencia'
        },
        {
          'id': '#my_projects',
          'descripcion': 'Mis Proyectos'
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
          description: 'Programador de sistemas, páginas y APIs en PHP, algunos proyectos de forma individual y otros con amigos, para diferentes propósitos. En el pasado, desarrollé un sistema de seguros de autos, otro para una heladería, hasta hace poco estuve desarrollando una plataforma de subastas inversas, y actualmente hago mantenimiento de plugins limesurvey.',
          time: 'Desde 2009',
          company: ''
        },
        {
          position: 'Desarrollador Web Semi Senior',
          description: 'Analista programador, trabajando en un sistema llamado dispo, que maneja las oportunidades de venta, productos y registros de la compañía, entre otras cosas. Además, hago revisiones de código en laravel, para proponer mejores prácticas de una migración que se está llevando a cabo dentro de la compañía',
          time: 'Marzo 2019 - Hoy',
          company: 'Metrotel'
        },
        {
          position: 'Desarrollador Web Semi Senior',
          description: 'Analista programador desarrollando algunos proyectos, principalmente en laravel. Desarrollo frontend con css3 y html5, aplicando librerías como JQuery, Vue.js o bootstrap',
          time: 'Agosto 2013 - Marzo 2019',
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
      projects: [
        {
          'project': 'Wadaboo',
          'url': 'http://wadaboo.damianladiani.com/',
          'repository': 'https://github.com/pollitofive/demo_wadaboo/tree/master',
          'description': 'Wadaboo es una poderosa e innovadora solución tecnológica para empresas, una plataforma de subastas inversas para automatizar y efectivizar los procesos de compra de las empresas.'
        },
        {
          'project': 'Wadapay',
          'url': 'http://wadapay.damianladiani.com/',
          'repository': 'https://github.com/pollitofive/wadapay',
          'description': 'Wadapay es una innovadora red de pagos para empresas y emprendedores. Una moneda nativa de Wadaboo pensada para emprendedores.'
        },
        {
          'project': 'Damián Ladiani',
          'url': 'http://damianladiani.com/',
          'repository': 'https://github.com/pollitofive/damianladiani.com',
          'description': 'Mi página personal.'
        }
      ],
      items_education: [
        {
          university: 'Platzi',
          career: 'Autodidacta',
          time: 'Desde Marzo 2021',
          second_time: ''
        },
        {
          university: 'Laracast',
          career: 'Autodidacta',
          time: 'Desde Junio 2019',
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
          career: 'He estudiado 3 años inglés en el instituto Highland, mi es nivel intermedio',
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
          'description': 'Cuando no estoy trabajando, me gusta mirar cursos en línea en <a href="https://platzi.com/p/damianladiani/" target="_blank">Platzi</a> o <a href="http://www.laracast.com" target="_blank">Laracast</a> sobre nuevas tecnologías o mejorar mi nivel de inglés con <a href="http://virtualenglishlessons.com.ar/es" target="_blank">virtualenglishlessons</a>. Hoy en día me esta apasionando el mundo crypto, por lo que veo varios cursos de eso ultimamente y me aspiro a ser desarrollador de la web3.'
        },
        {
          'description': 'Por otro lado, disfruto mirar series y películas. Me encanta ver fútbol y tambien jugar y mirar Age of empires II. Cuando puedo, voy a correr o a nadar.'
        },
        {
          'description': 'Me considero un amante de los viajes. Viajo siempre que puedo porque disfruto conocer lugares nuevos, hacer trekking y contemplar hermosos paisajes.'
        }
      ]
    }
  }
}
</script>
