<template>
<!--    <div id="app">-->
<!--        <img alt="Vue logo"-->
<!--             src="./assets/logo.png"-->
<!--        >-->
<!--        <hello-world msg="Welcome to Your Vue.js App"/>-->
<!--        <hello-world msg="Welcome to Your Vue.js App"/>-->
<!--        <todo-item :item="item"> sxzhes</todo-item>-->
<!--    </div>-->
    <div id="app">
        {{ msg }}
        <br>
        <input type="text" v-model="info">
        {{info}}
        <button @click="handleClick" title="点击添加列表">添加</button>
        <button @click="handleClick2" title="点击删除列表">删除</button>
        <ul>
            <!-- <li v-for="item in list"> {{ item }}</li> -->
            <!-- 使用属性 把组件的item值,传递给属性item -->
            <!--绑定值到组件的属性, 不使用绑定时, 相当于是个变量
            不使用绑定时, 就是一个组件属性赋值的过程
            则是直接给prop赋值, 当作字符串处理-->
            <todo-item v-for="item in list" :key="item.id" :items="item">
<!--                <template v-slot:header>-->
<!--                    <p>牛逼啊, 我要显示header了</p>-->
<!--                </template >-->
                <template v-slot:item="checkProps">
                    <span :style="{fontSize:'20px',
                           color: checkProps.checked ? 'red' : 'blue'
                    }">{{ item }}
                    </span>
                </template>
<!--                <template v-slot:footer>z-->
<!--                    <p>牛逼啊, 我要显示footer了</p>-->
<!--                </template>-->
            </todo-item>
        </ul>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue' // 导入组件
    import TodoItem from './components/TodoItem.vue'
    export default {
        name: 'App',
        components: {
            // HelloWorld,
            TodoItem
        },
        data () {
                return {
                    msg: 'hello, 世界!',
                    info: '',
                    list: []
                }
            },
            methods: {
                handleClick () {
                    console.log(this.msg)
                    this.list.push(this.info)
                    // console.log(this.info)
                    console.log(this.list)
                    this.info = ''
                },
                handleClick2 () {
                    this.list.pop()
                }
            }
    }
</script>

<style>
    /*#app {*/
    /*    font-family: Avenir, Helvetica, Arial, sans-serif;*/
    /*    -webkit-font-smoothing: antialiased;*/
    /*    -moz-osx-font-smoothing: grayscale;*/
    /*    !*text-align: center;*!*/
    /*    color: #222;*/
    /*    margin-top: 60px;*/
    /*}*/
</style>
