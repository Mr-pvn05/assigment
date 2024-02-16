import axios from "axios";

export const fetchDataFromApi = async () => {
    try {
        const data = await axios.get(`https://randomuser.me/api/?page=1&results=1&seed=abc`)
        return data;
    } catch (error) {
        console.log("Error ocurred => ", error)
    }
}