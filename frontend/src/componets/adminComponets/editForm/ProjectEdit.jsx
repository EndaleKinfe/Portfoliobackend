import { useState } from "react";
import {useNavigate, useParams} from "react-router";
import Navbar from "../NavbarAdmin";

const ProjectEdit = () => {
    const [title, setTitle] = useState("");
    const [year, setYear ] = useState("");
    const [description, setDescription] = useState("");
    const [repoLink, setRepoLink] = useState("");
    const [liveLink, setLiveLink]  = useState("");
    const {id} = useParams()
    const navigate = useNavigate();

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleYear(e){
        setYear(e.target.value);
    }
    function handleDescription(e){
        setDescription(e.target.value);
    }    

    function handleRepoLink(e){
        setRepoLink(e.target.value);
    }
        function handleLiveLink(e){
        setLiveLink(e.target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "PUT" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "title":  title,
                        "year": year,
                        "description":  description,
                        "repository_link": repoLink ,
                        "live_link": liveLink,
                        "id": id 
                        });

        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/projects/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
            navigate("/admin/projects")
       
    }

    return ( <>
                <Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Edit Projects</h1>
                <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

                    <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
                    onChange={handleTitle} 
                    type="text" 
                    placeholder="title" 
                    value={title}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleYear} 
                    type="text" 
                    placeholder="year" 
                    value={year}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleDescription} 
                    type="text" 
                    placeholder="description" 
                    value={description}/>
                    
                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handleRepoLink} 
                    type="text" 
                    placeholder="image link " 
                    value={repoLink}/>
                    
                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handleLiveLink} 
                    type="text" 
                    placeholder="image link " 
                    value={liveLink}/>

                    
                    <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">save edit</button>
                </form >
    </> );
}
 
export default ProjectEdit;