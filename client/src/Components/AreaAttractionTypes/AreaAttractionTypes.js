import React from 'react'
import './AreaAttractionTypes.css'

/* COMPONENTS */

import AreaAttractionTypeData from '../AreaAttractionTypes/AreaAttractionTypeData/AreaAttractionTypeData.js'

const AreaAttractionTypes = () => {
    return (
        <>
            {AreaAttractionTypeData.lakePristine.map(properties => (
                <section key={properties.id} className="areaAttractionGrid">
                     <section className="areaAttractionTitle">
                        <h1>{properties.title}</h1>
                    </section>
                    <section className="areaAttractionTypesGridImageContainer">
                        <img className="areaAttractionTypesGridImage" src={properties.image} />
                    </section>
                    <section className="areaAttractionDescription">
                        <p>{properties.description}</p>
                    </section>
                </section>
            ))},
             {AreaAttractionTypeData.burlyMountains.map(properties => (
                <section key={properties.id} className="areaAttractionGrid">
                     <section className="areaAttractionTitle">
                        <h1>{properties.title}</h1>
                    </section>
                    <section className="areaAttractionTypesGridImageContainer">
                        <img className="areaAttractionTypesGridImage" src={properties.image} />
                    </section>
                    <section className="areaAttractionDescription">
                        <p>{properties.description}</p>
                    </section>
                </section>
            ))},
             {AreaAttractionTypeData.shroudedForest.map(properties => (
                <section key={properties.id} className="areaAttractionGrid">
                     <section className="areaAttractionTitle">
                        <h1>{properties.title}</h1>
                    </section>
                    <section className="areaAttractionTypesGridImageContainer">
                        <img className="areaAttractionTypesGridImage" src={properties.image} />
                    </section>
                    <section className="areaAttractionDescription">
                        <p>{properties.description}</p>
                    </section>
                </section>
            ))}
        </>
    )
}

export default AreaAttractionTypes