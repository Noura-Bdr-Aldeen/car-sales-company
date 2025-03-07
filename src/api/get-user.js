import { apiPerson } from "./constant"
import axios from "axios"

export const fetchUsers = async () => {
    const response = await axios.get(`${apiPerson}`);
    console.log(response.data);
    return response.data;
};