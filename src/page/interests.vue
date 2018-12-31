<template>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
            <h2 class="mb-5">Intereses</h2>
            <template v-for="interest in items_interests">
                <p>{{ interest.description }}</p>
            </template>
        </div>
    </section>
</template>
<script>
    export default {
        props: ['title','items_interests']
    }
</script>

