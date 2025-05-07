import { Link, useLocation } from "react-router-dom"
const NavBar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-white font-bold' : "text-neutral-300 hover:text-white transition-colors";
  }
  return (

    <nav className="mx-auto navbar-light py-10 flex w-[90%] justfify-center">
      <div className="flex text-left justify-between pr-50 w-[70%]">
        <div className=''>
          <div>Based In</div>
          <div>New Delhi, India</div>
        </div>
        <div className=''>
          <div>Say Hello</div>
          <div>ishikamanchanda0130@gmail.com</div>
        </div>
        <div className=''>
          <div>Switch to</div>
          <div>Dark Mode</div>
        </div>
      </div>
      <div className="flex w-[30%] justify-between">
        <Link to="/about" className={`${isActive('/about')}`}>
          ABOUT
        </Link>
        <Link to="/experience" className={`${isActive('/experience')}`}>
          EXPERIENCE
        </Link>
        <Link to="/projects" className={`${isActive('/project')}`}>
          PROJECTS
        </Link>
        <Link to="/contact" className={`${isActive('/contact')}`}>
          CONTACT
        </Link>
      </div>

    </nav>

  )
}

export default NavBar