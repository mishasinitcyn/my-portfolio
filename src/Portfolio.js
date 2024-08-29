import React, { useState, useCallback } from 'react';
import profilePicture from './img/misha.jpeg'
import SAPLogo from './img/SAP.png'
import { GithubIcon, MediumIcon, LinkedInIcon, XIcon, YoutubeIcon } from './assets/svg/icons';

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
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <div className="flex flex-col md:flex-row items-center">
      <img src={profilePicture} alt="Profile" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full mb-4 md:mb-0 md:mr-8 object-cover"/>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mikhail Sinitcyn</h1>
        <p className="text-xl text-gray-600 mb-4">Software Engineer. "Indie Hacker".</p>
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
          <a href="https://twitter.com/mishasinitcyn" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#1DA1F2]">
            <XIcon />
          </a>
        </div>
      </div>
    </div>
    {/* <img src="https://i.pinimg.com/originals/66/00/c2/6600c2f3613c019aea6e2cf1ab22a061.gif" alt="Animated GIF" className="w-60 mt-0 md:mt-0"/> */}
  </div>
);

const AboutMe = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
      <p className="mb-4">
        <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">{"{{CS Student at SFU}}"}</span> prev @ 🚀 SAP 
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Software Development</span>
        <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">Machine Learning</span>
        <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Database Systems</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">DevOps</span>
      </div>
      <p className="text-gray-700">
      Hi! My name is Mikhail (Misha) Sinitcyn. I'm a 4th year Computer Science student at Simon Fraser University.
      I have developed enterprise applications and machine learning solutions professionally for SAP and FortisBC.
      In my freetime I deploy applications on my self-hosted Lenovo server and publish tutorials/articles on Medium.
      {/* I am actively developing fascinating projects in my free time, sharing my learning journey in Medium articles and direct tutoring on Discord. */}
    
      </p>
    </div>
  </div>
);

const ExperienceItem = ({ company, role, period, responsibilities }) => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
    <div className="flex items-center mb-2">
      <img src={SAPLogo} alt={company} className="h-[20px] mr-4 object-cover" />
      <div>
        <h3 className="font-semibold">{role} @ {company}</h3>
        <p className="text-gray-600">{period}</p>
      </div>
    </div>
    <ul className="list-disc pl-12 text-gray-700">
      {responsibilities.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const Experience = () => (
  <div >
    <h1 className="text-2xl font-bold mb-4">Professional Experience</h1>
    <ExperienceItem 
      company="SAP" 
      role="Data Science Intern" 
      period="May 2024 - September 2024"
      responsibilities={[
        "Developed a multi-agent system for automated contract assessment with Doctran and SAP Gen-AI SDK.",
        "Trained and evaluated an ensemble of natural language models with BERT and sk-learn using MLflow.",
        "Deployed machine learning models in production with Docker, FastAPI and Gradio.",
        "Wrote ETL scripts to transform, cluster, and visualize long-form text data."

      ]}
    />
    <ExperienceItem 
      company="SAP" 
      role="Software Engineer Intern" 
      period="Jan 2023 - Sep 2023"
      responsibilities={[
        "Developed a contract review platform with Angular, Flask, MongoDB, and GPT-4, speeding up the review process by 50%.",
        "Deployed application to Apache HTTP server, configured custom routes and bash scripts.",
        "Facilitated data delivery pipeline to the analytics team, parsing and transporting large volumes of MongoDB data to Azure Data Lake.",
        "Wrote API tests using Postman, frontend unit tests with Jest, and UI tests with Selenium, providing full application coverage.", 
        "Designed medium-fidelity Figma prototypes after conducting user requirements elicitation with the product owner.",
        "Evaluated document embeddings models, including OpenAI’s Ada, for clustering and k-nearest neighbors classification."

      ]}
    />
  </div>
);

const ProjectCard = ({ item, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img src={item.images[0]} alt={item.title} className="w-full h-48 object-cover cursor-pointer" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-gray-600">{item.shortDescription || item.date}</p>
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
          <img src={images[currentIndex]} alt="Project" className="w-full h-auto rounded-lg shadow-md cursor-pointer" />
        </a>
      ) : (
        <img src={images[currentIndex]} alt="Project" className="w-full h-auto rounded-lg shadow-md cursor-pointer" />
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="float-right font-bold text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
        <p className="text-gray-600 mb-4">{item.date}</p>
        {item.images && item.images.length > 0 && (
          <ImageCarousel images={item.images} projectUrl={item.projectUrl} />
        )}
        <ul className="list-disc pl-5 mb-4">
          {item.bulletPoints ? item.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          )) : item.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        {item.abstract && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Abstract</h3>
            <p className="text-gray-700">{item.abstract}</p>
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

  const projects = [
    {
      title: "RepoCleanup.com",
      images: [...images.repocleanup],
      date: "June 2024 - August 2024",
      shortDescription: "GitHub administration application",
      // fullDescription: "An application for removing spam issues from GitHub repositories.",
      bulletPoints: [
        "Developed a Github administration tool for adding rules and removing spam issues using the Octokit API.",
        "Lead a team of junior developers in collecting a novel dataset of spam GitHub issues and trained a classification model.",
        "Self-hosted the Dockerized application with Postgres database on Lenovo server running Coolify for CI/CD.",
      ],
      projectUrl: "https://repocleanup.com",
      github: "https://github.com/mishasinitcyn/RepoCleanup",
      // medium: "#",
      youtube: "https://www.youtube.com/watch?v=yNBtKRospZs"
    },
    {
      title: "MLChat.chat",
      images: [...images.mlchat],
      date: "May 2024",
      shortDescription: "AI-powered learning platform (Google AI Hackathon)",
      // fullDescription: "A learning platform with a chatbot that answers machine learning questions.",
      bulletPoints: [
        "Created a learning platform with a chatbot that answers machine learning questions with direct references to textbook material.",
        "Implemented a retrieval-augmented generation system using Pinecone vector database, mixedbread-ai, and Google Gemini.",
        "Constructed a LangChain data pipeline to parse PDFs as Latex-encoded text documents, create embeddings, and upsert the database.",
        "Deployed Angular frontend and fastAPI backend on Google Cloud Run as Docker images with custom nginx server configuration."

      ],
      projectUrl: 'https://mlchat.chat',
      github: "https://github.com/mishasinitcyn/MLChat/",
      medium: "https://medium.com/@msa242/mlchat-a-retrieval-augmented-generation-rag-learning-platform-4f5a5601fcff",
      youtube: 'https://youtu.be/sGYPFMAnqSw'
    },
    {
      title: "(Acquired) Document Management Application",
      images: [...images.fortisbc],
      date: "March-April 2022",
      shortDescription: "Proprietary document system sold to FortisBC",
      // fullDescription: "A document management application for creating, editing, storing, and exporting documents.",
      bulletPoints: [
        "Engineered and sold a document management application to FortisBC, now utilized by over 1000 employees as the primary point of internal document management within the $30-billion organization.",
        "Integrated Azure Active Directory for secure user authentication and user-specific permissions across the application.",
        "Implemented a PDF export feature with dynamic styling and formatting."

      ],
      // github: "#",
      // projectUrl: "https://www.youtube.com/embed/BQbco5ynQIs",
      // youtube: "https://www.youtube.com/embed/BQbco5ynQIs"
    },
    {
      title: "Blood Bank Database",
      images: [...images.bloodbank],
      date: "June-July 2024",
      shortDescription: "Postgres Database with React app on Heroku",
      // fullDescription: "An application for hospital administrators to efficiently manage the entire lifecycle of blood, from donation to utilization, across multiple facilities.",
      bulletPoints: [
        "Developed and deployed a Postgres database on Heroku.",
        "Composed advanced SQL queries, enforced BCNF normalization standards to optimize data integrity and query efficiency."
      ],
      projectUrl: "https://github.com/n-maido/blood-bank-database",
      github: "https://github.com/n-maido/blood-bank-database",
      // youtube: "#"
    },
    {
      title:"Personal Deployment Server", 
      images: ["https://lenovopress.lenovo.com/share/ae03a648e7f95c709ed0b34da0ccc7ea/meta_og.png", ...images.personal_cloud], 
      date: "July 2024",
      shortDescription: "Personal server with app deployment via Coolify",
      bulletPoints: [
        "Configured a Lenovo TS150 server for self-hosting applications using the Coolify platform running on Ubuntu.",
        "Set up a CI/CD pipeline for automatic deployment with Github webhooks, managing multiple deployments to custom domains.",
      ] 
    }, 
  ];

  const publications = [
    {
      title: "Document Embeddings for Duplicate Github Issue Detection",
      date: "April 2024",
      images: [...images.documentembeddings],
      shortDescription: "Evaluation of document embedding models for issue classification",
      points: [
        "Evaluated 8 document embedding models from the Hugging Face MTEB leaderboard for duplicate Github issue classification.",
        "Conducted extensive literature review of embeddings models for semantic search and retrieval tasks."
      ],
      github: "https://github.com/mishasinitcyn/GitHub-Duplicate-Issue-Detection/blob/main/Document-Level%20Embeddings%20for%20Duplicate%20GitHub%20Issue%20Detection.pdf",
      projectUrl: "https://github.com/mishasinitcyn/GitHub-Duplicate-Issue-Detection/blob/main/Document-Level%20Embeddings%20for%20Duplicate%20GitHub%20Issue%20Detection.pdf"
    },
    {
      title: "Cellular Network Optimization with Reinforcement Learning",
      date: "December 2023",
      images: [...images.cmdp],
      shortDescription: "Application of CMDPs to cellular network optimization",
      points: [
        "Researched the application of Constrained Markov Decision Processes to optimize cellular networks with unknown constraints.",
        "Delivered a presentation to a graduate research class."
      ],
      github: "https://github.com/mishasinitcyn/Cellular-Network-Optimization-with-Reinforcement-Learning/blob/main/CMDPs%20with%20Unknown%20Constraints.pdf",
      projectUrl: "https://github.com/mishasinitcyn/Cellular-Network-Optimization-with-Reinforcement-Learning/blob/main/CMDPs%20with%20Unknown%20Constraints.pdf",
    },
    {
      title: "Restricting The Use of LLM Web Crawlers",
      date: "June 2023",
      images: [...images.webcrawlers],
      shortDescription: "Proposal for regulating LLM web crawlers",
      points: [
        "Proposed a convention for regulating LLM web crawlers; similar implementation later adopted by OpenAI."
      ],
      medium: "https://medium.com/@msa242/restricting-the-use-of-llm-web-crawlers-99b353ac2f04",
      projectUrl: "https://medium.com/@msa242/restricting-the-use-of-llm-web-crawlers-99b353ac2f04"
    }
  ];

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
        <h2 className="text-2xl font-bold mb-4">Publications</h2>
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
      <div className="relative z-10 container mx-auto p-8">
        <ProfileHeader profilePicture={profilePicture} />
        <AboutMe />
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
          background: radial-gradient(125% 125% at 50% 10%, white 40%, blue 100%);
          // background: radial-gradient(125% 125% at 50% 10%, #eaeaea 40%, #63e 100%);
        }
        .background-container::after {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -9;
          height: 100%;
          width: 100%;
          // background: linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
          //             linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px);
          background-size: 20px 20px;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
        }
      `}</style>
      
      <div className="background-container"></div>
    </div>
  );
};

export default Portfolio;
