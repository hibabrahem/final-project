import React from 'react'
import Card from 'react-bootstrap/Card';
function GallerieE({ evennement }) {
  return (
      <div>
          <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '20rem', height: '220px' }} src={evennement.img} />

          </Card>
      </div>
  )
}

export default GallerieE
