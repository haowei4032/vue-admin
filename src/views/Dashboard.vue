<template>
    <div>{{username}}</div>
</template>

<script>
export default {
    name: 'Dashboard',
    data() {
        return {
            username: sessionStorage.getItem('name')
        }
    }
}
</script>


