import React from 'react';
import MariageItems from './MariageItems';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import AnniversaireItems from './AnniversaireItems';
import EvenementItems from './EvenementItems';
import Carousel from 'react-bootstrap/Carousel';

function NoService() {
    const { mariages } = useSelector(state => state.eventReducer);
    const { anniversaire } = useSelector(state => state.eventReducer);
    const { evenement } = useSelector(state => state.eventReducer);
    const { services } = useSelector(state => state.eventReducer);

    return (
        <div style={{ display: 'grid', gap: '15px' }}>
            <div style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
                <Entete />
            </div>
            <div style={{ paddingTop: '90px', paddingBottom: '10px' }}>
                <Carousel>
                    {services.map(e => (
                        <Carousel.Item key={e.id}>
                            <img style={{ width: "626px", height: "417px" }} src={e.img} alt="Slide" />
                            <Carousel.Caption>
                                <h3>{e.name}</h3>
                                <p>{e.descrption}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            <div id="mariage">
                <h3 style={{ fontFamily: 'brandon grotesque', letterSpacing: '15px', color: '#AF9453', fontSize: '30px', paddingTop: '90px' }}>MARIAGE</h3>
                <div style={{ position: "relative", left: "25%", display: 'grid', gap: '15px' }}>
                    {mariages.map((mariage, index) => (
                        <NavLink style={{ textDecoration: 'none' }} key={index} to={`/reservation/${index}`}>
                            <MariageItems list={mariage} />
                        </NavLink>
                    ))}
                </div>
            </div>

            <div id="anniversaire">
                <h3 style={{ fontFamily: 'brandon grotesque', letterSpacing: '15px', color: '#AF9453', fontSize: '30px' }}>ANNIVERSAIRE</h3>
                <div style={{ position: "relative", left: "25%", display: 'grid', gap: '15px' }}>
                    {anniversaire.map((e, index) => (
                        <NavLink style={{ textDecoration: 'none' }} key={index} to={`/reservationA/${index}`}>
                            <AnniversaireItems annif={e} />
                        </NavLink>
                    ))}
                </div>
            </div>

            <div id="evenement">
                <h3 style={{ fontFamily: 'brandon grotesque', letterSpacing: '15px', color: '#AF9453', fontSize: '30px' }}>EVENEMENT</h3>
                <div style={{ position: "relative", left: "25%", display: 'grid', gap: '15px' }}>
                    {evenement.map((e, index) => (
                        <NavLink style={{ textDecoration: 'none' }} key={index} to={`/reservationE/${index}`}>
                            <EvenementItems event={e} />
                        </NavLink>
                    ))}
                </div>
            </div>

            <PiedDePage />
        </div>
    );
}

export default NoService;
