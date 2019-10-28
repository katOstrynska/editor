<template>
    <Moveable
        class="moveable target"
        :class="el.moveableUniqueClass"
        v-bind="moveable"
        :style="`width:${el.width}px; height:${el.height}px;`"
        @click.native="handleClick"
        @drag="handleDrag"
        @dragEnd="handleDragEnd"
        @scale="handleScale"
        @rotate="handleRotate"
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
                    rotatable: true,
                    rotationPosition: 'center',
                    origin: false,
                    keepRatio: true,
                    container: document.querySelector(".editorScene__workspace-page")
                }
            }
        },
        methods: {
            handleActiveDrag() {
                this.$parent.$children.map(child => {
                    child.moveable.draggable = false;
                });
                this.moveable.draggable = true;
            },
            handleActiveClass() {
                this.$parent.$children.map(child => {
                    child.$el.classList.remove('active'); //remove active class from elements that are not edited at the moment
                    child.$refs.moveable.moveable.innerMoveable.base.style.display = "none"; //remove blue control box from elements that are not edited at the moment
                });
                this.$el.classList.add('active'); //add active class to element that is edited at the moment
                this.$refs.moveable.moveable.innerMoveable.base.style.display = "block"; //add blue control box to element that is edited at the moment
            },
            handleClick() {
                this.handleActiveDrag();
                this.handleActiveClass();
            },
            handleDrag({ target, transform }) {
                target.style.transform = transform;
            },
            handleDragEnd() {
                console.log(this.activeEl);
                this.activeEl = false;
            },
            handleScale({ target, transform, scale }) {
                target.style.transform = transform;
            },
            handleRotate({ target, dist, transform }) {
                target.style.transform = transform;
            }
        },
        mounted() {
            this.handleActiveDrag();
            this.handleActiveClass();
        },
        updated() {
            
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
        filter: grayscale(1);
        cursor: pointer;
    }
    .moveable.active,
    .moveable:hover {
        filter: grayscale(0);
    }
    .moveable-control-box.active-box > div {
        background: red;
    }
</style>