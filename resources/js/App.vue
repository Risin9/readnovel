<template>
    <el-container direction="vertical">
        <layout-header></layout-header>
        <router-view></router-view>
        <layout-footer></layout-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            msg: 'I\'m the app.Vue',
            searchData:''

        }
    }
}
</script>

<style>


</style>