import Development from "./Development"
import GraphicDesign from "./GraphicDesign"
const Projects = () => {
  return (
    <>
        <div className='p-3 m-auto max-w-screen overflow-y-auto' id='projects'>
        <div className='text-4xl md:text-6xl mb-4'>PROJECTS</div>
        <div className='border-1 border-[#686868] opacity-20 mb-10 w-[100%]'></div>
          <Development />
          <GraphicDesign />
        </div>
    </>
  )
}

export default Projects