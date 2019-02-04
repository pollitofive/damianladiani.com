<template>
    <div>

        <app-menu :items_menu="items_menu" languaje="en"></app-menu>

        <div class="container-fluid p-0">

            <app-about :my_description="my_description"></app-about>

            <app-experience :experiences="experiences" title="Experience"></app-experience>

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
            my_description: "I am a web developer, I worked in Argentinian Army (Ejército Argentino),Ministry of Defense (Ministerio de Defensa) and I’m actually working in Ministry of Segurity (Ministerio de Seguridad). I'm proactive and passionate about programming and leadership. My objective is to become a systems engineer and to be excellent professional.",
            items_menu: [{
                'id': '#about',
                'descripcion': 'About'
                },
                {
                    'id': '#experience',
                    'descripcion': 'Experience'
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
                    description: 'Programmer of systems, pages and APIs in PHP, alone and other with friends for different purposes.',
                    time: 'Since 2009',
                    company: ''
                },
                {
                    position: 'Semi Senior Web Developer',
                    description: 'Programmer analyst developing some projects, principally in laravel. Develop frontend with css3 and html5, applying libraries like JQuery, Vue.js or bootstrap.',
                    time: 'August 2013 - Present',
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
                    description: 'Programmer of a system logistic of Argentinian Army. During the last months, chief of the developer team.',
                    time: 'October 2006 - May 2011',
                    company: 'Argentinian Army'
                }
            ],
            items_education: [
                {
                    university: 'University CAECE',
                    career: 'Engineer in systems (in progress)',
                    time: 'August 2014 - December 2021',
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
                    'description': 'When I am not working or studying, I like watch courses online of different technologies.'
                },
                {
                    'description': 'For other side, I enjoy watching series and movies. I love to see football and share some videogame with my friends. When I can, I go to run and go to swim too.'
                },
                {
                    'description': 'I consider myself a travel lover, I travel always that I can because I enjoy meet new places, do trekking and contemplate beautiful landscapes.'
                }
            ]
        }
    }
    }
</script>

