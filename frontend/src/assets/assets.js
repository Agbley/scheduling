import backend_developer from './backend_developer.png';
import cloud_developer from './cloud_developer.png';
import logo from './logo.png';
import profile_pic from './profile_pic.png';
import dropdown_arrow from './dropdown_arrow.png';
import different_developers from './different_developers.png'
import arrow from './arrow.gif';
import professional_header from './professional_header.png';
import developer_appointment from './developer_appointment.png';
import data_scientist from './data_scientist.png';
import verified from './verified.png';
import info from './info.png';


export const assets={
    backend_developer,
    cloud_developer,
    logo,
    profile_pic,
    dropdown_arrow,
    different_developers,
    arrow,
    professional_header,
    developer_appointment,
    data_scientist,
    verified,
    info
}

export const expertData= [
{
    expert:"Backend Developer",
    image:backend_developer
},
{expert:"Cloud Developer",image:cloud_developer},
{expert:"Data Scientist",image:data_scientist}
]

export const developers = [{_id:'dev1',name:'Dev. Lisa Becks',image:backend_developer,expert:'Backend Developer',qualification:'Degree',experience:'3 Years',about:'Focuses on server-side logic, databases, and ensuring that everything behind the scenes of a web application runs smoothly.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev2',name:'Dev. Bill Mark',image:data_scientist,expert:'Data Scientist',qualification:'Degree',experience:'4 Years',about:'Combines programming skills with statistical knowledge to analyze and interpret complex data sets.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev3',name:'Dev. John Clerk',image:cloud_developer,expert:'Cloud Developer',qualification:'Degree',experience:'2 Years',about:'Works with cloud services like AWS, Azure, or Google Cloud to create scalable and resilient applications.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}}
]