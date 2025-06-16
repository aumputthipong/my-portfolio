import { Container, Typography } from '@mui/material'
import React from 'react'

const Education = () => {
  return (
      <section className="py-16 border-b" id="experience">
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ประสบการณ์
          </Typography>
          <ul className="list-disc list-inside text-gray-700">
            {/* <li>Intern @ บริษัท XYZ – React + NestJS (2024)</li>
            <li>Project: AI Garden System – ระบบ AI วิเคราะห์ภาพ (KMITL)</li> */}
          </ul>
        </Container>
      </section>

  )
}

export default Education
