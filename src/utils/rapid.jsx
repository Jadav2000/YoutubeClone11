import axios from "axios";

const API_KEY=" e435b2b0ddmshd1b79355305bcb9p10ab0bjsn516ff2077f56";
const BASE_URL="https://youtube-v31.p.rapidapi.com"

const options = {
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData=async(url)=>{
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`,options);
        console.log(data);
        return data;
        
    }catch(error){
        console.error("error fetching api data: ",error);
        throw error;
    }
}