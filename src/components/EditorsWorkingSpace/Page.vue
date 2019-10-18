<template>
    <div>
        <div
            v-for="page in pages"
            :key="page.id"
            class="editor-page"
        >
            {{ page.isActive }}
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            pages() {
                return this.$store.getters.getPages;
            }
        }
    }
</script>