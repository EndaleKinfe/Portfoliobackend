import Section from "../Layouts/Section";

const About = () => {
    return ( 
        <section className="w-full min-h-screen" >
            <h1 className="text-6xl text-center my-20 text-purple-400">About Me</h1>
             <div className="flex flex-wrap gap-4 lg:gap-9 justify-center ">
                <div className="w-80 lg:w-96 h-96 md:w-[450] bg-slate-700 rounded-lg ">
                    <img className="object-cover h-full" src="11zon_cropped.jpeg" alt="" />
                </div>
                <div className="text-pretty px-3 w-96">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi ratione mollitia deleniti illum amet sed, obcaecati veniam incidunt, iusto quasi beatae voluptate minima laboriosam laborum earum vitae officiis assumenda temporibus magni, fugiat ullam. Ducimus officiissdfasdfsadfad fad modi amet ea, nulla sed voluptatem, quos totam omnis necessitatibus error perferendis esse a vero.</p>
                </div>
            </div>
        </section>
     );
}

export default About;