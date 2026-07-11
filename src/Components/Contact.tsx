import{useState, useRef} from 'react';
import{motion, useInView} from 'framer-motion';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa6";
import {Mail, Phone,CheckCircle,} from 'lucide-react';
import { FaMapMarker } from "react-icons/fa";
// import type { ReactFormState } from 'react-dom/client';

// think of what should be in your id card information
const contactInfo = [
   {icon:Mail, label:'Email', value: 'hello@johnkayportfolio.com',  href:'mailto:@johnkayportfolio.com' },
   {icon:Phone, label:'phone',value:'+2349058500368', href:'tel:+2349058500368'},
   {icon:FaMapMarker, label:'location', value:'Sango-ota', href:'#'},
];

const socialLinks=[
   {icon:FaLinkedin, label:'Linkedin', href:'#'},
   {icon:FaFacebookF, label:'Facebook', href:'#'},
   {icon:FaTwitter, label:'Twitter', href:'#'},
   {icon:FaGithub, label:'Github', href:'#'},
];

export default function Contact() {
  // creates a reference to a <div> so you can access and control it directly after it has been rendered.
  const containerRef= useRef<HTMLDivElement>(null);
  // Use useInView whenever you want something to happen only when the user scrolls to a particular part of the page
  const isInView= useInView(containerRef,{once: true, margin:"-100px"});
  const [formState, setFormState]= useState({
    name:'',
    email:'',
    subject:'',
    message:'',
  });
  // Create a state called isSubmitting that remembers whether a form is currently being submitted.
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Create a state called isSubmitted that remembers whether the form has already been submitted successfully.
  const [isSubmitted , setIsSubmitted] = useState (false);
  // "When the user submits the form, stop the browser's default behavior, then tell React that the form is now being submitted."
  const handleSubmit= async (e:React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve)=> setTimeout(resolve, 1500));
    // "The form has finished sending, it was successful, and now clear the form so it's ready for another message."
    setIsSubmitting(false);
    setIsSubmitted(true);
// Excellent! This line is very common in React apps. It automatically hides a success message after a few seconds./Reset success message after 5 seconds
    setTimeout(()=> setIsSubmitted(false), 5000);
  };

  // "Create a function that runs whenever the user changes something in an input box or a textarea."
  const handleChange = (e:React.ChangeEvent <HTMLInputElement | HTMLTextAreaElement>) =>{
      //  "Take the old form data, keep everything that is already there, and only update the field the user just changed."
    setFormState((prev) => ({
        ...prev,
        // value is what you type while the name is the ("Take the old form data, keep everything that is already there, and only update the field the user just changed.")
        [e.target.name] : e.target.value,
       }));
  };
  return (
    <section id= 'contact' className='relative lg:py-24 sm: py-32 bg-dark-600 overflow-hidden'>
     {/* Background */}
     <div className='absolute inset-0'>
      {/* "Create a large, blurry, circular shape and place it in the top-right corner of its parent section as a background decoration." */}
      <div className="absolute top-0 right-0 w-600px h-600px bg-primary-500/5 rounded-full blur-3xl" />
      {/* "Create a container that is centered on the page, has a maximum width, adds padding on different screen sizes, can contain absolutely positioned elements, and is connected to containerRef so React can access it." */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* headerSection */}
        {/* "Create a <div> that starts invisible and slightly lower. When it comes into view, it fades in and moves up smoothly over 0.5 seconds." */}
        <motion.div 
             initial={{opacity:0, y:24}}
             animate={isInView ? {opacity:1 , y:0}: {}}
             transition={{duration: 0.5}}
             className='text-center mb-16'>
              {/* "Create a small rounded badge that says 'Get In Touch' and style it with padding, color, rounded corners, and spacing." */}
              <span   className="inline-block px-4 py-2 rounded-full bg-accent-500/10 text-accent-400 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold text-blue-300 mb-4'> Let's Build Something<span className='text-blue'> Amazing Together</span></h2>
          <p> Have a project in mind? Let's discuss how we can bring your ideas to life</p>
          </motion.div>

          {/* content GRID */}
          {/* "Create a grid layout. On large screens, divide it into 5 columns, and leave space between the columns." */}
          {/* parent col*/}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Side */}
            <motion.div
                 initial={{opacity:0, x:-40}}
                 animate={isInView ? {opacity:1, x:0}:{}}
                  transition={{delay:0.2, duration:0.5}}
                  // The contact information uses 2 columns, leaving 3 columns for the form.(space-y-8)=> Add vertical spacing between all child elements inside this <div>.
                  className='lg:col-span-2 space-y-8'>

                    {/* Contact Cards */}
              <div className='space-y-4'>
                  {contactInfo.map((item,index)=>(
                    <motion.a
                       key={item.label}
                       href={item.href}
                       initial={{opacity:0,y:20}}
                       animate={isInView ?{opacity:1, y:0}: {}}
                       transition={{duration:0.5}}
                       whileHover={{x:4}}>
                        {/* div the contact */}
                        <div className='group w-12 h-12 rounded-xl flex items-center justify-center'>
                              {/* for the icon display */}
                            <item.icon className='w-5 h-5 text-blue-500'/>
                        </div>
                        <div>
                          <p className='text-blue text-sm'>{item.label}</p>
                          <p className="text-yellow font-medium">{item.value}</p>
                        </div>
                              </motion.a>
                  ))}
              </div>
                           {/* socialLink */}
                       <motion.div
                          initial={{opacity:0, y:20}}
                          animate={isInView ? {opacity:1, y:0}: {}}
                          transition={{delay:0.5}}
                          className="p-6 rounded-xl bg-dark-950/50 border border-white/5"
                          >
                             <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
                             <div className='flex gap-3'>
                              {socialLinks.map((social, index)=>(
                                <motion.a
                                  key={social.label}
                                  href={social.href}
                                   whileHover={{scale: 1.1, y: -2}}
                                   whileTap={{scale:0.7}}
                                   className='w-12 h-12 rounded-lg hover:bg-blue'
                                   >
                                    <social.icon className='w-6 h-6'/>

                                </motion.a>
                              ))}
                            </div>
                            </motion.div>

                            {/* avaliablity page */}
                          <motion.div
                             initial={{opacity:0, y:-20}}
                             animate={isInView ?{opacity:1, y:0}: {}}
                             transition={{delay:0.5}}
                             className='p-6 bg-green-600 text-white rounded-xl'>
                              {/* the stage as to do with the green icon and the word */}
                              <div className='flex items-center mb-3 gap-3'>
                                {/* the below code is for the green icon */}
                                <span className='relative w-3 h-3 flex'>
                                  {/* meaning of the below code (animate-ping   // animation absolute       // positioning inline-flex    // display  h-full         // height
w-full         // width rounded-full   // shape bg-green-400   // color opacity-75     // transparency) */}
                                  <span  className='bg-green-400 animate-ping absolute inline-flex rounded-full opacity-75 h-full w-full'/>   
                                  <span className='relative inline-flex rounded-full h-3 w-3'/>     
                                  <span className='text-white font-bold '></span>                                             
                                </span>
                                <p>Currently accepting new projects and collaborations. Let's discuss your next big idea.</p>
                                </div>
                                </motion.div>

                                {/* Contact form */}
                                <motion.div
                                      initial={{opacity:0, y:20}}
                                      animate={isInView ? {opacity: 1, y:0} : {}}
                                      transition={{delay:0.5}}
                                      className="lg:col-span-3"
                                      >
                                         <div className="relative p-6 sm:p-8 rounded-2xl bg-dark-950/50 border border-white/5 overflow-hidden">
                                        <div className=''>
                                          <div className='relative p-6 rounded-2xl sm:p-8 overflow-hidden bg-blue-900'>
                                            {/* {background decoration } */}

                                            </div>
                  { isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-dark-400">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className='relative z-10 space-y-6'>
                      <div className='grid sm:grid-cols-2 gap-6'>
                        <div className='space-y-2'>
                          <label htmlFor='name' className='block text-dark-900 text-sm font-medium'>
                            Your name
                          </label>
                          <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/5 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                        placeholder="John Doe"
                      />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-dark-300 text-sm font-medium">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/5 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                      </div>
                    <div className="space-y-2">
                    <label htmlFor="subject" className="block text-dark-300 text-sm font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/5 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-dark-300 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-dark-900/50 border border-white/5 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                   <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-linear-to-r from-primary-500 to-secondary-500 text-white font-semibold shadow-glow disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                  {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        {/* <className="w-5 h-5" /> */}
                        Send Message
                      </>
                    )}


                  </motion.button>

                      </div>
                    </form>
                  )}

                                          </div>

                                        </div>

                                </motion.div>
            </motion.div>
          </div>

      </div>
      </div>    
      </section>
  )
};