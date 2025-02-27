import { Typography, Container } from '@mui/material'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import WorkIcon from '@mui/icons-material/Work'

const Experience = () => {
  const experiences = [
    {
      title: 'Software QA Engineer',
      company: 'SleekFlow - Malaysia',
      date: '2023 March - 2024 March',
      description: 'Omnichannel | SleekFlow Web and Mobile Application | Social Media Integrations | ClickUp | E-commerce Platform (Shopify)',
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
      description: 'Telecommunication | Dialog OneCRM | API Testing | Postman',
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
      description: 'Software Security | Web Application | Cross-browser Testing | Database Testing | Jira',
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