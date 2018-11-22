<template>
    <div>
        <input type="text" name="user">
        <br/>
        <input type="password" name="password"/>
        <br/>
        <button @click="login">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            redirect: undefined
        }
    },
    watch: {
        '$route'(to, from) {
            // 对路由变化作出响应...
            console.log(1111)
        }
    },
    methods: {
        login() {
            sessionStorage.setItem('name', '好为')
            this.$router.push({path: '/'})
        }
    }
}
</script>


