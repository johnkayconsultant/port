import{useState, useEffect} from 'react';
// the AnimatePresence allow it to disappear professionally
import{motion, AnimatePresence} from 'framer-motion';
import { House, X, Menu } from 'lucide-react';

const navItem = [
    {name:'Home', href:'#home'},
    {name:'Service', href:'#service'},
    {name:'About', href:'#about'},
    {name:'Contact', href:'#contact'},
]

export default function Navigation() {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);
const [activeSection, setActiveSection] = useState ('#home')

// "useEffect:- Run this code when the component loads."
useEffect(()=>{
    // create a scroll function
    const handleScroll = () => {
        // use to check if the user has scroll and to know the level of scroll
        setScrolled(window.scrollY > 50);
    
    const sections= navItem.map((Item)=> Item.href.slice(1));
   
    //  to Check each section until you find the one currently visible
    const current = sections.find((section)=> {
        const element= document.getElementById(section);
        if (element) {
            // the rect(rectangle covers top, bottom of the website)
            const rect= element.getBoundingClientRect();
            // Is This Section Visible?
            return rect.top<=100 && rect.bottom >= 100;
        }
        return false;
    });
    // Update Active Menu
    if (current) setActiveSection(current);
};
   
// "Whenever the user scrolls, run handleScroll."
 window.addEventListener('scroll', handleScroll);
//  This prevents memory leaks.
 return ()=> window.removeEventListener('scroll', handleScroll );
 },[] )

    // is a function that receive link
    const scrollToSection =(href:string) => {
        // this finds the section
        const element= document.querySelector(href);
        // this code allow smooth scroll
        if (element) {
            element.scrollIntoView({behavior:'smooth'})
        }
        // Close Mobile Menu
        setIsOpen (false);
    };
            // return statement: This is what I want to display on the screen.
    return(
        // < framer-motion is used because we want to us animation/>
        <motion.nav
        // This tells Framer Motion:"Where should the navbar start?"
         initial={{y:-100}}
        //  This means: "Move navbar to its normal position."
         animate={{y:0}}
        //  This controls animation speed.
         transition={{duration: 0.5}}
        //  fixed: stay in one place, transitional:-"Animate any style changes smoothly."
         className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300
       ${scrolled
         ? 'bg-dark-950/80 backdrop-blur-lg border-b border-amber-200/5 shadow-glow'
         : 'bg-transparent'
            }`}>
             <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* the  nav show */}
                <div className='flex items-center justify-between h-16 md:h-20'>
               {/* LOGO side */}
               <motion.a
                  href= '#home'
                //   onclick:-run the code when click while (e): is the event
                  onClick={(e) =>{
                    // "Stop the browser's normal behavior."
                    e.preventDefault();
                    // Now your custom function runs.
                    scrollToSection('#home');
                }}
                // this class allow logo element to sit side by side
                className="flex items-center gap-3 group"
                // when mouse is on it
                whileHover={{scale:1.02}}
                // when user click
                whileTap={{scale:0.90}}>
                    {/* <div className="relative w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 flex items-center justify-center shadow-glow">
                        <House className="w-5 h-5 text-white" /> */}
                        {/* This is the cool effect behind the logo. */}
                 {/* <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary-500 to-secondary-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                        <span className='text-white font-bold font-display'>
                            JOHNKAY <span className='text-blue-500 font-extrabold'>CONSULTANT</span>
                     </span>
                 </div> */}
<div className="relative w-20 h-20 rounded-xl">
  <House className="w-20 h-20 text-blue-600" />
</div>

<span className="text-blue-500 font-bold font-display text-xl">
  JOHNKAY <span className="text-blue-500 font-extrabold">CONSULTANT</span>
</span>


                </motion.a>

                {/* desktop navigation */}
                {/* md:flex(When screen becomes medium size or larger, show it as flex. ") */}
                <div className='hidden md:flex items-center gap-1'>
                    {/* to loop in the nav bar */}
             {navItem.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                // Runs when user clicks.
                onClick={(e) => {
                    // Runs when user clicks.
                  e.preventDefault();
                //   Stops browser from instantly jumping.
                  scrollToSection(item.href);
                }}
                
                // relative:-Makes this link the parent for absolute-positioned elements.,Needed later for the active highlight.
                className="relative px-4 py-2 text-sm font-medium tracking-wide transition-colors"
                // user on it
                whileHover={{ scale: 1.05 }}
                // user click it
                whileTap={{ scale: 0.95 }}>

                <span
                    className={`relative z-10 ${
                    //   this checks is this the current section
                    activeSection === item.href.slice(1)
                    // this check if active(true)
                     ? 'text-white'
                    //  if not active (false)
                        : 'text-dark-300 hover:text-blue-500'
                     } transition-colors`}
                    >
                    {item.name}
                    </span>
              {/* the code Only show this if section is active. if user is in any section */}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    /* use this code framer-motion magic (Highlight slides smoothly) */
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-lg bg-white/10"
                    // this code control movement
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
            </motion.a>
             ))}
                    </div>
                    {/* CTA Button */}
                    {/* use this code to hid it on mobile, md:block(it will show on the medium screen & above) */}
          <div className="hidden md:block">
            {/* creates a link that can animate. */}
            <motion.a
            // once you click let discuss it will send the user to contact
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            //   for the button lets talk
              className="relative px-6 py-2.5 rounded-full bg-linear-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold shadow-glow overflow-hidden group"
            >
              <span className="relative z-10">Let's Talk</span>
              <div className="absolute inset-0 bg-linear-to-r from-secondary-500 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

             {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </motion.button>
        </div>
      </div>

                  
                    {/* Mobile Menu */}
          {/* framer-motion */}
      <AnimatePresence>
        {/* && means if condition is true show it */}
        {isOpen && (
          <motion.div
        //   starting state opacity control the visibility(0-invisible, 1- visible)
            initial={{ opacity: 0, height: 0 }}
        // This is the state after opening.
            animate={{ opacity: 1, height: 'auto' }}
            // this run the menu close
            exit={{ opacity: 0, height: 0 }}
            // control speed
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-lg border-b border-white/5"
          >
            {/* Excellent! This code creates the individual navigation links inside the mobile menu. */}
            {/* /* When a user taps the hamburger menu ☰, this code generates: * */}
            {/* // Mobile Menu Container */}
            <div className="px-4 py-4 space-y-1"> 
             {navItem.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'bg-linear-to-r from-primary-500/20 to-secondary-500/20 text-white'
                      : 'text-dark-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </motion.a>
                ))}
          {/* </motion.div> */}

              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItem.length * 0.05 }}
                className="block mt-4 px-4 py-3 rounded-lg bg-linear-to-r from-primary-500 to-secondary-500 text-blue-950 text-center font-semibold"
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
          )}
      </AnimatePresence>
    </motion.nav>
  );
};