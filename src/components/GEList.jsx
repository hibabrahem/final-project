import React from 'react'
import GallerieE from './GallerieE';
import { useSelector } from 'react-redux';

function GEList() {
    const { listImageE } = useSelector(state => state.eventReducer);

    // Diviser la liste d'images en deux parties
    const midIndex = Math.ceil(listImageE.length / 2);
    const firstRowImages = listImageE.slice(0, midIndex);
    const secondRowImages = listImageE.slice(midIndex);

    return (
        <div>

            {/* Première ligne */}
            <div style={{ display: 'inline-flex', margin: '2px', gap: '8px' }}>
                {firstRowImages.map((e, index) => (
                    <GallerieE key={index} evennement={e} />
                ))}
            </div>
            {/* Deuxième ligne */}
            <div style={{ display: 'inline-flex', margin: '2px',gap:'8px' }}>
                {secondRowImages.map((e, index) => (
                    <GallerieE key={index} evennement={e} />
                ))}
            </div>
        </div>
    );
}

export default GEList
