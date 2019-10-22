<template>
    <div
        class="editorTextElement"
    >
        <p>Text element</p>
    </div>
</template>

<script>
    import text from '@/assets/icons/panel-icons/text.svg';
    const EL_TYPE = 'editorTextElement'

    export default {
        name: EL_TYPE,
        title: 'Text',
        svg: text,
        settings: {
            type: EL_TYPE,
            draggable: true,
            resizable: true,
            top: 0,
            left: 0
        }
    }
</script>