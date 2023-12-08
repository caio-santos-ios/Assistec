import axios from "axios"

export const api = axios.create({
    baseURL: "https://api-assistech.onrender.com/api/"
})
