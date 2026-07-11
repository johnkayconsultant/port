import{useRef} from 'react';
import{motion, useInView} from "framer-motion";
import{Calendar,Rocket, Users, Award, Mail, MapPin, Code2, Sparkles} from 'lucide-react';

const stats=[
    {icon: Calendar, label:"Year of experience", value:"4+"},
    {icon: Rocket, label:"Project experience", value:"15+"},
    {icon: Users, label: "Happy Clients", value:"30+"},
    {icon: Code2, label: "Technology", value:"20+"},
];

const highlight=[
    'CAC REGISTRATION',
    'MOBILE APP',
    'TECHNOLOGY',
    'WEB APP',
];

export default function About() {
    const containerRef= useRef<HTMLDivElement>(null);
    const isInView= useInView (containerRef, {once:true, margin: '-100px'});
 return(
    <section id='About' className='relative overflow-hidden py-24 sm:32 bg-dark-400'>
        <div className='absolute inset-0'>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
            {/* header section  */}
            <motion.div 
                   initial={{opacity:0, y: 20}}
                animate={isInView ? {opacity:1, y:0} : {}}
                 transition={{delay:0.5}}
                 className='text-center mb-16'>
                    <span className='inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium mb-4'> About</span>
                    <h2 className='font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Passionate About Creating
                        <span className='text-white'>Impact</span>
                    </h2>
                    </motion.div>

                    {/* main content */}
                    <div className='grid lg:grid-cols-2 gap-12 lg: gap-16 items-center'>
                        <img src='CAC.jpg' alt='image' className='w-full h-full object-cover'/>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent" />

                    </div>
                    {/* floating card */}
                    <motion.a
                           initial={{opacity:0, y:20}}
                        animate= {isInView? {opacity:1, y:0} : {}}
                         transition={{delay:0.5}}
                         className='absolute -right-4 top-1/4 p-4 rounded-2xl bg-dark-900/80 backdrop-blur-lg border border-white/10 shadow-glow'>
                            <div className='flex items-center gap-3'>
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                                 <Sparkles className="w-5 h-5 text-white" />
                                 <div>
                                     <p className="text-white font-semibold">Problem Solver</p>
                                                               <p className="text-dark-400 text-sm">Creative Solutions</p>
                                 </div>

                                </div>
                                </div>
                                </motion.a>

                                <motion.div
                                      initial={{opacity:0, y:20}}
                                      animate={isInView ?{opacity:1, y:0}: {}}
                                      transition={{delay:0.5}}
                                      className='absolute -left-4 bottom-1/4 p-4 rounded-2xl bg-dark-900/80 backdrop-blur-lg border border-white/10 shadow-glow-purple'
                                >
                                    <div className='flex items-center gap-3'>
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-primary-500 flex items-center justify-center">
                                          <Award className="w-5 h-5 text-white" />
                                        </div>
                                         <div>
                                     <p className="text-white font-semibold">Award Winner</p>
                                    <p className="text-dark-400 text-sm">Tech Excellence</p>
                                     </div>

                                    </div>

                                </motion.div>
                                {/* background glow */}
                                <div className='absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-2xl -z-10'/>
                                </div>
                                
                                {/* text-side */}
                                <motion .div
                                     initial={{opacity:0, y:20}}
                                     animate={isInView ? {opacity:1, y:0} : {}}
                                     transition={{delay:0.5, duration: 0.6}}
                                      className='space-y-6'>
                                        <div className='space-y-4'>
                                            <h3 className='font-bold text-2xl sm:text-3xl text-white'>Building the Future, One Line of Code at a Time</h3>
                                        </div>
                                        <p className='text-dark-300'>I'm a passionate software engineer with over 4 years of experience crafting
                digital solutions that make a real impact. From scalable web applications
                to complex distributed systems, I thrive on turning ambitious ideas into
                elegant, production-ready code.</p>
                                        <p className='text-dark-300'> My journey started with a curiosity about how things work and evolved into
                a deep expertise across the full stack. I believe in writing clean,
                maintainable code and creating intuitive user experiences that delight users.</p>

                                </motion .div>

                                {/* highlight */}
                                <div className="grid sm:grid-cols-2 gap-3 py-4">
                                {highlight.map((item, index)=>(
                                    <motion.div 
                                    initial={{opacity:0, x:20}}
                                    animate={isInView ?{opacity:1, x:20}: {}}
                                     transition={{delay:0.5 + index * 0.1}}
                                      className='flex items-center gap-2 text-dark-300'>
                                         <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400" />
                                             {item}


                                    </motion.div>

                                ))}
                                 </div>

                                  {/* Quick Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-dark-400">
                <MapPin className="w-4 h-4 text-primary-400" />
                <span>Sango ota , Ogun State</span>
              </div>
              <div className="flex items-center gap-2 text-dark-400">
                <Mail className="w-4 h-4 text-primary-400" />
                <span>hello@johnkayportfolio.com</span>
              </div>
            </div>
          

                                    {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="relative group"
            >
              <div className="relative p-6 sm:p-8 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center mb-4 group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-colors">
                    <stat.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <span className="font-display text-3xl sm:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-dark-400 text-sm">{stat.label}</span>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </motion.div>
        




                          
        </section>
 );

}

