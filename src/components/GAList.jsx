import React from 'react'
import { useSelector } from 'react-redux';
import GallerieA from './GallerieA';

function GAList() {
    const { listImageA } = useSelector(state => state.eventReducer);

    // Diviser la liste d'images en deux parties
    const midIndex = Math.ceil(listImageA.length / 2);
    const firstRowImages = listImageA.slice(0, midIndex);
    const secondRowImages = listImageA.slice(midIndex);

    return (
        <div>
            
            {/* Première ligne */}
            <div style={{ display: 'inline-flex', margin: '2px', gap: '8px' }}>
                {firstRowImages.map((e, index) => (
                    <GallerieA key={index} Anniversaire={e} />
                ))}
            </div>
            {/* Deuxième ligne */}
            <div style={{ display: 'inline-flex', margin: '2px', gap: '8px' }}>
                {secondRowImages.map((e, index) => (
                    <GallerieA key={index} Anniversaire={e} />
                ))}
            </div>
        </div>
    );
}

export default GAList
