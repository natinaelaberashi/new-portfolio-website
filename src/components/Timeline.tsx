import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="08/2024 – Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fraud Operations & Customer Support Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Euronet Polska Sp. z o.o. (Ria Money Transfer Project) • Poland</h4>
            <ul>
              <li>Monitored digital account activity and online transactions to detect fraudulent transactions and policy violations.</li>
              <li>Verified suspicious activity through customer authentication via phone and email.</li>
              <li>Documented investigations and maintained accurate fraud case records.</li>
              <li>Secured compromised accounts to minimize fraud losses.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="07/2023 – 07/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fraud Operations & Customer Support Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Concentrix CVG International Sp. z o.o. • Poland</h4>
            <ul>
              <li>Investigated suspicious transactions and mitigated fraud risks.</li>
              <li>Verified customer transactions and supported fraud investigations.</li>
              <li>Collaborated with internal teams to resolve fraud cases and verify transaction legitimacy.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2020 – 09/2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Risk & Fraud Operations Analyst</h3>
            <h4 className="vertical-timeline-element-subtitle">Commercial Bank of Ethiopia (CBE) • Ethiopia</h4>
            <ul>
              <li>Investigated account and authentication risks.</li>
              <li>Identified suspicious activity and escalated exceptions.</li>
              <li>Verified transactions and supported fraud risk resolution.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2021 – 07/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">MSc Management & Organization • Silesian University of Technology</h4>
            <p>
              MSc in Management & Organization, with academic grounding in leadership and organizational practice that supports professional work in fraud operations and risk management.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;