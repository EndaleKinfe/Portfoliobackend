import Navbar from "./NavbarAdmin";
import useFetch from "../../useFetch";
import {Link} from "react-router"
const EducationAdmin = () => {
   const requestOptions = {
  method: "GET",
  redirect: "follow"
}
    const {data, error, isLoading} = useFetch("http://localhost/portfoliobackend/index.php/educations/list", requestOptions);
    return ( 
        <>
        <Navbar/>
        <div className="flex justify-around gap-10">
        <h1 className="text-3xl text-center my-10 text-purple-400">education list</h1>
        <Link to="/admin/educations/create"className="my-10"><button className="w-20 h-10 bg-orange-400 rounded-lg">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr className="*:font-bold">
                <td>id</td>
                <td>type</td>
                <td>institution</td>
                <td>gpa</td>
                <td>study field</td>
                <td>details</td>
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
                        <td>{row.type}</td>
                        <td>{row.institution}</td>
                        <td>{row.details}</td>
                        <td>{row.studyField}</td>
                        <td>{row.gpa}</td>
                        <td>{row.startDate}</td>
                        <td>{row.finishDate}</td>
                        <td><Link to={`/admin/educations/${row.id}`}  ><button  className="w-20 h-10 rounded-lg bg-purple-400"> Edit</button></Link> <button className="w-20 h-10 rounded-lg bg-red-500">Delete</button></td>
                    </tr>
                )
            })
        }
        </tbody>
        </table>

</>)
}
 
export default EducationAdmin;