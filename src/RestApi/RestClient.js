import axios from 'axios';

class RestClient {

    static GetRequest = (getUrl)=>{
        return axios.get(getUrl).then(response=>{
            return response.data;
        }).catch(error=>{
            return null;
        });
    }

    static PostRequest = (getUrl,data)=>{
        return axios.post(getUrl,data).then(response=>{
             return response.data;
        }).catch(error=>{
             return null;
        });
    }
    static DeleteRequest = (getUrl,data)=>{
        return axios.delete(getUrl,data).then(response=>{
             return response.data;
        }).catch(error=>{
             return null;
        });
    }

}

export default RestClient