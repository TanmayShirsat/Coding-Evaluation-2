import { Set, 
Sort_Asc,
Sort_Dec,
Sort_Date_Asc,
Sort_Date_Dec,
Sort_Quality_Asc,
Sort_Quality_Dec,
Sort_Explicit } from "./actionTypes";

import axios from "axios"

function Action(dispatch){
    axios
    .get('').then((res)=>{
        const users = res.date
        console.log(users)
    })
    .catch(e=>{
        const eM = e.message
    })
}
export default Action