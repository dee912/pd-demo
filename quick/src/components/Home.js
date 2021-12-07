import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
// import Canvas from './Sketch'



function Home() {


  return (
    <>
      <Card style={{ width: '30vw', margin: '0 auto' }}>
        <Card.Img variant="top" src="../AND Digital_LOGO_SM_icon.png" style={{ margin: '0 auto' }} />
        <Card.Body>
          <Card.Text>
            Welcome to AND Digital! Thistoool allows you to sned yourAND title to other ANDis so you can share your hobbies and interests. Press go to enter yourdetails...
          </Card.Text>
          <Button variant="primary">Go!</Button>
        </Card.Body>
      </Card>
      {/* <Canvas /> */}
    </>
  )
}

export default Home
