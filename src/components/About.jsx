import React from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" style={{
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
            À Propos de Moi
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Formation Card */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <GraduationCap size={32} color="white" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Formation
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8',
              marginBottom: '1rem'
            }}>
              <strong>Licence en Télécommunications</strong><br />
              Institut Supérieur des Sciences Informatiques et des Technologies de Communication (ISITCom), Sousse
            </p>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8'
            }}>
              Actuellement en 3ᵉ année (2023-2026)
            </p>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8',
              marginTop: '1rem'
            }}>
              <strong>Baccalauréat Sciences Expérimentales</strong><br />
              Lycée Pilote du Kef - 2023
            </p>
          </div>

          {/* Passion Card */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Heart size={32} color="white" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Passions
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8'
            }}>
              Passionnée par l'<strong>Internet des Objets (IoT)</strong> et l'<strong>Intelligence Artificielle</strong>, j'explore constamment les nouvelles technologies pour créer des solutions innovantes et connectées.
            </p>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8',
              marginTop: '1rem'
            }}>
              J'aime participer à des événements tech, des bootcamps et des hackathons pour enrichir mes compétences et échanger avec la communauté tech.
            </p>
          </div>

          {/* Objectif Card */}
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.2)';
          }} onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '15px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}>
              <Target size={32} color="white" />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1rem'
            }}>
              Objectif
            </h3>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8'
            }}>
              Je recherche activement un <strong>stage de fin d'études (PFE)</strong> dans le domaine de l'IoT pour mettre en pratique mes connaissances théoriques et contribuer au développement de solutions connectées innovantes.
            </p>
            <p style={{
              color: '#64748b',
              lineHeight: '1.8',
              marginTop: '1rem'
            }}>
              Mon but est d'intégrer une équipe dynamique où je pourrai apprendre, innover et avoir un impact réel sur des projets technologiques.
            </p>
          </div>
        </div>

        {/* Engagement Card */}
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '3rem 2rem',
          borderRadius: '20px',
          color: 'white',
          textAlign: 'center',
          boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem'
          }}>
            Engagement Associatif
          </h3>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '2rem',
            marginTop: '2rem'
          }}>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                Vice-présidente & Responsable Événements
              </p>
              <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>
                Club Securinets - ISITCom (2024/2025)
              </p>
            </div>
            <div style={{
              width: '2px',
              background: 'rgba(255, 255, 255, 0.3)'
            }}></div>
            <div>
              <p style={{ fontSize: '1.2rem', fontWeight: '600' }}>
                Membre Active
              </p>
              <p style={{ opacity: 0.9, marginTop: '0.5rem' }}>
                Club GDG Sousse (depuis 2024)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;