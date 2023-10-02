import axios from 'axios'
const API_URL='http://localhost:3000/'
const uploadFile=async(data)=>{
    try {
     let response= await axios.post({API_URL}/upload,data);
       return response.data; 
    } catch (error) {
        console.error('Error While Calling The Api:-',error.message);
        
    }
}
{

}