import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
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
          </div>
          <h1>Natinael Abera Shibeshi</h1>
          <p>Fraud Operations Analyst | Fraud Investigation | Transaction Monitoring | Risk Management</p>
          <p>
            Fraud Operations professional with experience in transaction monitoring, fraud investigation,
            customer verification, account security, fraud prevention, and risk assessment. Skilled at
            identifying suspicious activity, investigating fraud alerts, documenting findings, and
            collaborating with stakeholders to minimize financial risk while maintaining regulatory compliance.
          </p>

          <div className="contact-details">
            <p><LocationOnIcon /> Poland</p>
            <p><EmailIcon /> shibeshinatinaelabera@gmail.com</p>
            <p><PhoneAndroidIcon /> +48 539 783 189</p>
          </div>

          <div className="mobile_social_icons">
            <a href="mailto:shibeshinatinaelabera@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
            <a href="https://www.linkedin.com/in/natinael-abera" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;