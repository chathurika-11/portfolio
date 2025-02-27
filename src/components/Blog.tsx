import { useState, useEffect } from 'react'
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, CardActionArea, Link } from '@mui/material'
import axios from 'axios'

interface MediumPost {
  title: string
  thumbnail: string
  link: string
  pubDate: string
}

const Blog = () => {
  const [posts, setPosts] = useState<MediumPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@chathucm2013'
        )
        if (response.data.status === 'ok' && response.data.items) {
          const items = response.data.items.slice(0, 4)
          setPosts(
            items.map((item: any) => ({
              title: item.title,
              thumbnail: item.thumbnail && item.thumbnail !== '' ? item.thumbnail : 'https://picsum.photos/800/400?grayscale',
              link: item.link,
              pubDate: new Date(item.pubDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            }))
          )
        } else {
          console.error('Invalid RSS feed response:', response.data)
          setPosts([])
        }
      } catch (error) {
        console.error('Error fetching Medium posts:', error)
        setPosts([])
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

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
        Latest Blog Posts
      </Typography>

      <Grid container spacing={4}>
        {posts.map((post, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255, 255, 255, 0.9)',
                transition: 'all 0.3s ease-in-out',
                p: 2,
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 8px 24px rgba(149, 117, 205, 0.2)'
                }
              }}
            >
              <CardActionArea
                component={Link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between'
                }}
              >
                <CardContent sx={{ p: 0, flex: 1 }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      fontWeight: 600,
                      lineHeight: 1.4,
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        color: 'primary.dark'
                      }
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      display: 'block',
                      mt: 'auto',
                      pt: 2,
                      borderTop: '1px solid rgba(149, 117, 205, 0.1)'
                    }}
                  >
                    Published on {post.pubDate}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {loading && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography>Loading blog posts...</Typography>
        </Box>
      )}

      {!loading && posts.length === 0 && (
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography>No blog posts found.</Typography>
        </Box>
      )}
    </Container>
  )
}

export default Blog