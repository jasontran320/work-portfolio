import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'visible'; 
      }
    };
    
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'visible';
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'visible'; 
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo/Name */}
            <a href="/" className="logo">
              <span>Jason Tran</span>
            </a>

            {/* Navigation Links */}
            <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <a href="/" className="nav-link">Home</a>
              <a href="/projects" className="nav-link">Projects</a>
              <a href="/contact" className="nav-link">Contact</a>
              <a 
                href="/assets/documents/jason_tran_resume.pdf" 
                className="cta-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg 
                className="menu-icon" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>

        <style>{`
          .navbar {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            transition: all 0.3s ease;
            background: transparent;
          }

          .navbar.scrolled {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          }

          .navbar-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 24px;
          }

          .navbar-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 80px;
          }

          .logo {
            font-size: 24px;
            font-weight: 700;
            text-decoration: none;
            color: black;
            position: relative;
          }

          .scrolled .logo {
            color: #333;
          }

          .logo::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 2px;
            background: #007AFF;
            transition: width 0.3s ease;
          }

          .logo:hover::after {
            width: 100%;
          }

          .nav-links {
            display: flex;
            align-items: center;
            gap: 32px;
          }

          .nav-link {
            color: black;
            text-decoration: none;
            position: relative;
            padding: 8px 0;
            transition: color 0.3s ease;
          }

          .scrolled .nav-link {
            color: #333;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #007AFF;
            transition: width 0.3s ease;
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .cta-button {
            padding: 10px 24px;
            border-radius: 24px;
            text-decoration: none;
            transition: all 0.3s ease;
            background: white;
            color: #007AFF;
            max-width: 90vw;
            white-space: normal;
            word-wrap: break-word;
            box-sizing: border-box;
            display: inline-block;
          }

          .scrolled .cta-button {
            background: #007AFF;
            color: white;
          }

          .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 122, 255, 0.15);
          }

          .mobile-menu-button {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            color: white;
          }

          .scrolled .mobile-menu-button {
            color: #333;
          }

          .menu-icon {
            width: 24px;
            height: 24px;
          }

          @media (max-width: 768px) {
            .nav-links {
              position: fixed;
              top: 80px;
              left: 0;
              width: 100%;
              flex-direction: column;
              background: white;
              padding: 24px;
              gap: 16px;
              transform: translateY(-100%);
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease;
              align-items: center;
            }

            .nav-links.active {
              transform: translateY(0);
              opacity: 1;
              visibility: visible;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
              align-items: center;
              text-align: center;
              padding: 24px 0px 24px;
            }

            .nav-link {
              color: #333;
              width: auto;
              min-width: 200px;
              text-align: center;
              padding: 12px 24px;
              display: block;
            }

            .cta-button {
              width: auto;
              min-width: 200px;
              text-align: center;
              background: #007AFF;
              color: white;
              display: block;
              margin: 0 auto;
            }

            .mobile-menu-button {
              display: block;
            }
          }
        `}</style>
      </nav>
      {isMobileMenuOpen && (
        <div 
          className="backdrop" 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 900
          }}
        />
      )}
    </>
  );
};

export default Navbar;