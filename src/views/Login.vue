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

        }
    },
    methods: {
        login() {
            sessionStorage.setItem('name', '好为')
            this.$router.push({path: this.$route.query.redirect || '/'})
        }
    }
}
</script>


