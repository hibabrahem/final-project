import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MariageItems({ list }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
         <div>
            <Card style={{ width: '40rem' }}>
                <div style={{ display: 'flex', gap: "30px" }}>
                    <div>
                        <Card.Img variant="top" style={{ width: '290px', height: '220px' }} src={list.img} />
                    </div>
                    <div>
                        <Card.Body>
                            <Card.Title>{list.name} </Card.Title>

                            <Card.Text>
                                {list.descrption} <br></br>
                                {list.prix}
                            </Card.Text>
                            <NavLink to='/inscription'>
                                <Button style={{
                                color: 'white',
                                borderColor: '#AF9453',
                                backgroundColor: '#AF9453',
                                textTransform:'uppercase'

                            }} >Réserver</Button>
                        </NavLink>
                        </Card.Body>
                    </div>
                </div>
            </Card>
        </div>
        
    )
}

export default MariageItems
