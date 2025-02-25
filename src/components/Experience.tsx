import { Typography, Container } from '@mui/material'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from '@mui/icons-material/Work'

const Experience = () => {
  const experiences = [
    {
      title: 'Senior QA Engineer',
      company: 'Current Company',
      date: '2021 - Present',
      description: 'Leading QA initiatives and implementing automated testing frameworks for enterprise applications.',
      details: [
        'Designed and implemented end-to-end test automation frameworks',
        'Mentored junior QA engineers and conducted knowledge sharing sessions',
        'Improved test coverage by 40% through strategic test planning'
      ]
    },
    {
      title: 'QA Engineer',
      company: 'Previous Company',
      date: '2019 - 2021',
      description: 'Specialized in API testing and continuous integration practices.',
      details: [
        'Developed and maintained API test suites using REST Assured',
        'Implemented CI/CD pipelines for test automation',
        'Reduced regression testing time by 60%'
      ]
    },
    {
      title: 'Junior QA Engineer',
      company: 'First Company',
      date: '2018 - 2019',
      description: 'Started career in software testing with focus on manual testing.',
      details: [
        'Executed manual test cases for web applications',
        'Created detailed test documentation and bug reports',
        'Participated in agile ceremonies and sprint planning'
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
          background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700
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
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2 }}>
              {exp.company}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {exp.description}
            </Typography>
            <div style={{ position: 'relative' }}>
              <Typography
                variant="body2"
                sx={{
                  cursor: 'pointer',
                  color: 'primary.main',
                  '&:hover': { textDecoration: 'underline' }
                }}
                onClick={(e) => {
                  const target = e.currentTarget.nextElementSibling
                  if (target instanceof HTMLElement) {
                    target.style.display = target.style.display === 'none' ? 'block' : 'none'
                  }
                }}
              >
                See More
              </Typography>
              <div style={{ display: 'none', marginTop: '1rem' }}>
                <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                  {exp.details.map((detail, i) => (
                    <li key={i}>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        {detail}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  )
}

export default Experience