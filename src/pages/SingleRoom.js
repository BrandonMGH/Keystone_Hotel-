import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import { RoomContext } from '../Context'
import StyledHero from '../components/StyledHero'

export class SingleRoom extends Component {
    constructor(props) { //**props are being passed through React-Router-Dom from the Link element inside the Room.js component **//
        super(props)
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
        console.log(this.state.props)
    }

    static contextType = RoomContext
    // componentDidMount(){

    // }
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3>no such room could be found</h3>
                <Link to='/rooms' className="btn-primary">
                    Back to Rooms
                </Link>
            </div>
        }
        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room
        console.log(room)
        const [mainImg, ...defaultImg] = images;
        console.log(defaultImg)
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`} >
                        <Link to='/rooms' className="btn-primary">
                            Back to Rooms
                    </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <aritcle className="desc">
                            <h3> details </h3>
                            <p>{description}</p>
                        </aritcle>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: ${price}</h6>
                            <h6>Size: ${size} SQFT</h6>
                            <h6>max capacity: {""}{ capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6>{pets ? "pets allowed" : "no pets allows"}</h6>
                            <h6>{breakfast && "free breakfast included"}</h6>
                        </article>
                    </div>

                </section>
                <section className="room-exxtras">
                        <h6>Extras</h6>
                        <ul className="extras">
                            {extras.map((item, index)=>{
                                return <li key={index}>
                                   - {item}
                                </li>
                            })}
                        </ul>

                </section>
            </>
        )
    }
}

export default SingleRoom
