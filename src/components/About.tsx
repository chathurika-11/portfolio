import { Box, Typography, Container, Paper } from '@mui/material'

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
          fontWeight: 700,
          transform: 'scale(1)',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)'
          }
        }}
        data-aos="fade-up"
      >
        About Me
      </Typography>

      <Box 
        sx={{ 
          maxWidth: 1200, 
          mx: 'auto', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 6,
          flexDirection: { xs: 'column', md: 'row' },
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          borderRadius: '24px',
          p: { xs: 2, md: 4 },
          boxShadow: '0 8px 32px rgba(149, 117, 205, 0.15)',
          border: '1px solid rgba(149, 117, 205, 0.1)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 12px 40px rgba(149, 117, 205, 0.25)'
          }
        }}
      >
        <Box
          sx={{
            flex: { xs: '1 1 100%', md: '0 0 400px' },
            height: '400px',
            position: 'relative',
            overflow: 'hidden',
            borderRadius: 4,
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.02)',
              '& img': {
                transform: 'scale(1.1) rotate(2deg)'
              }
            }
          }}
          data-aos="fade-right"
        >
          <img
            src="/portfolio/src/asserts/girlworking.png"
            alt="Profile"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '16px',
              boxShadow: '0 8px 24px rgba(149, 117, 205, 0.2)',
              transition: 'transform 0.5s ease-in-out'
            }}
          />
        </Box>
        <Paper
          elevation={0}
          sx={{
            flex: 1,
            p: 4,
            background: 'transparent',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(149, 117, 205, 0.1) 0%, rgba(149, 117, 205, 0) 100%)',
              borderRadius: '16px',
              zIndex: -1
            }
          }}
          data-aos="fade-left"
        >
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: 0,
                width: '50px',
                height: '2px',
                background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
                transition: 'width 0.3s ease-in-out'
              },
              '&:hover::after': {
                width: '100px'
              }
            }}
          >
            I am a passionate Software QA Engineer with nearly five years of experience in ensuring software quality across web and mobile applications. My journey has taken me through Sri Lanka and Malaysia, giving me a global perspective on quality assurance practices in diverse work environments. I hold a Bachelor of Science (Hons) in Management Information Systems, which has played a crucial role in shaping my career as a QA Engineer today.👩🏻‍🎓
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              transform: 'translateY(0)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}
          >
            I am eager to contribute my experience to a company’s growth while continuously enhancing my skills and learning new things. I genuinely love being a Software QA Engineer because I find great satisfaction in delivering high-quality products.  To me, quality is not just a goal; it’s a responsibility and a passion.🤓
          </Typography>

          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8,
              background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            Let’s connect and explore how my expertise can add value to your company, enhance product quality, and support your mission for continued success.🤝
          </Typography>
        </Paper>
      </Box>
    </Container>
  )
}

export default About