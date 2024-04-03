import React from 'react'
import { LuAsterisk } from "react-icons/lu";

const CustomInput = ({name,type,value,setValue}) => {
  return (
    <div className='input-wrapper'>
            <label className='text-violet-500 flex items-center customLabel'>{name} <LuAsterisk className='text-red-400'/></label>
            <input className='customInput' type={type}  value={value} onChange={(e) =>setValue(e.target.value)} />

    </div>
  )
}

export default CustomInput