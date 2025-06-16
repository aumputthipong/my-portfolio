import { Container, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
  return (
    <section className="py-16" id="contact">
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ติดต่อ
          </Typography>
          <Typography>
            อีเมล: <a href="mailto:youremail@example.com" className="text-blue-600">youremail@example.com</a><br />
            GitHub: <a href="https://github.com/aumputthipong" target="_blank" className="text-blue-600">github.com/aumputthipong</a>
          </Typography>
        </Container>
      </section>
  )
}

export default Contact
