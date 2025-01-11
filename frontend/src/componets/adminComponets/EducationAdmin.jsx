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
        <div className="flex justify-between">
        <h1>education list</h1>
        <Link to="/admin/educations/create"><button className="w-16 h-11 bg-orange-400">+ Add</button></Link>
        </div>
        <table className="w-3/4 my-8 ">
            <thead>
                <tr>
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
                    <tr>
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