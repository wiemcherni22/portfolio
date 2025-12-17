import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profileImg from '../images/profile.jpg.png';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.1,
        background: 'radial-gradient(circle at 20% 50%, #667eea 0%, transparent 50%), radial-gradient(circle at 80% 80%, #764ba2 0%, transparent 50%)'
      }}></div>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Profile Image */}
        <div style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          marginBottom: '2rem',
          border: '4px solid rgba(167, 139, 250, 0.5)',
          boxShadow: '0 0 40px rgba(167, 139, 250, 0.3)',
          animation: 'float 3s ease-in-out infinite'
        }}>
          <img src={profileImg} alt="Wiem Cherni" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} />
        </div>

        {/* Name and Title */}
        <h1 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          color: '#ffffff',
          marginBottom: '1rem',
          animation: 'fadeInUp 1s ease-out'
        }}>
          Wiem Cherni
        </h1>

        <div style={{
          fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '1.5rem',
          fontWeight: '600',
          animation: 'fadeInUp 1s ease-out 0.2s backwards'
        }}>
          Étudiante en Télécommunications
        </div>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: '#cbd5e1',
          maxWidth: '700px',
          lineHeight: '1.8',
          marginBottom: '2.5rem',
          animation: 'fadeInUp 1s ease-out 0.4s backwards'
        }}>
          Passionnée par l'IoT et l'Intelligence Artificielle, je recherche un stage de fin d'études pour contribuer au développement de solutions connectées et innovantes.
        </p>

        {/* Social Links */}
        <div style={{
          display: 'flex',
          gap: '1.5rem',
          marginBottom: '3rem',
          animation: 'fadeInUp 1s ease-out 0.6s backwards'
        }}>
          <a href="https://github.com/wiemcherni22" target="_blank" rel="noopener noreferrer" style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(167, 139, 250, 0.1)',
            border: '2px solid rgba(167, 139, 250, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a78bfa',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.2)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(167, 139, 250, 0.3)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <Github size={24} />
          </a>

          <a href="https://www.linkedin.com/in/wiem-cherni-723b80195" target="_blank" rel="noopener noreferrer" style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(167, 139, 250, 0.1)',
            border: '2px solid rgba(167, 139, 250, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a78bfa',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.2)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(167, 139, 250, 0.3)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <Linkedin size={24} />
          </a>

          <a href="mailto:wiemcherni05@gmail.com" style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: 'rgba(167, 139, 250, 0.1)',
            border: '2px solid rgba(167, 139, 250, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a78bfa',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.2)';
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(167, 139, 250, 0.3)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <Mail size={24} />
          </a>
        </div>

        {/* CTA Button */}
        <a href="#contact" style={{
          padding: '1rem 2.5rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#ffffff',
          textDecoration: 'none',
          borderRadius: '50px',
          fontSize: '1.1rem',
          fontWeight: '600',
          transition: 'all 0.3s ease',
          boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
          animation: 'fadeInUp 1s ease-out 0.8s backwards'
        }} onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
        }} onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
        }}>
          Me Contacter
        </a>

        {/* Scroll Indicator */}
        <a href="#about" style={{
          position: 'absolute',
          bottom: '2rem',
          color: '#a78bfa',
          animation: 'bounce 2s infinite'
        }}>
          <ChevronDown size={32} />
        </a>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;