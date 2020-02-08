import LakeImageOne from "../../../Images/LakeImageOne.jpg"
import LakeViewRoomOne from "../../../Images/LakeViewRoomOne.jpg"
import LakeViewRoomTwo from "../../../Images/LakeViewRoomTwo.jpg"
import LakeViewRoomThree from "../../../Images/LakeViewRoomThree.jpg"
import MountainOne from '../../../Images/MountainOne.jpg'
import MountainViewRoomOne from '../../../Images/MountainViewRoomOne.jpg'
import MountainViewRoomTwo from "../../../Images/MountainViewRoomTwo.jpg"
import MountainViewRoomThree from "../../../Images/MountainViewRoomThree.jpg"
import ForestImageTwo from "../../../Images/ForestImageTwo.jpg"
import ForestViewRoomOne from "../../../Images/ForestViewRoomOne.jpg"
import ForestViewRoomTwo from "../../../Images/ForestViewRoomTwo.jpg"
import ForestViewRoomThree from "../../../Images/ForestViewRoomThree.jpg"

const RoomViewData = {
    LakeView: [
        {
            id: 1,
            reservationId: 1,
            RoomTitle:"STANDARD ROOM",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: LakeViewRoomOne,
            ViewImage: LakeImageOne,
            RoomInfoAndAmenities: {
                Size: "500 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 2,
                bedcount: 2,
                viewChoice: 1,
                view: "Lake View",
                petNumber: 2,
                pet: "No",
                price: 400
            }
        },
        {
            id: 2,
            reservationId: 2,
            RoomTitle:"JUNIOR SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: LakeViewRoomTwo,
            ViewImage: LakeImageOne,
            RoomInfoAndAmenities: {
                Size: "750 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 4,
                bedcount: 3,
                viewChoice: 1,
                view: "Lake View",
                petNumber: 1,
                pet: "Yes",
                price: 800
            }
        },
        {
            id: 3,
            reservationId: 3,
            RoomTitle:"DELUXE SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: LakeViewRoomThree,
            ViewImage: LakeImageOne,
            RoomInfoAndAmenities: {
                Size: "1000 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 6,
                bedcount: 4,
                viewChoice: 1,
                view: "Lake View",
                petNumber: 1,
                pet: "Yes",
                price: 1200
            }
        },
    ],
    MountainView: [
        {
            id: 1,
            reservationId: 4,
            RoomTitle:"STANDARD ROOM",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: MountainViewRoomOne,
            ViewImage: MountainOne,
            RoomInfoAndAmenities: {
                Size: "500 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 2,
                bedcount: 2,
                viewChoice: 2,
                view: "Mountain View",
                petNumber: 2,
                pet: "No",
                price: 400
            }
        },
        {
            id: 2,
            reservationId: 5,
            RoomTitle:"JUNIOR SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: MountainViewRoomTwo,
            ViewImage: MountainOne,
            RoomInfoAndAmenities: {
                Size: "750 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 4,
                bedcount: 3,
                viewChoice: 2,
                view: "Mountain View",
                petNumber: 1,
                pet: "Yes",
                price: 800
            }
        },
        {
            id: 3,
            reservationId: 6,
            RoomTitle:"DELUXE SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: MountainViewRoomThree,
            ViewImage: MountainOne,
            RoomInfoAndAmenities: {
                Size: "1000 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 6,
                bedcount: 4,
                viewChoice: 2,
                view: "Mountain View",
                petNumber: 1,
                pet: "Yes",
                price: 1200
            }
        },
    ],
    ForestView: [
        {
            id: 1,
            reservationId: 7,
            RoomTitle:"STANDARD ROOM",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: ForestViewRoomOne,
            ViewImage: ForestImageTwo,
            RoomInfoAndAmenities: {
                Size: "500 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 2,
                bedcount: 2,
                viewChoice: 3,
                view: "Forest View",
                petNumber: 2,
                pet: "No",
                price: 400
            }
        },
        {
            id: 2,
            reservationId: 8,
            RoomTitle:"JUNIOR SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: ForestViewRoomTwo,
            ViewImage: ForestImageTwo,
            RoomInfoAndAmenities: {
                Size: "750 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 4,
                bedcount: 3,
                viewChoice: 3,
                view: "Forest View",
                petNumber: 1,
                pet: "Yes",
                price: 800
            }
        },
        {
            id: 3,
            reservationId: 9,
            RoomTitle:"DELUXE SUITE",
            RoomDescription:"Of course I'm worried. And you should be, too. Lando Calrissian and poor Chewbacca never returned from this awful place. Artoo whistles timidly. Don't be so sure. If I told you half the things I've heard about this Jabba the Hutt, you'd probably short-circuit. Artoo, are you sure this is the right place? I better knock, I suppose. There doesn't seem to be anyone there. Let's go back and tell Master Luke.",
            RoomImage: ForestViewRoomThree,
            ViewImage: ForestImageTwo,
            RoomInfoAndAmenities: {
                Size: "1000 Sq. Ft.",
                BedType: "King or Double Queen",
                Internet: "Complimentary Wi-Fi Internet",
                Television: "48-inch HDTV with streaming capability",
                Bathroom: "Soaking Tub and Separate Walk-in Shower",
                CoffeeMaker: "Keurig Coffee Maker",
                Fridge: "In-Room Refrigerator",
                Robes: "Frette Robes"
            },
            RoomInfo: {
                guestCount: 6,
                bedcount: 4,
                viewChoice: 3,
                view: "Forest View",
                petNumber: 1,
                pet: "Yes",
                price: 1200
            }
        },
    ],

}

export default RoomViewData