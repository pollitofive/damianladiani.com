<template>
    <div class="resume-item d-flex flex-column flex-md-row">
        <div class="resume-content mr-auto">
            <h3 class="mb-0">{{ university }}</h3>
            <div class="subheading mb-3">{{ career }}</div>
        </div>
        <div class="resume-date text-md-right">
            <span class="text-primary">{{ time }}</span>
            <template v-if="second_time">
                <br>
                <span class="text-primary">{{ second_time }}</span>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['university','career','time','second_time']
    }
</script>