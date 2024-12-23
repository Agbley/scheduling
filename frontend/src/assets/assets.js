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
import database_developer from './database_developer.png';
import devops_engineer from './devops_engineer.png';



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
    info,
    database_developer,
    devops_engineer,

}

export const expertData= [
{
    expert:"Backend Developer",
    image:backend_developer
},
{expert:"Cloud Developer",image:cloud_developer},
{expert:"Data Scientist",image:data_scientist},
{expert:"Database Developer",image:database_developer},
{expert:"DevOps Engineer",image:devops_engineer}
]

export const developers = [{_id:'dev1',name:'Dev. Lisa Becks',image:backend_developer,expert:'Backend Developer',qualification:'Degree',experience:'3 Years',about:'Focuses on server-side logic, databases, and ensuring that everything behind the scenes of a web application runs smoothly.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev2',name:'Dev. Bill Mark',image:data_scientist,expert:'Data Scientist',qualification:'Degree',experience:'4 Years',about:'Combines programming skills with statistical knowledge to analyze and interpret complex data sets.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev3',name:'Dev. John Clerk',image:cloud_developer,expert:'Cloud Developer',qualification:'Degree',experience:'2 Years',about:'Works with cloud services like AWS, Azure, or Google Cloud to create scalable and resilient applications.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev4',name:'Dev. Kate Dul',image:database_developer,expert:'Database Developer',qualification:'HND',experience:'3 Years',about:'Specializes in creating and managing databases, ensuring data is stored efficiently and securely.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}},
    {_id:'dev5',name:'Dev. Haris Kam',image:devops_engineer,expert:'DevOps Engineer',qualification:'HND',experience:'3 Years',about:'Bridges the gap between development and operations, focusing on continuous integration, continuous delivery, and deployment automation.',fees:50,address:{line1:'17th Ave, Richstreet',line2:'Century Road, Teshie'}}
]