<template lang="">
    <div>
        <h4>{{msg.msg2}}</h4>
        <slot name="customize"></slot>
    </div>
</template>
<script>
export default {
    name: 'HelloAbout',
    props: {
        msg: Object
    }
}
</script>
<style scoped>
    h4{
        color: #f74461;
    }
</style>