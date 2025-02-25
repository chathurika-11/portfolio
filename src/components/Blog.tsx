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
        const items = response.data.items.slice(0, 4)
        setPosts(
          items.map((item: any) => ({
            title: item.title,
            thumbnail: item.thumbnail,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString()
          }))
        )
      } catch (error) {
        console.error('Error fetching Medium posts:', error)
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
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)'
                }
              }}
            >
              <CardActionArea component={Link} href={post.link} target="_blank" rel="noopener noreferrer">
                <CardMedia
                  component="img"
                  height="140"
                  image={post.thumbnail || 'https://via.placeholder.com/300x200'}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div" sx={{ color: 'primary.main' }}>
                    {post.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
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