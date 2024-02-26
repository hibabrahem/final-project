import React from 'react'
import Card from 'react-bootstrap/Card';
function GallerieA({ Anniversaire }) {
  return (
    <div>
          <Card style={{ width: '20rem' }}>
              <Card.Img style={{ width: '20rem', height: '220px' }} src={Anniversaire.img} />

          </Card>
    </div>
  )
}

export default GallerieA
