<template>
    <li class="nav-item"><a class="nav-link js-scroll-trigger" :href="id">{{ descripcion }}</a></li>
</template>

<script>
    export default {
        props: ['id','descripcion']
    }

</script>