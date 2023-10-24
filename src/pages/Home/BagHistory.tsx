import React, { useState } from 'react'
import wheather1 from "../../assets/Wheather1.jpg"
import { useBagHistory } from '../../hooks/useBagHistory'


const BagHistory = () => {
  const [state]: any = useState()
  const {data} = useBagHistory(state?.id)
console.log(data)
  return (
    <div className='flex justify-center items-center mt-5'>
      {data?.bagHistory.map((props: any) => (
        <div className='w-[550px] h-[300px] bg-orange-400 flex justify-center items-center'>
        <div className='w-[300px] h-[100px] border  bg-slate-400'>
        <div className='flex'>
    <div className='items-center flex'>Quantity</div>
    <span className='ml-3'>{props.bag}</span>
        </div>
        <div className='flex mt-2'>
        <div className='items-center flex'>Cost:</div>
        <span className='ml-3'>{props.cash}</span>
        </div>
        </div>
        <div className='w-[200px]  border h-[100px]'>
        <img src={wheather1} alt="" className='w-[100%] h-[100%] object-cover'/>
        </div>
    </div>
      ))}

    </div>
  )
}

export default BagHistory