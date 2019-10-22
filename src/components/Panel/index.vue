<template>
    <div class="editorPanel">
        <div
            v-for="element in elements"
            :key="element.name"
            :name="element.name"
            :title="element.title"
            class="editorPanel__element"
            @click="(e) => {addElement(e, element)}"
        >
            <input type="file" id="imageInput" @change="(e) => {onFileChange(e, element)}" style="display: none;">
            <inline-svg
                :class="element.name"
                :alt="element.name"
                :src="element.svg"
            />
            <span>{{ element.title }}</span>
        </div>
    </div>
</template>

<script>
    import element from '../../mixins/elements';
    import InlineSvg from 'vue-inline-svg';

    export default {
        methods: {
            addElement(e, element) {
                if (element.settings.imageUpload) {
                    document.getElementById("imageInput").click();
                } else {
                    this.$store.dispatch('ADD_ELEMENT', element)
                }
            },
            onFileChange (e, element) {
                const file = e.target.files[0];
                this.url = URL.createObjectURL(file);
                element.settings.image = this.url;
                this.$store.dispatch('ADD_ELEMENT', element);
            }
        },
        computed: {
            elements() {
                return element.getElements();
            },
        },
        components: {
            InlineSvg
        }
    }
</script>

<style lang="scss" scoped>
    .editorPanel {
        width: 30%;
    }
    .editorPanel__element {
        width: 200px;
        padding: 15px;
        margin: 10px auto;
        border: 1px solid #333;
        cursor: pointer;
        display: flex;
        align-content: center;
        justify-content: center;
        font-size: 24px;
    }
</style>