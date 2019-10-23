<template>
    <div
        class="editorImageElement"
        :id="el.id"
        :width="el.width"
    >
        <img :src="image"/>
    </div>
</template>

<script>
    import image from '@/assets/icons/panel-icons/image.svg';
    const EL_TYPE = 'editorImageElement'

    export default {
        name: EL_TYPE,
        title: 'Image',
        svg: image,
        settings: {
            type: EL_TYPE,
            imageUpload: true,
            draggable: true,
            resizable: true,
            top: 0,
            left: 0
        },
        props: ['el', 'image'],
    }
</script>

<style scoped>
    
</style>