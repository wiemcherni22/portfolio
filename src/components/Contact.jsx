import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{
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
            Me Contacter
          </h2>
          <div style={{
            width: '100px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
          <p style={{
            color: '#64748b',
            fontSize: '1.1rem',
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}>
            N'hésitez pas à me contacter pour discuter d'opportunités de stage ou de collaboration
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          {/* Contact Info */}
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '2rem'
            }}>
              Informations de Contact
            </h3>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {/* Email */}
              <a href="mailto:wiemcherni05@gmail.com" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '15px',
                textDecoration: 'none',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Mail size={24} color="white" />
                </div>
                <div>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>
                    Email
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#1e293b',
                    fontWeight: '600'
                  }}>
                    wiemcherni05@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+21697992791" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '15px',
                textDecoration: 'none',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateX(10px)';
                e.currentTarget.style.borderColor = '#667eea';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.15)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Phone size={24} color="white" />
                </div>
                <div>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>
                    Téléphone
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#1e293b',
                    fontWeight: '600'
                  }}>
                    +216 97 992 791
                  </p>
                </div>
              </a>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '15px',
                boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <MapPin size={24} color="white" />
                </div>
                <div>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    fontWeight: '600',
                    marginBottom: '0.25rem'
                  }}>
                    Adresse
                  </p>
                  <p style={{
                    fontSize: '1rem',
                    color: '#1e293b',
                    fontWeight: '600'
                  }}>
                    Menchia, Hammam Sousse
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{
              marginTop: '2rem',
              padding: '2rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '15px',
              textAlign: 'center'
            }}>
              <h4 style={{
                color: 'white',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem'
              }}>
                Suivez-moi
              </h4>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem'
              }}>
                <a href="https://github.com/wiemcherni22" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <Github size={24} />
                </a>

                <a href="https://www.linkedin.com/in/wiem-cherni-723b80195" target="_blank" rel="noopener noreferrer" style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}>
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '2rem'
            }}>
              Envoyez-moi un Message
            </h3>

            <form onSubmit={handleSubmit} style={{
              background: 'white',
              padding: '2rem',
              borderRadius: '20px',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Nom Complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#1e293b',
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#667eea'}
                  onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button type="submit" style={{
                width: '100%',
                padding: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(102, 126, 234, 0.6)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(102, 126, 234, 0.4)';
              }}>
                {submitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le Message
                  </>
                )}
              </button>

              {submitted && (
                <div style={{
                  marginTop: '1rem',
                  padding: '1rem',
                  background: '#d1fae5',
                  color: '#065f46',
                  borderRadius: '10px',
                  textAlign: 'center',
                  fontWeight: '600'
                }}>
                  Merci ! Votre message a été envoyé avec succès.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '5rem',
          paddingTop: '2rem',
          borderTop: '2px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '1rem'
          }}>
            © 2025 Wiem Cherni. Tous droits réservés.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;