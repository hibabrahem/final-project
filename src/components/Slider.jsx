import imgss from './imgss.jpg'
import Entete from './Entete';
import PiedDePage from './PiedDePage';
import GMList from './GMList';
import GAList from './GAList';
import GEList from './GEList';

function Slider() {
    return (
        <div>
            <div style={{ position: 'fixed', width: '100%', zIndex: '1000' }}>
                <Entete />
            </div>
            <div style={{ paddingTop: '90px', paddingBottom: '10px' }}>
                <div style={{ display: 'grid', gap: '10px' }}>
                    <div style={{ backgroundImage: `url(${imgss})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '520px' }}>
                        <h3 style={{ fontFamily: 'EB Garamond', color: 'white', fontSize: '60px', paddingTop: '50px', letterSpacing: '15px' }}>
                            Créer des <br />
                            souvenirs<br />
                            inoubliables</h3>
                        <br />
                        <span className="material-symbols-outlined" style={{ fontSize: '70px', color: 'white' }}>
                            south
                        </span>
                    </div>
                    {/* <Carousel>
                        {services.map(e => (
                            <Carousel.Item key={e.id}>
                                <img style={{ width: "626px", height: "417px" }} src={e.img} alt="Slide" />
                                <Carousel.Caption>
                                    <h3>{e.name}</h3>
                                    <p>{e.descrption}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))}
                    </Carousel> */}
                    <div>

                        <h3 style={{
                            fontfamily: 'brandon grotesque',
                            letterSpacing: '15px',
                            color: '#AF9453',
                            fontsize: '30px'
                        }}>Mariage</h3>
                        <GMList></GMList>
                        <h3 style={{
                            fontfamily: 'brandon grotesque',
                            letterSpacing: '15px',
                            color: '#AF9453',
                            fontsize: '30px'
                        }}>Anniversaire</h3>
                        <GAList></GAList>
                        <h3 style={{
                            fontfamily: 'brandon grotesque',
                            letterSpacing: '15px',
                            color: '#AF9453',
                            fontsize: '30px'
                        }}>Evennement</h3>
                        <GEList></GEList>
                    </div>

                </div>
            </div>
            <PiedDePage />
        </div>
    );
}

export default Slider;
