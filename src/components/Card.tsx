import React from "react";


export interface CardProps {
    title: string;
    descriptions: string[];
    image: string;
}

const Card : React.FC<CardProps> = ({ title, descriptions, image}) => {
    return (
        <div
            className='box justify-start items-center flex flex-col w-full rounded-2xl shadow-2xl transition-all duration-1000'>
            <div className='text-xl lg:text-2xl mt-5 lg:mt-10 font-bold'>{title}</div>
            {
                descriptions.map((description: string) => (
                    <div className='ml-2 mr-2 w-60 text-xs text-center break-words lg:w-auto lg:text-base text-slate-500'>{description}</div>
                ))
            }
            <div className='m-5 lg:m-10 shadow-2xl rounded-2xl'>
                <img src={image} className='rounded-2xl shadow-2xl'></img>
            </div>
        </div>
    )
}

export default Card;