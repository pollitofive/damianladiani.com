<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div class="my-auto">
                <my-data></my-data>
                <my-info></my-info>
                <p class="lead mb-5">
                    {{ my_description }}
                </p>
                <social-media></social-media>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>
<script>

    import MyData from '../Components/my-data.vue'
    import MyInfo from '../Components/my-info.vue'
    import SocialMedia from '../Components/social-media.vue'

    export default {
        props: ['my_description'],
        components: {
            'my-data': MyData,
            'my-info': MyInfo,
            'social-media': SocialMedia
        }
    }
</script>

