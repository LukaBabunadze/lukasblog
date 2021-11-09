import axios from "axios";

const SERVER_URl = "http://18.185.148.165:3000/";
const SERVER_URL_V1 = SERVER_URl + "api/v1/"

export const blogs = async() => {
    const results = await axios.get("https://fakestoreapi.com/products/");
    return results.data;
}

export const modal = async(id) => {
    const results = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(results.data)
    return results.data;
}