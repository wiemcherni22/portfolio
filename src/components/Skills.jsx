import React from 'react';
import { Code, Network, Cpu, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programmation',
      icon: <Code size={32} />,
      skills: ['Python', 'HTML', 'CSS', 'JavaScript', 'PHP'],
      color: '#667eea'
    },
    {
      title: 'IoT & Embarqué',
      icon: <Cpu size={32} />,
      skills: ['Raspberry Pi', 'Arduino', 'MQTT', 'Capteurs IoT', 'Mosquitto'],
      color: '#764ba2'
    },
    {
      title: 'Réseaux & Systèmes',
      icon: <Network size={32} />,
      skills: ['Linux', 'Cisco Packet Tracer', 'Wireshark', 'VoIP', 'Configuration Réseau'],
      color: '#f093fb'
    },
    {
      title: 'Électronique & Conception',
      icon: <Wrench size={32} />,
      skills: ['KiCad', 'Électronique Numérique', 'Conception de Circuits', 'PCB Design'],
      color: '#4facfe'
    },
    {
      title: 'Intelligence Artificielle',
      icon: <Database size={32} />,
      skills: ['TensorFlow', 'Machine Learning', 'Deep Learning', 'Classification d\'Images'],
      color: '#fa709a'
    },
    {
      title: 'Outils & Technologies',
      icon: <Globe size={32} />,
      skills: ['Git/GitHub', 'AWS', 'Jira', 'MATLAB', 'MS Office'],
      color: '#00f2fe'
    }
  ];

  const languages = [
    { name: 'Français', level: 90 },
    { name: 'Anglais', level: 85 },
    { name: 'Arabe', level: 100 }
  ];

  const softSkills = [
    'Adaptabilité',
    'Apprentissage Continu',
    'Travail d\'Équipe',
    'Communication',
    'Planification d\'Événements',
    'Coordination d\'Équipe',
    'Résolution de Problèmes',
    'Créativité'
  ];

  return (
    <section id="skills" style={{
      padding: '5rem 2rem',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
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
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            Compétences
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Technical Skills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {skillCategories.map((category, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease'
            }} onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = category.color;
            }} onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '15px',
                background: category.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: 'white'
              }}>
                {category.icon}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#ffffff',
                marginBottom: '1rem'
              }}>
                {category.title}
              </h3>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {category.skills.map((skill, i) => (
                  <span key={i} style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#e2e8f0',
                    borderRadius: '8px',
                    fontSize: '0.9rem',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages & Soft Skills */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Languages */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Langues
            </h3>

            {languages.map((lang, index) => (
              <div key={index} style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem'
                }}>
                  <span style={{ color: '#e2e8f0', fontWeight: '600' }}>
                    {lang.name}
                  </span>
                  <span style={{ color: '#a78bfa' }}>
                    {lang.level}%
                  </span>
                </div>
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    width: `${lang.level}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                    transition: 'width 1s ease'
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            padding: '2rem',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Compétences Comportementales
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem'
            }}>
              {softSkills.map((skill, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(167, 139, 250, 0.1)';
                  e.currentTarget.style.borderColor = '#a78bfa';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}></div>
                  <span style={{
                    color: '#e2e8f0',
                    fontSize: '0.9rem'
                  }}>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;