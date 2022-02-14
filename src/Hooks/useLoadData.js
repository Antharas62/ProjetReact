import React, { useState } from 'react';
import axios from "axios";

//CREATION DES HOOKS

//SET UP AXIOS
function useLoadData(){
    const [datas,setDatas] = useState(null);
    
    const loadData = (route) => {
        axios.get(route)
        .then(reponse => {
            setDatas(reponse.data.features);
        })

        .catch(error => {

        })
    }
    return [datas,loadData];
}

export default useLoadData;