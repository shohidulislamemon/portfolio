import { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";
const servicesData = [
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Web Development",
    description:
      "Building dynamic and secure web applications using the MERN stack with modern design and functionality.",
  },
  {
    icon: "/images/icon-app.svg",
    title: "Frontend Development",
    description:
      "Creating responsive, user-friendly interfaces using React.js, Tailwind CSS, and clean UI principles.",
  },
  {
    icon: "/images/icon-design.svg",
    title: "Backend Development",
    description:
      "Developing scalable APIs and implementing secure authentication using Node.js, Express, and MongoDB.",
  },
  {
    icon: "/images/icon-quote.svg",
    title: "Problem Solving",
    description:
      "Writing efficient code and optimizing performance with a focus on maintainability and real-world problem-solving.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          I'm Shohidul Islam Emon, a passionate Web Developer with a strong
          focus on creating functional, responsive, and visually appealing web
          applications. I love transforming ideas into digital solutions that
          are both user-friendly and engaging.
        </p>

        <p>
          I specialize in building full-stack applications using the MERN stack.
          My approach combines clean design, optimized performance, and secure
          architecture to deliver meaningful user experiences. I’ve worked on
          projects like an Alumni Management Platform that connects students and
          alumni through interactive networking, event management, and
          job-sharing features.
        </p>

        <p>
          My goal is to keep learning, innovating, and contributing to projects
          that make an impact through creativity and technology.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* <!--
      - testimonials
    --> */}

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              avatar={testimonial.avatar}
              testimonial={testimonial.testimonial}
            />
          ))}
        </ul>
      </section>
      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="images/logo-1-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-2-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-3-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-4-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-5-color.png" alt="client logo" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="images/logo-6-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
