import * as axios from "axios";

const instance = axios.create({
    baseURL: `/data.json`,
})

export const  usersAPI = {
     getUsers() {
        return instance.get(``).then(res => res.data)
    },
}
