import { Outlet, Navigate } from "react-router-dom"
import useAuth from "../contexts/AuthContext"

export default function ProtectRoute(){
    const {user} = useAuth()
    if(!user){
        return <Navigate to="/" replace />
    }
    return(
       <Outlet/>
    )
}