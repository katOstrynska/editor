import editorImageElement from '../components/Panel/Elements/Image.vue';
import editorTextElement from '../components/Panel/Elements/Text.vue';

let elements = [editorImageElement, editorTextElement];

export default {
    getElements() {
        return elements
    }
}