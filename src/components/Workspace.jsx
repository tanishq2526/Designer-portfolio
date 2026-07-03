import React, { useState, useRef } from 'react';
import { X, Star } from 'lucide-react';
import profileImage from '../assets/profile-image01.png';


const Workspace = ({ openTabs, activeTabId, setActiveTabId, closeTab, isCanvasEmpty }) => {
      const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [userRating, setUserRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const canvasRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Format current date like "09 Jan, 2026"
  const formatDate = () => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date().toLocaleDateString('en-GB', options).replace(/ /g, ' ');
  };

  const currentDate = formatDate();

  // Content generator based on active tab
  
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "d0353389-1750-45af-8d3e-a57d3641f530");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setFormStatus('success');
        e.target.reset(); // Clear the form
        setTimeout(() => setFormStatus('idle'), 5000); // Reset UI after 5s
      } else {
        console.error("Form submission error:", data);
        setFormStatus('idle'); // Fallback if API fails
      }
    } catch (error) {
      console.error("Submission failed", error);
      setFormStatus('idle');
    }
  };

  const getTabContent = () => {
    if (activeTabId === 'profile') {
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>

          {/* Interactive Grid Overlay */}
          <div
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }}
          />

          {/* Top Left Corner */}
          <div className="top-left">
            <div className="top-date">{currentDate}</div>
            <div className="top-title"><span className="canvas-highlight">Creative Website</span></div>
            <div className="top-subtitle">by: Tanishq</div>
          </div>

          {/* Middle Meta Row - Moved down closer to Portfolio */}
          <div className="meta-row">
            <div className="meta-left">
              Graphic Designer &nbsp;/&nbsp; Brand Designer &nbsp;/&nbsp; Illustrator
            </div>
            <div className="meta-right">
              <span>PrimePixels@gmail.com</span>
              <span>+91 9578613266</span>
              <span>Jaipur/Rajasthan</span>
            </div>
          </div>

          {/* Huge Center Text */}
          <div className="huge-text-container">
            <h1 className="portfolio-huge-text">Portfolio</h1>
          </div>

          {/* Bottom Footer Row */}
          <div className="footer-row">
            <div className="canvas-highlight">Creative Website</div>
            <div>{currentDate}</div>
          </div>

        </div>
      );
    }

    if (activeTabId === 'about') {
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>

          {/* Interactive Grid Overlay */}
          <div
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }}
          />

          <div className="about-layout">
            {/* Left 30% for Image */}
            <div className="about-image-side">
              <img 
                src={profileImage} 
                alt="Tanishq" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }} 
              />
            </div>

            {/* Right 70% for Content */}
            <div className="about-content-side">
              <h2 className="canvas-highlight" style={{ fontSize: '20px', margin: 0 }}>About me</h2>
              <h1 className="portfolio-huge-text" style={{ fontSize: "72px", letterSpacing: "-4px", marginTop: "10px" }}>
                I'm Tanishq
              </h1>

              <div className="about-intro">
                <p className="canvas-body" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                  Hello! I am a passionate Graphic Designer and visual storyteller. My journey revolves around taking complex brand visions and turning them into striking, intuitive, and modern designs that leave a lasting impact.
                </p>
                <p className="canvas-body" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                  In early 2025, I took my passion to the next level by founding my own creative setup: <i><span style={{ color: "var(--canvas-accent, #ff6b00)", fontWeight: "normal", fontSize: "28px", fontFamily: "\"Playfair Display\", serif", padding: "0 4px" }}>PrimePixels</span></i>. Through PrimePixels, I collaborate with businesses and visionaries to completely reinvent their brand identities, design eye-catching social media layouts, and craft pixel-perfect visual experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className="footer-row">
            <div>PrimePixels@gmail.com</div>
            <div>+91 9578613266</div>
          </div>

        </div>
      );
    }
    
    if (activeTabId === 'contact') {
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>
          
          {/* Interactive Grid Overlay */}
          <div 
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }} 
          />

          <div className="contact-layout">
             <div className="contact-header">
                <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
                  Let's <span className="canvas-highlight">Collaborate</span>.
                </h2>
                <p className="canvas-subtitle" style={{marginTop: '10px'}}>
                  Have a project in mind? Fill out the form below and I'll get back to you soon.
                </p>
             </div>

             
             {formStatus === 'success' ? (
               <div className="success-message" style={{ textAlign: 'center', padding: '40px', backgroundColor: 'rgba(0, 255, 0, 0.05)', borderRadius: '12px', border: '1px solid rgba(0, 255, 0, 0.2)', maxWidth: '500px', width: '100%' }}>
                 <h3 style={{ color: '#1a1a1a', margin: '0 0 10px 0', fontSize: '24px' }}>Message Sent!</h3>
                 <p style={{ color: '#555', margin: 0, fontSize: '16px' }}>Thanks for reaching out. I'll get back to you shortly.</p>
               </div>
             ) : (
               <form 
                 className="contact-form"
                 onSubmit={handleContactSubmit}
               >
                  <div className="input-group">
                    <input type="text" name="Name" placeholder="Your Name" className="input-field" required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="input-group">
                    <input type="email" name="Email" placeholder="Your Email" className="input-field" required disabled={formStatus === 'submitting'} />
                  </div>
                  <div className="input-group">
                    <textarea name="Message" placeholder="Tell me about your project..." rows="4" className="input-field" style={{resize: 'none'}} required disabled={formStatus === 'submitting'}></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn" disabled={formStatus === 'submitting'} style={{ opacity: formStatus === 'submitting' ? 0.7 : 1, cursor: formStatus === 'submitting' ? 'not-allowed' : 'pointer' }}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
               </form>
             )}

          </div>

          {/* Footer Row */}
          <div className="footer-row">
            <div>PrimePixels@gmail.com</div>
            <div>+91 9578613266</div>
          </div>

        </div>
      );
    }

    if (activeTabId === 'experience') {
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>
          
          {/* Interactive Grid Overlay */}
          <div 
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }} 
          />

          <div className="experience-layout">
             <div className="experience-header">
                <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
                  Design <span className="canvas-highlight">Chronicles</span>.
                </h2>
             </div>

             <div className="tree-container">
                {/* Tree Line */}
                <div className="tree-line"></div>

                {/* Case Study 01 */}
                <div className="tree-node">
                   <div className="tree-dot"></div>
                   <div className="tree-branch"></div>
                   <div className="tree-content">
                      <h3 className="case-title">01. TCSVTS — GPS Tracking Solutions</h3>
                      <h4 className="case-subtitle">Social Media Management</h4>
                      <p className="case-body">
                        TCSVTS is a professional GPS tracking company serving businesses and fleet operators across India. When they partnered with Prime Pixels, they needed a consistent, professional, and eye-catching social media presence to complement their technology-driven brand.
                      </p>
                   </div>
                </div>

                {/* Case Study 02 */}
                <div className="tree-node">
                   <div className="tree-dot"></div>
                   <div className="tree-branch"></div>
                   <div className="tree-content">
                      <h3 className="case-title">02. Craze Auto Care — Car Modification Studio</h3>
                      <h4 className="case-subtitle">Brand Rebranding & Visual Identity</h4>
                      <p className="case-body">
                        Craze Auto Care is a dynamic car modification and detailing studio with big ambitions and a passionate customer base. They came to Prime Pixels with an outdated visual identity that no longer reflected the bold, modern image they wanted to project to car enthusiasts.
                      </p>
                   </div>
                </div>

             </div>
          </div>

          {/* Footer Row */}
          <div className="footer-row">
            <div>PrimePixels@gmail.com</div>
            <div>+91 9578613266</div>
          </div>

        </div>
      );
    }

    if (activeTabId === 'projects') {
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>
          
          {/* Interactive Grid Overlay */}
          <div 
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }} 
          />

          <div className="projects-layout">
             <div className="projects-header">
                <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
                  Selected <span className="canvas-highlight">Works</span>.
                </h2>
                <p className="canvas-subtitle" style={{marginTop: '10px'}}>
                  A collection of my recent design projects.
                </p>
             </div>

             <div className="projects-grid">
                {/* Project 01 */}
                <div className="project-card">
                  <div className="project-image-placeholder">Project 01 Image</div>
                  <h3 className="project-title">Modern Brand Identity</h3>
                  <p className="project-category">Branding / Logo Design</p>
                </div>
                
                {/* Project 02 */}
                <div className="project-card">
                  <div className="project-image-placeholder">Project 02 Image</div>
                  <h3 className="project-title">E-Commerce UI Kit</h3>
                  <p className="project-category">UI/UX Design</p>
                </div>

                {/* Project 03 */}
                <div className="project-card">
                  <div className="project-image-placeholder">Project 03 Image</div>
                  <h3 className="project-title">Social Media Campaign</h3>
                  <p className="project-category">Marketing / Graphics</p>
                </div>

                {/* Project 04 */}
                <div className="project-card">
                  <div className="project-image-placeholder">Project 04 Image</div>
                  <h3 className="project-title">App Icon Pack</h3>
                  <p className="project-category">Illustration / Iconography</p>
                </div>
             </div>
          </div>

          {/* Footer Row */}
          <div className="footer-row">
            <div>PrimePixels@gmail.com</div>
            <div>+91 9578613266</div>
          </div>

        </div>
      );
    }

    
    if (activeTabId === 'feedback') {
      const feedbackStats = [
        { stars: 5, count: 128, percentage: 75 },
        { stars: 4, count: 32, percentage: 15 },
        { stars: 3, count: 10, percentage: 5 },
        { stars: 2, count: 5, percentage: 3 },
        { stars: 1, count: 2, percentage: 2 },
      ];
      
      return (
        <div className="portfolio-container" ref={canvasRef} onMouseMove={handleMouseMove}>
          <div
            className="grid-overlay"
            style={{
              maskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
              WebkitMaskImage: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, black, transparent)`,
            }}
          />
          <div className="feedback-layout">
            <div className="feedback-header">
              <h2 className="canvas-title" style={{fontSize: '48px', letterSpacing: '-1px', margin: 0}}>
                Rate Your <span className="canvas-highlight">Experience</span>.
              </h2>
              <p className="canvas-subtitle" style={{marginTop: '10px'}}>
                Your feedback helps me improve. Let me know what you think of my work!
              </p>
            </div>
            
            <div className="rating-section">
              <div className="stars-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    size={48}
                    className={`star-icon ${(hoverRating || userRating) >= star ? 'filled' : ''}`}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setUserRating(star)}
                  />
                ))}
              </div>
              <p className="rating-text">
                {userRating > 0 ? `You rated ${userRating} star${userRating > 1 ? 's' : ''}! Thank you.` : 'Hover and click to rate'}
              </p>
            </div>
            
            <div className="feedback-report">
              <h3 className="report-title">All-Time Feedback Report</h3>
              <div className="report-bars">
                {feedbackStats.map((stat) => (
                  <div key={stat.stars} className="report-row">
                    <div className="report-label">
                      {stat.stars} <Star size={12} className="small-star" />
                    </div>
                    <div className="report-bar-bg">
                      <div className="report-bar-fill" style={{ width: `${stat.percentage}%` }}></div>
                    </div>
                    <div className="report-count">{stat.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="footer-row">
            <div>PrimePixels@gmail.com</div>
            <div>+91 9578613266</div>
          </div>
        </div>
      );
    }

    // Default minimalist fallback for other tabs
    const tabName = openTabs.find(t => t.id === activeTabId)?.name || 'Document';

    return (
      <div className="content-container">
        <div className="hero-text-container">
          <h1 className="canvas-title" style={{ fontSize: '64px' }}>
            {tabName}
          </h1>
          <p className="canvas-subtitle" style={{ fontSize: '20px', marginTop: '20px' }}>
            Discover my work and <span className="canvas-highlight">creativity</span>.
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="workspace-container">
      {/* Document Tabs Bar */}
      <div className="tabs-bar">
        {openTabs.map(tab => (
          <div
            key={tab.id}
            className="tab"
            style={{
              backgroundColor: activeTabId === tab.id ? 'var(--ps-panel-header)' : 'var(--ps-panel-bg)',
              color: activeTabId === tab.id ? 'var(--ps-text)' : 'var(--ps-text-dim)',
              borderTop: activeTabId === tab.id ? `2px solid var(--canvas-accent)` : '2px solid transparent',
            }}
            onClick={() => setActiveTabId(tab.id)}
          >
            <span className="tab-name">{tab.name} @ 100% (RGB/8) *</span>
            <div
              className="close-btn"
              onClick={(e) => closeTab(tab.id, e)}
            >
              <X size={12} />
            </div>
          </div>
        ))}
      </div>

      <div className="canvas-area">
        {!isCanvasEmpty ? (
          <div className="canvas-scroll-wrapper">
            <div className="canvas">
              {getTabContent()}
            </div>
          </div>
        ) : (
          <div className="empty-state">
            <p style={{ color: 'var(--ps-text-dim)' }}>No documents open. Click 'Profile' to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Workspace;
