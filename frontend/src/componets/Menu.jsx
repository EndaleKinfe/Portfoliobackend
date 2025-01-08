const Menu = ({expanded}) => {
    return ( 
         <ul className={expanded? " grid grid-cols-1 items-center justify-items-center gap-2 md:space-x-7 place-content-start md:flex-row  md:flex  lg:space-x-10 xl:space-x-20 " :'hidden items-center md:flex space-x-5 lg:space-x-10 xl:space-x-20 '}>
                <li className='hover:text-purple-400 dark:text-white'><a href="">Home</a></li>
                
                <li className='hover:text-purple-400 dark:text-white'><a href="">Blog</a></li>
                <li className='hover:text-white hover:bg-purple-400  text-purple-400 border-solid border-2 rounded-full px-4 py-1 border-purple-400' ><a href="">Contact Me</a></li>
            </ul>
     );
}
 
export default Menu;