import devProject from "../data/devProjects"
import { Link } from "react-router-dom"
import github from "../assets/github.jpg"
const Development = () => {
    return (
        <>
            <div className="overflow-y-auto">
                <div>
                    <div className='text-4xl md:text-5xl mb-4'>DEVELOPMENT</div>
                    <div className='border-1 border-[#686868] opacity-20'></div>
                </div>
                {devProject.map((project, index) => (
                    <div key={index} className='grid grid-cols-1 md:grid-cols-2 py-5 gap-0 mb-10'>
                        <div className=" ">
                            <div className="text-3xl font-bold">{project.title}</div>
                            <div className="opacity-70">{project.subtitle}</div>
                            <div className="opacity-70">{project.year}</div>
                        </div>
                        <div className="col-span-1 md:row-span-2">
                            <img
                                src={project.imgURL}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1 flex flex-col justify-end gap-3">
                            <div className="text-md mt-5 md:mt-0 md:w-2/3">
                                {project.desc}
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs text-white items-end w-2/3">
                            {project.techStack.map((tech,index)=>(
                                <div key={index} className="border-2 rounded-md px-3 py-1 opacity-40">{tech}</div>
                            ))}
                            </div>
                            <div className="mt-4 flex items-center ">
                            <Link to = {project.gitlink}><img src={github} className="mr-2 h-5 rounded-full flex justify-center items-center" alt="" /> </Link>
                            <Link to={project.link} target='_blank' className=" flex justify-center items-center">Link</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Development