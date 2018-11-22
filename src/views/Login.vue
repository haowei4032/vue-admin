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
    name: 'Login',
    data() {
        return {
            redirect: undefined
        }
    },
    watch: {
        $route(to, from) {
            console.log(to, from)
        }
    },
    methods: {
        login() {
            sessionStorage.setItem('name', '好为')
            alert(this.redirect)
            //this.$router.push(this.redirect || '/')
        }
    }
}
</script>


