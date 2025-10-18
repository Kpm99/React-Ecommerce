import { style } from 'framer-motion/client'
import React from 'react'
import { Button } from './styles/Button'
const ErrorPage = () => {
  return (
    <div style={div}>
      <h1>
        404!
      </h1>
      <h2>UH OH! You're Lost</h2>
      <p>The page you are looking for does not exist.You can click the button to go back to home page</p>
      <Button style={button}>Go Back</Button>
    </div>
  )
}

export default ErrorPage

const div = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
}

const h1 = {
  fontSize: "10rem",
}

const button= {
  margin: "2rem",
}

