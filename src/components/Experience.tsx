import { Typography, Container, Box, Dialog, IconButton } from '@mui/material'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from '@mui/icons-material/Work'
import VisibilityIcon from '@mui/icons-material/Visibility'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<number | null>(null)

  const handleClose = () => {
    setSelectedExp(null)
  }

  const handleDownload = () => {
    window.open('/portfolio/QA Lead_Recommendation.pdf', '_blank')
  }

  const experiences = [
    {
      title: 'Software QA Engineer',
      company: 'SleekFlow - Malaysia',
      date: '2023 March - 2024 March',
      description: 'Omnichannel Platform | SleekFlow Web and Mobile Application | Social Media Integrations | E-commerce Platform (Shopify) | ClickUp',
      details: [
        'Reviewed requirements to design test scenarios.',
        'Designed, executed, and maintained test cases.',
        'Prepared test data for testing SleekFlow web and mobile applications.',
        'Experienced in mobile testing using iOS and Android devices & Android Studio.',
        'Tested mobile app integrations across WhatsApp, Instagram, Facebook, Telegram, Viber, and Line.',
        'Performed manual testing using different types of testing(Regression, System, Smoke, Sanity, Re-testing, UI/UX and Ad-hoc testing).',
        'Identified, reported and tracked defects.',
        'Experienced with Agile methodologies.',
        'Mentored and Supported junior resources.',
        'Delivered the QA tasks according to deadlines.',
        'Created and maintained Notion pages for project purposes.',
        'Collaborated closely with the project manager and customer support team to ensure the requirements and test scope.',
        'Participated in QA Hiring Interviews and QA Weekly Syncs with QA team members.',
        'Initiated learning and implementation of automation testing using Cypress and Katalon.',
      ]
    },
    {
      title: 'Software QA Engineer',
      company: 'Zincat Technology - Sri Lanka',
      date: '2022 January - 2022 August',
      description: 'Telecommunication Platform | Dialog OneCRM | API Testing(Postman)',
      details: [
        'Reviewed requirements to design test scenarios.',
        'Designed, executed, and maintained test cases',
        'Performed manual testing using different types of testing (Functional testing types, Data Base testing, Re-testing and Ad-hoc testing).',
        'Conducted cross-browser compatibility testing',
        'API testing using Postman.',
        'Identified, reported defects.',
        'Reported test results and cooperated with the development team.',
        'Delivered the QA tasks according to deadlines.',
      ]
    },
    {
      title: 'Software QA Engineer',
      company: 'Virtusa Pvt Ltd - Sri Lanka',
      date: '2018 December - 2021 December',
      description: 'Software Security Platform| Web Application | Cross-Browser Testing | Database Testing | Jira',
      details: [
        'Reviewed requirements to design test scenarios.',
        'Designed, executed, and maintained test cases.',
        'Prepared Test data.',
        'Performed manual testing using different types of testing (Functional testing types, re-testing, Database testing, Cross-Browser testing and Ad-hoc testing).',
        'Experienced in writing SQL queries using MySQL.',
        'Identified, reported and tracked defects.',
        'Reported test results and cooperated with the development team.',
        'Collaborated with development team in agile environment',
        'Analysed and identified the root cause of failures.',
        'Troubleshoot ActiveBatch deployment failures and perform manual deployments.',
        'Reviewed test cases (Peer review). Assisted senior team members in testing.',
        'Created and maintained user manuals and wiki pages for project purposes.',
        'Used Jira as a Defect tracking and test cases management tool.',
        'Delivered the QA tasks according to deadlines.',
      ]
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
            content: '"Experience"',
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
        Experience
      </Typography>

      <VerticalTimeline>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.9)',
              color: '#333',
              boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
              borderRadius: '12px',
              padding: '2rem'
            }}
            contentArrowStyle={{ borderRight: '7px solid rgba(255, 255, 255, 0.9)' }}
            date={exp.date}
            iconStyle={{ background: '#9575cd', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 600 }}>
              {exp.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <Box
                component="img"
                src={`/portfolio/${index === 0 ? 'sleekflow.png' : index === 1 ? 'zincat.png' : 'virtusa.png'}`}
                alt={`${exp.company} logo`}
                sx={{
                  width: 30,
                  height: 30,
                  objectFit: 'contain',
                  borderRadius: '4px',
                  filter: 'grayscale(0.2)',
                  transition: 'all 0.3s ease-in-out',
                  animation: 'glow 2s ease-in-out infinite',
                  '@keyframes glow': {
                    '0%': {
                      boxShadow: '0 0 5px rgba(149, 117, 205, 0.5)',
                      filter: 'grayscale(0.2)'
                    },
                    '50%': {
                      boxShadow: '0 0 20px rgba(149, 117, 205, 0.8)',
                      filter: 'grayscale(0)'
                    },
                    '100%': {
                      boxShadow: '0 0 5px rgba(149, 117, 205, 0.5)',
                      filter: 'grayscale(0.2)'
                    }
                  },
                  '&:hover': {
                    filter: 'grayscale(0)',
                    transform: 'scale(1.1)',
                    boxShadow: '0 0 25px rgba(149, 117, 205, 0.9)'
                  }
                }}
              />
              <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                {exp.company}
              </Typography>
            </Box>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {exp.description}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
              {index === 0 && (
                <IconButton
                  onClick={handleDownload}
                  sx={{
                    color: 'primary.main',
                    backgroundColor: 'rgba(149, 117, 205, 0.1)',
                    '&:hover': {
                      backgroundColor: '#9575cd',
                      color: '#fff',
                      transform: 'scale(1.1)'
                    },
                    transition: 'all 0.3s ease-in-out'
                  }}
                >
                  <AttachFileIcon />
                </IconButton>
              )}
              <IconButton
                onClick={() => setSelectedExp(index)}
                sx={{
                  color: 'primary.main',
                  backgroundColor: 'rgba(149, 117, 205, 0.1)',
                  '&:hover': {
                    backgroundColor: '#9575cd',
                    color: '#fff',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                <VisibilityIcon />
              </IconButton>
            </Box>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      <Dialog
        open={selectedExp !== null}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(149, 117, 205, 0.15)',
            border: '1px solid rgba(149, 117, 205, 0.1)',
            p: 4,
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(135deg, rgba(149, 117, 205, 0.1) 0%, rgba(149, 117, 205, 0) 100%)',
              zIndex: 0
            }
          }
        }}
        TransitionProps={{
          timeout: 500,
          style: {
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }}
      >
        {selectedExp !== null && (
          <>
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: 'primary.main',
                backgroundColor: 'rgba(149, 117, 205, 0.1)',
                '&:hover': {
                  backgroundColor: '#9575cd',
                  color: '#fff',
                  transform: 'rotate(90deg) scale(1.1)'
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600, mb: 2 }}>                {experiences[selectedExp].title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box
                  component="img"
                  src={`/portfolio/${selectedExp === 0 ? 'sleekflow.png' : selectedExp === 1 ? 'zincat.png' : 'virtusa.png'}`}
                  alt={`${experiences[selectedExp].company} logo`}
                  sx={{
                    width: 30,
                    height: 30,
                    objectFit: 'contain',
                    borderRadius: '4px',
                    filter: 'grayscale(0.2)',
                    transition: 'all 0.3s ease-in-out',
                    animation: 'glow 2s ease-in-out infinite',
                    '@keyframes glow': {
                      '0%': {
                        boxShadow: '0 0 5px rgba(149, 117, 205, 0.5)',
                        filter: 'grayscale(0.2)'
                      },
                      '50%': {
                        boxShadow: '0 0 20px rgba(149, 117, 205, 0.8)',
                        filter: 'grayscale(0)'
                      },
                      '100%': {
                        boxShadow: '0 0 5px rgba(149, 117, 205, 0.5)',
                        filter: 'grayscale(0.2)'
                      }
                    },
                    '&:hover': {
                      filter: 'grayscale(0)',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 25px rgba(149, 117, 205, 0.9)'
                    }
                  }}
                />
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  {experiences[selectedExp].company} • {experiences[selectedExp].date}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                {experiences[selectedExp].description}
              </Typography>
              <Box
                sx={{
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(149, 117, 205, 0.2)',
                  maxHeight: '60vh',
                  overflowY: 'auto',
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-track': {
                    background: 'rgba(149, 117, 205, 0.1)',
                    borderRadius: '4px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'rgba(149, 117, 205, 0.3)',
                    borderRadius: '4px',
                    '&:hover': {
                      background: 'rgba(149, 117, 205, 0.5)',
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  {experiences[selectedExp].details.map((detail, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateX(8px)'
                        },
                        position: 'relative',
                        paddingLeft: '20px',
                        '&::before': {
                          content: '"•"',
                          position: 'absolute',
                          left: 0,
                          top: '-2px',
                          color: '#9575cd',
                          fontSize: '1.2rem',
                          lineHeight: 1.6
                        }
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          flex: 1
                        }}
                      >
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Dialog>
    </Container>
  )
}

export default Experience