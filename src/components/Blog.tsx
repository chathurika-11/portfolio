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
              thumbnail: (() => {
                // Try to extract the first image from the article content
                const content = item.content || ''
                const imgMatch = content.match(/<img[^>]+src="([^"]+)"[^>]*>/)
                return imgMatch ? imgMatch[1] : item.thumbnail || ''
              })(),
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
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid rgba(149, 117, 205, 0.1)',
                '&:hover': {
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 12px 28px rgba(149, 117, 205, 0.25)',
                  '& .blog-card-media::before': {
                    opacity: 0.7
                  },
                  '& .blog-card-content': {
                    transform: 'translateY(0)'
                  }
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
                  flexDirection: 'column'
                }}
              >
                <Box
                  className="blog-card-media"
                  sx={{
                    position: 'relative',
                    height: 220,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(180deg, rgba(149, 117, 205, 0.2) 0%, rgba(149, 117, 205, 0.8) 100%)',
                      opacity: 0.5,
                      transition: 'opacity 0.4s ease-in-out',
                      zIndex: 1
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    image={post.thumbnail}
                    alt={post.title}
                    sx={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </Box>
                <CardContent
                  className="blog-card-content"
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    p: 3,
                    background: 'rgba(255, 255, 255, 0.95)',
                    transform: 'translateY(0)',
                    transition: 'transform 0.4s ease-in-out'
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      color: 'primary.main',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      lineHeight: 1.4,
                      mb: 2,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      transition: 'color 0.3s ease-in-out',
                      '&:hover': {
                        background: 'linear-gradient(45deg, #9575cd 30%, #b39ddb 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      '&::before': {
                        content: '""',
                        display: 'inline-block',
                        width: 4,
                        height: 4,
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        opacity: 0.7
                      }
                    }}
                  >
                    {post.pubDate}
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