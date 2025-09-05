import React, { useState, useCallback } from 'react';
import profilePicture from './img/misha.jpg'
import SAPLogo from './img/SAP.png'
import RBCLogo from './img/RBC.png'
import DoculaLogo from './img/Docula.jpeg'
import DeepmindLogo from './img/GoogleDeepmind2.jpeg'
import { GithubIcon, MediumIcon, LinkedInIcon, XIcon, YoutubeIcon, RBCIcon } from './assets/svg/icons';

// Import the JSON data
import projectsData from './data/projects.json';
import publicationsData from './data/publications.json';
import experienceData from './data/experience.json';

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    const key = item.replace('./', '').split('/')[0];
    if (!images[key]) {
      images[key] = [];
    }
    images[key].push(r(item));
  });
  return images;
};

const images = importAll(require.context('./img', true, /\.(png|jpe?g|svg|avif|gif)$/));

const ProfileHeader = ({ profilePicture }) => (
  <div className="flex flex-col md:flex-row items-center justify-between my-12">
    <div className="flex flex-col md:flex-row items-center">
      <img src={profilePicture} alt="Profile" className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full mb-4 md:mb-0 md:mr-8 object-cover"/>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mikhail Sinitcyn</h1>
        <div className="text-xl text-gray-600 mb-4">
          <p className="mb-1">
            {/* Quantitative Developer Intern <span className="bg-gradient-to-b from-blue-700 to-blue-400 text-transparent bg-clip-text">@RBC</span>, */}
            <span className="hidden sm:inline"> </span>
            {/* <br className="sm:hidden" /> */}
             Student Developer <span className="bg-gradient-to-b from-blue-700 to-blue-400 text-transparent bg-clip-text">@DeepMind (GSoC)</span>
          </p>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://github.com/mishasinitcyn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <GithubIcon />
          </a>
          <a href="https://medium.com/@msa242" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
            <MediumIcon />
          </a>
          <a href="https://www.linkedin.com/in/mikhail-sinitcyn-8909b5224/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600">
            <LinkedInIcon />
          </a>
          <a href="https://twitter.com/mishasinitcyn" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#1DA1F2]">
            <XIcon />
          </a>
        </div>
      </div>
    </div>
    {/* <img src="https://i.pinimg.com/originals/66/00/c2/6600c2f3613c019aea6e2cf1ab22a061.gif" alt="Animated GIF" className="w-60 mt-0 md:mt-0"/> */}
  </div>
);

// const AboutMe = () => (
//   <div>
//     <h2 className="text-2xl font-bold mb-4">About Me</h2>
//     <div className="bg-white rounded-lg p-6 mb-8 border border-gray-100 shadow-sm">
//        <div className="flex flex-wrap gap-2 mb-4">
//         <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-small text-blue-700 bg-gradient-to-b from-blue-100 to-blue-50">Software Development</span>
//         <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-small text-green-700 bg-gradient-to-b from-green-100 to-green-50">Infrastructure</span>
//         <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-small text-purple-700 bg-gradient-to-b from-purple-100 to-purple-50">Data Engineering</span>
//         <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-small text-pink-700 bg-gradient-to-b from-pink-100 to-pink-50">Machine Learning</span>
//       </div>
//       <p className="text-gray-700">
//       Hi, I'm Misha! Interning as a quant at RBC and contributing to JAX at Google DeepMind.
//       {/* I'm currently interning as a quantitative developer at RBC where I'm working on scientific computing and spearheading the migration of our $25 billion quantitative investment platform to Databricks. 
//       Also working on my startup Docula, where I am responsible for our infrastructure, databases, and web security. */}
//       {/* In my freetime I deploy applications on my self-hosted Lenovo server and publish tutorials/articles on Medium. */}
//       {/* I am actively developing fascinating projects in my free time, sharing my learning journey in Medium articles and direct tutoring on Discord. */}
    
//       </p>
//     </div>
//   </div>
// );


const ExperienceItem = ({ company, role, period, responsibilities }) => {
  const logos = {
    RBC: RBCLogo,
    SAP: SAPLogo,
    Docula: DoculaLogo,
    'Google DeepMind': DeepmindLogo
  };

  const getLogoHeight = (companyName) => {
    switch (companyName) {
      case 'RBC':
        return 'h-11';
      case 'Docula':
        return 'h-11';
      case 'Google DeepMind':
        return 'h-11';
      default:
        return 'h-5';
    }
  };

  return (
    <div className="bg-white p-6 mb-8 border border-gray-100">
      <div className="flex items-center mb-2">
        <img 
          src={logos[company]} 
          alt={`${company} logo`} 
          className={`${getLogoHeight(company)} mr-4 object-cover`} 
        />
        <div>
          <h3 className="font-semibold">{role} <span className='text-slate-900'>@{company}</span></h3>
          <p className="text-gray-600">{period}</p>
        </div>
      </div>
      <ul className="pl-14 text-gray-700">
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Experience</h1>
    {experienceData.experience.map((item, index) => (
      <ExperienceItem 
        key={index}
        company={item.company}
        role={item.role}
        period={item.period}
        responsibilities={item.responsibilities}
      />
    ))}
  </div>
);

const ProjectCard = ({ item, onClick }) => (
  <div 
    className="bg-white overflow-hidden cursor-pointer border border-gray-300 shadow-sm transition-shadow"
    onClick={onClick}
  >
    <div className="aspect-w-16 aspect-h-9">
      <img src={item.images[0]} alt={item.title} className="w-full h-48 sm:h-40 md:h-48 object-cover cursor-pointer" />
    </div>
    <div className="p-3 sm:p-4">
      <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 line-clamp-1">{item.title}</h3>
      <p className="text-gray-600 text-sm sm:text-base line-clamp-2">{item.shortDescription || item.date}</p>
    </div>
  </div>
);

const ImageCarousel = ({ images, projectUrl }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mb-4">
      {projectUrl ? (
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          <img src={images[currentIndex]} alt="Project" className="w-full h-auto  cursor-pointer" />
        </a>
      ) : (
        <img src={images[currentIndex]} alt="Project" className="w-full h-auto cursor-pointer" />
      )}
      {images.length > 1 && (
        <>
          <button onClick={goToPrevious} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            &lt;
          </button>
          <button onClick={goToNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full">
            &gt;
          </button>
        </>
      )}
    </div>
  );
};

const ProjectModal = ({ item, onClose }) => {
  const handleOutsideClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4" onClick={handleOutsideClick}>
      <div className="bg-white p-4 sm:p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl sm:text-2xl font-bold">{item.title}</h2>
          <button onClick={onClose} className="text-2xl font-bold">&times;</button>
        </div>
        <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{item.date}</p>
        {item.images && item.images.length > 0 && (
          <ImageCarousel images={item.images} projectUrl={item.projectUrl} />
        )}
        <ul className="list-disc pl-5 mb-4 text-sm sm:text-base">
          {item.bulletPoints ? item.bulletPoints.map((point, index) => (
            <li key={index} className="mb-1">{point}</li>
          )) : item.points.map((point, index) => (
            <li key={index} className="mb-1">{point}</li>
          ))}
        </ul>
        {item.abstract && (
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Abstract</h3>
            <p className="text-gray-700 text-sm sm:text-base">{item.abstract}</p>
          </div>
        )}
        <div className="flex justify-end space-x-4">
          {item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <GithubIcon />
            </a>
          )}
          {item.medium && (
            <a href={item.medium} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <MediumIcon />
            </a>
          )}
          {item.youtube && (
            <a href={item.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F61C0D]">
              <YoutubeIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Process the images for each project/publication
  const processImages = (item) => {
    let processedImages = [];
    
    // Add any direct images first
    if (item.images) {
      processedImages = [...item.images];
    }
    
    // Add images from the imageFolder if it exists
    if (item.imageFolder && images[item.imageFolder]) {
      processedImages = [...processedImages, ...images[item.imageFolder]];
    }
    
    return processedImages;
  };

  const projects = projectsData.projects.map(project => ({
    ...project,
    images: processImages(project)
  }));

  const publications = publicationsData.publications.map(publication => ({
    ...publication,
    images: processImages(publication)
  }));

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <ProjectCard 
              key={index} 
              item={item} 
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <ProjectModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)}
        />
      )}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Research Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publications.map((item, index) => (
            <ProjectCard 
              key={index} 
              item={item} 
              onClick={() => setSelectedItem(item)}
            />
          ))}
        </div>
      </div>
      {selectedItem && (
        <ProjectModal 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 py-4 sm:p-8">
        <ProfileHeader profilePicture={profilePicture} />
        {/* <AboutMe /> */}
        <Experience />
        <PortfolioSection />
      </div>
      
      <style jsx>{`
        .background-container {
          position: absolute;
          inset: 0;
          z-index: -1;
        }
        .background-container::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -10;
          height: 100%;
          width: 100%;
          // background: radial-gradient(125% 125% at 50% 10%, white 40%, blue 100%);
        }
      `}</style>
      
      <div className="background-container"></div>
    </div>
  );
};

export default Portfolio;
