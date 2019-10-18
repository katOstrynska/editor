<template>
    <div class="k2p-editor">
        <editor-panel class="panel"></editor-panel>
        <editor-pages class="workspace"></editor-pages>
    </div>
</template>

<script>
    import Panel from '@/components/EditorsPanel/Panel.vue';
    import Page from '@/components/EditorsWorkingSpace/Page.vue';

    export default {
        components: {
            editorPanel: Panel,
            editorPages: Page
        }
    }
</script>

<style scoped lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap');
    $color: #fff;

    .k2p-editor {
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        display: flex;
        .panel {
            width: 35%;
            background-color: $color;
            display: flex;
            flex-wrap: wrap;
            z-index: 10;
            box-shadow: 10px 0px 15px 0px rgb(150, 150, 150);
        }
        .workspace {
            width: 100%;
            background: #eee url(
                'data:image/svg+xml,\
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill-opacity=".15" >\
                <rect x="15" width="15" height="15" />\
                <rect y="15" width="15" height="15" />\
                </svg>'
            );
        }
    }
</style>