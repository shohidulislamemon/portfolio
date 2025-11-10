import React from "react";
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import SkillItem from "./SkillItem";

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <TimelineItem
            title="B.Sc. in Computer Science & Engineering"
            date="Nov 2018 — Dec 2022"
            description="International Islamic University Chittagong. Focused on software development, web technologies, and database systems."
          />
          <TimelineItem
            title="Higher Secondary Certificate (HSC)"
            date="Jul 2016 — May 2018"
            description="Raozan Government College, major in Science."
          />
        </ol>
      </div>

      {/* Experience / Projects Section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Projects & Experience</h3>
        </div>

        <ol className="timeline-list">
          <TimelineItem
            title="IIUC Alumni Platform (MERN Stack Project)"
            date="2022 — 2023"
            description="Developed and deployed a full-stack Alumni Management platform using MERN stack. Implemented secure JWT authentication, event management, and a job board for alumni networking."
          />
          <TimelineItem
            title="HandsOn – Community Volunteering Platform"
            date="2023"
            description="Built a MERN stack application to connect volunteers and organizations through event creation, help requests, and impact tracking using React-Vite and Tailwind CSS."
          />
          <TimelineItem
            title="Courier & Parcel Management System"
            date="2025"
            description="Designed and developed a multi-role MERN system (Admin, Delivery Agent, Customer) with real-time tracking and parcel management features."
          />
        </ol>
      </div>

      {/* Skills Section */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML, CSS, JavaScript" value={90} />
          <SkillItem title="React.js & Redux" value={85} />
          <SkillItem title="Node.js (Express) & MongoDB" value={80} />
          <SkillItem title="Tailwind CSS" value={85} />
          <SkillItem title="Git & GitHub" value={80} />
          <SkillItem title="MySQL" value={70} />
          <SkillItem title="Figma (UI/UX Design)" value={50} />
        </ul>
      </div>
    </section>
  );
};

export default Resume;
