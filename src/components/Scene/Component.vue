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
            handleClick() {
                console.log(this);
                
            },
            handleDrag({ target, transform }) {
                // console.log('onDrag left, top', transform);
                target.style.transform = transform;
            },
            handleDragEnd ({ target }) {
                let moveableBox = this.$refs.moveable.moveable.innerMoveable.base;
                moveableBox.classList.add('treter');
            },
            handleScale({ target, transform, scale }) {
                // console.log('onScale scale', scale);
                target.style.transform = transform;
            },
            handleRotate({ target, dist, transform }) {
                // console.log('onRotate', dist);
                target.style.transform = transform;
            },
        },
        mounted() {
            const moveableElement = this.$refs.moveable.$el;

            const moveableBoxElement = this.$refs.moveable.moveable.innerMoveable;

            const allMovableElements = moveableBoxElement.props.container.children;

            const allMovableElementsArr = Array.from(allMovableElements);

            allMovableElementsArr.map(item => {
                if (item.matches('.moveable-control-box.active-box')) {
                    item.classList.remove('active-box');
                }
                if (item.matches('.moveable.active')) {
                    item.classList.remove('active');
                }
            })

            moveableElement.classList.add('active');
            moveableBoxElement.base.classList.add('active-box');

            allMovableElementsArr.map(item => {
                if (item.matches('.moveable-control-box')) {
                    item.style.display = "none";
                }
                if (item.matches('.moveable-control-box.active-box')) {
                    item.style.display = "block";
                }
            })
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