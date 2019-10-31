<template>
    <div v-show="isShow">{{text}}</div>
</template>
<script>
export default {
    data () {
        return {
            isShow: true
        }
    },
    name: 'ToastComponent',
    props: {
        text: String
    }
}
</script>