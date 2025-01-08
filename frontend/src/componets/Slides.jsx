const Sliders = ({slideImageLink = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", slideText, slideId, slideCount}) => {
    return ( 
        <div className="w-full  h-full relative">
            <div className=" absolute top-3 left-3 text-white numbertext">{slideId} / {slideCount}</div>
            <img src={slideImageLink} className="w-full h-screen object-cover" alt="picture of endu"/>
            <div className="absolute top-1/2 left-1/3 text-5xl text-white  z-20">{slideText}</div>
        </div>

     );
}
 
export default Sliders;