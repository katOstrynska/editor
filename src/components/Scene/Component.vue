<template>
    <Moveable
        class="moveable target"
        :class="el.moveableUniqueClass"
        v-bind="moveable"
        :style="`width:${el.width}px; height:${el.height}px;`"
        @drag="handleDrag"
        @scale="handleScale"
        ref="moveable"
    >
        <component
            :is="el.type"
            :image="el.image"
            :el="el"
        />
    </Moveable>  
</template>

<script>
    import Moveable from 'vue-moveable';

    import editorImageElement from '../Panel/Elements/Image';
    import editorTextElement from '../Panel/Elements/Text';

    export default {
        data() {
            return {
                moveable: {
                    draggable: true,
                    throttleDrag: 1,
                    scalable: true,
                    origin: false,
                    container: document.querySelector(".editorScene__workspace-page")
                }
            }
        },
        methods: {
            handleDrag({ target, transform }) {
                console.log('onDrag left, top', transform);
                target.style.transform = transform;
            },
            handleScale({ target, transform, scale }) {
                console.log('onScale scale', scale);
                target.style.transform = transform;
            }
        },
        mounted() {
      console.log(this.$refs.moveable.moveable.innerMoveable.base);
    },
        components: {
            Moveable,
            editorImageElement,
            editorTextElement
        },
        props: ['el']
    }
</script>

<style scoped>
    .moveable {
        position: absolute;
    }
</style>