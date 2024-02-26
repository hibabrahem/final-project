import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

function Connexion() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog  onHide={handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title style={{ position: 'relative', left: '170px', color: '#AF9453' }}> Se Connecter</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{ display: 'grid', gap: '8px' }}>

                    <label className='text-input'>E_Mail : </label>
                    <input className='input' type='email' name='email' placeholder='nom'></input>
                    <label className='text-input'>Mot De Passe : </label>
                    <input className='input' type='password' name='password' placeholder='Mot De Passe '></input>

                </Modal.Body>

                <Modal.Footer>
                    <NavLink to='/service'>
                    <Button style={{ position: 'relative', right: '170px' }} className='sign-in' variant="primary">se connecter</Button>
                </NavLink>
                     </Modal.Footer>
            </Modal.Dialog>
            
        </div>
    );
}

export default Connexion;