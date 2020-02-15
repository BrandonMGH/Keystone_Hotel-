import React from "react"
import RoomViewData from "./RoomViewData/RoomViewData.js"
import "./RoomViews.css"

const LakeViewRoom = () => {
    return (
        <section style={{display: "grid", justifyItems: "center"}}>
            {RoomViewData.LakeView.map(properties => (
                 <section className="roomViewContainer" key={properties.id}>
                 <section className="roomViewTextTitle">
                     {properties.RoomTitle}
                 </section>
                 <section className="roomViewImageContainer">
                     <img className="roomViewImage" src={properties.RoomImage} />
                 </section>
                 <section className="roomViewDescription">
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

             </section>
            ))}
        </section>
    )
}

export default LakeViewRoom