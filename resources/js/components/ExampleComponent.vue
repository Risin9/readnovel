<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">ExampleComponent.vue</div>

                    <div class="card-body">
                        I'm an ExampleComponent.vue page.
                    </div>
                     <el-button @click="visible = !visible">按钮</el-button>
                    <el-col v-show="visible">欢迎使用 Element</el-col>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                visible:false
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
