import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function GallerieM({ hiba }) {
  return (
    <div>
          <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '20rem',height:'220px' }} src={hiba.img} />
             
          </Card>
    </div>
  )
}

export default GallerieM
