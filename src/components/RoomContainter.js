import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import { withRoomConsumer } from "../Context";
import Loading from './Loading'


//** RoomContainer component rendered with Higher Order Component Function **//
function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = context

if (loading) {
    return <Loading />
}
return (
    <>
        <RoomsFilter rooms={rooms} />
        <RoomsList rooms={sortedRooms} />
    </>
);
    
}

export default withRoomConsumer(RoomContainer) 





//** RoomContainer component rendered without the use of a Higher Order Component Function **//
// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {value => {
//                 console.log(value);  // ** this value is coming from the RoomConsumer variable in the Context.js component **//  
//                 const { loading, sortedRooms, rooms } = value
//                 if (loading) {
//                     return <Loading />
//                 }
//                 return (
//                     <div>
//                         Hello from Rooms Container
//                         <RoomsFilter rooms={rooms} />
//                         <RoomsList rooms={sortedRooms} />
//                     </div>
//                 )

//             }
//             }
//         </RoomConsumer>
//     )
// }
