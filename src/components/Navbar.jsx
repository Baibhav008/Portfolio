import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';
import GradientBackground from './Effects/GradientBackground';






const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 `} style={{background:"#080808"}}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" 
         onClick={()=>{
          setActive("");
          window.scrollTo(0,0);
         }}
         >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Kumar Baibhav<br/>
            <span className="sm:block:hidden">Android Developer | MERN Developer</span>
          
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
            
          ))}

          <li key={"git"}  className={`${
                active === "GitHub" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("GitHub")}><a  href="http://www.github.com/Baibhav008" target='_blank'>GitHub</a>
          </li>

          <li key={"linkedin"}  className={`${
                active === "LinkedIn" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("LinkedIn")}><a  href="https://in.linkedin.com/in/kumarbaibhav008" target='_blank'>LinkedIn</a>
          </li>

          <li key={"Resume"}  className={`${
                active === "Resume" ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive("Resume")}><a  href="https://drive.google.com/file/d/1txZAV8ayC9hbqh5PZ5TImHbFvTFsaoA9/view" target='_blank'>Resume</a>
          </li>

          
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
            </ul>
    
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar