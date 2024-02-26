import React from 'react';
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import GMList from './GMList';

function Apropos() {
    return (<div style={{ display: 'grid', gap: '10px' }}>
        <div style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
            <Entete />
        </div>
        <div style={{ display: 'grid', gap: '70px' ,marginTop:'90px' }}>
            <div className='container'>
                <div className='box'>
                    <img className='image' src='https://static.wixstatic.com/media/a2c93b_c69989caa3e749ccb05616d9cd8d60c4~mv2.jpg' alt='A descriptive text about the image' />
                </div>
                <div className='box'>
                    <h4 className='title'>Réalisation <br />des rêves</h4>
                    <p className='text'>Des rêves, vous en avez plein la tête. Mais quand il s’agit de passer à l’action pour les réaliser, vous voyez les difficultés poindre leur nez et vous repoussez sans cesse votre projet. pour ceci notre site vous facilite la vie et garantit la réalisation de A à Z.</p>
                </div>
            </div>
            <div className='container'>
                <div className='box'>
                    <h4 className='title'>Donner vie <br />à une vision</h4>
                    <p className='text'>Vous voulez une vie sur-mesure. Vous avez envie de donner vie à votre vision, à vos rêves. Combien de temps consacrez-vous à vos rêves ? Combien de temps consacrez-vous à votre vision dans une année, dans un mois, dans une semaine, dans une journée ?</p>
                </div>
                <div className='box'>
                    <img className='image' src='https://static.wixstatic.com/media/a2c93b_ee55e32b81114b8d80c51479888d135c~mv2.png' alt='A descriptive text about the image' />
                </div>
            </div>
            <div className='container'>
                <div className='box'>
                    <img className='image' src='https://static.wixstatic.com/media/a2c93b_40f41fd91e6f4212a7828058a10cec19~mv2.jpg' alt='A descriptive text about the image' />
                </div>
                <div className='box'>
                    <h4 className='title'>La perfection <br />dans les <br />moindres<br />détails</h4>
                    <p className='text'>Des mesures de résultats objectives, convenues jusque dans les moindres détails avec notre client, garantissent la réalisation des objectifs fixés.</p>
                </div>
            </div>
        </div>
        <PiedDePage></PiedDePage>
    </div>
    );
}

export default Apropos;
