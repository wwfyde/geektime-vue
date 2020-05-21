<template>
    <div>
<!--        <slot name="header" />-->
        <li class="item">
            <input type="checkbox" v-model="checked">
            <slot name="item" v-bind="{checked}" />
<!--            {{ items }}-->
        </li>
<!--        <slot name="footer">这是footer</slot>-->
        <br>
<!--        <slot />-->
    </div>
</template>

<script>

    export default {
        // name: 'TodoItem',
        props: {
            items: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                checked: false
            }
        }
    }
</script>

<style scoped>
    .item {
        color: #f35;
    }
</style>
