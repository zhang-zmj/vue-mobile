<template>
    <div>

<!-- 导航栏 -->
    <nav-bar>
      <template v-slot:default>用户登录</template>
      <template v-slot:right></template>
    </nav-bar>

<!-- 头部 -->
    <div style="margin-top:  50px">
        <div style="text-align:center; padding:10px 0">
            <van-image 
                width="10rem"
                height="5rem"
                fit="contain"
                src="https://img.yzcdn.cn/vant/cat.jpeg"
            />
        </div>
    </div>

<!-- 表单  -->
     <div>

     <van-form @submit="onSubmit">

        <van-cell-group inset>

            <van-field
            v-model="email"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
            />

           <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
            />

        </van-cell-group>

        <div style="margin: 16px;">
             <div class="link-login" @click="$router.push({path:'/register'})">
                立即注册
            </div>
            <van-button round block type="primary" color="#44b883" native-type="submit">
            提交
            </van-button>
        </div>

    </van-form>


    </div>

</div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'
import { Notify,Toast } from 'vant';
import { ref, reactive, toRefs } from "vue";
import { login } from "network/user";
import {useRouter} from 'vue-router';
import { useStore } from "vuex";

export default {
    components: {
        NavBar
    },
    setup () {

        const router = useRouter();
        const store = useStore();

         const userinfo = reactive({
            email:'',
            password:''
         })

        const onSubmit = () => {
            login(userinfo).then(res=>{

                //将token保存到本地 window.localStorage
                window.localStorage.setItem("token", res.access_token);

                store.commit("setIsLogin", true);

                Toast.success("登陆成功");
                setTimeout(()=>{
                    router.go(-1);
                },500)
                userinfo.email = '';
                userinfo.password = '';

            })
    
        }
        
        return {
            ...toRefs(userinfo),
            onSubmit
        }
    }
}
</script>

<style lang="scss" scoped>

.link-login {
    font-size:14px;
    margin-bottom: 20px;
    color:#42b983;
    display: inline-block;
    text-align: left;
    float:left;
}

</style>