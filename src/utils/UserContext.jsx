import { createContext,useEffect,useState } from "react";



const UserContext=createContext({
    loggedInfo:"Default User"
})
export default UserContext;