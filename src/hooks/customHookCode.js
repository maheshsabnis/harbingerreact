import React, { useEffect, useState } from 'react';
import { ProductHttpService } from "./../service/producthttpservice";
// create a custom hook that will manage all async calls and return the data

export const useService=(url)=>{
    const [response, getResponse] = useState([]);
    const serv = new ProductHttpService();
    useEffect(()=>{
        serv.getDataFromUrl(url)
            .then((resp)=>{
                getResponse(resp.data);
            })
            .catch((error)=>{
                console.log(`Error In Call ${error}`);
            });
    },[]);
    return response;
};

