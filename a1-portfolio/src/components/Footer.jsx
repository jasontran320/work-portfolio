// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="my-footer">
        <div className="container footer">
          <div className="footer flex">
            <div>
              <p>&copy; 2025 Jason Tran. All rights reserved.</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/jasontran320" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/jason-tran-b45348265/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }