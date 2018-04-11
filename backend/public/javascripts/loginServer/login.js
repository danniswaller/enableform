var checkLogin =(user)=>{
    console.log(user);
     if(user.name=="张聪"&&user.password=='123'){
         return {success:true,name:user.name};
     }else{
         return {success:false,name:''}
     }
}
module.exports = {login:checkLogin};