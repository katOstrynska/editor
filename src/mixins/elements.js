import ImageEl from '../components/EditorsPanel/Elements/Image.vue';
import TextEl from '../components/EditorsPanel/Elements/Text.vue';

let elements = [ImageEl, TextEl];

export default {
    getElements() {
        return elements
    }
}