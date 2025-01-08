const ExperenceCard = ({position,  company, startDate, finihsDate, description }) => {
    return ( <>
        <div className="border-solid border-[1px] border-slate-600 p-4 rounded-lg w-10/12 md:w-2/3 lg:w-1/2">
            <h3 className="text-xl font-bold capitalize">{position}<span className="text-xs m-5 text-slate-400">{startDate}-{finihsDate}</span></h3>
            <p className="text-sm mb-3 text-slate-400">{company}</p>
            
            <p>{description}</p>
        </div>
    </> );
}
 
export default ExperenceCard;