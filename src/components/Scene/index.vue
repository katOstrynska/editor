<template>
    <div class="editorScene"
        v-outside
    >
        <div class="editorScene__workspace">
            <div
                class="editorScene__workspace-page"
                id="movableScene"
            >
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
    let handleOutsideClick;

    export default {
        directives: {
            'outside': {
                bind(el, binding, vnode) {
                    handleOutsideClick = (e) => {
                        e.stopPropagation();
                        if (vnode.context.$el.contains(e.target)) {
                            if (e.target.classList.contains('editorScene') || e.target.classList.contains('editorScene__workspace') || e.target.classList.contains('editorScene__workspace-page')) {
                                vnode.context.$children.map(child => {
                                    child.moveable.draggable = false;
                                    child.$el.classList.remove('active');
                                    if (child.$refs.moveable.moveable !== undefined) {
                                        child.$refs.moveable.moveable.innerMoveable.base.style.display = "none"; //remove blue control box from elements that are not edited at the moment
                                    } 
                                });
                                document.getElementById('movableScene').style.overflow = "hidden";
                            } else {
                                document.getElementById('movableScene').style.overflow = "unset";
                            }
                        }
                    }
                    document.addEventListener('click', handleOutsideClick);
                }
            }
        },
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
        overflow: unset;
    } 
    .moveable {
        position: absolute;
    }
    
</style>