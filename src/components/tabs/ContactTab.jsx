import React, { useState } from 'react';
import InteractiveGrid from './InteractiveGrid';

const ContactTab = () => {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      const formData = new FormData(e.target);
      // Note: As a client-side form, this key is still visible in the network request. Using .env keeps it out of source control and makes rotation trivial.
      formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

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

  return (
    <div className="portfolio-container">
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />

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
        <div>+91 9571613261</div>
      </div>

    </div>
  );
};

export default ContactTab;
