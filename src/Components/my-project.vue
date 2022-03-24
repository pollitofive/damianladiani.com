<template>
    <div style="margin-bottom: 30px">
        <div class="resume-item d-flex flex-column flex-md-row">
            <div class="resume-content mr-auto">
                <h3 class="mb-0">{{ name }}</h3>
                <div class="subheading mb-3" style="text-transform: inherit">
                    <a :href="url" target="_blank">{{ url }}</a>
                </div>
                <p>{{ description }}</p>
                <a :href="repository" target="_blank">
                    {{ repository }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['name','url','description','repository']
    }

</script>