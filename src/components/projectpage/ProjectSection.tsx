import styled from 'styled-components';
import { Button } from 'react-bootstrap';

// Sample project data (you can replace this with data from a CMS or API)
const projects = [
    {
        title: 'Growbizh - Business Loan Website',
        description: 'A website for Growbizh, a platform specializing in providing business loan solutions.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
        viewProject: 'https://growbizh.com',
        image: 'https://placehold.co/600x400/333/FFF?text=Business+Loan+Website',
    },
    {
        title: 'Portfolio Website',
        description: 'My personal portfolio website showcasing my skills, projects, and experience.',
        technologies: ['ReactJS', 'Typescript', 'Bootstrap'],
        sourceCode: 'https://github.com/anjali7185821/Portfolio',
        image: 'https://placehold.co/600x400/333/FFF?text=Portfolio+Website',
    },
    {
        title: 'Employee Management System',
        description: 'A system to manage employees, their details, and related operations.',
        technologies: ['Java', 'Apache NetBeans', 'MySQL'],
        sourceCode: 'https://github.com/anjali7185821/Employee-Management-System-Project',
        image: 'https://placehold.co/600x400/333/FFF?text=Employee+Management',
    },
    {
        title: 'E-Commerce Fashion Website',
        description: 'An e-commerce website for fashion products, allowing users to browse and purchase clothing and accessories.',
        technologies: ['HTML', 'CSS', 'Bootstrap'],
        sourceCode: 'https://github.com/anjali7185821/E-commerce-Fashion-Website',
        image: 'https://placehold.co/600x400/333/FFF?text=Fashion+E-commerce',
    },
];

// Styled Components
const ProjectsSection = styled.section`
  padding: 4rem 0;
  background-color: #121212; /* Dark background */
  color: #fff;
  text-align: center;
`;

const ProjectsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  font-weight: bold;
  color: #fff;
`;

const ProjectsDescription = styled.p`
  font-size: 1.1rem;
  color: #b1b1b1;
  margin-bottom: 3rem;
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
`;

const ProjectGrid = styled.div`
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

const ProjectCard = styled.div`
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
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
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
  color: #fff;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #b1b1b1;
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
  background-color: #00b8d4;
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
    background-color: #00869e;
  }
`;

const SourceCodeButton = styled(Button)`
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

function Projects() {
    return (
        <ProjectsSection>
            <ProjectsTitle>Featured Projects</ProjectsTitle>
            <ProjectsDescription>
                Explore my recent work and creative endeavors.
            </ProjectsDescription>
            <ProjectGrid>
                {projects.map((project, index) => (
                    <ProjectCard key={index}>
                        <ProjectImage src={project.image} alt={project.title} />
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.description}</ProjectDescription>
                        <Technologies>
                            {project.technologies.map((tech, index) => (
                                <Technology key={index}>{tech}</Technology>
                            ))}
                        </Technologies>
                        <LinksContainer>
                            <ViewProjectButton as="a" href={project.viewProject} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-link-45deg"></i>  View Project
                            </ViewProjectButton>
                            <SourceCodeButton as="a" href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                                <i className="bi bi-github"></i> Source Code
                            </SourceCodeButton>
                        </LinksContainer>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    );
}

export default Projects;
