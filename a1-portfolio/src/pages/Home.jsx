// src/pages/Home.jsx
export default function Home() {
    return (
      <div>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container hero">
            <div className="flex hero">
              <div className="hero hero">
                <h1 className="hero-title mb-5">
                  Crafting Digital Experiences
                </h1>
                <p className="text-xl">
                  Full-stack developer specializing in building exceptional digital experiences. 
                  Currently focused on creating accessible, human-centered products.
                </p>
                <div className="flex hero">
                  <a href="/contact" className="btn btn-primary bp2">
                    Get in Touch
                  </a>
                  <a href="/projects" className="btn btn-outline bo3">
                    View Projects
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <img 
                  src="/assets/images/image5.png" 
                  alt="Professional headshot" 
                  className="hero-image h1"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Skills Section */}
        <section className="skills-section">
          <div className="container hero">
            <h2 className="text hero">
              Skills & Expertise
            </h2>
            <div className="skills-grid">
              {[
                {
                  icon: "💻",
                  title: "Web Development",
                  description: "Building responsive websites with HTML, CSS, and JavaScript"
                },
                {
                  icon: "⚛️",
                  title: "React Development",
                  description: "Creating modern web applications using React and its ecosystem"
                },
                {
                  icon: "🐳",
                  title: "Docker Deployment",
                  description: "Deploying applications using container technology"
                },
                {
                  icon: "🐍",
                  title: "Python Development",
                  description: "Analyzing data using python"
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "Designing intuitive and beautiful user interfaces"
                },
                {
                  icon: "🔧",
                  title: "Backend Development",
                  description: "Building robust server-side applications with Node.js or Django"
                }
              ].map((skill, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-icon">{skill.icon}</div>
                  <h3 className="text-primary">{skill.title}</h3>
                  <p className="text-secondary">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  }