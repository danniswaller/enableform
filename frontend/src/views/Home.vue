<template>
    <div class="home">
        <img src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>

        <button class="mt-3 bg-blue hover:bg-blue-light text-white font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded" @click.navtive="handleButtonClick">{{buttonText}}</button>&nbsp; 点击了{{count}}次
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data() {
            return {
                count: 0,
                buttonText: '点击'
            }
        },
        methods: {
            handleButtonClick() {
                this.count = this.count + 1;
            }
        }
    }
</script>
