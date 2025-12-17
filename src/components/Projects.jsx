import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Système de Supervision IoT avec Raspberry Pi',
      description: 'Développement d\'un système complet de supervision en temps réel utilisant MQTT, Raspberry Pi et plusieurs capteurs (température, mouvement). Le système collecte, transmet et visualise les données en temps réel via le protocole MQTT avec broker Mosquitto.',
      technologies: ['Raspberry Pi', 'MQTT', 'Mosquitto', 'Python', 'Capteurs IoT'],
      category: 'IoT',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Projets IoT Pratiques - Raspberry Pi',
      description: 'Collection de projets pratiques démontrant diverses applications de l\'IoT : système de lecture de température, détection d\'obstacles avec capteurs ultrasoniques, système d\'alarme avec buzzer, et système d\'identification par ID. Programmation en Python pour contrôler les GPIO et interfacer avec les capteurs.',
      technologies: ['Raspberry Pi', 'Python', 'GPIO', 'Capteurs', 'Électronique'],
      category: 'IoT',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Audit de Sécurité VoIP - Asterisk',
      description: 'Projet de sécurité réseau axé sur les vulnérabilités VoIP. Réalisation de tests d\'intrusion sur serveur Asterisk utilisant SIPp, analyse approfondie des flux réseau avec Wireshark, identification des vulnérabilités de sécurité et formulation de recommandations détaillées pour sécuriser les systèmes VoIP.',
      technologies: ['Asterisk', 'SIPp', 'Wireshark', 'VoIP', 'Sécurité Réseau'],
      category: 'Sécurité',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      title: 'Classification d\'Images avec TensorFlow',
      description: 'Implémentation d\'un modèle de classification d\'images utilisant TensorFlow et les réseaux de neurones convolutifs (CNN). Formation du modèle sur un dataset d\'images, optimisation des hyperparamètres et évaluation des performances. Projet réalisé dans le cadre d\'une certification Coursera.',
      technologies: ['TensorFlow', 'Python', 'Deep Learning', 'CNN', 'Machine Learning'],
      category: 'Intelligence Artificielle',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    }
  ];

  return (
    <section id="projects" style={{
      padding: '5rem 2rem',
      background: '#f8fafc',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Projets Réalisés
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'flex',
              flexDirection: 'column'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)';
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
            }}>
              {/* Project Header with Gradient */}
              <div style={{
                background: project.gradient,
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50%',
                  right: '-20%',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.1)',
                  filter: 'blur(40px)'
                }}></div>
                
                <div style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  fontSize: '0.85rem',
                  color: 'white',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {project.category}
                </div>

                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem',
                  position: 'relative'
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Project Body */}
              <div style={{
                padding: '2rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <p style={{
                  color: '#64748b',
                  lineHeight: '1.8',
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} style={{
                      padding: '0.4rem 0.8rem',
                      background: '#f1f5f9',
                      color: '#475569',
                      borderRadius: '8px',
                      fontSize: '0.85rem',
                      fontWeight: '500'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div style={{
                  display: 'flex',
                  gap: '1rem'
                }}>
                  <a href="https://github.com/wiemcherni22" target="_blank" rel="noopener noreferrer" style={{
                    flex: 1,
                    padding: '0.8rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontWeight: '600',
                    transition: 'transform 0.2s ease'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}>
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div style={{
          textAlign: 'center',
          marginTop: '4rem'
        }}>
          <a href="https://github.com/wiemcherni22" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
          }}>
            <ExternalLink size={20} />
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;