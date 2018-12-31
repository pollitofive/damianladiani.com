<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
            <div class="my-auto">
                <h2 class="mb-5">{{ title }}</h2>
                <template v-for="experience in experiences">
                    <experience :position="experience.position" :description="experience.description" :time="experience.time" :company="experience.company"></experience>
                </template>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>
<script>
    import Experience from '../Components/experience.vue'

    export default {
        props: ['title','experiences'],
        components: {
            'experience': Experience
        }
    }
</script>

