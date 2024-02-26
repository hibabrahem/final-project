import React from 'react'
import Slider from './Slider'

function ServiceItem({ categorie }) {

    return (
        <div >
            {categorie.map((categorie) => <Slider {...categorie}></Slider>

            )}
        </div>
    )
}

export default ServiceItem
