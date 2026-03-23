import {Navigate} from "react-router-dom"; 

export function getStoredUser() { 
    const rawUser = localStorage.getItem("user"); 

    if (!rawUser) return null; 

    try { 
        return JSON.parse(rawUser);
    } catch { 
        return null; 
    }

}


export default function RoleProtectedRoute ({children,allowedRoles = [] }) { 
    console.log("allowedRoles")
    const token = localStorage.getItem("token"); 
    const user = getStoredUser(); 
    
    console.log("usuario: ",user);  

    if(!token || !user) { 

        return <Navigate to="/login" />;
    }

    if(allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
        return <Navigate to="/no-autorizado"/>
    }

    return children;


}



