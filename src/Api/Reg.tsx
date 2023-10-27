import axios from "axios"

const url = "https://set07superproject.onrender.com";

export const SignUpAccount = async(data: any) => {
    try {
        return await axios.post(`${url}/api/create-account`, data);
    } catch (error) {
        console.log(error)
    }
}


export const verifyAccount = async(token: any)  => {
    try {
        return await axios.post(`${url}/api/verify-account`, token)
    } catch (error) {
        console.log(error)
    }
}


export const resetPassword = async(data: any) => {
    try {
        return await axios.post(`${url}/api/reset-account-password`, data)
    } catch (error) {
       console.log(error) 
    }
}

export const changePassword = async (token: any, data: any) => {
    try {
        return await axios.patch(`${url}/api/${token}/change-account-password`, data)
    } catch (error) {
        console.log(error)
    }
}

export const SignInAccount = async (data: any) => {
    try {
       return await axios.post(`${url}/api/sign-in-account`, data) 
    } catch (error) {
        console.log(error)
    }
}