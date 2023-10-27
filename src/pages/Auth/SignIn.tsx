<<<<<<< HEAD
import { Link } from "react-router-dom"


const SignIn = () => {
   

  return (
    <div className='w-full h-[100vh] font-poppins bg-pink-700 flex justify-center items-center '>
    <div className='w-[500px] h-[70%] bg-white rounded-md flex justify-center items-center '>
  <div className='w-[90%] h-[90%] '>
  <center className='text-[25px] font-bold'>SIGN IN PAGE</center>
  <div className='flex-col flex justify-center items-center '>
  <input className='w-[400px] h-[50px] outline-none rounded-md mt-20 border' placeholder="Enter your Name"/>
  <input className='w-[400px] h-[50px] outline-none rounded-md mt-10 border' placeholder="Enter your Email"/>
  <input className='w-[400px] h-[50px] outline-none rounded-md mt-10 border' placeholder="Enter your password"/>
  <button className='w-[400px] h-[50px] outline-none rounded-md mt-10 border bg-pink-500 text-[25px] font-medium text-white'> Sign Up</button>
  <div className="flex justify-center items-center">Already have an account?
 
    <Link className=" mt-10 text-pink-500" to={""}>Sign up here</Link>
  `</div>
  </div>
  </div>
    </div>
  </div>
  )
}

export default SignIn
=======
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { registerStudent } from "../../Api/userApi"
import wheather1 from "../../assets/Wheather1.jpg"

const SignIn = () => {
  const navigate = useNavigate()

  const Schema = yup.object({
    userName: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().required(),
    comfirm: yup.string().required()
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(Schema)
  })
 

  const onHandleSubmit = handleSubmit(async(data:any)=> {
    console.log("handleSubmit", ),
    registerStudent(data).then(()=> {
      navigate("sign-in")
    })
    
  })
  return (
    <div className='w-full h-[100vh] bg-yellow-600 flex justify-center rounded-[20px] items-center'>
    <div className='w-[50%] h-[50%] bg-white rounded-[20px] flex'>
  <form className='w-[55%] h-full rounded-[20px] flex justify-center items-center' onSubmit={onHandleSubmit}>
    <div className="w-[70%]   ">

    
    <span className='text-[40px] font-semibold'> One more step </span>
    <br/>
  <br/>
  {/* <span className='text-[20px] font-medium'> Use your email and password to register</span> */}
   

  <input className='border h-12 w-[70%] rounded-[5px] mt-10 outline-none pl-2 my-2 '
  placeholder='Enter your email'
  {...register("email")}
 /> 
 {errors.email?.message && (
  <div className="text-[13px] w-full flex justify-end text-red-400 ">error</div>
 )
 }
  <div>
  <input className='border h-12 rounded-[5px] w-[70%] mt-10 outline-none pl-2 my-2 '
  placeholder='Enter your password'
  {...register("password")}
  />
  {errors.password?.message && (
  <div className="text-[13px] w-full  flex justify-end text-red-300"> error</div>
  )}
  </div>

<button className="border h-12 rounded-[5px] mt-10 w-[70%] pl-2 my-2 ">
click here
 </button>
  </div>
   </form>
  <img  src={wheather1} className="h-full w-[45%] rounded-[20px] object-cover" />
  </div>
    </div>
  )
}

export default SignIn




// {errors.userName?.message && (
//   <div className="text-[13px] w-full flex justify-end text-red-400 ">
//     error
//   </div>
// )}
>>>>>>> 2552d41d8c95f7a645249232eb995e9f161449d9
