import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Stagiaire IT',
      company: 'Tunisie Telecom',
      period: 'Août 2025',
      location: 'Tunisie',
      description: [
        'Mise en pratique des compétences en réseaux et systèmes',
        'Travail dans un contexte professionnel d\'opérateur télécom',
        'Découverte des infrastructures réseau à grande échelle'
      ],
      color: '#667eea'
    },
    {
      title: 'Stagiaire IT',
      company: 'Leoni',
      period: 'Juillet 2025',
      location: 'Sidi Bouali',
      description: [
        'Renforcement des compétences en réseaux et systèmes',
        'Maintenance technique dans un environnement industriel',
        'Familiarisation avec les architectures de communication industrielle',
        'Supervision de systèmes connectés'
      ],
      color: '#764ba2'
    },
    {
      title: 'Stagiaire Saisonnière - Service Client',
      company: 'Tunisie Telecom',
      period: 'Été 2024',
      location: 'Kef',
      description: [
        'Accueil et accompagnement des clients',
        'Gestion des demandes techniques et administratives',
        'Développement des compétences en communication client'
      ],
      color: '#8b5cf6'
    }
  ];

  return (
    <section id="experience" style={{
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
            Expérience Professionnelle
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
          position: 'relative',
          paddingLeft: '2rem'
        }}>
          {/* Timeline Line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '2px'
          }}></div>

          {experiences.map((exp, index) => (
            <div key={index} style={{
              marginBottom: '3rem',
              position: 'relative',
              paddingLeft: '2rem'
            }}>
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '-10px',
                top: '10px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: exp.color,
                border: '3px solid #0f172a',
                boxShadow: `0 0 20px ${exp.color}`
              }}></div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '2rem',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = exp.color;
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: exp.color
                  }}>
                    <Briefcase size={20} />
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: '#ffffff'
                    }}>
                      {exp.title}
                    </h3>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.5rem'
                }}>
                  <p style={{
                    fontSize: '1.2rem',
                    color: '#a78bfa',
                    fontWeight: '600'
                  }}>
                    {exp.company}
                  </p>
                  <span style={{ color: '#64748b' }}>•</span>
                  <p style={{ color: '#94a3b8' }}>{exp.location}</p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  <Calendar size={16} color="#94a3b8" />
                  <p style={{
                    color: '#94a3b8',
                    fontSize: '0.95rem'
                  }}>
                    {exp.period}
                  </p>
                </div>

                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {exp.description.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      color: '#cbd5e1',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        marginTop: '0.5rem',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: exp.color,
                        flexShrink: 0
                      }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;