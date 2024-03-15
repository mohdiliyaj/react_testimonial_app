import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const Card = (props) => {
    const review = props.reviews;
    return (
        <div>
            <div className="pic">
                <img src={review.image} />
            </div>
            <div className="testimonial-profile">
                <h3 className="title">{review.name}</h3>
                <span className="post">{review.job}</span>
            </div>
            <div className='mt-3'>
                <RiDoubleQuotesL />
            </div>
            <p className="description mb-0">
                {review.text}
            </p>
            <div>
                <RiDoubleQuotesR />
            </div>
        </div>
    )
}

export default Card
