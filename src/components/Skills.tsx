import { Box, Typography, Container, Grid } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport'
import CodeIcon from '@mui/icons-material/Code'
import AutomationIcon from '@mui/icons-material/Settings'
import TestingIcon from '@mui/icons-material/CheckCircle'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Testing Types',
      icon: <TestingIcon />,
      skills: ['Smoke Testing', 'Sanity Testing', 'System Testing', 'Integration Testing', 'Regression Testing', 'UI/UX Testing','Re-Testing','End-to-End Testing', 'Cross-Browser Testing','Ad-Hoc Testing','Database Testing', 'API Testing']
    },
    {
      title: 'Core Skills',
      icon: <AutomationIcon />,
      skills: ['Requirement Analysis','Test Case Design & Execution','Test Result Analysis','Test Documentation','Defect Detection & Reporting','Agile & Scrum Practices','Effective Communication','Team Collaboration','Analytical & Problem-Solving Skills']
    },
    {
      title: 'Tools',
      icon: <BugReportIcon />,
      skills: ['JIRA','ClickUp','TestFlight','Android Studio','Notion','Postman']
    },
    {
      title: 'Platforms',
      icon: <CodeIcon />,
      skills: ['Web Applications','Mobile Applications(iOS & Android)','macOS','Windows','Shopify','Social Media Integrations']
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 6,
          textAlign: 'center',
          background: 'linear-gradient(45deg, rgb(169, 144, 212) 30%, #9575cd 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          WebkitTextStroke: '2px #000',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
          '&::before': {
            content: '"Skills"',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, rgb(169, 144, 212) 30%, #9575cd 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '0',
            zIndex: 2
          }
        }}
        data-aos="fade-up"
      >
        Skills
      </Typography>

      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Box
              sx={{
                p: 4,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(149, 117, 205, 0.15)',
                border: '1px solid rgba(149, 117, 205, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 40px rgba(149, 117, 205, 0.25)',
                  '& .category-icon': {
                    transform: 'rotate(360deg) scale(1.2)',
                    color: '#9575cd'
                  }
                }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 3,
                  gap: 2
                }}
              >
                <Box
                  className="category-icon"
                  sx={{
                    p: 1.5,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(149, 117, 205, 0.1)',
                    color: '#9575cd',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                    '& svg': {
                      fontSize: '2rem'
                    }
                  }}
                >
                  {category.icon}
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <Typography
                    key={skillIndex}
                    variant="body2"
                    sx={{
                      py: 1,
                      px: 2,
                      backgroundColor: 'rgba(149, 117, 205, 0.08)',
                      color: '#9575cd',
                      borderRadius: '20px',
                      fontWeight: 500,
                      fontSize: '0.9rem',
                      border: '1px solid rgba(149, 117, 205, 0.1)',
                      transition: 'all 0.3s ease',
                      cursor: 'default',
                      '&:hover': {
                        backgroundColor: '#9575cd',
                        color: '#fff',
                        transform: 'translateY(-3px) scale(1.05)',
                        boxShadow: '0 4px 12px rgba(149, 117, 205, 0.2)'
                      }
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills