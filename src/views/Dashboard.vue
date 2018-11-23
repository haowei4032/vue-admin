<template>
    <div>{{username}}</div>
</template>

<script>
export default {
    data() {
        return {
            username: sessionStorage.getItem('name')
        }
    }
}
</script>


