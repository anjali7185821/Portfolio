import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import reactIcon from '/public/images/react-icon.png'; // Adjust path to your icon
import dockerIcon from '/public/images/docker-icon.png'; // Adjust path to your icon
import restIcon from '/public/images/rest-api-icon.png'; // Adjust path to your icon

const TechnicalSkills = () => {
  const sectionStyle = {
    background: '#000',
    color: '#f8f9fa',
    padding: '50px 0',
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, delayChildren: 0.2, staggerChildren: 0.1 } },
  };

  const skillGroupVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const skillItemStyle = {
    backgroundColor: '#242424',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 0 0 rgba(0, 0, 0, 0)', // Initial shadow
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  };

  const skillTextStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginBottom: '0',
    marginLeft: '15px',
  };

  const skillLevelStyle = {
    fontSize: '0.9rem',
    color: '#ccc',
    marginLeft: 'auto',
  };

  const iconStyle = {
    fontSize: '2rem', // Increased icon size
    color: '#6c2bd9',
  };

  const frontendSkills = [
    { name: 'HTML5', level: 'Advanced', icon: 'html5' },
    { name: 'CSS3', level: 'Advanced', icon: 'css3' },
    { name: 'JavaScript', level: 'Advanced', icon: 'javascript' },
    { name: 'React', level: 'Advanced', icon: 'react' },
    { name: 'Responsive Design', level: 'Advanced', icon: 'layout-split' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 'Advanced', icon: 'node-js' },
    { name: 'Python', level: 'Intermediate', icon: 'python' },
    { name: 'SQL', level: 'Advanced', icon: 'database' },
    { name: 'PostgreSQL', level: 'Intermediate', icon: 'postgresql' },
    { name: 'REST APIs', level: 'Advanced', icon: 'link-4' },
  ];

  const toolsAndOthers = [
    { name: 'Git', level: 'Advanced', icon: 'git' },
    { name: 'Docker', level: 'Basic', icon: 'docker' },
    { name: 'AWS', level: 'Basic', icon: 'cloud' },
    { name: 'Agile', level: 'Advanced', icon: 'list-check' },
  ];

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'html5': return <i className="bi bi-file-code-fill" style={iconStyle}></i>;
      case 'css3': return <i className="bi bi-palette-fill" style={iconStyle}></i>;
      case 'javascript': return <i className="bi bi-file-earmark-code-fill" style={iconStyle}></i>;
      case 'react': return <img src={reactIcon} alt="React" style={iconStyle} />;
      case 'responsive design': return <i className="bi bi-layout-split" style={iconStyle}></i>;
      case 'node.js': return <i className="bi bi-server" style={iconStyle}></i>;
      case 'python': return <i className="bi bi-file-earmark-zip-fill" style={iconStyle}></i>;
      case 'sql': return <i className="bi bi-hdd-fill" style={iconStyle}></i>;
      case 'postgresql': return <i className="bi bi-database-fill" style={iconStyle}></i>;
      case 'rest apis': return <img src={restIcon} alt="Rest API" style={iconStyle} />;
      case 'git': return <i className="bi bi-git" style={iconStyle}></i>;
      case 'docker': return <img src={dockerIcon} alt="Docker" style={iconStyle} />;
      case 'aws': return <i className="bi bi-cloud-fill" style={iconStyle}></i>;
      case 'agile': return <i className="bi bi-list-check" style={iconStyle}></i>;
      default: return null;
    }
  };

  return (
    <section style={sectionStyle} id="skills">
      <Container>
        <motion.h2 className="text-center mb-5" variants={skillGroupVariants}>
          Technical Skills
        </motion.h2>
        <Row as={motion.div} variants={containerVariants}>
          <Col md={4} className="mb-4">
            <motion.div variants={skillGroupVariants}>
              <h5 className="mb-3">Frontend Development</h5>
              {frontendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={skillItemStyle}
                  whileHover={{ boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)' }}
                >
                  {getIcon(skill.name)}
                  <div style={skillTextStyle}>
                    {skill.name}<br/>
                    <span style={skillLevelStyle}>{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div variants={skillGroupVariants}>
              <h5 className="mb-3">Backend Development</h5>
              {backendSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  style={skillItemStyle}
                  whileHover={{  boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)' }}
                >
                  {getIcon(skill.name)}
                  <div style={skillTextStyle}>
                    {skill.name}<br/>
                    <span style={skillLevelStyle}>{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>
          <Col md={4} className="mb-4">
            <motion.div variants={skillGroupVariants}>
              <h5 className="mb-3">Tools & Others</h5>
              {toolsAndOthers.map((skill, index) => (
                <motion.div
                  key={index}
                  style={skillItemStyle}
                  whileHover={{  boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)' }}
                >
                  {getIcon(skill.name)}
                  <div style={skillTextStyle}>
                    {skill.name}<br/>
                    <span style={skillLevelStyle}>{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TechnicalSkills;