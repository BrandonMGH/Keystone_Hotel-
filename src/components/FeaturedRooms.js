import React, { Component } from 'react'
import {RoomContext} from "../Context"

//** COMPONENTS **//
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export class FeaturedRooms extends Component {
    static contextType = RoomContext; //** Only works in class components.  Does not work in functional components  **//
    render() {
       let {loading, featuredRooms : rooms} = this.context;
       rooms = rooms.map(room => {
           return <Room key={room.id} room={room} />
       })
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                    <div className="featured-rooms-center">
                        {loading ? <Loading /> : rooms}
                    </div>
            </section>
        )
    }
}

export default FeaturedRooms
