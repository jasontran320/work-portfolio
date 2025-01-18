import React from 'react';
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react';

const styles = {
  section: {
    padding: '20px 0 48px 0',
    backgroundColor: '#f8f9fa'
  },
  container: {
    maxWidth: '1024px',
    margin: '0 auto',
    padding: '0 24px'
  },
  cardContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  cardWrapper: {
    display: 'flex',
    alignItems: 'stretch',
    gap: '12px',
    flexDirection: 'row'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    transform: 'translateY(0)',
    textDecoration: 'none',
    display: 'block',
    flex: 1
  },
  cardHover: {
    transform: 'translateY(-8px)',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '8px'
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#1a1a1a',
    margin: 0
  },
  cardLink: {
    color: '#2563eb',
    marginLeft: '36px',
    transition: 'color 0.3s ease',
  },
  cardLinkHover: {
    color: '#1d4ed8',
    textDecoration: 'underline'
  },
  icon: {
    color: '#2563eb'
  },
  copyButton: {
    width: '48px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
    order: -1 
  },
  copyButtonHover: {
    backgroundColor: '#f8f9fa',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  },
  copyIcon: {
    color: '#2563eb',
  }
};

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

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
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...styles.copyButton,
        ...(isHovered ? styles.copyButtonHover : {})
      }}
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check size={20} style={styles.copyIcon} />
      ) : (
        <Copy size={20} style={styles.copyIcon} />
      )}
    </button>
  );
};

const ContactCard = ({ icon: Icon, title, link, linkText }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={styles.cardWrapper}>
      <a
        href={link}
        target={link.startsWith('http') ? "_blank" : undefined}
        rel={link.startsWith('http') ? "noopener noreferrer" : undefined}
        style={{
          ...styles.card,
          ...(isHovered ? styles.cardHover : {})
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={styles.cardHeader}>
          <Icon style={styles.icon} size={24} />
          <h3 style={styles.cardTitle}>{title}</h3>
        </div>
        <span
          style={{
            ...styles.cardLink,
            ...(isHovered ? styles.cardLinkHover : {})
          }}
        >
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
      <h1 className="hero-title mb-3">Get In Touch</h1>
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.cardContainer}>
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}