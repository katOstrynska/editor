<template>
    <div
    
    >
        <inline-svg
            :class="name"
            :alt="name"
            :src="svg"
        />
        <span>{{ title }}</span>
    </div>
</template>

<script>
    import InlineSvg from 'vue-inline-svg';

    export default {
        props: ['name', 'title', 'svg'],
        components: {
            InlineSvg
        }
    }
</script>