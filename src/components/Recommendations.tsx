import { useState } from 'react'
import { Box, Typography, Container, IconButton } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

const Recommendations = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [expandedStates, setExpandedStates] = useState<boolean[]>(new Array(6).fill(false))

  const recommendations = [
    {
      name: 'Paul Lo',
      role: 'Staff Engineer',
      company: 'Sleekflow',
      text: 'I am writing to highly recommend Chathurika for her exceptional qualities as a Quality Assurance (QA) professional. During her time in this role in sleekflow, Chathurika has consistently demonstrated a strong sense of responsibility and a proactive approach to ensuring the quality and accuracy of deliverables. One of Chathurika\'s standout attributes is her unwavering commitment to clarity and precision. She takes the initiative to address and resolve any ambiguities, ensuring that all stakeholders are aligned. Her willingness to clarify uncertainties and provide detailed explanations fosters a productive and collaborative work environment. In addition to her technical expertise, Chathurika is approachable, dependable, and consistently rises to the challenge of maintaining high standards in her work. I am confident that she will continue to excel and add value wherever she contributes.'
    },
    {
      name: 'Ade Pratama',
      role: 'QA Engineer',
      company: 'Sleekflow',
      text: 'I had the privilege of working closely with Chathu at Sleekflow as a fellow QA Engineer. Throughout our time together, Chathu consistently played a key role in ensuring our products met the highest quality standards. Her keen "eagle eyes" during the testing process enabled us to catch and resolve potential issues early in the development cycle. Chathu is a highly collaborative person. She worked seamlessly with developers, product managers, and other stakeholders, maintaining clear communication and ensuring that challenges were addressed promptly. Beyond her technical abilities, Chathu brings a positive attitude and a strong work ethic to every task. She is dependable, hardworking, and always eager to learn and improve. I highly recommend her for any future opportunities in a QA Engineer role.'
    },
    {
      name: 'Joyce Lin',
      role: 'Product & Design',
      company: 'Sleekflow',
      text: 'I had the pleasure of working with Chathurika as our QA specialist, and I appreciate her consistent approach to testing and quality assurance. She has a solid understanding of our product requirements. Her attention to detail and ability to identify potential issues have been valuable to our team. I look forward to seeing her continue to contribute to future projects.'
    },
    {
      name: 'Lee Lay Khoon',
      role: 'QA Engineer',
      company: 'Sleekflow',
      text: 'Chathu was a very hardworking and responsible QA in the team, even though she was the only QA in the squad, she managed to work independently. She always takes the initiative to discuss with project manager or developers when there\'s an issue. I wish her all the best in her next career.'
    },
    {
      name: 'Mangala deebiga Rajamanickam',
      role: 'Quality Assurance Team Lead',
      company: 'Next',
      text: 'I have worked with Chathurika in the same team. She has shown extreme professionalism and dedication towards all the assignments given to her. She is a knowledgeable, dedicated and most of all helpful team member and an absolute pleasure to work with. Her thinking is out of the box and very good at designing quality test scrips and identifying bugs. Her positive attitude towards taking up higher and challenging responsibilities are sure to lead her to great success in the years ahead.'
    },
    {
      name: 'Chathuri Kaushalya',
      role: 'QA Lead',
      company: 'BISTEC Global Services',
      text: 'Chathurika was one of the best QA Engineer who was in the project. She was always honest what she does and quality of her work is really good. She was some one who is able to take responsibility of a tasks and deliver the work on or before the deadline. She\'s a very good team player who always supports other team members and work towards win as a team. She\'s kind if a very good resource not only good in work but also someone with very good qualities. I\'m that I had someone like her in our project. I wish all the very best for her career life!'
    }
  ]

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % recommendations.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + recommendations.length) % recommendations.length)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          mb: 2,
          textAlign: 'center',
          background: 'linear-gradient(45deg, rgb(169, 144, 212) 30%, #9575cd 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          position: 'relative',
          WebkitTextStroke: '2px #000',
          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))',
          '&::before': {
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
          },
        }}
        data-aos="fade-up"
      >
        Recommendations
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 6,
          textAlign: 'center',
          color: 'text.secondary',
          fontStyle: 'italic',
          position: 'relative',
          '&::before, &::after': {
            content: '"\u201C"',
            position: 'absolute',
            fontSize: '1.5em',
            color: 'rgba(149, 117, 205, 0.2)',
            top: -10,
            left: -20
          },
          '&::after': {
            content: '"\u201D"',
            left: 'auto',
            right: -20
          }
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Words of appreciation from those who have seen my work in action.
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: '400px',
          overflow: 'hidden',
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 8px 32px rgba(149, 117, 205, 0.15)',
          border: '1px solid rgba(149, 117, 205, 0.1)'
        }}
        data-aos="fade-up"
      >
        <Box
          sx={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentSlide * 100}%)`
          }}
        >
          {recommendations.map((rec, index) => (
            <Box
              key={index}
              sx={{
                minWidth: '100%',
                p: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 3
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: 'center',
                    color: 'text.secondary',
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                    maxWidth: '800px',
                    overflow: 'hidden',
                    maxHeight: expandedStates[index] ? 'none' : '100px',
                    transition: 'max-height 0.3s ease-in-out'
                  }}
                >
                  "{rec.text}"
                </Typography>
                {rec.text.length > 50 && (
                  <Typography
                    variant="body2"
                    onClick={() => {
                      const newExpandedStates = [...expandedStates]
                      newExpandedStates[index] = !newExpandedStates[index]
                      setExpandedStates(newExpandedStates)
                    }}
                    sx={{
                      color: 'primary.main',
                      cursor: 'pointer',
                      textAlign: 'center',
                      mt: 1,
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {expandedStates[index] ? 'See Less' : 'See More'}
                  </Typography>
                )}
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  {rec.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {rec.role}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {rec.company}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            left: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(149, 117, 205, 0.1)',
            color: '#9575cd',
            '&:hover': {
              backgroundColor: '#9575cd',
              color: '#fff'
            }
          }}
        >
          <NavigateBeforeIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 20,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(149, 117, 205, 0.1)',
            color: '#9575cd',
            '&:hover': {
              backgroundColor: '#9575cd',
              color: '#fff'
            }
          }}
        >
          <NavigateNextIcon />
        </IconButton>

        <Box
          sx={{
            position: 'absolute',
            bottom: -40,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2,
            padding: '10px',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '20px',
            boxShadow: '0 2px 8px rgba(149, 117, 205, 0.15)'
          }}
        >
          {recommendations.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? '#9575cd' : 'rgba(149, 117, 205, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                  backgroundColor: currentSlide === index ? '#9575cd' : 'rgba(149, 117, 205, 0.4)'
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  )
}

export default Recommendations