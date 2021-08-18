<template>
    <div class="pdf_js_container">
        <div class="headerLeft" />
        <div class="headerCenter">PDF页头/标题</div>
        <div class="headerRight" />

        <div class="footerLeft" />
        <div class="footerCenter" />
        <div class="footerRight" />
        <ul class="long_content_list">
            <li
                v-for="(_, i) in Array(24).fill('')"
                :key="i"
            >{{ `我是列表${i + 1}` }}</li>
        </ul>
    </div>
</template>

<script>
    import { Previewer } from 'pagedjs'
    export default {
        name: 'PagedJs',
        mounted () {
            this.pageHandler()
        },
        methods: {
            pageHandler () {
                // 执行pagedjs的插件方法
                const paged = new Previewer()
                paged.preview().then((flow) => {
                    console.log('Rendered', flow.total, 'pages.')
                    window.print()
                })
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
