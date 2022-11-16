import React from 'react';

function Resume() {
    return (
        <div className="columns">
        <div className="column">
          <p className="content is-medium">Resume</p>
          <hr />
  
          <a
            className="button is-primary"
            href={process.env.PUBLIC_URL + "public/Daniel_PerezGarnica_Resume.pdf"}
            target="_blank" rel="noreferrer"
          >
            <span className="icon">
              <i className="fas fa-download"></i>
            </span>
            <span>Download My Resume</span>
          </a>
        </div>
        <div className="column">
          <p className="content is-medium">Skills</p>
          <hr />
          <ul>
              <li>HTML, CSS, Javascript</li>
              <li>MERN</li>
              <li>REITs</li>
              <li>Portfolio Management</li>
              <li>Balancing and Budgeting</li>
          </ul>
        </div>
      </div>
  
    );
}

export default Resume;