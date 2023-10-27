import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
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
  )
}

export default Register