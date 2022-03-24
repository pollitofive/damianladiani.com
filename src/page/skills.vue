<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div class="my-auto">
                <h2 class="mb-5">{{ title }}</h2>

                <languajes-tools></languajes-tools>

                <my-skills></my-skills>

            </div>
        </section>

        <hr class="m-0">
    </div>
</template>
<script>
    import LanguajesTools from '../Components/languajes-tools.vue'
    import MySkills from '../Components/my-skills.vue'

    export default {
        props: ['title'],
        components: {
            'languajes-tools': LanguajesTools,
            'my-skills': MySkills
        }
    }
</script>

