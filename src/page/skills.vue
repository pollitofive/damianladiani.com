<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div class="my-auto">
                <h2 class="mb-5">{{ title }}</h2>

                <div class="subheading mb-3">{{ sub_title_one }}</div>

                <languajes-tools></languajes-tools>

                <div class="subheading mb-3">{{ sub_title_two }}</div>

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
        props: ['title','sub_title_one','sub_title_two'],
        components: {
            'languajes-tools': LanguajesTools,
            'my-skills': MySkills
        }
    }
</script>

