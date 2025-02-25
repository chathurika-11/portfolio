import { Box, Typography, Container, Avatar, IconButton } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MediumIcon from '@mui/icons-material/Article'

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 4, md: 6 },
          width: '100%',
          maxWidth: '1000px',
          mx: 'auto',
          px: 3,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -100,
            right: -100,
            width: 200,
            height: 200,
            background: 'radial-gradient(circle, rgba(149, 117, 205, 0.1) 0%, rgba(179, 157, 219, 0.05) 100%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            zIndex: -1
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
            width: '100%',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '120%',
                height: '120%',
                background: 'linear-gradient(45deg, rgba(149, 117, 205, 0.1), rgba(179, 157, 219, 0.1))',
                borderRadius: '50%',
                filter: 'blur(15px)',
                zIndex: -1
              }
            }}
            data-aos="fade-right"
          >
            <Avatar
              src="/Portfolio/src/asserts/profile-pic.png"
              alt="Chathurika Ariyarathne"
              sx={{
                width: { xs: 120, md: 150 },
                height: { xs: 120, md: 150 },
                boxShadow: '0 8px 24px rgba(149, 117, 205, 0.2), 0 0 20px rgba(149, 117, 205, 0.4), 0 0 40px rgba(149, 117, 205, 0.2)',
                border: '4px solid rgba(149, 117, 205, 0.2)',
                transition: 'all 0.3s ease-in-out',
                animation: 'glow 3s ease-in-out infinite',
                '@keyframes glow': {
                  '0%': {
                    boxShadow: '0 8px 24px rgba(149, 117, 205, 0.2), 0 0 20px rgba(149, 117, 205, 0.4), 0 0 40px rgba(149, 117, 205, 0.2)'
                  },
                  '50%': {
                    boxShadow: '0 8px 24px rgba(149, 117, 205, 0.3), 0 0 30px rgba(149, 117, 205, 0.6), 0 0 50px rgba(149, 117, 205, 0.3)'
                  },
                  '100%': {
                    boxShadow: '0 8px 24px rgba(149, 117, 205, 0.2), 0 0 20px rgba(149, 117, 205, 0.4), 0 0 40px rgba(149, 117, 205, 0.2)'
                  }
                },
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 8px 24px rgba(149, 117, 205, 0.4), 0 0 40px rgba(149, 117, 205, 0.6), 0 0 60px rgba(149, 117, 205, 0.4)'
                }
              }}
            />
          </Box>
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }} data-aos="fade-left">
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 500,
                mb: 2,
                background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(149, 117, 205, 0.1)'
              }}
            >
              Chathurika Ariyarathne
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 3,
                fontWeight: 500
              }}
            >
              Software Quality Assurance Engineer
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: { xs: 'center', md: 'flex-start' },
                mt: 2
              }}
            >
              {[
                { icon: <EmailIcon />, url: 'mailto:chathucm2013@gmail.com', label: 'Email' },
                { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/chathurika-ariyarathne/', label: 'LinkedIn' },
                { icon: <MediumIcon />, url: 'https://medium.com/@chathucm2013', label: 'Medium' }
              ].map((link, index) => (
                <IconButton
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    backgroundColor: 'rgba(149, 117, 205, 0.05)',
                    color: '#9575cd',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(149, 117, 205, 0.1)',
                    backdropFilter: 'blur(8px)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(149, 117, 205, 0.1) 0%, rgba(149, 117, 205, 0) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease-in-out'
                    },
                    '&:hover': {
                      backgroundColor: '#9575cd',
                      color: '#fff',
                      transform: 'translateY(-3px) scale(1.05)',
                      boxShadow: '0 8px 20px rgba(149, 117, 205, 0.3), 0 0 20px rgba(149, 117, 205, 0.2)',
                      border: '1px solid rgba(149, 117, 205, 0.2)',
                      '&::before': {
                        opacity: 1
                      }
                    },
                    '& .MuiSvgIcon-root': {
                      fontSize: '1.5rem',
                      filter: 'drop-shadow(0 0 8px rgba(149, 117, 205, 0.3))',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'rotate(8deg)'
                      }
                    }
                  }}
                >
                  {link.icon}
                  <Typography
                    variant="body2"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      fontWeight: 500
                    }}
                  >
                    {link.label}
                  </Typography>
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
        <Box 
          sx={{ 
            textAlign: 'left',
            width: '100%',
            maxWidth: '1000px'
          }} 
          data-aos="fade-up"
        >
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.8,
              fontSize: '1.1rem'
            }}
          >
            Passionate about ensuring software quality through comprehensive testing methodologies and automation practices.
            Let's create reliable and user-friendly applications together.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Home