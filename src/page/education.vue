<template>
    <div>
        <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
            <div class="my-auto">
                <h2 class="mb-5">{{ title }}</h2>
                <template v-for="education in items_education">
                    <education :university="education.university" :career="education.career" :time="education.time" :second_time="education.second_time"></education>
                </template>
            </div>
        </section>
        <hr class="m-0">
    </div>
</template>
<script>
    import Education from '../Components/education.vue'

    export default {
        props: ['title','items_education'],
        components:{
            'education': Education,
        }
    }
</script>

