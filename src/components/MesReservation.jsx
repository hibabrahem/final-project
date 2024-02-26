import React from 'react';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function MesReservation() {
    // Access reservation data from Redux state
    const reservationData = useSelector(state => state.event.reservationData);
    const reservationEData = useSelector(state => state.event.reservationEData);
    const reservationAData = useSelector(state => state.event.reservationAData);

    return (
        <div>
            <div>
                <h1>Mes mariage </h1>
                {/* Display reservation data */}
                <Card style={{ width: '18rem' }}>
                   
                    <Card.Body>
                        <Card.Title>{reservationData.name}</Card.Title>
                        <Card.Text>
                            {reservationData.theme}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{reservationData.date}</ListGroup.Item>
                        <ListGroup.Item>{reservationData.heure}</ListGroup.Item>
                        <ListGroup.Item>{reservationData.localisation}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div>
                <h1>Mes anniversaire  </h1>
                {/* Display reservationE data */}
                <Card style={{ width: '18rem' }}>
                 
                    <Card.Body>
                        <Card.Title>{reservationAData.name}</Card.Title>
                        <Card.Text>
                            {reservationEData.theme}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{reservationAData.date}</ListGroup.Item>
                        <ListGroup.Item>{reservationAData.heure}</ListGroup.Item>
                        <ListGroup.Item>{reservationAData.localisation}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div>
                <h1>Mes evenement  </h1>
                {/* Display reservationA data */}
                <Card style={{ width: '18rem' }}>
               
                    <Card.Body>
                        <Card.Title>{reservationEData.name}</Card.Title>
                        <Card.Text>
                            {reservationAData.theme}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{reservationEData.date}</ListGroup.Item>
                        <ListGroup.Item>{reservationEData.heure}</ListGroup.Item>
                        <ListGroup.Item>{reservationEData.localisation}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}

export default MesReservation;
