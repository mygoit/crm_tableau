import axios from "axios";
const Repository = axios.create({
    headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin" : "*"
    }
});

Repository.interceptors.response.use(async response => {return (response && response.data!='undefined') ? response.data : response},async error => {
    if(error){
        // if(error.response){
        //     bus.$notification.error(error.response.data.message,{infiniteTimer : false,
        //     position : 'bottomRight',
        //     showCloseIcn : true})
        //     if(error.response.data.logout){
        //         await store.dispatch('logoutAuth')
        //         router.push('/login')
        //         // window.localStorage.clear()
        //         // window.location.href = '/'
        //     }
        // }
        return error.response
    }
})
export default Repository;
