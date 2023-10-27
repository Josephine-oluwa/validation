import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom"
import * as yup from "yup"
import { SignUpAccount } from "../../Api/Reg"
import Swal from "sweetalert2"

const Register = () => {
  const navigate = useNavigate()

  const schema = yup.object({
      userName: yup.string().required(),
      email: yup.string().required(),
      password: yup.string().required(),
      confirm: yup.string().oneOf([yup.ref("password")])
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const handleRegister = handleSubmit(async(data) => {
    const {userName, email, password, confirm } = data;


    SignUpAccount({
      userName, email, password, confirm
    }).then(() => {


      Swal.fire({
        position: "center",
        icon: "success",
        title: "A mail has been sent to your email",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/message");
      });

    })
  })


  return (
    <div className='w-full h-[100vh] font-poppins bg-blue-700 flex justify-center items-center '>
      <form className='w-[500px] h-[70%] bg-white rounded-md flex justify-center items-center' onSubmit={handleRegister}>
    <div className='w-[90%] h-[90%] '>
    <center className='text-[25px] font-bold'>SIGN UP PAGE</center>
    <div className='flex-col flex justify-center items-center '>
    <input className='w-[400px] h-[50px] outline-none rounded-md mt-20 border' placeholder="Enter your Name" {...register("userName")}/> 
    {errors.userName?.message && (
      <div className="text-[13px] w-full flex justify-end text-red-400"> errors </div>
    )}
    <input className='w-[400px] h-[50px] outline-none rounded-md mt-10 border' placeholder="Enter your Email" {...register("email")}/>
    {errors.email?.message && (
        <div className="text-[13px] w-full flex justify-end text-red-400"> errors </div>
    )}
    <input className='w-[400px] h-[50px] outline-none rounded-md mt-10 border' placeholder="Enter your password" {...register("password")}/>
    {errors.email?.message && (
        <div className="text-[13px] w-full flex justify-end text-red-400"> errors </div>
    )}
    <button className='w-[400px] h-[50px] outline-none rounded-md mt-10 border bg-blue-500 text-[25px] font-medium text-white' type="submit"> Sign Up</button>
    <div className="flex justify-center items-center">Already have an account?
   
      <Link className=" mt-10 text-blue-500" to={""}>Sign up here</Link>
    `</div>
    </div>
    </div>
      </form>
    </div>
=======
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
  
>>>>>>> 2552d41d8c95f7a645249232eb995e9f161449d9
  )
}

export default Register