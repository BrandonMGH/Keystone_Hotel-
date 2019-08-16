import React, { Component } from 'react'
import {RoomContext} from "../Context"

export class FeaturedRooms extends Component {
    static contextType = RoomContext; //** Only works in class components.  Does not work in functional components  **//
    render() {
       const {featuredRooms : rooms} = this.context;
       console.log(rooms)
        return (
            <div>
                Hello from featured rooms 
            </div>
        )
    }
}

export default FeaturedRooms
