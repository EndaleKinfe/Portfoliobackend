import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch";
import {Link} from "react-router"
const ProjectsAdmin = () => {
    const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/projects/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        <div className="flex justify-between">
        <h1 className="text-3xl text-center my-10 text-purple-400">projects list</h1>
        <Link to="/admin/projects/create"className="my-10"><button className="w-20 h-10 bg-orange-400 rounded-lg">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>title</td>
                <td>year</td>
                <td>description</td>
                <td>repository link</td>
                <td>live link</td>
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
                        <td>{row.title}</td>
                        <td>{row.year}</td>
                        <td>{row.description}</td>
                        <td>{row.repositoryLink}</td>
                        <td>{row.LiveLink}</td>
                        <td><Link to={`/admin/projects/${row.id}`} ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default ProjectsAdmin;