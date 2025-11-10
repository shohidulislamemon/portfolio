import { useState, useEffect } from "react";
import { FaRegEye, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        fetch("/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setFilteredProjects(data);
            })
            .catch((error) => console.error("Error loading project data:", error));
    }, []);

    // Function to handle category filter selection
    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredProjects(projects);
        } else {
            const filtered = projects.filter(
                (project) => project.category === category
            );
            setFilteredProjects(filtered);
        }
    };

    return (
        <section className="portfolio" data-page="portfolio">
            <header>
                <h2 className="h2 article-title">Portfolio</h2>
            </header>

            {/* Filter buttons */}
            <ul className="filter-list">
                {["All", "Web design", "Applications", "Web development"].map(
                    (category) => (
                        <li className="filter-item" key={category}>
                            <button
                                className={category === selectedCategory ? "active" : ""}
                                onClick={() => handleFilterClick(category)}
                                data-filter-btn
                            >
                                {category}
                            </button>
                        </li>
                    )
                )}
            </ul>

            {/* Portfolio items */}
            <section className="projects">
                <ul className="project-list">
                    {filteredProjects.map((project) => (
                        <li
                            className="project-item active"
                            data-filter-item
                            data-category={project.category}
                            key={project.id}
                        >
                            <a href="#">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        <FaRegEye />
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>

                            <div className="project-links" style={{ marginTop: 8 }}>
                                {project.github ? (
                                    <a
                                        className="project-link-btn"
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub`}
                                    >
                                        <FaGithub />
                                        <span className="project-link-text">GitHub</span>
                                    </a>
                                ) : (
                                    <button className="project-link-btn disabled" aria-disabled="true">
                                        <FaGithub />
                                        <span className="project-link-text">GitHub</span>
                                    </button>
                                )}

                                {project.live ? (
                                    <a
                                        className="project-link-btn"
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} Live demo`}
                                    >
                                        <FaExternalLinkAlt />
                                        <span className="project-link-text">Live</span>
                                    </a>
                                ) : (
                                    <button className="project-link-btn disabled" aria-disabled="true">
                                        <FaExternalLinkAlt />
                                        <span className="project-link-text">Live</span>
                                    </button>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Portfolio;
