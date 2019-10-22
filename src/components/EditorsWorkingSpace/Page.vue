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
                :image="el.image"
            />
        </div>
    </div>
</template>

<script>
    import ImageComponent from '../EditorsPanel/Elements/Image';
    import TextComponent from '../EditorsPanel/Elements/Text';

    export default {
        computed: {
            pages() {
                return this.$store.getters.getPages;
            },
            elements() {
                return this.$store.getters.getElements;
            }
        },
        components: {
            'k2p-image': ImageComponent,
            'k2p-text': TextComponent
        }
    }
</script>