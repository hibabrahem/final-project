import React from 'react';
import { useSelector } from 'react-redux';
import GallerieM from './GallerieM';

function GMList() {
    const { listImageM } = useSelector(state => state.eventReducer);

    // Diviser la liste d'images en deux parties
    const midIndex = Math.ceil(listImageM.length / 2);
    const firstRowImages = listImageM.slice(0, midIndex);
    const secondRowImages = listImageM.slice(midIndex);

    return (
        <div>
            {/* Première ligne */}
            <div style={{ display: 'inline-flex', margin: '2px', gap: '8px' }}>
                {firstRowImages.map((e, index) => (
                    <GallerieM key={index} hiba={e} />
                ))}
            </div>
            {/* Deuxième ligne */}
            <div style={{ display: 'inline-flex', margin: '2px', gap: '8px' }}>
                {secondRowImages.map((e, index) => (
                    <GallerieM key={index} hiba={e} />
                ))}
            </div>
        </div>
    );
}

export default GMList;
