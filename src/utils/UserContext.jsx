import { createContext,useEffect,useState } from "react";
// const [userData,setUserData]=useState({
//     name:"Madhur Borade",
//     age:18
// })
const actualData={
    name:"Shana",
    age:22
}

const myData=createContext(actualData)
export default myData;