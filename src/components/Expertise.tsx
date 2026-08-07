import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserCheck, faTools } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Fraud Investigation",
    "Fraud Detection",
    "Transaction Monitoring",
    "Suspicious Activity Investigation",
    "Risk Assessment",
    "Fraud Prevention"
];

const labelsSecond = [
    "Customer Verification",
    "Customer Authentication",
    "Account Security",
    "Transaction Verification",
    "Loss Prevention",
    "Exception Resolution",
    "Stakeholder Collaboration"
];

const labelsThird = [
    "Microsoft Office",
    "Microsoft Excel",
    "Multi-System Navigation",
    "Documentation & Record Keeping",
    "CRM Systems",
    "Case Management Systems",
    "Fraud Monitoring Tools",
    "Payment Processing Platforms"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Core Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faShieldAlt} size="3x"/>
                    <h3>Fraud Operations & Risk Management</h3>
                    <p>Focused on monitoring transactions, investigating suspicious activity, and supporting fraud prevention efforts across digital and customer-facing operations.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUserCheck} size="3x"/>
                    <h3>Customer Protection & Investigation</h3>
                    <p>Experience verifying customer activity, securing accounts, documenting cases, and resolving fraud-related exceptions with internal teams and stakeholders.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faTools} size="3x"/>
                    <h3>Technical Skills</h3>
                    <p>Combines case documentation, transaction verification, and multi-system navigation to support effective fraud operations and customer protection.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Highlights:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;