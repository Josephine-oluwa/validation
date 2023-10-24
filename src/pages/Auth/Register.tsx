import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { registerStudent } from "../../Api/userApi"
import Auth from "../../assets/Auth.webp"

const Register = () => {

   const navigate = useNavigate()

  const Schema = yup.object({
    studentName: yup.string().required(),
    schoolName: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required()
  })

  const {register, handleSubmit} = useForm({
    resolver: yupResolver(Schema)
  })

  const onHandleSubmit = handleSubmit(async (data: any) => {
    console.log("handleSubmit", data)
    registerStudent(data).then(()=> {
      navigate("sign-in")
    })    
  })
  return (
    <div className='w-full h-[100vh] bg-yellow-600 flex justify-center rounded-[20px] items-center'>
      <div className='w-[80%] h-[80%] bg-white rounded-[20px] flex'>
    <form className='w-[55%] h-full bg-pink-300 rounded-[20px] flex justify-center items-center' onSubmit={onHandleSubmit}>
      <div className="w-[70%]">

      
      <span className='text-[40px] font-semibold'> Hi Dear, you are welcome onboard</span>
      <br/>
    <br/>
    <span className='text-[20px] font-medium'> Use your email and password to register</span>
     
    <input className='border h-12 rounded-[5px] mt-10 outline-non`e pl-2 w-[500px] my-2 '
    placeholder='Enter your SchoolName'
    {...register("schoolName")}/>
    <input className='border h-12 rounded-[5px] mt-10 outline-non`e pl-2 w-[500px] my-2 '
    placeholder='Enter your name'
    {...register("studentName")}/>
    <input className='border h-12 rounded-[5px] mt-10 outline-non`e pl-2 w-[500px] my-2 '
    placeholder='Enter your email'
    {...register("email")}/>
    <input className='border h-12 rounded-[5px] mt-10 outline-non`e pl-2 w-[500px] my-2 '
    placeholder='Enter your password'
    {...register("password")}/>
    <button 
    type="submit"
    className=" h-12 rounded-[5px] mt-10  pl-2 w-[500px] my-2 bg-yellow-600">
Register
    </button>
    </div>
     </form>
    <img className="h-full w-[45%] rounded-[20px]" src={Auth}/>
    </div>
      </div>
  
  )
}

export default Register