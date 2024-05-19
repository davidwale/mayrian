import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 1, src: '/images/Header-bg.png', title: 'Private Property' },
  { id: 2, src: '/images/education-bg.png', title: 'Education Purpose' },
  { id: 3, src: '/images/marketplace-bg.png', title: 'MarketPlace' },
  { id: 4, src: '/images/health-bg.png', title: 'Health Facility' },
  { id: 5, src: '/images/Header-bg.png', title: 'Private Property' },
];

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 min-h-screen">
      <h1 className="text-white text-5xl font-bold mb-10">Our Projects</h1>
      <div className="grid grid-cols-3 gap-4 w-full max-w-7xl px-4 h-full">
        <div className="flex flex-col justify-between h-full">
          <ProjectImage project={projects[0]} bottom />
          <ProjectImage project={projects[3]} />
        </div>
        <div className="flex flex-col h-full">
          <ProjectImage project={projects[2]} fullHeight />
        </div>
        <div className="flex flex-col justify-between h-full">
          <ProjectImage project={projects[1]} bottom />
          <ProjectImage project={projects[4]} />
        </div>
      </div>
    </div>
  );
};

const ProjectImage = ({ project, fullHeight, bottom }) => (
  <div className={`overflow-hidden cursor-pointer bg-white ${fullHeight ? 'flex-grow' : 'h-64'} ${bottom ? 'mb-4' : ''} `}>
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      className={`relative overflow-hidden h-full`}
    >
      <motion.img 
        src={project.src} 
        alt={project.title} 
        className="w-full h-full object-cover" 
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
      />
      <div className="absolute bottom-0 left-0 text-white p-2">
        {project.title}
      </div>
    </motion.div>
  </div>
);

export default Projects;
