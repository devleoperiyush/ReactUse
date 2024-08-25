import { Navigate } from "react-router-dom";

export default function PublicLayout({isUserAuthenticated, children} : any)
{
    console.log("isUserAuthenticated1",isUserAuthenticated);
    return (
        <>
            <div>
               {isUserAuthenticated ? <Navigate to="/landing" />: children  }
            </div>
        </>
    )
}