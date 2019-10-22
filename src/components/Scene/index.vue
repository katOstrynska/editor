<template>
    <div class="editorScene">
        <div class="editorScene__workspace">
            <div>
                <component
                    v-for="el in elements"
                    :key="el.id"
                    :is="el.type"
                    :image="el.image"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import editorImageElement from '../Panel/Elements/Image';
    import editorTextElement from '../Panel/Elements/Text';

    export default {
        computed: {
            elements() {
                return this.$store.getters.getElements;
            }
        },
        components: {
            editorImageElement,
            editorTextElement
        }
    }
</script>

<style scoped>
    .editorScene {
        width: 70%;
        height: 100%;
        display: flex;
        background-color: silver;
    }
    .editorScene__workspace {    
        width: 50%;
        height: 80%;
        margin: auto;
        background-color: white;
    }
</style>