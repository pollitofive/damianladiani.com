<template>
    <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
            <h3 class="mb-0">{{ position }}</h3>
            <div class="subheading mb-3">{{ company }}</div>
                <p>{{ description }}</p>
            </div>
        <div class="resume-date text-md-right">
            <span class="text-primary">{{ time }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['position','description','time','company']
    }
</script>