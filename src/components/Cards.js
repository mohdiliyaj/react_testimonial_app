import React, { useState } from 'react'
import Card from "./Card"
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Cards = (props) => {
    const reviews = props.reviews;
    const [index,setIndex] = useState(0);
    function leftClickHandler(){
        if(index-1<0){
            setIndex(reviews.length-1);
        }else{
            setIndex(index-1);
        }
        console.log(reviews.length)
    }
    function rightClickHandler(){
        if(index  == reviews.length-1){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    function supriseHandler(){
        setIndex(Math.floor(Math.random() * reviews.length))
    }



    return (
        <div>
            <div className="container ms-auto my-auto">
                <div className="row">
                    <div className="col">
                        <div id="testimonial-slider" className="owl-carousel">
                            <div className="testimonial">
                                <Card reviews={reviews[index]}/>
                                <div className='mt-3'>
                                    <button className='me-2 btn btn-sm' onClick={leftClickHandler}><FaChevronLeft/></button>
                                    <button className='ms-2 btn btn-sm' onClick={rightClickHandler}><FaChevronRight/></button>
                                </div>
                                <div className='mt-3'>
                                    <button className='btn btn-outline-info' onClick={supriseHandler}>Suprise me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
