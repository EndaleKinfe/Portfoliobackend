const Menu = ({expanded, }) => {
    let lstyle = "hover:text-purple-400 dark:text-white"
    return ( 
         <ul className={expanded? " grid grid-cols-1 items-center justify-items-center gap-2 md:space-x-7 place-content-start md:flex-row  md:flex  lg:space-x-10 xl:space-x-20 " :'hidden items-center md:flex space-x-5 lg:space-x-10 xl:space-x-20 '}>
                <li className='hover:text-purple-400 dark:text-white'><a href="">username</a></li>
            </ul>
     );
}
 
export default Menu;