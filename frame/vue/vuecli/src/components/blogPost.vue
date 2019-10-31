<template>
    <div>
        <span>
            {{ post.id }} .  {{ addHiText }}
        </span>
        <button @click="$emit('enlarge-text', 0.05)">Enlarge Text</button>
        <slot name="ver"></slot>
    </div>
</template>
<script>
export default {
    props: {
        post: Object,
    },
    data: function () {
        return {
            
        }
    },
    mounted() {

    },
    computed: {
        addHiText: function () {
            return 'hi' + this.post.text + '.'
        }
    },
}
</script>