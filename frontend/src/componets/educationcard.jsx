const EducationCard = ({type,  institution, gpa, studyField, startDate, finihsDate, details }) => {
    return ( <>
        <div className="border-solid border-[1px] border-slate-600 p-4 rounded-lg w-80">
            <h3 className="text-xl font-bold capitalize">{studyField}-<span className="text-sm text-slate-400">{type}</span></h3>
            <p  className="text-xs mb-3 text-slate-400">{startDate}-{finihsDate}</p>
            <p className="min-h-12">{details}</p>
            <p className="text-xs text-slate-400">{gpa}</p>
        </div>
    </> );
}
 
export default EducationCard;