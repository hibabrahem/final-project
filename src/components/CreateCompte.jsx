import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

function CreateCompte() {
    return (
        <div style={{ display: 'flex' }}>
            <NavLink to={'/service'} style={{ display: 'flex', color: 'black', margin: '20px', textDecoration: 'none' ,fontSize:'18px'}}>
                <span class="material-symbols-outlined">
                navigate_before
                </span>
                <p>Retour</p>
            </NavLink>
<div></div>
            <div
                className="modal show"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header closeButton >
                        <Modal.Title style={{ position: 'relative', left: '200px', color: '#AF9453' }}>  S'inscrire </Modal.Title>
                    </Modal.Header >

                    <Modal.Body style={{ display: 'grid', gap: '8px' }}>
                        <label className='text-input' >Nom:</label>
                        <input className='input' type='text' name='nom' placeholder='nom'></input>
                        <label className='text-input'>Prénom</label>
                        <input className='input' type='text' name='prenom' placeholder='nom'></input>
                        <label className='text-input'>E_Mail : </label>
                        <input className='input' type='email' name='email' placeholder='nom'></input>
                        <label className='text-input'>Mot De Passe : </label>
                        <input className='input' type='password' name='password' placeholder='Mot De Passe '></input>
                        <label className='text-input'>Date De  Naissance : </label>
                        <input className='input' type='date' name='birth' placeholder=' Date De  Naissance'></input>
                        <label className='text-input'>Numero de télephone : </label>
                        <input className='input' type='text' name='birth' placeholder=' Num-Tel'></input>
                    </Modal.Body>

                    <Modal.Footer>
                        <NavLink to='/connexion'>   <Button className='sign-in' variant="secondary">se connecter</Button> </NavLink>
                        <Button className='sign-in' variant="primary">s'inscrire</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>

            <div style={{ position: 'relative', top: '100px', marginRight: '30px' }}>
                <iframe
                    width="560"
                    height="400"
                    src="https://www.youtube.com/embed/XVwHLwZrIYk?si=ULeGCJ0vW0y3K1_8"
                    frameborder="0"
                    allowfullscreen
                ></iframe>
                </div>
            
        </div>
    );
}

export default CreateCompte;