import devProject from "../data/devProjects"
import { Link } from "react-router-dom"
import github from "../assets/github.jpg"
const Development = () => {
    return (
        <>
            <div className="overflow-y-auto">
                <div>
                    <div className='text-4xl md:text-5xl mb-4'>DEVELOPMENT</div>
                    <div className='border-1 border-[#686868] opacity-20 w-[30%]'></div>
                </div>
                {devProject.map((project) => (
                    <div className='grid grid-cols-1 md:grid-cols-2 py-5 gap-0'>
                        <div className=" ">
                            <div className="text-2xl">{project.title}</div>
                            <div className="">{project.subtitle}</div>
                            <div className="">{project.year}</div>
                        </div>
                        <div className="col-span-1 md:row-span-2">
                            <img
                                src={project.imgURL}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="col-span-1  flex flex-col">
                            <div className="text-md">
                                {project.desc}
                            </div>
                            <div className="mt-4 flex items-center ">
                                <Link to={project.link} className=" flex justify-center items-center"><img src={github} className="mr-2 h-5 rounded-full flex justify-center items-center" alt="" />Link</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default Development