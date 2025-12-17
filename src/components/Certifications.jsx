import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Certificat professionnel Meta Front-End Developer',
      organization: 'Meta via Coursera',
      status: 'À venir',
      year: '2025',
      category: 'Développement Web'
    },
    {
      title: 'Build with AI 2025',
      organization: 'Google for Developers',
      status: 'Participant',
      year: '2025',
      category: 'Intelligence Artificielle'
    },
    {
      title: 'Certificat NVIDIA RAG',
      organization: 'NVIDIA',
      status: 'Complété',
      year: '2025',
      category: 'Intelligence Artificielle'
    },
    {
      title: 'Introduction to Cloud Computing with AWS',
      organization: 'Coursera',
      status: 'Complété',
      year: 'Oct. 2025',
      category: 'Cloud Computing'
    },
    {
      title: 'Basic Image Classification with TensorFlow',
      organization: 'Coursera',
      status: 'Complété',
      year: 'Oct. 2025',
      category: 'Intelligence Artificielle'
    },
    {
      title: 'Certificat de formation Arduino',
      organization: 'Young Engineers Mahdia & Elite Robotique',
      status: 'Complété',
      year: 'Sept. 2025',
      category: 'IoT & Électronique'
    },
    {
      title: 'Jira Scrum Project',
      organization: 'Coursera',
      status: 'Complété',
      year: 'Sept. 2025',
      category: 'Méthodologie'
    },
    {
      title: 'Wireshark for Beginners',
      organization: 'Coursera',
      status: 'Complété',
      year: 'Sept. 2025',
      category: 'Réseaux & Sécurité'
    },
    {
      title: 'Intro to Front-End Development',
      organization: 'Meta via Coursera',
      status: 'Complété',
      year: 'Juin 2025',
      category: 'Développement Web'
    },
    {
      title: 'Introduction à l\'IA Moderne',
      organization: 'Cisco',
      status: 'Complété',
      year: 'Mai 2025',
      category: 'Intelligence Artificielle'
    },
    {
      title: 'MATLAB Onramp',
      organization: 'MathWorks',
      status: 'Complété',
      year: 'Avril 2025',
      category: 'Programmation'
    },
    {
      title: 'Introduction au HTML',
      organization: 'Cisco & Simplilearn',
      status: 'Complété',
      year: 'Mars 2025',
      category: 'Développement Web'
    },
    {
      title: 'Exploring Communication Technology',
      organization: 'The Open University',
      status: 'Complété',
      year: '2025',
      category: 'Télécommunications'
    },
    {
      title: 'Mise à jour sur la 5G',
      organization: 'Centre d\'éducation en télécommunications',
      status: 'Complété',
      year: '2025',
      category: 'Télécommunications'
    },
    {
      title: 'Gestion des menaces cyber',
      organization: 'Hackwarts 2.0',
      status: 'Complété',
      year: '2025',
      category: 'Cybersécurité'
    },
    {
      title: 'Certification Cisco',
      organization: 'Cisco',
      status: 'En cours',
      year: '2025',
      category: 'Réseaux'
    }
  ];

  const events = [
    {
      title: 'AI Bootcamp 2025',
      organization: 'IEEE ESSTHS',
      type: 'Participation'
    },
    {
      title: 'Organisation d\'événements Club Securinets',
      organization: 'Club Securinets ISITCom',
      type: 'Certificat'
    },
    {
      title: 'Atelier HTML, CSS & JavaScript',
      organization: 'ISITCom',
      type: 'Attestation'
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" style={{
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
            Certifications & Formations
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Certifications by Category */}
        {categories.map((category, catIndex) => (
          <div key={catIndex} style={{ marginBottom: '3rem' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}></div>
              {category}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem'
            }}>
              {certifications
                .filter(cert => cert.category === category)
                .map((cert, index) => (
                  <div key={index} style={{
                    background: 'white',
                    padding: '1.5rem',
                    borderRadius: '15px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }} onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.borderColor = '#667eea';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.15)';
                  }} onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                  }}>
                    {/* Status Badge */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      background: cert.status === 'Complété' 
                        ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        : cert.status === 'En cours'
                        ? 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
                        : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                      color: 'white'
                    }}>
                      {cert.status}
                    </div>

                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1rem'
                    }}>
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Award size={22} color="white" />
                      </div>

                      <div style={{ flex: 1 }}>
                        <h4 style={{
                          fontSize: '1.1rem',
                          fontWeight: 'bold',
                          color: '#1e293b',
                          marginBottom: '0.5rem',
                          lineHeight: '1.3'
                        }}>
                          {cert.title}
                        </h4>
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingTop: '1rem',
                      borderTop: '1px solid #e2e8f0'
                    }}>
                      <p style={{
                        color: '#64748b',
                        fontSize: '0.9rem',
                        fontWeight: '500'
                      }}>
                        {cert.organization}
                      </p>
                      <p style={{
                        color: '#94a3b8',
                        fontSize: '0.85rem',
                        fontWeight: '600'
                      }}>
                        {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Events Section */}
        <div style={{
          marginTop: '4rem',
          padding: '3rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '20px',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Événements & Ateliers
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {events.map((event, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '15px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '0.75rem'
                }}>
                  <CheckCircle size={20} color="white" />
                  <span style={{
                    color: 'white',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    opacity: 0.9
                  }}>
                    {event.type}
                  </span>
                </div>
                <h4 style={{
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>
                  {event.title}
                </h4>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem'
                }}>
                  {event.organization}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;