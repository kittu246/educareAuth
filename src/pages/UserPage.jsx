import React from 'react'
import profile from '../assets/CvPhoto.jpeg'
import { useGlobalContext } from '../GlobalContext'
import { useNavigate } from 'react-router'

const UserPage = () => {

  const navigate = useNavigate();

  const{user} = useGlobalContext()
  return (
    <>

 {user &&

  <section className='flex flex-col h-screen  gap-6 p-6'>
  <div className='flex gap-5 items-center '>
    <img className='h-20 w-20 rounded-full' src={profile} />
    <div>
      <p className='text-violet-500'>{user.name}</p>
      <p className='text-violet-500'  >{user.email}</p>
    </div>
  </div>

  <div className='text-gray-600'>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi eum veritatis modi enim, fugit ratione eaque placeat expedita corporis error architecto est? Neque perferendis illo, odit ad ipsum labore!
  </div>
  <button className='customButton'onClick={()=> navigate("/")}>Back Home</button>
</section>}

</>
    
  )
}

export default UserPage