import React from 'react';
import { expertData } from '../assets/assets';
import { Link } from 'react-router-dom';

const ExpertMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='expert'>
        <h1 className='text-3xl font-medium'>Find by Expert</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of expert developers, schedule your appointment hassle-free.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {expertData.map((item,index)=>(<Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/developers/${item.expert}`}>
        <img className='w-16 sm:w-24 mb-2 rounded-full' height={100} width={100} src={item.image} alt=''/>
        <p>{item.expert}</p>
        </Link>))}
        </div>

        </div>
  )
}

export default ExpertMenu