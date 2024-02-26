import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Entete from './Entete';

function TestReservation() {
    const reservationData = useSelector(state => state.eventReducer.reservationData);
    const reservationAData = useSelector(state => state.eventReducer.reservationAData);
    const reservationEData = useSelector(state => state.eventReducer.reservationEData);

    return (
        <div  style={{ display: 'grid', gap: '10px' }}> 
            <div style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
                <Entete /></div>
          
            <div style={{ display: 'grid', gap: '70px', marginTop: '90px' }}>
                {reservationData.name && (
                <div >
                    <h3 style={{
                        fontfamily: 'brandon grotesque',
                        letterSpacing: '5px',
                        color: '#AF9453',
                        fontsize: '30px'
                    }}>Mariage</h3>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{reservationData.name}</Card.Title>
                            <Card.Text>
                                {reservationData.theme}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{reservationData.nbpersonne}</ListGroup.Item>
                            <ListGroup.Item>{reservationData.localisation}</ListGroup.Item>
                            <ListGroup.Item>{reservationData.date}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            )}
            

            {reservationAData.name && (
                <div>
                    <h3 style={{
                        fontfamily: 'brandon grotesque',
                        letterSpacing: '5px',
                        color: '#AF9453',
                        fontsize: '30px'
                    }}>Anniversaire</h3>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{reservationAData.name}</Card.Title>
                            <Card.Text>
                                {reservationAData.theme}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{reservationAData.nbpersonne}</ListGroup.Item>
                            <ListGroup.Item>{reservationAData.localisation}</ListGroup.Item>
                            <ListGroup.Item>{reservationAData.date}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            )}
           

            {reservationEData.name && (
                <div>
                    <h3 style={{
                        fontfamily: 'brandon grotesque',
                        letterSpacing: '5px',
                        color: '#AF9453',
                        fontsize: '30px'
                    }}>Evenement Professionelle</h3>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{reservationEData.name}</Card.Title>
                            <Card.Text>
                                {reservationEData.theme}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>{reservationEData.nbpersonne}</ListGroup.Item>
                            <ListGroup.Item>{reservationEData.localisation}</ListGroup.Item>
                            <ListGroup.Item>{reservationEData.date}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
                )}
            </div> 
        </div>
    );
}

export default TestReservation;
