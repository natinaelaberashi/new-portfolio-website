import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
        <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Portfolio for Natinael Abera Shibeshi</p>
    </footer>
  );
}

export default Footer;