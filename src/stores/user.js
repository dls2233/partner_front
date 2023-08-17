import {defineStore} from "pinia";

export const useUserStore = defineStore('user',{
    state: ()=> ({
        loginInfo: {}   //{user:{} ,token: ''
    }),// 表示user属性的对象，形如{name: '', age: ''}
    //actions:{
        //setName(name){
            //this.name=name
            //一定要注意，这里的this必须使用getAddAge(){}
      //  }
   // }

    //store.$patch({ //只更新name,不更新age
    // name: '李四'
    //})
    getters:{
        getUserId(){
            return this.loginInfo.user ? this.loginInfo.user.id : 0
        },
        getUser(){
            return this.loginInfo.user || {}
        },
        getBearToken(){
            return this.loginInfo.token ? 'Bearer '+ this.loginInfo.token : ''
        },
        getToken(){
            return this.loginInfo.token || ""
        },
    },
    actions:{
        setLoginInfo(loginInfo){
            this.loginInfo = loginInfo
        },
        setUser(user){
            this.loginInfo.user = JSON.parse(JSON.stringify(user))
        }
    },
    //开启数据持久化
    persist:true
})