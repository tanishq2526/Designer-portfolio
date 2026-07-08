import React from 'react';
import InteractiveGrid from './InteractiveGrid';

const ExperienceTab = () => {
  return (
    <div className="portfolio-container">
      {/* Interactive Grid Overlay */}
      <InteractiveGrid />

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
        <div>+91 9571613261</div>
      </div>
    </div>
  );
};

export default ExperienceTab;
