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