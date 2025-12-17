import React, { useState } from 'react';
import { X } from 'lucide-react';

import securinetsImg from '../images/photo-securinets.jpg';
import stage1Img from '../images/photo-stage-1.jpg';
import stage2Img from '../images/photo-stage-2.jpg';
import gdgImg from '../images/photo-gdg.jpg';
import youngImg from '../images/photo-young.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const photos = [
    {
      src: securinetsImg,
      title: 'Club Securinets',
      description: 'Vice-présidente et responsable de l\'organisation des événements au Club Securinets, ISITCom',
      category: 'Engagement Associatif'
    },
    {
      src: stage1Img,
      title: 'Stage Professionnel',
      description: 'Expérience en stage IT - Mise en pratique des compétences techniques',
      category: 'Expérience Professionnelle'
    },
    {
      src: stage2Img,
      title: 'Stage Industriel',
      description: 'Stage chez Leoni - Environnement industriel et systèmes connectés',
      category: 'Expérience Professionnelle'
    },
    {
      src: gdgImg,
      title: 'GDG Sousse',
      description: 'Membre active du Google Developer Group Sousse - Événements et communauté tech',
      category: 'Événements Tech'
    },
    {
      src: youngImg,
      title: 'Droits de l\'Homme',
      description: 'Participation à un événement sur les droits de l\'homme au lycée pilote',
      category: 'Engagement Social'
    }
  ];

  return (
    <section id="gallery" style={{
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
            Galerie Photos
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#cbd5e1',
            fontSize: '1.1rem',
            marginTop: '1rem'
          }}>
            Moments marquants de mon parcours académique et professionnel
          </p>
        </div>

        {/* Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(photo)}
              style={{
                position: 'relative',
                height: '350px',
                borderRadius: '20px',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem',
                background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 50%, transparent 100%)',
                transform: 'translateY(0)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.8rem',
                  background: 'rgba(167, 139, 250, 0.9)',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {photo.category}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: 'white',
                  marginBottom: '0.5rem'
                }}>
                  {photo.title}
                </h3>
                <p style={{
                  color: '#cbd5e1',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'absolute',
              top: '2rem',
              right: '2rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={24} />
          </button>

          {/* Image Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1200px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                borderRadius: '15px',
                marginBottom: '2rem',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
              }}
            />

            {/* Image Info */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              padding: '2rem',
              borderRadius: '15px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: '600px',
              textAlign: 'center'
            }}>
              <div style={{
                display: 'inline-block',
                padding: '0.4rem 1rem',
                background: 'rgba(167, 139, 250, 0.9)',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem'
              }}>
                {selectedImage.category}
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem'
              }}>
                {selectedImage.title}
              </h3>
              <p style={{
                color: '#cbd5e1',
                fontSize: '1.1rem',
                lineHeight: '1.6'
              }}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;