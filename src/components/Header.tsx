import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const [isAppearance, setIsAppearance] = useState(false);

    const handleNavigate = (url: string) => {
        navigate(url);
    }


    useEffect(() => {
        setTimeout(() => {
            setIsAppearance(true);
        }, 100);
    }, [])

    return (
        <div className='flex w-full'>
            <header
                className={`w-full h-16 bg-white shadow-xl flex justify-between items-center font-bold text-black z-50 
             transition-all duration-1000 ${isAppearance ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
                <div></div>
                <div
                    onClick={() => handleNavigate('/')}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl cursor-pointer"
                >
                    LB Motel
                </div>
                <div className='flex justify-around items-center w-4/12'>
                    <div onClick={() => handleNavigate('/directions')}
                         className='cursor-pointer'
                    > 오시는 길
                    </div>
                    <div onClick={() => handleNavigate('/services')} className='cursor-pointer'>제공 서비스</div>
                    <div onClick={() => handleNavigate('/rooms')} className='cursor-pointer'>객실 정보</div>
                    <div
                        onClick={() => handleNavigate('/reservation')}
                        className='cursor-pointer'
                    > 예약
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header