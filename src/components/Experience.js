import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { FaHourglassEnd } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';
import { FaLaptop } from 'react-icons/fa';

function Experience({ experienceData }) {
    return (
        <div id="experience" style={{ background: 'linear-gradient(to right, #030637, #3C0753, #81689D)' }}>
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <VerticalTimeline>
                {experienceData.map((exp, index) => (
                    <VerticalTimelineElement
                        key={index}
                        date={exp.date}
                        iconStyle={{ background: 'linear-gradient(to right, #392467, #5D3587, #A367B1)', color: '#fff' }}
                        contentStyle={{ background: 'rgba(255, 255, 255, 0.9)', color: '#E5CFF7', borderRadius: '15px' }}
                        icon={<FaLaptop />}
                    >
                        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
                        <p className="vertical-timeline-element-description">{exp.description}</p>
                    </VerticalTimelineElement>
                ))}
                <VerticalTimelineElement
                    iconStyle={{ background: 'linear-gradient(to right, #392467, #5D3587, #A367B1)', color: '#FFFF' }}
                    icon={<FaHourglassEnd className="spin"/>}
                />
            </VerticalTimeline>
        </div>
    );
}

export default Experience;