import React from 'react';
import { Container} from 'react-bootstrap';
import { motion } from 'framer-motion';

interface JourneyItem {
  title: string;
  subtitle?: string;
  institution: string;
  duration: string;
  description?: string[];
  percentageOrCGPA?: string;
  status?: string;
  icon: string; // Bootstrap icon class
}

const journeyData: JourneyItem[] = [
  {
    title: 'Software Development Intern',
    subtitle: 'Smile Digital and AI Labs, Pune',
    institution: '',
    duration: 'Internship (Oct 2024 - Ongoing)',
    description: [
      'Developed full-stack web applications',
      'Collaborated with cross-functional teams',
      'Implemented new features and optimizations',
    ],
    icon: 'bi-briefcase-fill',
  },


  {
    title: 'Master of Computer Application',
    subtitle: 'Web Development',
    institution: 'Lovely Professional University, Phagwara',
    duration: '2023-2025',
    percentageOrCGPA: 'CGPA: 9.06',
    icon: 'bi-mortarboard-fill',
  },
  {
    title: 'Master of Science',
    subtitle: 'Chemistry',
    institution: 'BBMKU, Dhanbad',
    duration: '2020-2023',
    percentageOrCGPA: 'CGPA: 7.5',
    icon: 'bi-mortarboard-fill',
  },
  {
    title: 'Bachelor of Science',
    subtitle: 'Chemistry',
    institution: 'BBMKU, Dhanbad',
    duration: '2016-2019',
    percentageOrCGPA: 'Percentage: 70.8%',
    icon: 'bi-mortarboard-fill',
  },
  {
    title: 'Higher Secondary Education',
    subtitle: 'Science Stream',
    institution: 'Indian School of Learning (CBSE)',
    duration: '2013-2015',
    percentageOrCGPA: 'Percentage: 83.2%',
    icon: 'bi-mortarboard-fill',
  },


];

const JourneySection: React.FC = () => {
  const sectionStyle = {
    background: '#111', // Dark background, adjust as needed
    color: '#ccd6f6', // Light text color
    padding: '80px 0',
  };

  const headingStyle = {
    color: '#6c2bd9', // Highlight color
    marginBottom: '50px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center' as const,
  };

  const timelineStyle = {
    position: 'relative' as const,
    padding: '0',
    listStyle: 'none',
  };

  const timelineItemStyle = {
    position: 'relative' as const,
    marginBottom: '50px',
  } as const;

  const timelineItemContentStyle = {
    background: '#2d2d2d', // Darker background for content
    color: '#a8b2d1',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out', // Slower transition
  };

  const timelineIconStyle = {
    position: 'absolute' as const,
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#6c2bd9',
    color: '#0a192f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1,
  } as const;

  const timelineLineStyle = {
    position: 'absolute' as const,
    top: '0',
    bottom: '0',
    left: '50%',
    width: '2px',
    background: '#6c2bd9', // Highlight color for the line
    zIndex: 0,
    transform: 'translateX(-50%)',
  };

  const timelineTitleStyle = {
    color: '#ccd6f6',
    marginBottom: '5px',
    fontWeight: 'bold',
  };

  const timelineSubtitleStyle = {
    color: '#6c2bd9',
    marginBottom: '10px',
    fontSize: '0.9rem',
  };

  const timelineInstitutionStyle = {
    color: '#a8b2d1',
    marginBottom: '5px',
    fontSize: '0.9rem',
  };

  const timelineDurationStyle = {
    color: '#6c2bd9',
    fontSize: '0.8rem',
    marginBottom: '10px',
  };

  const timelineDescriptionStyle = {
    color: '#a8b2d1',
    fontSize: '0.9rem',
    marginBottom: '8px',
  };

  const timelinePercentageCGPAStyle = {
    color: '#ccd6f6',
    fontSize: '0.9rem',
    marginTop: '10px',
    fontWeight: 'bold',
  };

  const timelineStatusStyle = {
    color: '#ffcb6b', // Example color for ongoing
    fontSize: '0.9rem',
    marginTop: '5px',
    fontStyle: 'italic',
  };

  const sectionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8 } }, // Overall section animation
  };

  const itemVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }, // Slower initial animation
  };

 

  return (
    <motion.section style={sectionStyle} variants={sectionVariants} initial="initial" animate="animate" id="journey">
      <Container>
        <motion.h2 style={headingStyle}>My Journey</motion.h2>
        <ul style={timelineStyle}>
          {journeyData.map((item, index) => (
            <motion.li style={timelineItemStyle} key={index} variants={itemVariants}>
              <div style={timelineIconStyle}>
                <i className={`bi ${item.icon}`}></i>
              </div>
              {index < journeyData.length - 1 && <div style={timelineLineStyle}></div>}
              <motion.div
                style={{
                  ...timelineItemContentStyle,
                  marginLeft: index % 2 === 0 ? 'calc(50% + 40px)' : 'auto',
                  marginRight: index % 2 !== 0 ? 'calc(50% + 40px)' : 'auto',
                  textAlign: index % 2 !== 0 ? 'right' : 'left',
                }}
                variants={{
                  initial: { opacity: 0, y: 50, scale: 1, boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.3 } },
                  hover: { scale: 1.03, boxShadow: '0px 0px 20px 5px rgba(162, 89, 255, 0.5)' }
                }}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <h3 style={timelineTitleStyle}>{item.title}</h3>
                {item.subtitle && <h6 style={timelineSubtitleStyle}>{item.subtitle}</h6>}
                {item.institution && <p style={timelineInstitutionStyle}>{item.institution}</p>}
                <p style={timelineDurationStyle}>{item.duration}</p>
                {item.description && (
                  <ul>
                    {item.description.map((desc, i) => (
                      <li key={i} style={timelineDescriptionStyle}>{desc}</li>
                    ))}
                  </ul>
                )}
                {item.percentageOrCGPA && (
                  <p style={timelinePercentageCGPAStyle}>{item.percentageOrCGPA}</p>
                )}
                {item.status && <p style={timelineStatusStyle}>{item.status}</p>}
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </motion.section>
  );
};

export default JourneySection;