import { useRef, useState } from "react";
import useFetch from "../../useFetch";
import Navbar from "./NavbarAdmin";
import {Link, Outlet} from "react-router"
const ContactAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/contacts/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        
        <div className="flex justify-between">
        <h1>contact info list</h1>
        <Link to="/admin/contacts/create"><button className="w-16 h-11 bg-orange-400">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">

                <td>id</td>
                <td>type</td>
                <td>contact info</td>
                <td>icon</td>
                <td>manuplate</td>
                </tr>
            </thead>
            <tbody>
        {isLoading &&
            <tr>
                        <td>loading</td>
                        <td>loading</td>
                        <td>loading</td>
                        <td>loading</td>
                        <td>loading</td>
                    </tr>
        }
        {data && 
            data.map((row)=>{
                console.log(row)
                return(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.type}</td>
                        <td>{row.contactInfo}</td>
                        <td>{row.icon}</td>
                        <td><Link to={`/admin/contacts/${row.id}`}><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
    </table>
        </>
     );
}
 
export default ContactAdmin;