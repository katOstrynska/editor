<template>
    <div class="editorScene">
        <div class="editorScene__workspace">
            <div class="editorScene__workspace-page" id="movableScene">
                <DefaultComponent
                    v-for="(el, index) in elements"
                    :key="index"
                    :el="el"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import DefaultComponent from './Component.vue';

    export default {
        computed: {
            elements() {
                return this.$store.getters.getElements;
            }
        },
        components: {
            DefaultComponent
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
    .editorScene__workspace > div {
        height: 100%;
    }
    .editorScene__workspace-page {
        position: relative;
    } 
    .moveable {
        position: absolute;
    }
    
</style>