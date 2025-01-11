import { useState } from "react";
import {useParams} from "react-router";
import Navbar from "./NavbarAdmin";

const Edit = ({what, who}) => {
    const {username, setUserName} = useState("");
    const {email, setEmail} = useState("");
    const {name, setName} = useState("");
    const {expetiseLevel, setExperiseLevel} = useState("");
    const {icon, setIcon } = useState("");
    const {description, setDescription} = useState("");
    const {title, setTitle } = useState("");
    const {year, setyear } = useState("");
    const {startdate, setstartdate } = useState("");
    const {enddate, setenddate } = useState("");
    const {id} = useParams()
    
    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleYear(e){
        setyear(e.target.value);
    }

    function handlesstartdate(e){
        setstartdate(e.target.value);
    }
    function handleenddate(e){
        setenddate(e.target.value);
    }

    function handelicon(e){
        setIcon(e.target.value);
    }
    function handelDescription(e){
        setDescription(e.target.value);
    }
    function handelusename(e){
        setUserName(e.target.value);
    }
    function handleEmail(e){
        setEmail(e.target.value);
    }    
    function handlename(e){
        setName(e.target.value);
    }
    function handelexpertise(e){
        setExperiseLevel(e.target.value);
    }
    
    function generatejsonbody(){
        if (what == e){

            switch (who) {
                case 1:
                    return JSON.stringify({
                        "email": email,
                        "username": username,
                        "id": id
                        });
                
                case 2:
                    return JSON.stringify({
                        "title":  title,
                        "description": description,
                        "image_link": icon,
                        "id": id 
                        }); 
                    
                case 3:
                    return JSON.stringify({
                        "type":  title,
                        "institution": username,
                        "gpa": icon,
                        "study_field":  email,
                        "details":  description,
                        "start_date": startdate,
                        "finish_date": enddate,
                        "id": id 

                        });
                    
                case 4:
                    return JSON.stringify({
                        "position":  title,
                        "company": username,
                        "description":  description,
                        "start_date": startdate,
                        "finish_date": enddate,
                        "id": id 

                        });
               case 5:
                    return JSON.stringify({
                        "title":  title,
                        "year": year,
                        "description":  description,
                        "repository_link": name ,
                        "live_link": expetiseLevel,
                        "id": id 

                        });
                
                case 6:
                    return JSON.stringify({
                        "name":  name,
                        "description":  description,
                        "icon": icon ,
                        "id": id 

                        });
                case 7:
                    return JSON.stringify({
                        "name":  name,
                        "expertiselevel":  expetiseLevel,
                        "iconname": icon ,
                        "id": id 

                        });
                case 8:
                    return JSON.stringify({
                        "type":  name,
                        "contact_info":  expetiseLevel,
                        "icon": icon ,
                        "id": id 

                        });
               
            }
        }
        else{
                 switch (who) {
                case 1:
                    return JSON.stringify({
                        "email": email,
                        "username": username,
                        "password": title
                        });
                
                case 2:
                    return JSON.stringify({
                        "title":  title,
                        "description": description,
                        "image_link": icon,
                        }); 
                    
                case 3:
                    return JSON.stringify({
                        "type":  title,
                        "institution": username,
                        "gpa": icon,
                        "study_field":  email,
                        "details":  description,
                        "start_date": startdate,
                        "finish_date": enddate,
                        });
                    
                case 4:
                    return JSON.stringify({
                        "position":  title,
                        "company": username,
                        "description":  description,
                        "start_date": startdate,
                        "finish_date": enddate,

                        });
               case 5:
                    return JSON.stringify({
                        "title":  title,
                        "year": year,
                        "description":  description,
                        "repository_link": name ,
                        "live_link": expetiseLevel
                        });
                
                case 6:
                    return JSON.stringify({
                        "name":  name,
                        "description":  description,
                        "icon": icon ,
                        });
                case 7:
                    return JSON.stringify({
                        "name":  name,
                        "expertiselevel":  expetiseLevel,
                        "iconname": icon ,

                        });
                case 8:
                    return JSON.stringify({
                        "type":  name,
                        "contact_info":  expetiseLevel,
                        "icon": icon ,
                        

                        });

        }
    }
                                    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod = what == "e" ? "PUT" : "POST"
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = generatejsonbody();

        
        


        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/messages/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       
    }
    return ( <>
        {(what=="e" && who == 1) && 
            <><Navbar/>
             <h1 className="text-3xl text-center my-10 text-purple-400" >Edit user</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handelusename} type="text" placeholder="username" value={username}/>
            
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handleEmail} type="email" placeholder="example@example.com" value={email}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 2) && 
            <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit carosel</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
            onChange={handleTitle} 
            type="text" 
            placeholder="title" 
            value={title}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
            onChange={handelDescription} 
            type="text" 
            placeholder="description" 
            value={description}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
            onChange={handelicon} 
            type="text" 
            placeholder="image link " 
            value={icon}/>
            
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 3) && 
           <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
            onChange={handleTitle} 
            type="text" 
            placeholder="type" 
            value={title}/>

            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
            onChange={handelusename} 
            type="text" 
            placeholder="institution" 
            value={username}/>

            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
            onChange={handelicon} 
            type="text" 
            placeholder="gpa" 
            value={icon}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
            onChange={handelDescription} 
            type="text" 
            placeholder="details" 
            value={description}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
            onChange={handleEmail} 
            type="text" 
            placeholder="study field" 
            value={email}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
            onChange={handlesstartdate} 
            type="date" 
            placeholder="startdate" 
            value={startdate}/>

            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
            onChange={handleenddate} 
            type="date" 
            placeholder="finish date" 
            value={enddate}/>


            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 4) && 
          <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handleTitle} type="text" placeholder="title" value={title}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelDescription} type="text" placeholder="description" value={description}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelicon} type="text" placeholder="icon name" value={icon}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>

        }
        {(what=="e" && who == 5) && 
           <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handleTitle} type="text" placeholder="title" value={title}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelDescription} type="text" placeholder="description" value={description}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelicon} type="text" placeholder="icon name" value={icon}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 6) && 
           <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handleTitle} type="text" placeholder="title" value={title}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelDescription} type="text" placeholder="description" value={description}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelicon} type="text" placeholder="icon name" value={icon}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 7) && 
            <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handleTitle} type="text" placeholder="title" value={title}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelDescription} type="text" placeholder="description" value={description}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelicon} type="text" placeholder="icon name" value={icon}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }
        {(what=="e" && who == 8) && 
            <><Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit contact</h1>
           <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>
            <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' onChange={handleTitle} type="text" placeholder="title" value={title}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' onChange={handelDescription} type="text" placeholder="description" value={description}/>
            <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' onChange={handelicon} type="text" placeholder="icon name" value={icon}/>
            <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
        </form ></>
        }

    </> );
}
 
export default Edit