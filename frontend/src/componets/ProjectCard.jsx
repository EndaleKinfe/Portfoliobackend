const ProjectCard = ({title,year,description,repoLink,liveLink }) => {
    return ( <>
        <div className="relative  overflow-hidden bg-orange-400 w-64 min-h-80 rounded-lg m-5 p-3">
            <div className="absolute top-0 left-0 w-full bg-slate-800 h-36"></div>
            <h3 className="text-xl mt-36 capitalize">{title}</h3>
            <p className=" text-slate-600 text-sm">{year}</p>
            <p className="min-h-20">{description}</p>
            <div className="flex justify-between"><a href={repoLink}>see the code</a>
            <a href={liveLink}>see the site</a></div>
            
        </div>
    </> );
}
 
export default ProjectCard;