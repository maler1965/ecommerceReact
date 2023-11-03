import axios from "axios";


console.log(" estoy en blog api, con token ")
  
const  blogApi = axios.create({

  
  baseURL: "http://localhost:3000/api/v1",
  headers: {

    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default blogApi;
