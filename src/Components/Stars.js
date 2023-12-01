import React from "react";
export default function Stars(props) {
    const body = document.querySelector("body")
    // console.log(body)
    const stars= []
    if(props.value<=props.starsNumber){
        if(props.direction === "ltr") {
            body.style.direction = "ltr"
            if(Math.round(props.value)-props.value===0.5 || Math.round(props.value)-props.value===0 ) {
                if (Number.isInteger(props.value)) {
                    for (let i=1;i<=props.value;i++) {
                        stars.push(<i style={{color : props.starColor,fontSize:props.starSize}} className="fa fa-star"></i>)
                    }
                    for (let i=1;i<=props.starsNumber - props.value;i++) {
                        stars.push(<i style={{color : props.starColor,fontSize:props.starSize}} className="fa fa-star-o"></i>)
                    }
                } else {
                    for (let i=1;i<=props.value;i++) {
                        stars.push(<i style={{color : props.starColor,fontSize:props.starSize}} className="fa fa-star"></i>)
                    }
                    stars.push(<i className="fa fa-star-half-o"></i>)
                    for (let i=1;i<=props.starsNumber - props.value;i++) {
                        stars.push(<i style={{color : props.starColor,fontSize:props.starSize}} className="fa fa-star-o"></i>)
                    }
                }
            } else {
                console.log("please enter a number multiple of 0.5")
            }
        }
        if(props.direction === "rtl") {
            body.style.direction = "rtl"
            if(Math.round(props.value)-props.value===0.5 || Math.round(props.value)-props.value===0 ) {
                if (Number.isInteger(props.value)) {
                    for (let i=1;i<=props.value;i++) {
                        stars.push(<i className="fa fa-star"></i>)
                    }
                    for (let i=1;i<=5 - props.value;i++) {
                        stars.push(<i className="fa fa-star-o"></i>)
                    }
                } else {
                    for (let i=1;i<=props.value;i++) {
                        stars.push(<i className="fa fa-star"></i>)
                    }
                    stars.push(<i className="fa fa-star-half-o"></i>)
                    for (let i=1;i<=5 - props.value;i++) {
                        stars.push(<i className="fa fa-star-o"></i>)
                    }
                }
            } else {
                console.log("please enter a number multiple of 0.5")
            }
        }
    } else {
        console.log(`stars more than ${props.starsNumber}`)
    }

    return (
        <div className='stars-container'>
            {stars}
            {/*<i className="fa fa-star-half-o"></i>*/}
        </div>
    )
}
