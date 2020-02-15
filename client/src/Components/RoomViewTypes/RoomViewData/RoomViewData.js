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
            RoomDescription:"All the members of our pristine room collection are nestled adjacent to the renowned Lake Pristine.  All Lake View rooms come with the standard amenities, but also have additional amenitites depending on room type selected.  Several of the Lake View rooms also come with walk out porch area, allowing for hotel guests to admire the view of Lake Pristine from outside the hotel room itself.  In addition, many of the ground floor level rooms allow guests to walk out directly to Lake Pristine from their porch area via a gate attached to the room porch.  Several Junior Suites and all Deluxe suites come equpped with in room fire places and in room mini bars. ",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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
            RoomDescription:"Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage. A person of some importance, sir -- I believe. Our captain was attached to... Is there more to this recording? Behave yourself, Artoo. You're going to get us in trouble. It's all right, you can trust him. He's our new master. Uh, I'm quite sure you'll be very pleased with that one, sir. He really is in first-class condition. I've worked with him before. Here he comes. Okay, let's go. Now, don't you forget this! Why I should stick my neck out for you is quite beyond my capacity! Thank the maker! This oil bath is going to feel so good. I've got such a bad case of dust contamination, I can barely move! It just isn't fair. Oh, Biggs is right. I'm never gonna get out of here! Is there anything I might do to help? Well, not unless you can alter time, speed up the harvest, or teleport me off this rock! I don't think so, sir. I'm only a droid and not very knowledgeable about such things. Not on this planet, anyways. As a matter of fact, I'm not even sure which planet I'm on.",
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