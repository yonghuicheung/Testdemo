<template>
    <ul>
        <li
            v-for="(item, index) in list"
            :key="index"
            @click="goPage(item.id)"
            v-text="item.title"
        >{{item.text}}</li>
    </ul>
</template>
<script>
    export default {
        props: {

            // 接收容器组件数据
            list: {
                default: () => [],
                type: Array
            }
        },
        methods: {
            goPage(id) {
                this.$emit('count-id', id); // 触发回调
            }
        }
    }
</script>
<style scoped>
li{
    color: #333333;
    text-align: left;
}
</style>
