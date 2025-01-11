import { useState } from "react";
import Navbar from "../componets/adminComponets/NavbarAdmin";
import Messageshow from "../componets/adminComponets/messageshow";
import ProjectsAdmin from "../componets/adminComponets/ProjectsAdmin";
import Dashboard from "../componets/adminComponets/Dashboard";
import { Outlet, Link } from "react-router";

const AdminPage = () => {
    
    function handlePageChange(pageName){
        setCurrentsub(pageName);
    }
    return ( 
        <>
        <div className="flex h-screen">
            <aside className="bg-orange-400 flex-0.4 w-52 flex flex-col justify-around items-center justify-self-stretch">
            <div> Endale Kinfe</div>
            <ul className="*:mx-auto">
                <li> <Link to="/admin/dashboard">Dashboard</Link></li>
                <li><Link to="/admin/skills">Skill</Link></li>
                <li><Link to="/admin/services">Services</Link></li>
                <li><Link to="/admin/educations">Education</Link></li>
                <li><Link to="/admin/messages">Messages</Link></li>
                <li><Link to="/admin/projects">Projects</Link></li>
                <li><Link to="/admin/newsletter">NewsLetter </Link></li>
                <li><Link to="/admin/contacts">Contacts</Link></li>
                <li><Link to="/admin/carosols">Carosols</Link></li>
                <li><Link to="/admin/users">Users</Link></li>
            </ul>
            <div>logout</div>
            </aside>
            
            
            <div className="flex-0.6 flex flex-col items-center w-full overflow-scroll">
                <Outlet/>
                
            </div>
        </div>
            </>
     );
}
 
export default AdminPage;