import React from 'react';
import logo from './logo.png';

function PiedDePage() {
    return (
        <div style={{ backgroundColor: '#AF9453', paddingTop: '1em', display: 'flex', gap: '10px', color: 'white', height: "115px" }} >
            <div >
                <img id='logo' src={logo} alt="Logo" ></img>

            </div>
            <div className='footer-text'>

                <p>26 Rue de la Paix, <br></br> 75015 Paris <br></br>TUNISIE</p>
            </div>
            <div className='footer-text'>

                <p>horaires d’ouverture :</p>
                <p>9h du matin</p>
            </div>
            <div className='footer-text'>

                <p><span class="material-symbols-outlined">
                    call
                </span> Tél:+216 25 236 124</p>
                <p><span class="material-symbols-outlined">
                    deskphone
                </span>Fax:+216 25 236 124</p>
            </div>
            <div className='footer-icon'>

                <p><i class="fa-brands fa-square-facebook" style={{ width: "20px", fontSize: "30px" }}></i>  </p>

                <p><i class="fa-brands fa-instagram" style={{ width: "20px", fontSize: "30px" }}></i> </p>
            </div>
        </div>



    );
}

export default PiedDePage;

