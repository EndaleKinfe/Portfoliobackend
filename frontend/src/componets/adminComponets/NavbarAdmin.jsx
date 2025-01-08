import {useState} from 'react';
import Menu from "./MenuAdmin";
const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    function handletoggle(){
        let a = false;
        if(expanded){
            a = false;
        }
        else{
            a = true;
        }
        setExpanded(a);
    }
    return ( 
        <nav className=' z-50 top-0 left-0 bg-white grid  grid-cols-2 justify-items-center items-center md:justify-around dark:bg-slate-600 md:flex space-x-5 *:my-2 *:py-1 lg:space-x-10 xl:space-x-20 '>
       
        <a href='#' className="mx-2 text-white font-mono">EndaleKinfe</a>
    
        <div onClick={handletoggle} className="rounded-lg  md:hidden border-2 border-solid border-white max-w-12 w-10 text-center text-white"
            aria-label='Toggle navigation'>t</div>
        <Menu expanded={expanded}/>

    </nav>
     );
}
 
export default Navbar;