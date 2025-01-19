import React from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="copy-button"
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check size={20} className="copy-icon" />
      ) : (
        <Copy size={20} className="copy-icon" />
      )}
    </button>
  );
};

const ContactCard = ({ icon: Icon, title, link, linkText }) => {
  return (
    <div className="card-wrapper">
      <a
        href={link}
        target={link.startsWith('http') ? "_blank" : undefined}
        rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
        className="contact-card"
      >
        <div className="card-header">
          <Icon className="contact-icon" size={24} />
          <h3 className="card-title">{title}</h3>
        </div>
        <span className="card-link">
          {linkText}
        </span>
      </a>
      <CopyButton text={linkText} />
    </div>
  );
};

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=jasontran320@gmail.com",
      linkText: "jasontran320@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jason-tran-b45348265/",
      linkText: "/in/jason-tran-b45348265"
    },
    {
      icon: Github,
      title: "GitHub",
      link: "https://github.com/jasontran320",
      linkText: "/jasontran320"
    }
  ];

  return (
    <section className="py-20">
      <h1 className="hero-title mb-4">Get In Touch</h1>
      <section className="contact-section">
        <div className="contact-container">
          <div className="card-container">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>

        <div className='contact-mobile-div'>
          <img className="contact-mobile-img" src="/assets/images/handshake.jpg" alt="Picture of Handshake" />
        </div>
      </section>
    </section>
  );
}