import { api } from "./baseurl";

export const GetAuthorData = async (arg) => {
    try{
        const {data} = await api.get(arg)
        // console.log(data);
        return data;
    }catch(e){
        throw new Error(e.message)
    }
}