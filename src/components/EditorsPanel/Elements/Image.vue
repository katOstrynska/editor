<template>
    <div
        class="k2p-image"
    >
        <img :src="image" style="width: 200px;"/>
    </div>
</template>

<script>
    import image from '@/assets/icons/panel-icons/image.svg';
    const EL_TYPE = 'k2p-image'

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
        props: ['image']
    }
</script>