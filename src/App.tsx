import { useState, useEffect } from 'react'
import { Box, List, ListItem, ListItemText, Container, AppBar, Fab, Popover } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { Link } from 'react-scroll'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components (to be created)
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Recommendations from './components/Recommendations'

const App = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'recommendations', label: 'Recommendations' },
    { id: 'blog', label: 'Blog' }
  ]

  /* const socialLinks = [
    { icon: <EmailIcon />, url: 'mailto:chathucm2013@gmail.com', label: 'Email' },
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/chathurika-ariyarathne/', label: 'LinkedIn' },
    { icon: <ArticleIcon />, url: 'https://medium.com/@chathucm2013', label: 'Medium' }
  ] */

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh' }}>
      <AppBar
        position="fixed"
        color="transparent"
        elevation={0}
        sx={{
          background: 'transparent',
          boxShadow: 'none',
          p: 2
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Fab
            color="primary"
            aria-label="menu"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            sx={{
              position: 'fixed',
              top: 20,
              left: 20,
              zIndex: 1000,
              background: 'rgba(149, 117, 205, 0.9)',
              transition: 'all 0.3s ease-in-out',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  boxShadow: '0 0 0 0 rgba(149, 117, 205, 0.4)'
                },
                '70%': {
                  boxShadow: '0 0 0 15px rgba(149, 117, 205, 0)'
                },
                '100%': {
                  boxShadow: '0 0 0 0 rgba(149, 117, 205, 0)'
                }
              },
              '&:hover': {
                transform: 'scale(1.1)',
                background: 'rgba(149, 117, 205, 1)'
              }
            }}
          >
            {Boolean(anchorEl) ? <CloseIcon sx={{ color: '#fff' }} /> : <MenuIcon sx={{ color: '#fff' }} />}
          </Fab>
        </Box>
      </AppBar>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            mt: 1,
            ml: -1,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            borderRadius: 2,
            boxShadow: '0 8px 32px rgba(149, 117, 205, 0.2)',
            border: '1px solid rgba(149, 117, 205, 0.1)',
            overflow: 'hidden',
            animation: 'fadeIn 0.3s ease-out',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(-10px)' },
              to: { opacity: 1, transform: 'translateY(0)' }
            }
          }
        }}
      >
        <List sx={{ width: 200, py: 1 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.id}
              onClick={() => setAnchorEl(null)}
              sx={{
                py: 1,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(149, 117, 205, 0.08)',
                  transform: 'translateX(5px)'
                }
              }}
            >
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                style={{ width: '100%', padding: '8px 16px' }}
              >
                <ListItemText 
                  primary={item.label}
                  sx={{ 
                    color: 'primary.main',
                    '& .MuiTypography-root': {
                      fontWeight: 500
                    }
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Popover>

      <Box id="home" sx={{ position: 'relative', minHeight: '100vh' }}>
        <Box
          component="video"
          autoPlay
          muted
          loop
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.6
          }}
        >
          <source src="/portfolio/background.mp4" type="video/mp4" />
        </Box>
        <Container maxWidth="lg">
          <Box sx={{ position: 'relative', zIndex: 1, minHeight: '100vh' }}>
            <Home />
          </Box>
          <Box id="about" minHeight="100vh" data-aos="fade-up">
            <About />
          </Box>
          <Box id="skills" minHeight="100vh" data-aos="fade-up">
            <Skills />
          </Box>
          <Box id="experience" minHeight="100vh" data-aos="fade-up">
            <Experience />
          </Box>
          <Box id="recommendations" minHeight="100vh" data-aos="fade-up">
            <Recommendations />
          </Box>
          <Box id="blog" minHeight="100vh" data-aos="fade-up">
            <Blog />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

export default App