import axios from 'axios'

let localstore= JSON.parse(localStorage.getItem('persist:root'))
const User=localstore && JSON.parse(localstore.userReducer)

let accessTokenn=localstore && (User?User.user.accessToken:null)
console.log("access token ",accessTokenn)
export const publicUrl=axios.create({

     baseURL:"http://localhost:5000/api"
})  

export const privateUrl=axios.create({

     baseURL:"http://localhost:5000/api", 
     headers:{token:`Bearer ${accessTokenn}`}
})

