import { Navigate } from "react-router-dom";
import Login from "../../login/Login"

export default function PrivateLayout({isUserAuthenticated, children} : any)
{
    console.log("isUserAuthenticated",isUserAuthenticated);
    return (
        <>
            <div>
               {isUserAuthenticated ?  children : <Navigate to="/login" />}
            </div>
        </>
    )
}