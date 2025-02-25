import { Box, Typography, Container, Paper, Grid } from '@mui/material'
import BugReportIcon from '@mui/icons-material/BugReport'
import CodeIcon from '@mui/icons-material/Code'
import AutomationIcon from '@mui/icons-material/Settings'
import TestingIcon from '@mui/icons-material/CheckCircle'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Manual Testing',
      icon: <BugReportIcon sx={{ fontSize: 40 }} />,
      skills: ['Functional Testing', 'Regression Testing', 'User Acceptance Testing', 'Test Case Design', 'Bug Reporting']
    },
    {
      title: 'Automation Testing',
      icon: <AutomationIcon sx={{ fontSize: 40 }} />,
      skills: ['Selenium WebDriver', 'TestNG', 'Cucumber', 'REST Assured', 'JUnit']
    },
    {
      title: 'Programming',
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      skills: ['Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS']
    },
    {
      title: 'Tools & Frameworks',
      icon: <TestingIcon sx={{ fontSize: 40 }} />,
      skills: ['JIRA', 'Jenkins', 'Git', 'Postman', 'Maven']
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
          background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
        }}
        data-aos="fade-up"
      >
        Skills
      </Typography>

      <Grid container spacing={4}>
        {skillCategories.map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                height: '100%',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 2,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Box sx={{ textAlign: 'center', mb: 2, color: 'primary.main' }}>
                {category.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  mb: 2,
                  textAlign: 'center',
                  color: 'primary.main',
                  fontWeight: 600
                }}
              >
                {category.title}
              </Typography>
              <Box sx={{ textAlign: 'center' }}>
                {category.skills.map((skill, skillIndex) => (
                  <Typography
                    key={skillIndex}
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: 'text.secondary',
                      '&:last-child': { mb: 0 }
                    }}
                  >
                    {skill}
                  </Typography>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Skills