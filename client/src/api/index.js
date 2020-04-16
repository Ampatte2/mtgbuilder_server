import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:4000/api"
})

export const fetchCard = payload => api.post("/getCard", payload).then((response)=>{console.log("Server Response", response); return response}).catch((error)=>console.log(error))

export const getLogin = payload => api.post("/login", payload).then(response=>{return response})

export const getDeckList = payload => api.post("/getDeck", payload).then((response)=>{return response})

export const getUser = payload => api.post("/getUser", {data: payload}).then((response)=>{return response});

export const saveToList = payload=> api.post("/saveDeck", payload).then((response)=>{return response})

export const saveCard = payload => api.post("/saveCard", payload).then((response)=>{return response});

export const deleteCard = payload => api.post("/deleteCard", payload).then((response)=>{return response});

export const getDefault = () => api.post("/getData").then(response=>{return response})

export const getRegister = payload => api.post("/register", payload).then(response=>{return response})