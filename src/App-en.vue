<template>
    <div>

        <app-menu :items_menu="items_menu" languaje="en"></app-menu>

        <div class="container-fluid p-0">

            <app-about :my_description="my_description"></app-about>

            <app-experience :experiences="experiences" title="Experience"></app-experience>

            <app-my-projects :projects="projects" title="My projects"></app-my-projects>

            <app-education :items_education="items_education" title="Education"></app-education>

            <app-skills title="Skills"></app-skills>

            <app-interests title="Interests" :items_interests="items_interests"></app-interests>

        </div>
    </div>
</template>
<script>

    import AppMenu from './page/menu.vue'
    import AppAbout from './page/about.vue'
    import Experience from './page/experience.vue'
    import MyProjects from './page/my-projects.vue'
    import Education from './page/education.vue'
    import Skills from './page/skills.vue'
    import Interests from './page/interests.vue'

    export default {
        components: {
            'app-menu': AppMenu,
            'app-about': AppAbout,
            'app-experience': Experience,
            'app-my-projects': MyProjects,
            'app-education': Education,
            'app-skills': Skills,
            'app-interests': Interests
        },
        name: 'app',
        data () {
        return {
            my_description: "I am a web developer, I worked in Argentinian Army (Ejército Argentino), Ministry of Defense (Ministerio de Defensa), Ministry of Segurity (Ministerio de Seguridad) and I’m currently working in the company Metrotel. I'm proactive and passionate person about programming and leadership. I love learning something new every day and be a better professional",
            items_menu: [{
                'id': '#about',
                'descripcion': 'About'
                },
                {
                    'id': '#experience',
                    'descripcion': 'Experience'
                },
                {
                    'id': '#my_projects',
                    'descripcion': 'My projects'
                },
                {
                    'id': '#education',
                    'descripcion': 'Education'
                },
                {
                    'id': '#skills',
                    'descripcion': 'Skills'
                },
                {
                    'id': '#interests',
                    'descripcion': 'Interests'
                }],
            experiences: [
                {
                    position: 'Freelance Programmer',
                    description: "Programmer of PHP systems, pages and APIs, some projects individually and others with friends, for different purposes. In the past, I developed a car insurance system, another one for an ice cream shop, until recently I was developing a reverse auction platform, and currently I'm maintaining limesurvey plugins.",
                    time: 'Since 2009',
                    company: ''
                },
                {
                    position: 'Desarrollador Web Semi Senior',
                    description: 'Programmer analyst, working in a system called Dispo, that handles the opportunities of sell, products and records of the company, between other things. Además, hago revisiones de código en laravel, para proponer mejores prácticas de una migración que se está llevando a cabo dentro de la compañía',
                    time: 'Marzo 2019 - Hoy',
                    company: 'Metrotel'
                },
                {
                    position: 'Semi Senior Web Developer',
                    description: 'Programmer analyst developing some projects, principally in laravel. Developer frontend with css3 and html5, applying libraries like JQuery, Vue.js or bootstrap.',
                    time: 'August 2013 - March 2019',
                    company: 'Ministry of Security'
                },
                {
                    position: 'Semi Senior Web Developer',
                    description: 'Programmer of web systems with backend in PHP and databases with mysql.',
                    time: 'June 2011 - July 2013',
                    company: 'Ministry of Defense'
                },
                {
                    position: 'Junior Web Developer',
                    description: 'Programmer of a logistic system of Argentinian Army. During the last months, chief of the developer team.',
                    time: 'October 2006 - May 2011',
                    company: 'Argentinian Army'
                }
            ],
            projects: [
                {
                    'project': 'Wadaboo',
                    'url': 'http://wadaboo.damianladiani.com/',
                    'repository': 'https://github.com/pollitofive/demo_wadaboo/tree/master',
                    'description': 'Wadaboo is a powerful and innovative technology solution for businesses, A reverse auction platform to automate and streamline the purchasing process for businesses'
                },
                {
                    'project': 'Wadapay',
                    'url': 'http://wadapay.damianladiani.com/',
                    'repository': 'https://github.com/pollitofive/wadapay',
                    'description': 'Wadapay is an innovative payment network for companies and entrepreneurs. A native Wadaboo coin designed for entrepreneurs.'
                },
                {
                    'project': 'Damián Ladiani',
                    'url': 'http://damianladiani.com/',
                    'repository': 'https://github.com/pollitofive/damianladiani.com',
                    'description': 'My personal page.'
                }
            ],
            items_education: [
                {
                    university: 'Platzi',
                    career: 'Self-taught',
                    time: 'Since March 2021',
                    second_time: ''
                },
                {
                    university: 'Laracast',
                    career: 'Self-taught',
                    time: 'Since June 2019',
                    second_time: ''
                },
                {
                    university: 'National Technological University',
                    career: 'Technical superior in Informatic Systems',
                    time: 'March 2011 - December 2012',
                    second_time: ''
                },
                {
                    university: 'Highland',
                    career: 'I have studied 3 years english in the institute Highland, my level is intermediate',
                    time: 'March 2010 - December 2011',
                    second_time: 'March 2015 - December 2015'
                },
                {
                    university: 'National Technological University',
                    career: 'Technical superior in programming',
                    time: 'February 2008 - February 2011',
                    second_time: ''
                },
            ],
            items_interests: [
                {
                    'description': "When I'm not working, I like watching courses in <a href='https://platzi.com/p/damianladiani/' target='_blank'>Platzi</a> or <a href='http://www.laracast.com' target='_blank'>Laracast</a> about new technologies or improving my english's level with <a href='http://virtualenglishlessons.com.ar/es' target='_blank'>virtualenglishlessons</a>. Today, I'm a passionate person about the crypto-world, so I watch a lot videos about this topic lately and I aspire to be a developer of web3."
                },
                {
                    'description': 'For other side, I enjoy watching series and movies. I love to see football and also play and watch Age of empires II. When I can, I go to run and go to swim too.'
                },
                {
                    'description': 'I consider myself a travel lover, I travel always that I can because I enjoy meet new places, do trekking and contemplate beautiful landscapes.'
                }
            ]
        }
    }
    }
</script>

