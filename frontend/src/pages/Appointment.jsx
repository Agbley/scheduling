import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointment = () => {
  const {devId}=useParams();
  const {developers,currencySymbol}=useContext(AppContext);
  const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
  const [devInfo,setDevInfo]=useState(null);
  const [devSlots,setDevSlots]=useState([]);
  const [slotIndex,setSlotIndex]=useState(0);
  const [slotTime,setSlotTime]=useState('');
  const fetchDevInfo=async()=>{
    const devInfo=developers.find(doc=>doc._id===devId);
      setDevInfo(devInfo);
    // console.log(devInfo);
  }
  const getAvailableSlots=async()=>{
   setDevSlots([]);
   // getting current date
   let today=new Date()
   for(let i=0;i<7;i++){
    // getting date with index
    let currentDate=new Date(today)
    currentDate.setDate(today.getDate()+i);
    // setting end time of the date with index
    let endTime=new Date();
    endTime.setDate(today.getDate() + i);
    endTime.setHours(21,0,0,0);
    // setting hours
    if (today.getDate()===currentDate.getDate()){
     currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours() + 1 : 10);
     currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10);
      currentDate.setMinutes(0)
    }
    let timeSlots=[]
    while(currentDate < endTime){
      let formattedTime=currentDate.toLocaleDateString([],{hour:'2-digit',minute:'2-digit'});
      // add slot to array
      timeSlots.push({datetime:new Date(currentDate),
        time:formattedTime
      });
      // Increment current time by 30 minutes
      currentDate.setMinutes(currentDate.getMinutes()+30);
      
    }
    setDevSlots(prev=>([...prev,timeSlots]));
   }
  }

  

  useEffect(()=>{
    fetchDevInfo();
    
  },[developers,devId]);
  
  useEffect(()=>{
   getAvailableSlots();
  },[devInfo])

  useEffect(()=>{
   console.log(devSlots);
  },[devSlots])

  return devInfo && (
    <div>
      {/* Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={devInfo.image}/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ------ Doc Info : name, degree, experience ------ */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {devInfo.name} 
            <img className='w-5' src={assets.verified} alt='verified profile tag'/>
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{devInfo.qualification} - {devInfo.expert}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{devInfo.experience}</button>
          </div>
          {/* About Developer */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
              About 
              <img className='w-5' src={assets.info} alt='info icon'/>
              </p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{devInfo.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>
            Appointment fee: <span className='text-gray-600'>{currencySymbol}{devInfo.fees}</span>
          </p>
        </div>
      </div>
      {/* ---- Booking slots ---- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x scroll mt-4'>
          {devSlots.length && devSlots.map((item,index)=>(
            <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex===index?'bg-primary text-white':'border border-gray-200'}`} key={index}>
             <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
             <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          )) }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {devSlots.length > 0 && devSlots[slotIndex].map((item,index)=>(
           <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time===slotTime ? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}>
            {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Book an appointment</button>
      </div>

    </div>
  )
}

export default Appointment