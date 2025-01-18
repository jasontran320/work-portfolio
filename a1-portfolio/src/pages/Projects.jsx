import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Texera",
    description: "A data anaylsis website container featuring docker and google cloud. Features include user authentication, cloud container deployment, community tab, and safe execution.",
    image: "/assets/images/image2.png",
    tags: ["Docker", "Python", "GCP", "Javascript"],
    liveUrl: null,
    githubUrl: "https://github.com/jasontran320/texera_compose",
    details: [
      "Implemented public restful api",
      "Integrated Docker into a non-docker service",
      "Built responsive prototype of example user flow",
      "Developed each individual container with cloud storage persistence"
    ]
  },
  {
    id: 2,
    title: "Petr-World",
    description: "A unity-based platformer featuring UCI's greatest hits! Features include game customization, functional ui, and custom sprites and animations.",
    image: "/assets/images/image.png",
    tags: ["ShaderLab", "C#"],
    liveUrl: "https://creatvename.itch.io/super-petr-world",
    githubUrl: "https://github.com/jasontran320/GDIM-Project",
    details: [
      "Group led project utilizing agile methodology and principles",
      "Custom sound design, animations, sprites, and physics",
      "Built responsive gameplay loop with Unity"
    ]
  },
  {
    id: 3,
    title: "Flutter Blockchain App",
    description: "Smart wallet with block chain integration using ganash, truffle + solidity to make the smart contracts, web3 to connect the flutter app to the block chain, and gemini ai api for the financial analysis.",
    image: "/assets/images/image3.png",
    tags: ["Dart", "Solidity", "Javascript"],
    liveUrl: "https://drive.google.com/file/d/1OpbWRRXYvd0vkPh0-mTkOChdE0E-a_mT/view?usp=sharing",
    githubUrl: "https://github.com/jasontran320/blockchain_smart_wallet_flutter",
    details: [
      "Implemented truffle + solidity smart contract system",
      "Integrated gemini ai api for financial analysis",
      "Built responsive frontend with flutter",
      "Had data persitent storage across multiple usages"
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))];
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(activeFilter));
  
  

  return (
    <section className="py-20">
      <div className="container projects">
        {/* Header */}
        <div className="header-projects">
          <h1 className="hero-title mb-4">My Projects</h1>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tab">
          <div style={{ maxWidth: '800px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={activeFilter === tag ? 'active' : ''}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          <div className="grid-container">
            {filteredProjects.map(project => (
              <article key={project.id} className="project-card">
                <div className="project-image h-2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image h-48"
                  />
                  <div className="project-overlay">
                    <div className="flex gap-4">
                    <Popup
                      modal
                      lockScroll={true}
                      nested={false}
                      className="project-popup"
                      trigger={
                        <button
                          className="btn btn-outline bo3"
                        >
                          Read More
                        </button>
                      }
                      overlayStyle={{
                        background: 'rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9998
                      }}
                      contentStyle={{
                        padding: 0,
                        border: 'none',
                        background: 'transparent',
                        width: 'auto',
                        maxWidth: '90%',
                        maxHeight: '90vh',  
                        overflowY: 'auto', 
                        zIndex: 9999,
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                    }}
                    > 
                     {(close) => (
                      <div className="popup-content">
                        <div className="popup-header">
                          <h2 className="popup-title">{project.title}</h2>
                          <button 
                            onClick={close} 
                            className="close-button"
                          >
                            <svg 
                              width="24" 
                              height="24" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="popup-body">
                          <p className="popup-description">{project.description}</p>
                          
                          <div className="features-section">
                            <h3 className="features-title">Key Features</h3>
                            <ul className="features-list">
                              {project.details.map((detail, index) => (
                                <li key={index} className="feature-item">
                                  <span className="arrow">→</span>
                                  <span className="feature-text">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="popup-actions">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary"
                            >
                                Live Demo
                            </a>
                      )}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline"
                            >
                              View Source
                            </a>
                          </div>
                        </div>
                      </div>
                     )}       
                    </Popup>
                    
                    <button 
                      onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                      className="btn btn-outline bo3"
                    >
                      Source Code
                    </button>
                    </div>
                  </div>
                </div>

                <div className="project-paragraph">
                  <h3 className="text-project">{project.title}</h3>
                  <p className="text-project">{project.description}</p>
                  
                  <div className="flex project">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
