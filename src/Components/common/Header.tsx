<<<<<<< HEAD
import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
=======
import React, { useState } from 'react'
import { useUserUpdate } from '../../hooks/useBagHistory'
import {PiEyeClosedLight, PiEyeLight } from "react-icons/pi"

const Header = () => {
    const [state, setState] = useState()
    const [show, setShow] = useState<boolean>(false)

    const {userData} = useUserUpdate(state?._id);

  const Toggle = ()=> {
    setShow(show);
  }

  return (
    <div className=' w-[100%] h-[90px] bg-slate-400 items-center justify-center flex'>
        <div className='w-[90%] h-[80px] bg-slate-50 flex items-center justify-between px-3'>
<div className='text-[20px] font-bold items-center justify-center flex '>
     <div className='flex items-center justify-center'>
        Balance: {" "}
       {show ? (
         <div className='mx-4'>₦{userData.balance}</div>) : (
            <div className='mx-4'>*****</div>
         )}
       
     </div> {" "}
     <div>
        {show? (
            <PiEyeLight onClick={Toggle}/>) : (
                <PiEyeClosedLight onClick={Toggle}/>
            )}
     </div>
</div>
<div className='text-[20px] font-bold items-center justify-center flex'>
    <div className='w-[50px] h-[50px] rounded-full border'>
                {/* {state?.studentImage ? <div>p</div> : <div>n</div>} */}
    </div>
    <button className='ml-4'
    onClick={() => {
      
    }}
    >
LogOut
    </button>
</div>
        </div>
    </div>
>>>>>>> 2552d41d8c95f7a645249232eb995e9f161449d9
  )
}

export default Header