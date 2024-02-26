import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function EvenementItems({ event }) {
    return (
     <div>
            <Card style={{ width: '40rem' }}>
                <div style={{ display: 'flex', gap: "30px" }}>
                    <div>
                        <Card.Img variant="top" style={{ width: '290px', height: '220px' }} src={event.img} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title>{event.name} </Card.Title>
                            <Card.Text>
                                {event.descrption} <br></br>
                                {event.prix}
                            </Card.Text>
                            <NavLink to='/inscription'>
                                <Button style={{
                                    color: 'white',
                                    borderColor: '#AF9453',
                                    backgroundColor: '#AF9453',
                                    textTransform: 'uppercase'

                                }} >Réserver</Button></NavLink>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default EvenementItems
