import React from "react"
import RoomViewData from "./RoomViewData/RoomViewData.js"

const LakeViewRoom = () => {
    return (
        <div>
            {RoomViewData.LakeView.map(properties=> (
                <h1>{properties.RoomTitle}</h1>
            ))}
        </div>
    )
}

export default LakeViewRoom