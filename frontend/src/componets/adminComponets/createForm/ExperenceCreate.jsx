import { useState } from "react";
import Navbar from "../NavbarAdmin";
import { useNavigate } from "react-router";

const ExperenceCreate = () => {
    const [position, setPosition] = useState("");
    const {company, setCompany } = useState("");
    const [description, setDescription] = useState("");
    const [startdate, setStartDate] = useState("");
    const [enddate, setEndDate]  = useState("");
    const {id} = useParams()
    const navigate = useNavigate();

    function handlePosition(e){
        setPosition(e.target.value);
    }
    function handleCompany(e){
        setCompany(e.target.value);
    }
    function handleDescription(e){
        setDescription(e.target.value);
    }    

    function handlestartDate(e){
        setStartDate(e.target.value);
    }
        function handleendDate(e){
        setEndDate(e.target.value);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        let reqMethod =  "POST" 
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
                        "position":  position,
                        "company": company,
                        "description":  description,
                        "start_date": startdate,
                        "finish_date": enddate
                        });

        const requestOptions = {
        method: reqMethod,
        headers: myHeaders,
        body: raw,
         redirect: "follow"
        };

        try {
            const response = await fetch("http://localhost/portfoliobackend/index.php/experences/list",requestOptions);
            const result = await response.json();
            console.log('Success:', result);
            } catch (error) {
            console.error('Error:', error);
            }
       navigate("/admin/experences")
    }

    return ( <>
                <Navbar/> <h1 className="text-3xl text-center my-10 text-purple-400" >Create Experence</h1>
                <form onSubmit={handlesubmit} className=' w-5/6 lg:w-1/2 bg-slate-500 rounded-xl flex flex-col justify-center items-center p-10 gap-7 mx-auto md:w-[450px]'>

                    <input className='border-solid border-purple-400 items-center h-10 p-2 rounded-md w-5/6 md:w-96 mb-5 text-slate-700' 
                    onChange={handlePosition} 
                    type="text" 
                    placeholder="position" 
                    value={position}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleCompany} 
                    type="text" 
                    placeholder="company" 
                    value={company}/>

                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 h-10 p-2 rounded-md md:w-96 text-slate-700' 
                    onChange={handleDescription} 
                    type="text" 
                    placeholder="description" 
                    value={description}/>
                    
                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handlestartDate} 
                    type="date" 
                    placeholder="start Date " 
                    value={startdate}/>
                    
                    <input className='border-solid border-purple-400 items-center w-5/6 mb-5 text-slate-700 h-10 p-2 rounded-md md:w-96' 
                    onChange={handleendDate} 
                    type="date" 
                    placeholder="end Date " 
                    value={enddate}/>

                    
                    <button className='w-1/2 bg-orange-400 h-10 rounded-md' type="submit">Create</button>
                </form >
    </> );
}
 
export default ExperenceCreate;