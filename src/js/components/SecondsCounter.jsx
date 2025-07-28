import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const SecondsCounter = ({ time }) => {

    const myStyle = {
        border: "1px solid black"
    }

    return (
        <div className='d-flex justify-content-center p-5'>
            <div className='d-flex gap-1 text-center  p-5'>
                <div> <FontAwesomeIcon icon={faClock} /> </div>
                <div className="" style={myStyle}> {Math.floor(time / 100000) % 10} </div>
                <div className="" style={myStyle}> {Math.floor(time / 10000) % 10} </div>
                <div className="" style={myStyle}> {Math.floor(time / 1000) % 10} </div>
                <div className="" style={myStyle}> {Math.floor(time / 100) % 10} </div>
                <div className="" style={myStyle}> {Math.floor(time / 10) % 10} </div>
                <div className="" style={myStyle}> {time % 10} </div>

            </div>
        </div>

    )
}

export default SecondsCounter