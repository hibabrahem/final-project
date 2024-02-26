import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { addReservationData } from '../redux/slices/eventSlice';

function Reservation() {
    const { id } = useParams()
    const { mariages } = useSelector(state => state.eventReducer)
    const dispatch = useDispatch();

    const addMariage = () => {
        // Dispatchez l'action avec les données de réservation
        dispatch(addReservationData(mariageInfo));
    };

    const [mariageInfo, setMariage] = useState({
        name: '',
        theme: '',
        nbpersonne: '',
        localisation: '',
        date: '',
        heure: '',
        message: ''
    });
    return (
        <div>
            <div style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
                <Entete />
            </div>
            <h2 className='nom'>{mariages[id].name} </h2>
            <p style={{ textAlign: 'left' }}>Consultez nos disponibilités et réservez la date et l'heure qui vous conviennent.</p>

            <hr style={{ color: '#AF9453', textAlign: 'left' }}></hr>
            {/* <PiedDePage></PiedDePage> */}
            <div style={{ display: "grid", gap: '10px', marginLeft: '25px' }}>
                <div className='box-input2'>
                    <div><label className='txt'>Nom et Prénom:</label><br />
                        <input className='input2' type='text' name='nom' placeholder='entrer les noms des marieé' onChange={(e) => setMariage({ ...mariageInfo, name: e.target.value })}></input><br />
                    </div>
                    <div>
                        <label className='txt'>Théme :</label> <br />
                        <input className='input2' type='text' name='theme' placeholder='cchoisir le théme que vous préferer' onChange={(e) => setMariage({ ...mariageInfo, theme: e.target.value })}></input><br />
                    </div>
                </div>
                <div className='box-input2'>
                    <div> <label className='txt'>Nombre de personne :</label><br />
                        <input className='input2' type='nombre' name='nom' placeholder='combien de personne  sont présents ?' onChange={(e) => setMariage({ ...mariageInfo, nbpersonne: e.target.value })}></input><br />
                    </div>
                    <div>
                        < label className='txt'> Adresse :</label > <br />
                        <input className='input2' type='nombre' name='nom' placeholder='preciser votre adresse ' onChange={(e) => setMariage({ ...mariageInfo, localisation: e.target.value })}></input><br />
                    </div>
                </div>
                <div className='box-input2'>
                    <div>
                        <label className='txt'>Date d'evenement :</label><br />
                        <input className='input2' type='date' name='nom' placeholder='chosir votre date' onChange={(e) => setMariage({ ...mariageInfo, date: e.target.value })}></input><br />
                    </div>
                    <div>
                        <label className='txt'>Heure :</label><br />
                        <input className='input2' type='time' name='nom' placeholder='chosir votre heure' onChange={(e) => setMariage({ ...mariageInfo, heure: e.target.value })}></input><br />

                    </div>
                </div>
                <div className='box-input2'>
                    <div >
                        <label className='txt'>Message :</label><br />  <br />
                        <textarea className='input3' name='msg personalisé' placeholder='entrer votre message pour nous informer sur d autre details voudrer'></textarea>
                    </div>

                    <div>
                        <NavLink to='/mesreservation'> <button className='bouton' id='b' onClick={addMariage}> Confirmer </button></NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default Reservation
