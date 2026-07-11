import{useRef} from 'react';
import{motion, useInView} from 'framer-motion';
import{Globe,Code2, Server, Database, Cloud, Cog, Lightbulb, Rocket, Shield, Zap, Users, Layers} from 'lucide-react';

const services=[
     {
    title: 'Web Development',
    description: 'Building responsive, performant web applications using modern frameworks and best practices.',
    icon: Globe,
    color: 'from-primary-500 to-primary-600',
    features: ['React/Next.js', 'Vue.js', 'Progressive Web Apps', 'SEO Optimization'],
  },
  {
    title: 'Frontend Engineering',
    description: 'Creating stunning user interfaces with smooth animations and exceptional user experiences.',
    icon: Code2,
    color: 'from-secondary-500 to-secondary-600',
    features: ['Responsive Design', 'Framer Motion', 'Tailwind CSS', 'Component Libraries'],
  },
  {
    title: 'Backend Development',
    description: 'Designing and implementing robust server-side architectures and APIs.',
    icon: Server,
    color: 'from-accent-500 to-accent-600',
    features: ['Node.js', 'Python', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Database Architecture',
    description: 'Designing efficient database schemas and optimizing query performance.',
    icon: Database,
    color: 'from-primary-400 to-secondary-400',
    features: ['PostgreSQL', 'MongoDB', 'Redis', 'Data Modeling'],
  },
  {
    title: 'Cloud Services',
    description: 'Deploying and managing scalable cloud infrastructure with modern DevOps practices.',
    icon: Cloud,
    color: 'from-secondary-400 to-accent-400',
    features: ['AWS', 'GCP', 'Serverless', 'CDN Integration'],
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert guidance on technology decisions, architecture, and best practices.',
    icon: Lightbulb,
    color: 'from-accent-400 to-primary-400',
    features: ['Code Reviews', 'Architecture Review', 'Tech Stack Selection', 'Performance Audit'],
  },
]

function Servicecard ({ service, index, isInView }: { service: typeof services[0]; index: number; isInView: boolean }) {
    return(
        <motion.div 
           initial={{opacity:0, y:20}}
            animate={isInView ? {opacity:1, y:0} : {}}
             transition={{delay:0.5 }}
             className='group-relative'>
           <div className='relative h-full p-6 rounded-2xl bg-dark-900/50 border border-white/5 hover:border-white/10 transition-all overflow-hidden'/> 
            {/* Gradient Background on Hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
        />
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
        >
          <service.icon className="w-7 h-7 text-white" />
          <div
            className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} blur-lg opacity-50 group-hover:opacity-75 transition-opacity`}
          />
        </motion.div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-dark-400 text-sm mb-4">
          {service.description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 text-xs bg-white/5 rounded-lg text-dark-400 group-hover:bg-white/10 group-hover:text-dark-300 transition-colors"
            >
              {feature}
            </span>
          ))}
        </div>
         {/* Border Glow */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}
        />
      </motion.div>
   );
};
export default function Services() {
  const continerRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(containerRef, { once: true, margin: '-100px' });
 return(
   <section id="services" className="relative py-24 sm:py-32 bg-dark-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

               <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary-500/10 text-secondary-400 text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Services &
            <span className="bg-gradient-to-r from-secondary-400 to-primary-400 bg-clip-text text-transparent"> Expertise</span>
          </h2>
          <p className="text-dark-400 max-w-2xl mx-auto">
            Comprehensive development services tailored to bring your ideas to life with precision and excellence
          </p>
        </motion.div>
         
         {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} isInView={isInView} />
          ))}
        </div>

            {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-display text-2xl font-bold text-white text-center mb-12">My Process</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: 'Discovery', desc: 'Understanding your goals' },
              { icon: Layers, title: 'Planning', desc: 'Detailed technical design' },
              { icon: Code2, title: 'Development', desc: 'Iterative implementation' },
              { icon: Rocket, title: 'Launch', desc: 'Deploy and scale' },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="relative text-center"
              >
                <div className="relative inline-flex mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/5 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary-400" />
                  </div>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, type: 'spring' }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary-500 text-white text-xs font-bold flex items-center justify-center"
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <h4 className="font-display text-lg font-bold text-white mb-1">{step.title}</h4>
                <p className="text-dark-400 text-sm">{step.desc}</p>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary-500/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        </div>
  </section>
 );
}