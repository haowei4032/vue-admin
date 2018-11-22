<template>
    <div>
        {{username}}
        <button @click="logout">退出</button>
    </div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            username: sessionStorage.getItem('name')
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('name')
            this.$router.push({path: '/login'})
        }
    }
}
</script>


