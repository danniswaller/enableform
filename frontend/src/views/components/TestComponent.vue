<template>
    <div>
        <div><span class="text-red">props:text内容： {{text}}</span></div>
      <div><span class="text-red">data:content内容： {{content}}</span></div>

        <button @click="handleClick01" class="mr-2 bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">修改props: text为hello</button>
        <button @click="handleClick02" class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">修改data: content为world</button>

    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    export default{
        name: 'test-component',
        props: {
            text: {
                type: String,
                default: "large"
            }
        },
        data(){
            return {
                content: null,
            }
        },
        methods: {
            ...mapActions(['changeCurrentPage']),
            handleClick01(){
                this.text = "hello";
            },
            handleClick02(){
                this.content = "world";
                let count = 1;
                setInterval(()=>{
                    this.changeCurrentPage('xxx: '+count);
                    count++;
                },1000)

            }
        },
        created(){

        }
    }
</script>

<script></script>