import axios from 'axios'
import Element from 'element-ui'
import router from './router'
import store from './store'

//默认加上的前缀
axios.defaults.baseURL="http://localhost:8080"

//前置拦截
axios.interceptors.request.use(config => {
    return config
})

//后置拦截 密码错误什么的异常的弹窗
axios.interceptors.response.use(response => {
    let res = response.data;

    console.log("==================")
    console.log(res)
    console.log("==================")


    if (res.code === 200) {
        return response
    } else {
        Element.Message.error('错了哦，这是一条错误消息', {duration: 3 * 1000})
        return Promise.reject(response.data.msg)
    }
},//下面是账号错误
    error => {
        console.log(error)
        //当用户不存在的时候，去返回那个后端返回来的错误信息
        if(error.response.data) {
            error.message = error.response.data.msg
        }
        //跳转到登录页面并清空
        if(error.response.status === 401){
            store.commit("REMOVE_INFO")
            router.push("/login")
        }

        Element.Message.error(error.message, {duration: 3 * 1000})
        return Promise.reject(error)


    }
)






