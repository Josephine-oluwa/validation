import axios from "axios"

const URL: string = "http://localhost:7788"

export const registerStudent = async(data: any) => {
    try {
        return await axios.post(`${URL}/api/create-student`, data).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const SignIn = async (data: any)=> {
    try {
        return await axios.post(`{URL}/api/sign-in`, data).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const getStudent = async (userID: string)=> {
    try {
        return axios.get(`${URL}/api/${userID}/one-student`).then((res) => {
            return res.data.data
        })

    } catch (error) {
        console.log(error)
    }
}


export const getStudentBags = async(userID: string) => {
    try {
        return axios.get(`${URL}/api/${userID}/view-student-Bag`).then((res) => {
            return res.data.data
        })
    } catch (error) {
        console.log(error)
    }
}








