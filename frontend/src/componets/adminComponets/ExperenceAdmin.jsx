import Navbar from "./NavbarAdmin";
import useFetch from '../../useFetch'
import {Link} from "react-router"
const ExperenceAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/experences/list", requestOptions);
    return ( 
        <>
        <Navbar/>
     
        <div className="flex justify-around gap-10">
        <h1 className="text-3xl text-center my-10 text-purple-400">experence list</h1>
        <Link to="/admin/experences/create"className="my-10"><button className="w-20 h-10 bg-orange-400 rounded-lg">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>position</td>
                <td>company</td>
                <td>description</td>
                <td>start date</td>
                <td>finish date</td>
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
                        <td>{row.position}</td>
                        <td>{row.company}</td>
                        <td>{row.description}</td>
                        <td>{row.startDate}</td>
                        <td>{row.finishDate}</td>
                        <td><Link to={`/admin/experences/${row.id}`}  ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default ExperenceAdmin;