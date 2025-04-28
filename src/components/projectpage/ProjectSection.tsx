import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

// Sample project data (you can replace this with data from a CMS or API)
const projects = [
    {
        title: 'Growbizh - Business Loan Website',
        description: 'A website for Growbizh, a platform specializing in providing business loan solutions.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        viewProject: 'https://growbizh.com',
        image: '/images/growbizh-img.png',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my skills, projects, and experience.',
        technologies: ['ReactJS', 'Typescript', 'Bootstrap'],
        sourceCode: 'https://github.com/anjali7185821/Portfolio',
        image: '/images/Portfolio-img.jpg',
    },
    {
        title: 'Employee Management System',
        description: 'A system to manage employees, their details, and related operations.',
        technologies: ['Java', 'Apache NetBeans', 'MySQL'],
        sourceCode: 'https://github.com/anjali7185821/Employee-Management-System-Project',
        image: '/images/employee-management-img.png',
    },
    {
        title: 'E-Commerce Fashion Website',
        description: 'An e-commerce website for fashion products, allowing users to browse and purchase clothing and accessories.',
        technologies: ['HTML', 'CSS', 'Bootstrap'],
        sourceCode: 'https://github.com/anjali7185821/E-commerce-Fashion-Website',
        image: '/images/e-commerce-img.png',
    },
];

// Styled Components
const ProjectsSection = styled(motion.section)`
    padding: 4rem 0;
    background-color: #121212; /* Dark background */
    color: #fff;
    text-align: center;
`;

const ProjectsTitle = styled(motion.h2)`
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
    color: #a259ff;
`;

const ProjectsDescription = styled(motion.p)`
    font-size: 1.1rem;
    color: #fff;
    margin-bottom: 3rem;
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
`;

const ProjectGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 1rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const ProjectCard = styled(motion.div)`
    background-color: #1f1f1f; /* Dark card background */
    border-radius: 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-align: left;
    height: 100%; /* Make cards the same height */
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 0px 20px 5px rgba(162, 89, 255, 0.5);
    }
`;

const ProjectImage = styled.img`
    width: 100%;
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
    aspect-ratio: 16/9; /* Maintain aspect ratio */
    object-fit: cover;
`;

const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #a259ff;
`;

const ProjectDescription = styled.p`
    font-size: 1rem;
    color: #fff;
    margin-bottom: 1.5rem;
    flex-grow: 1; /* Allow description to take up available space */
`;

const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`;

const Technology = styled.span`
    background-color: #333; /* Dark tech tag */
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
`;

const LinksContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

const ViewProjectButton = styled(Button)`
    text-decoration: none;
    background-color: #a259ff;
    color: #fff;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: background-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background-color:rgb(126, 57, 246);
    }
`;

const SourceCodeButton = styled(Button)`
    text-decoration: none;
    background-color: #333;
    color: #fff;
    border: 1px solid #555;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
        background-color: #444;
        border-color: #777;
    }
`;

const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
};

const titleVariants = {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7, delay: 0.2 } },
};

const descriptionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.7, delay: 0.4 } },
};

const gridVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const cardVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.7 } },
};

function Projects() {
    return (
        <ProjectsSection
            variants={sectionVariants}
            initial="initial"
            animate="animate"
        >
            <ProjectsTitle
                variants={titleVariants}
                initial="initial"
                animate="animate"
            >
                Featured Projects
            </ProjectsTitle>
            <ProjectsDescription
                variants={descriptionVariants}
                initial="initial"
                animate="animate"
            >
                Explore my recent work and creative endeavors.
            </ProjectsDescription>
            <ProjectGrid
                variants={gridVariants}
                initial="initial"
                animate="animate"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        variants={cardVariants}
                    >
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <Technologies>
                            {project.technologies.map((tech, techIndex) => (
                                <Technology key={techIndex}>{tech}</Technology>
                            ))}
                        </Technologies>
                        <LinksContainer>
                            {project.viewProject && (
                                <ViewProjectButton as="a" href={project.viewProject} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-link-45deg"></i> View Project <i className="bi bi-arrow-right"></i>
                                </ViewProjectButton>
                            )}
                            {project.sourceCode && (
                                <SourceCodeButton as="a" href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github"></i> Source Code <i className="bi bi-arrow-right"></i>
                                </SourceCodeButton>
                            )}
                        </LinksContainer>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    );
}

export default Projects;