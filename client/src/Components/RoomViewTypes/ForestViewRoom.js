import React from "react"
import RoomViewData from "./RoomViewData/RoomViewData.js"
import "./RoomViews.css"

const ForestViewRoom = () => {
    return (
        <section>
            {RoomViewData.ForestView.map(properties => (
                <section className="roomViewContainer" key={properties.id}>
                    <img className="roomViewRoomImage" src={properties.RoomImage} />
                    <section className="roomViewTextContainer">
                        <section className="roomViewTextTitleAndDescription">
                            <p className="roomViewTextTitle">{properties.RoomTitle}</p>
                            <p>{properties.RoomDescription}</p>
                        </section>
                        <section className="roomViewTextAmenities">
                            <h4>Room Amenities</h4>
                            <p>________________</p>
                            <p>{properties.RoomInfoAndAmenities.Size}</p>
                            <p>{properties.RoomInfoAndAmenities.BedType}</p>
                            <p>{properties.RoomInfoAndAmenities.Internet}</p>
                            <p>{properties.RoomInfoAndAmenities.Television}</p>
                            <p>{properties.RoomInfoAndAmenities.Bathroom}</p>
                            <p>{properties.RoomInfoAndAmenities.CoffeeMaker}</p>
                            <p>{properties.RoomInfoAndAmenities.Fridge}</p>
                            <p>{properties.RoomInfoAndAmenities.Robes}</p>
                        </section>
                        <section className="roomViewViewImageContainer">
                            <img className="roomViewViewImage"src={properties.ViewImage} />
                        </section>
                    </section>
                </section>
            ))}
        </section>
    )
}

export default ForestViewRoom