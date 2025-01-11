import Navbar from "./NavbarAdmin";
import useFetch from '../../useFetch'
import {Link} from "react-router"
const ServiceAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/services/list", requestOptions);
    return ( 
        <>
        <Navbar/>
       
        <div className="flex justify-between">
        <h1>services list</h1>
        <Link to="/admin/services/create"><button className="w-16 h-11 bg-orange-400">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr>
                <td>id</td>
                <td>name</td>
                <td>description</td>
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
                        <td>{row.name}</td>
                        <td>{row.description}</td>
                        <td>{row.iconName}</td>
                        <td><Link to={`/admin/services/${row.id}`} ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default ServiceAdmin;