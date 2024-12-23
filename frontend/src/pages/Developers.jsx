import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Developers = () => {
  const {expert}=useParams();
  const [filterDev,setFilterDev]=useState([]);
  const navigate=useNavigate();
  console.log(expert);
  const {developers}=useContext(AppContext);

  const applyFilter=()=>{
   if (expert){
   setFilterDev(developers.filter(doc=>doc.expert===expert))
   }else{
    setFilterDev(developers)
   }
  }
  useEffect(()=>{applyFilter()},[developers,expert])
  return (
    <div>
      <p className='text-gray-600'>Browse through the expert developers.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=>expert==='Backend Develper'?navigate('/developers'):navigate('/developers/Backend Develper')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Backend Develper'?'bg-indigo-100 text-black':'' }`}>Backend Develper</p>
          <p onClick={()=>expert==='Cloud Developer'?navigate('/developers'):navigate('/developers/Cloud Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Cloud Developer'?'bg-indigo-100 text-black':'' }`}>Cloud Developer</p>
          <p onClick={()=>expert==='Frontend Developer'?navigate('/developers'):navigate('/developers/Frontend Developer')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Frontend Developer'?'bg-indigo-100 text-black':'' }`}>Frontend Developer</p>
          <p onClick={()=>expert==='Full Stack Developer'?navigate('/developers'):navigate('/developers/Full Stack Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Full Stack Developer'?'bg-indigo-100 text-black':'' }`}>Full Stack Developer</p>
          <p onClick={()=>expert==='Mobile Developer'?navigate('/developers'):navigate('/developers/Mobile Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Mobile Developer'?'bg-indigo-100 text-black':'' }`}>Mobile Developer</p>
          <p onClick={()=>expert==='Game Developer'?navigate('/developers'):navigate('/developers/Game Developer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded trasition-all cursor-pointer ${expert==='Game Developer'?'bg-indigo-100 text-black':'' }`}>Game Developer</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {filterDev.map((item,index)=>(
            <div onClick={()=>navigate(`/developers/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' height={200} width="full"   src={item.image} alt=''/>
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p >Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
               
                    <p className='text-gray-600 text-sm'>{item.expert}</p>
                </div>
            </div>

        ))}</div>
      </div>
    </div>
  )
}

export default Developers