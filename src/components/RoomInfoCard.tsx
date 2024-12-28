import React from "react";

export interface RoomInfoProps {
    roomName : string;
    image : string;
}

const RoomInfoCard : React.FC<RoomInfoProps> = ({roomName, image}) => {
    return (
        <div
            className='box transition-all duration-1000 rounded-3xl w-10/12 lg:w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
            <div className='text-xl lg:text-3xl font-bold text-black mb-1 lg:mb-5'>{roomName}</div>
            <img src={image} className='rounded-2xl shadow-2xl w-full'/>
        </div>
    )
}


export default RoomInfoCard;