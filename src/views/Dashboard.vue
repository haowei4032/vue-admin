<template>
    <el-container>
        <el-aside width="220px">
            <el-scrollbar class="wrap-menu" style="height: 100%">
                <el-menu
                        default-active="1"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <span slot="title">仪表盘</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <span slot="title">帖子</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <span slot="title">用户</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <span slot="title">权限</span>
                    </el-menu-item>
                    <el-submenu index="5">
                        <span slot="title">设置</span>
                        <el-menu-item index="5-1">选项1</el-menu-item>
                        <el-menu-item index="5-2">选项2</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-scrollbar>
        </el-aside>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<style lang="scss">
    .el-aside {
        position: fixed;
        height: 100%;
        background: #545c64;
    }

    .el-menu {
        border: 0;
    }

    .el-aside .el-scrollbar__wrap {
        overflow-x: hidden;
    }
</style>
<script>
export default {
    data() {
        return {
            username: sessionStorage.getItem('name')
        }
    },
    methods: {
        logout() {
            sessionStorage.removeItem('name')
            this.$router.push({path: '/login', query: {redirect: this.$route.path}})
        },
        handleOpen() {
        },
        handleClose() {
        }
    }
}
</script>


