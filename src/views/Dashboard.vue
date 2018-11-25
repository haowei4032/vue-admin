<template>
    <el-container>
        <el-aside width="220px">
            <el-scrollbar class="wrap-menu" style="height: 100%">
                <el-menu
                        default-active="1"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">仪表盘</span>
                        </template>
                        <el-menu-item index="1-1">检查更新</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">内容</span>
                        </template>
                        <el-menu-item index="2-1">帖子列表</el-menu-item>
                        <el-menu-item index="2-2">帖子审核</el-menu-item>
                        <el-menu-item index="2-3">分类列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">用户</span>
                        </template>
                        <el-menu-item index="3-1">列表</el-menu-item>
                        <el-menu-item index="3-2">添加</el-menu-item>
                        <el-menu-item index="3-3">审核</el-menu-item>
                        <el-menu-item index="3-4">黑名单</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span slot="title">设置</span>
                        </template>
                        <el-menu-item index="4-1">网站信息</el-menu-item>
                        <el-menu-item index="4-2">安全防护</el-menu-item>
                        <el-menu-item index="4-3">权限管理</el-menu-item>
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

    .el-menu-item {
        font-size: 12px;
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


