import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Fraud Operations Experience</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Fraud Monitoring & Investigation</h2>
                <p>Monitored digital account activity and online transactions to detect suspicious behavior, investigate alerts, and support fraud prevention initiatives.</p>
            </div>
            <div className="project">
                <h2>Customer Verification & Account Security</h2>
                <p>Verified suspicious activity through phone and email authentication, documented investigations, and secured compromised accounts to minimize fraud losses.</p>
            </div>
            <div className="project">
                <h2>Risk Assessment & Exception Handling</h2>
                <p>Investigated account and authentication risks, escalated exceptions, and supported transaction verification efforts to strengthen fraud risk resolution.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;