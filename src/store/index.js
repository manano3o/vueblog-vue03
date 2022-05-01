import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userInfo: JSON.parse(sessionStorage.getItem("userInfo"))
  },

  getters: {
    //get
    getUser:state => {
      return state.userInfo
    }
  },

  mutations: {
    //set添加功能
    SET_TOKEN:(state,token)=>{
      state.token = token
      localStorage.setItem("token",token)
    },
    SET_USERINFO:(state,userInfo)=>{
      state.userInfo = userInfo
      sessionStorage.setItem("userInfo",JSON.stringify(userInfo))
    },//删除
    REMOVE_INFO:(state)=>{
      state.token=''
      state.userInfo = {}
      localStorage.setItem("token",'')
      sessionStorage.setItem("userInfo",JSON.stringify(''))
    }


  },
  actions: {
  },
  modules: {
  }
})