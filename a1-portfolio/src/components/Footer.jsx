// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="my-footer">
        <div className="container footer">
          <div className="footer flex">
            <div>
              <p className="footer-text">&copy; 2025 Jason Tran. All rights reserved.</p>
            </div>
            <div className="social-links">
              <a className="footer-link" href="https://github.com/jasontran320" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src="/assets/images/github.png" alt="GitHub" />
              </a>
              <a className="footer-link" href="https://www.linkedin.com/in/jason-tran-b45348265/" target="_blank" rel="noopener noreferrer">
                <img className="footer-icon" src="/assets/images/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }