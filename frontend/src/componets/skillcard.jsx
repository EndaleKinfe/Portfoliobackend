const SkillCard = ({name,experise }) => {
    let level = {width: experise + "%"} 
    return ( <>
        <div className="lg:w-72 w-52">
            <h3 className="mb-3 capitalize">{name}</h3>
            <div className="w-full h-2 bg-slate-300 rounded-lg"> <div className={"rounded-lg h-full bg-red-200 "} style={level}></div> </div>
        </div>
    </> );
}
 
export default SkillCard;