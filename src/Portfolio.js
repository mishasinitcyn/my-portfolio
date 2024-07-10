import React, { useState, useCallback } from 'react';
import profilePicture from './img/misha.jpeg'
import SAPLogo from './img/SAP.png'

import repoCleanup from './img/repocleanup.png'
import fortisBC from './img/fortisbc.jpeg'
import mlChat from './img/mlchat_thumbnail.png'
import bloodbank from './img/bloodbank.png'
import documentEmbeddings from './img/github.avif'
import cmdp from './img/cmdp.png'
import webCrawlers from './img/webCrawlers.png'
import poly from './img/poly.png'

const GithubIcon = () => (
  <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
  </svg>
);

const YoutubeIcon = () => (
  <svg height="32" width="32" viewBox="0 0 461.001 461.001">
    <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
    c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
    C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
    c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
  </svg>
);

const MediumIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
    <path d="M24 24h-24v-24h24v24zm-4.03-5.649v-.269l-1.247-1.224c-.11-.084-.165-.222-.142-.359v-8.998c-.023-.137.032-.275.142-.359l1.277-1.224v-.269h-4.422l-3.152 7.863-3.586-7.863h-4.638v.269l1.494 1.799c.146.133.221.327.201.523v7.072c.044.255-.037.516-.216.702l-1.681 2.038v.269h4.766v-.269l-1.681-2.038c-.181-.186-.266-.445-.232-.702v-6.116l4.183 9.125h.486l3.593-9.125v7.273c0 .194 0 .232-.127.359l-1.292 1.254v.269h6.274z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const ProfileHeader = ({ profilePicture }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-8">
    <div className="flex flex-col md:flex-row items-center">
      <img src={profilePicture} alt="Profile" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full mb-4 md:mb-0 md:mr-8 object-cover"/>
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Mikhail Sinitcyn</h1>
        <p className="text-xl text-gray-600 mb-4">Software Engineer. Data Scientist.</p>
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
    <img src="https://i.pinimg.com/originals/66/00/c2/6600c2f3613c019aea6e2cf1ab22a061.gif" alt="Animated GIF" className="w-60 mt-0 md:mt-0"/>
  </div>
);

const AboutMe = () => (
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
    <h2 className="text-2xl font-bold mb-4">About Me</h2>
    <p className="mb-4">
      <span className="font-mono text-gray-800 bg-gray-100 px-2 py-1 rounded">{"{{Data Science Intern}}"}</span> @ 🚀 SAP
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">Software Development</span>
      <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded">Machine Learning</span>
      {/* <span className="bg-green-100 text-green-800 px-2 py-1 rounded">Data Science</span> */}
      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Database Systems</span>
    </div>
    <p className="text-gray-700">
    Hi! My name is Mikhail (Misha) Sinitcyn. I'm a 4th year Computer Science student at Simon Fraser University in Vancouver.
    I have experience developing enterprise applications and machine learning solutions for FortisBC and SAP.
    I am actively developing fascinating projects in my free time, sharing my learning journey in Medium articles and direct tutoring on Discord.
  
    </p>
  </div>
);
const ExperienceItem = ({ company, role, period, responsibilities }) => (
  <div className="mb-6">
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
  <div className="bg-white rounded-lg p-6 mb-8 shadow-md">
    <h2 className="text-xl font-bold mb-4">Professional Experience</h2>
    <ExperienceItem 
      company="SAP" 
      role="Data Science Intern" 
      period="May 2024 - Present"
      responsibilities={[
        "Developing a multi-agent system for automated contract assessment with AutoGen and Doctran.",
        "Collaborated with the translation team on LLM integration for English to German translation.",
        "Conducted experiments with BERT and other models using MLflow, performing hyperparameter tuning and fine-tuning.",
        "Deployed commercial license classifier with explainable AI interface using Lime and Streamlit."
      ]}
    />
    <ExperienceItem 
      company="SAP" 
      role="Software Engineer Intern" 
      period="Jan 2023 - Sep 2023"
      responsibilities={[
        "Developed a contract review platform using Angular, Flask, and MongoDB, integrating GPT-4 for automated risk assessments, which accelerated the review process by 50%.",
        "Integrated GPT4 API for automated contract assessment, selected as the lighthouse project by the department head.", 
        "Deployed application to Apache HTTP server, configured custom routes and bash scripts.",
        "Facilitated data delivery pipeline to the analytics team, parsing and transporting large volumes of MongoDB data to Azure Data Lake.",
        "Wrote API tests using Postman, frontend unit tests with Jest, and UI tests with Selenium, providing full application coverage.", 
        "Designed medium-fidelity Figma prototypes after conducting user requirements elicitation with the product owner.",
        "Evaluated document embeddings models, including OpenAI’s Ada, for clustering and k-nearest neighbors classification."

      ]}
    />
  </div>
);

const ProjectCard = ({ project, onClick }) => (
  <div 
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{project.title}</h3>
      <p className="text-gray-600">{project.shortDescription}</p>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  const handleOutsideClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
      <div className="bg-white p-6 rounded-lg max-w-2xl w-full m-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="float-right font-bold text-2xl">&times;</button>
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <p className="mb-4">{project.fullDescription}</p>
        <p className="text-gray-600 mb-4">{project.date}</p>
        {project.image && (
          <div className="mb-4">
            <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg shadow-md" />
          </div>
        )}
        <ul className="list-disc pl-5 mb-4">
          {project.bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <GithubIcon />
            </a>
          )}
          {project.medium && (
            <a href={project.medium} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
              <MediumIcon />
            </a>
          )}
          {project.youtube && (
            <a href={project.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#F61C0D]">
              <YoutubeIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SideProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "RepoCleanup",
      image: repoCleanup,
      date: "June 2024 - Present",
      shortDescription: "ML application to remove spam GitHub issues",
      // fullDescription: "An application for removing spam issues from GitHub repositories.",
      bulletPoints: [
        "Led the development of an application for removing spam issues from GitHub repositories.",
        "Assembled a first-of-its-kind dataset of spam GitHub issues and evaluated an ensemble of classification models.",
        "Created custom University-style labs to teach practical machine learning and data science concepts such as exploratory data analysis, web scraping, BigQuery, MLflow, BERT finetuning, and natural language processing."

      ],
      github: "https://github.com/mishasinitcyn/RepoCleanup",
      // medium: "#",
      // youtube: "#"
    },
    {
      title: "MLChat Learning Platform",
      image: mlChat,
      date: "May 2024",
      shortDescription: "AI-powered learning platform [Google AI Hackathon]",
      // fullDescription: "A learning platform with a chatbot that answers machine learning questions.",
      bulletPoints: [
        "Created a learning platform with a chatbot that answers machine learning questions with direct references to textbook material.",
        "Implemented a retrieval-augmented generation system using Pinecone vector database, mixedbread-ai, and Google Gemini.",
        "Constructed a LangChain data pipeline to parse PDFs as Latex-encoded text documents, create embeddings, and upsert the database.",
        "Deployed Angular frontend and fastAPI backend on Google Cloud Run as Docker images with custom nginx server configuration."

      ],
      github: "https://github.com/mishasinitcyn/MLChat/",
      medium: "https://medium.com/@msa242/mlchat-a-retrieval-augmented-generation-rag-learning-platform-4f5a5601fcff",
      youtube: 'https://youtu.be/sGYPFMAnqSw'
    },
    {
      title: "Document Management Application",
      image: fortisBC,
      date: "March-April 2022",
      shortDescription: "Proprietary document system sold to FortisBC",
      // fullDescription: "A document management application for creating, editing, storing, and exporting documents.",
      bulletPoints: [
        "Engineered and sold a document management application to FortisBC, now utilized by over 1000 employees as the primary point of internal document management within the $30-billion organization.",
        "Integrated Azure Active Directory for secure user authentication and user-specific permissions across the application.",
        "Implemented a PDF export feature with dynamic styling and formatting."

      ],
      // github: "#",
      youtube: "https://www.youtube.com/embed/BQbco5ynQIs"
    },
    {
      title: "Blood Bank Database",
      image: bloodbank,
      date: "June-July 2024",
      shortDescription: "Postgres Database with React app on Heroku",
      // fullDescription: "An application for hospital administrators to efficiently manage the entire lifecycle of blood, from donation to utilization, across multiple facilities.",
      bulletPoints: [
        "Developed and deployed a Postgres database on Heroku.",
        "Composed advanced SQL queries, enforced BCNF normalization standards to optimize data integrity and query efficiency."
      ],
      github: "https://github.com/n-maido/blood-bank-database",
      // youtube: "#"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

const Hobbies = () => (
  <div className="flex flex-col md:flex-row gap-4">
    <div className="bg-white rounded-lg p-6 flex-1">
      <h2 className="text-xl font-bold mb-4">Hobbies</h2>
      <ul className="space-y-2">
        <li>🏊‍♂️ Data Science</li>
        <li>✈️ Machine Learning</li>
        <li>🗣️ Web Development</li>
      </ul>
    </div>
    <div className="bg-white rounded-lg p-6 flex-1">
      <img src="/api/placeholder/200/200" alt="Hobby" className="w-full h-auto" />
    </div>
  </div>
);


const PublicationCard = ({ publication, onClick }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={onClick}>
    <img src={publication.image} alt={publication.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-lg mb-2">{publication.title}</h3>
      <p className="text-sm text-gray-600 mb-2">{publication.date}</p>
    </div>
  </div>
);

  const PublicationModal = ({ publication, onClose }) => {
    const handleOutsideClick = useCallback((e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }, [onClose]);
  
    return (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={handleOutsideClick}>
    <div className="bg-white p-6 rounded-lg max-w-2xl w-full m-4 max-h-[90vh] overflow-y-auto">
      <button onClick={onClose} className="float-right font-bold text-2xl">&times;</button>
      <h2 className="text-2xl font-bold mb-4">{publication.title}</h2>
      <p className="text-gray-600 mb-4">{publication.date}</p>
      
      {publication.image && (
        <div className="mb-4">
          <img src={publication.image} alt={publication.title} className="w-full h-auto rounded-lg shadow-md" />
        </div>
      )}
      
      <ul className="list-disc pl-5 mb-4">
        {publication.points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      
      {publication.abstract && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Abstract</h3>
          <p className="text-gray-700">{publication.abstract}</p>
        </div>
      )}
      
      {publication.link && (
        <div className="mt-4">
          <a href={publication.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            Read Full Publication
          </a>
        </div>
      )}
    </div>
  </div>
);
  };

const ResearchPublications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  const publications = [
    {
      title: "Document Embeddings for Duplicate Github Issue Detection",
      date: "April 2024",
      image: documentEmbeddings,
      points: [
        "Evaluated 8 document embedding models from the Hugging Face MTEB leaderboard for duplicate Github issue classification.",
        "Conducted extensive literature review of embeddings models for semantic search and retrieval tasks."
      ],
      // abstract: "This study explores the effectiveness of various document embedding models in identifying duplicate issues on GitHub. By leveraging the Hugging Face MTEB leaderboard, we compare and contrast eight different models, providing insights into their performance and applicability in real-world software development scenarios.",
      link: "https://github.com/mishasinitcyn/GitHub-Duplicate-Issue-Detection/blob/main/Document-Level%20Embeddings%20for%20Duplicate%20GitHub%20Issue%20Detection.pdf"
    },
    {
      title: "Cellular Network Optimization with Reinforcement Learning",
      date: "December 2023",
      image: cmdp,
      points: [
        "Researched the application of Constrained Markov Decision Processes to optimize cellular networks with unknown constraints.",
        "Delivered a presentation to a graduate research class."
      ],
      // abstract: "This research investigates the potential of Reinforcement Learning, specifically Constrained Markov Decision Processes, in optimizing cellular networks. We explore novel approaches to handle unknown constraints, presenting a framework that adapts to changing network conditions while maintaining operational boundaries.",
      link: "https://github.com/mishasinitcyn/Cellular-Network-Optimization-with-Reinforcement-Learning/blob/main/CMDPs%20with%20Unknown%20Constraints.pdf"
    },
    {
      title: "Restricting The Use of LLM Web Crawlers",
      date: "June 2023",
      image: webCrawlers,
      points: [
        "Proposed a convention for regulating LLM web crawlers; similar implementation later adopted by OpenAI."
      ],
      // abstract: "In this paper, we propose a standardized approach to regulate web crawlers used by Large Language Models (LLMs). Our work addresses the ethical and technical challenges of data collection for AI training, outlining a framework that balances the needs of AI advancement with website owners' rights and user privacy.",
      link: "https://medium.com/@msa242/restricting-the-use-of-llm-web-crawlers-99b353ac2f04"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Research & Publications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub, index) => (
          <PublicationCard 
            key={index} 
            publication={pub} 
            onClick={() => setSelectedPublication(pub)}
          />
        ))}
      </div>
      {selectedPublication && (
        <PublicationModal 
          publication={selectedPublication} 
          onClose={() => setSelectedPublication(null)}
        />
      )}
    </div>
  );
};

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content container */}
      <div className="relative z-10 container mx-auto p-8">
        <ProfileHeader profilePicture={profilePicture} />
        <AboutMe />
        <Experience />
        <SideProjects />
        <ResearchPublications/>
        {/* <Hobbies /> */}
        </div>
      
      {/* Custom background styles */}
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
      
      {/* Background container */}
      <div className="background-container"></div>
    </div>
  );
};

export default Portfolio;