<template>
    <div>
        <!-- <navigation @count="countFn"></navigation> -->
        <Article :list="articleList" v-on:count-id="onCountId"></Article>
        <!-- <foot></foot> -->
        <p></p>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import Article from '_com/Article.vue'
export default {
    components: {
        Article,
    },
    mounted() {
        // this.SET_BLOG_DATA(); // 调用接口获取数据
    },
    computed: {
        ...mapGetters(['articleList']), // 监听 state
    },
    methods: {
        ...mapActions(['SET_BLOG_DATA', 'SET_NAV_COUNT']),
        countFn(item) {

            // 调用接口存储导航点击次数并跳转，通过派发 action 的形式来发起 state 变化
            this.SET_NAV_COUNT({ type: item.type });

            this.$router.push({name: item.route});
        },
        onCountId(id){
            console.log(id)
        }
    }
}
</script>
<style lang="less" scoped>
p{
    &::after{
        content: '\02691';
        color: red;
    }
}
</style>