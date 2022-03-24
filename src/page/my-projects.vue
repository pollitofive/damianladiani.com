<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="my_projects">
            <div class="my-auto">
                <h2 class="mb-5">{{ title }}</h2>
                <template v-for="project in projects">
                    <my-projects :name="project.project" :url="project.url" :description="project.description" :repository="project.repository"></my-projects>
                </template>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>
<script>
    import MyProject from '../Components/my-project.vue'

    export default {
        props: ['title','projects'],
        components:{
            'my-projects': MyProject,
        }
    }
</script>

