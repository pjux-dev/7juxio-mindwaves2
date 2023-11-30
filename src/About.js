import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css'; // Create a new CSS file for About component styles
import ReactGA from 'react-ga';

const About = () => {
  // Track page view when the component mounts
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
   
  }, []);

  return (
    <div className="container-about">      
      <h1>MindWaves</h1>
      <p>This hypermedia release from <strong>7juxio</strong> is delivered via a React app coded using ChatGPT. This collaboration combined creative human expression with artificial intelligence to create a new work of art we call <em>MindWaves</em>.</p>
      <p>The music and visuals were programmed using the human-centered expressiveness of MIDI technology in Ableton Live and VDMX. That output was then combined with AI-generated code to distribute these ideas via global telecommunications networks.</p>
      <p>We are happy to share this project and encourage you to share it. It is our hope that the combination of human creative activity with artificial intelligence sourced from the purest of intentions may impact the energy on planet Earth and elevate our collective thinking toward a higher consciousness.</p>
      <p>We will be releasing the multimedia assets and code for this project via an open-source license and encourage your collaboration.</p>
      <p>&mdash;7JUXIO & ChatGPT</p>    </div>
  );
};

export default About;