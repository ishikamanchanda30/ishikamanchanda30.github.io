import About from "../Components/About"
import Projects from "../Components/Projects"
import Experience from "../Components/Experience"
import Contact from "../Components/Contact"
import Landing from "../Components/Landing"

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
        <Landing/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
    </div>
  )
}

export default Home