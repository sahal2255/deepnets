import axios from "axios";
import axiosInstance from "../utils/Axios";

export const menuListGet=async()=>{
    try {
        const response=await axiosInstance.get('/menulist')
        console.log(response)
        return response.data
    } catch (error) {
        console.log('Error fetching products:', error);
        throw error;
    }
}

export const AddMenuItems=async(data)=>{
    console.log('data in the service section',data)
    try {
        const response =await axiosInstance.post('/addmenuitems',{data})
        console.log('response in the service section',response)
        return response
    } catch (error) {
        console.log('error in the add menut item service',error)
    }
}

export const selectedMenuItems=async(itemId)=>{
    console.log('item id in the service section',itemId)
    try {
        const response =await axiosInstance.get(`/selectedmenuitems/${itemId}`)
        return response
    } catch (error) {
        console.log('selected items error in the service section',error)
    }
}