import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = (time) => {

    const myStyle = {
        border: "1px solid black"
    }
    return (
        <div className='d-flex justify-content-center p-5'>
            <div className='d-flex gap-1 text-center  p-5'>
                <div> <FontAwesomeIcon icon={faClock} /> </div>
                <div className="" style={myStyle}> {time} </div>
                <div style={myStyle}> 0 </div>
                <div style={myStyle}> 0 </div>
                <div style={myStyle}> 0 </div>
                <div style={myStyle}> 0 </div>
                <div style={myStyle}> 0 </div>
            </div>
        </div>

    )
}

export default SecondsCounter