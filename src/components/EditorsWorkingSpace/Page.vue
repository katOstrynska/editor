<template>
    <div>
        <div
            v-for="page in pages"
            :key="page.id"
            class="editor-page"
        >
            <component
                v-for="el in elements"
                :key="el.id"
                :is="el.type"
            />
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            pages() {
                return this.$store.getters.getPages;
            },
            elements() {
                return this.$store.getters.getElements;
            }
        }
    }
</script>