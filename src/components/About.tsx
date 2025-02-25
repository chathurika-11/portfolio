import { Box, Typography, Container, Paper, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArticleIcon from '@mui/icons-material/Article'

const About = () => {
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
        About Me
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center'
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            flex: 1,
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2
          }}
          data-aos="fade-right"
        >
          <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Professional Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            As a Software QA Engineer with 5 years of experience, I specialize in ensuring the highest quality of software products through comprehensive testing methodologies and automation practices.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4 }}>
            I hold a BSc degree and have developed expertise in various testing frameworks and tools throughout my career.
          </Typography>
        </Paper>

        <Paper
          elevation={3}
          sx={{
            p: 4,
            flex: 1,
            background: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 2
          }}
          data-aos="fade-left"
        >
          <Typography variant="h6" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
            Passion & Goals
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
            I am passionate about sharing knowledge and experiences through my technical blog posts on Medium, where I write about QA best practices, automation techniques, and industry insights.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            My goal is to contribute to creating robust and reliable software products while continuously learning and adapting to new technologies in the ever-evolving tech landscape.
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}

export default About