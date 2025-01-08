const Section = ({children, title, diff}) => {

    return ( 
        <section className={diff? "bg-slate-200 w-full py-16 min-h-screen": "bg-white w-full min-h-screen py-16" } >
            <h1 className="text-6xl text-center mb-16 text-purple-300">{title}</h1>
            <div className="flex  justify-center flex-wrap items-center  content-center w-full mx-auto gap-10">
                {
                children
            }
            </div>
            
        </section>
     );
}
 
export default Section;