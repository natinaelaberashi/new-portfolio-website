import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import DownloadIcon from '@mui/icons-material/Download';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="/profile.jpg" alt="Natinael Abera Shibeshi" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/natinaelaberashi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://natinaelaberashi.github.io/portfolio-website" target="_blank" rel="noreferrer"><LanguageIcon/></a>
          </div>
          <h1>Natinael Abera Shibeshi</h1>
          <p>Fraud Operations Analyst</p>
          <p>Fraud Investigation | Transaction Monitoring | Customer Verification | Risk Management | Account Security</p>
          <p>
            Fraud Operations professional with experience in transaction monitoring, fraud investigation,
            customer verification, account security, fraud prevention, and risk assessment. Skilled at
            identifying suspicious activity, investigating fraud alerts, documenting findings, verifying
            transactions, securing compromised accounts, and collaborating with stakeholders to minimize
            financial risk while maintaining regulatory compliance.
          </p>

          <div className="contact-details">
            <p><LocationOnIcon /> Poland</p>
            <p><EmailIcon /> shibeshinatinaelabera@gmail.com</p>
            <p><PhoneAndroidIcon /> +48 539 783 189</p>
            <p><LanguageIcon /> natinaelaberashi.github.io/portfolio-website</p>
          </div>

          <a className="resume-download" href="/resume.pdf" download>
            <DownloadIcon /> Download Resume (PDF)
          </a>

          <div className="mobile_social_icons">
            <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            <a href="https://github.com/natinaelaberashi" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://natinaelaberashi.github.io/portfolio-website" target="_blank" rel="noreferrer"><LanguageIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;