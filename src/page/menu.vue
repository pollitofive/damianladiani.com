<template>
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
                <template v-for="item in items_menu">
                    <menu-item :id="item.id" :descripcion="item.descripcion"></menu-item>
                </template>


                <template v-if="languaje == 'es'">
                    <router-link class="nav-item" tag="li" to="/en"><a class="nav-link js-scroll-trigger">En</a></router-link>
                </template>
                <template v-else>
                    <router-link class="nav-item" tag="li" to="/es"><a class="nav-link js-scroll-trigger">Es</a></router-link>
                </template>
            </ul>
        </div>
    </nav>
</template>
<script>

    import ImageProfile from '../Components/image-profile.vue'
    import MenuItem from '../Components/menu-item.vue'

    export default {
        props: ['items_menu','languaje'],
        components: {
            'img-profile': ImageProfile,
            'menu-item': MenuItem
        }
    }

</script>

