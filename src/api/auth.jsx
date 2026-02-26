import {api} from "./client";

export function isAuthed() {
    return localStorage.getItem("token") !== null;
}



export async function login(email,password) {
    /////////// CAMBIAR
    // email = "pass2"
    // password = "123456"
    /////////// CAMBIAR
    const form = new URLSearchParams();
    form.append("username",email); 
    form.append("password",password);

    // const res_health = await api.get("/health").then((response) => {
    //     console.log("this is my response!!!!!!!!!")
    //     console.log(response)
    //     console.log("-----")
    // }).catch((error) => { 
    //     console.log("error en api health!!!")
    //     console.log(error)
    // })


    const res = await api.post("/login/",form, {
         headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then((response) => {
    
        localStorage.setItem("token",response.data.access_token); 
        localStorage.setItem("token_type",response.data.token_type)

    }).catch(function(error) { 
        console.log("api error"); 
        console.log(error)
        throw error
    }
    );

    return res

}