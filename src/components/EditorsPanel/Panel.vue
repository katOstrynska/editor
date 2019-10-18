<template>
    <div>
        <panel-element
            v-for="element in elements"
            :key="element.name"
            :name="element.name"
            :title="element.title"
            :path="element.path"
            class="panel-element"
        >
        </panel-element>
    </div>
</template>

<script>
    import PanelElement from './PanelElement.vue';

    import imageCell from '@/assets/icons/panel-icons/image-cell.svg';
    import image from '@/assets/icons/panel-icons/image.svg';
    import text from '@/assets/icons/panel-icons/text.svg';
    import elements from '@/assets/icons/panel-icons/elements.svg';

    export default {
        data() {
            return {
                elements: [
                    { name: 'image-cell', path: imageCell, title: 'Image Cell' },
                    { name: 'image', path: image, title: 'Image' },
                    { name: 'text', path: text, title: 'Text' },
                    { name: 'elements', path: elements, title: 'Elements' }
                ]
            }
        },
        components: {
            panelElement: PanelElement
        }
    }
</script>

<style lang="scss" scoped>
    .panel-element {
        width: 40%;
        margin: 10px auto;
        display: flex;
        align-items: center;
    }
</style>