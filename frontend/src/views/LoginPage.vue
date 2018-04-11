<template>
    <div class="ef-flex ef-justify-center ef-items-center ef-w-full ef-h-full">
        <div class="ef-w-full ef-max-w-xs">
            <form class="ef-bg-white ef-shadow-md ef-rounded ef-px-8 ef-pt-6 ef-pb-8 ef-mb-4">
                <div class="ef-mb-4">
                    <label class="ef-block ef-text-grey-darker ef-text-sm ef-font-bold ef-mb-2" for="username">
                        Username
                    </label>
                    <input class="ef-appearance-none ef-border ef-rounded ef-w-full ef-py-2 ef-px-3 ef-text-grey-darker" id="username"
                           type="text" placeholder="Username" v-model="user.name">
                </div>
                <div class="ef-mb-6">
                    <label class="ef-block ef-text-grey-darker ef-text-sm ef-font-bold ef-mb-2" for="password">
                        Password
                    </label>
                    <input class="ef-appearance-none ef-border ef-border-red ef-rounded ef-w-full ef-py-2 ef-px-3 ef-text-grey-darker ef-mb-3"
                           id="password" type="password" placeholder="******************" v-model="user.password">
                    <p class="ef-text-red ef-text-xs ef-italic">Please choose a password.</p>
                </div>
                <div class="ef-flex ef-items-center ef-justify-between">
                    <button class="ef-bg-blue hover:ef-bg-blue-dark ef-text-white ef-font-bold ef-py-2 ef-px-4 ef-rounded" type="button" @click="submit(user)">
                        Sign In
                    </button>
                    <a class="ef-inline-block ef-align-baseline ef-font-bold ef-text-sm ef-text-blue hover:ef-text-blue-darker" href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
            <p class="ef-text-center ef-text-grey ef-text-xs">
                ©2018 Acme Corp. All rights reserved.
            </p>
        </div>
    </div>

</template>


<script>
export default {
  name: "login-page",
  data() {
    return {};
  },
  computed: {
      user(){
         return this.$store.state.user;
      }
  },
  methods: {
      submit(user){
         /* console.log(this.$store.dispatch('incrementUser',user));
        if(this.$store.dispatch('incrementUser',user)){
          this.$router.push({name:'homePage'});
        }else{
            this.$router.push({name:'login'});
        }*/
          this.$store.dispatch('incrementUser',user).then(
                 res=>{
                      if(res.data.success){
                          this.$router.push({name:'homePage'});
          }else{
                this.$router.push({name:'login'});
              }
          }
          );
      }
  }
}
</script>

<style>
</style>
