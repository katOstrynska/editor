<template>
    <div>
        <inline-svg
            :class="name"
            :src="path"
            :alt="name"
        />
        <span>{{ title }}</span>
    </div>
</template>

<script>
    import InlineSvg from 'vue-inline-svg';

    export default {
        props: ['name', 'title', 'path'],
        components: {
            InlineSvg
        }
    }
</script>