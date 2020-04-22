import axios from 'axios'

export function postData(type,userData){
	const url = 'https://xcodex.co/api/auth/'

	 axios.post(url+'login',{
	 	email:JSON.stringify(userData),
	 	password:JSON.stringify(userData)
	 }).then((res)=>{
            console.log(res)
     })
}