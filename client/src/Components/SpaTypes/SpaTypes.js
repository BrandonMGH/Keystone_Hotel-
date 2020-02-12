import React from 'react'
import './SpaTypes.css'

/* COMPONENTS */
import SpaTypesData from '../SpaTypes/SpaTypeData/SpaTypeData.js'

const SpaTypes = () => {
    return (
        <>
            {SpaTypesData.spa.map(properties => (
                <section key={properties.id} className="spaTypeGrid">
                    <section className="spaTypesGridImageContainer">
                        <img className="spaTypesGridImage" src={properties.image} />
                    </section>
                    <section className="</section>">
                        <h1 className="spaTypesGridTitle">{properties.title}</h1>
                        <p className="spaTypesGridDescription">{properties.description}</p>
                    </section>
                </section>
            ))}
            {SpaTypesData.fitnessCenter.map(properties => (
                <section key={properties.id} className="spaTypeGrid">
                    <section className="spaTypesGridImageContainer">
                        <img className="spaTypesGridImage" src={properties.image} />
                    </section>
                    <section className="</section>">
                        <h1 className="spaTypesGridTitle">{properties.title}</h1>
                        <p className="spaTypesGridDescription">{properties.description}</p>
                    </section>
                </section>
            ))}
            {SpaTypesData.suana.map(properties => (
                <section key={properties.id} className="spaTypeGrid">
                    <section className="spaTypesGridImageContainer">
                        <img className="spaTypesGridImage" src={properties.image} />
                    </section>
                    <section className="</section>">
                        <h1 className="spaTypesGridTitle">{properties.title}</h1>
                        <p className="spaTypesGridDescription">{properties.description}</p>
                    </section>
                </section>
            ))}
            {SpaTypesData.yoga.map(properties => (
                <section key={properties.id} className="spaTypeGrid">
                    <section className="spaTypesGridImageContainer">
                        <img className="spaTypesGridImage" src={properties.image} />
                    </section>
                    <section className="</section>">
                        <h1 className="spaTypesGridTitle">{properties.title}</h1>
                        <p className="spaTypesGridDescription">{properties.description}</p>
                    </section>
                </section>
            ))}
        </>
    )
}

export default SpaTypes
