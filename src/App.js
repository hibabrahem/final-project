
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Slider from './components/Slider';
import NoService from './components/NoService';
import Apropos from './components/Apropos';
import CreateCompte from './components/CreateCompte';
import Connexion from './components/Connexion';
import Reservation from './components/Reservation';
import ReservationA from './components/ReservationA';
import ReservationE from './components/ReservationE';
import MesReservation from './components/MesReservation';
import TestReservation from './components/TestReservation';
import { useState } from 'react';

function App() {



    return (
        <div className="App">
            {/* <div style={{ display: 'grid', gap: '10px' }}>
                <Entete></Entete>
                <Slider></Slider>
                <PiedDePage></PiedDePage>
            </div> */}
            <>

                <Routes>
                    <Route path='/' element={<Slider></Slider>}></Route>
                    <Route path='/service' element={<NoService></NoService>}></Route>
                    <Route path='/inscription' element={<CreateCompte></CreateCompte>}></Route>
                    <Route path='/Apropos' element={<Apropos></Apropos>}></Route>
                    <Route path='/connexion' element={<Connexion></Connexion>}></Route>
                    <Route path='/reservation/:id' element={<Reservation />} />
                    <Route path='/reservationA/:id' element={<ReservationA />} />
                    <Route path='/reservationE/:id' element={<ReservationE />} />
                    <Route path='/mesreservation' element={<TestReservation />}></Route>

                    {/* <Route path='/:id' element={<Trailer></Trailer>}></Route> */}
                </Routes>

            </>

        </div>
    );
}

export default App;
