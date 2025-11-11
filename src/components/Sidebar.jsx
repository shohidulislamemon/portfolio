import { useState } from "react";
import { GiCalendar, GiClawSlashes, GiMailbox, GiPhone, GiRoad } from "react-icons/gi";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((v) => !v);

  return (
    <aside className={`sidebar ${open ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/images/emon.jpg" alt="" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name">Shohidul Islam</h1>
          <p className="title">Web Developer</p>
        </div>
        <button
          className={`info_more-btn ${open ? "active" : ""}`}
          onClick={toggleOpen}
          aria-expanded={open}
          aria-controls="sidebar-contacts"
        >
          <span>{open ? "Hide Contacts" : "Show Contacts"}</span>
          <GiClawSlashes />
        </button>
      </div>

      {/* contact-info */}
      <div id="sidebar-contacts" className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:shohidulislamemon99@gmail.com"
                className="contact-link"
              >
                shohidulislamemon99@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+8801646506191" className="contact-link">
                +8801646506191
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BirthDay</p>
              <time dateTime="1999-08-24" className="contact-link">
                Aug 24, 1999
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiRoad />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Chittagong,BD</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
