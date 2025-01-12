import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch";
import {Link} from "react-router"
const CarsolAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/carosels/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        
        <div className="flex justify-around gap-10">
        <h1 className="text-3xl text-center my-10 text-purple-400">carosol list</h1>
        <Link to="/admin/carosols/create"className="my-10"><button className="w-20 h-10 bg-orange-400 rounded-lg">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>title</td>
                <td>description</td>
                <td>image link</td>
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
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>{row.imageLink}</td>
                        <td><Link to={`/admin/carosols/${row.id}`}  ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default CarsolAdmin;