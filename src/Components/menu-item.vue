<template>
    <li class="nav-item"><a class="nav-link js-scroll-trigger" :href="id">{{ descripcion }}</a></li>
</template>

<script>
    export default {
        props: ['id','descripcion'],
        data: function(){
            return {
                items_menu_es: [
                    {
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
                    },
                ],
                items_menu_en: [
                    {
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
                    },
                    {
                        'id': '../es/',
                        'descripcion': 'ES'
                    },
                ]
            }
        }
    }

</script>