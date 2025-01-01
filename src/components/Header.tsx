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
        <header
            className={`w-full h-[10%] font-bold text-white z-50 
             transition-all duration-1000 ${isAppearance ? 'opacity-100 translate-y-0' : 'opacity-0'}`}>
            <div className='flex h-full justify-between items-center'>
                <div></div>
                <div
                    onClick={() => handleNavigate('/')}
                    className="absolute top-1/2 left-[20%] lg:left-1/2 transform -translate-x-1/2 lg:text-3xl -translate-y-1/2 text-2xl cursor-pointer"
                >
                    LB Motel
                </div>
                <div className='flex justify-around items-center w-8/12 lg:w-1/3 text-xs lg:text-xl'>
                    <div onClick={() => handleNavigate('/directions')}
                         className='cursor-pointer m-1 lg:m-5 break-words text-center'
                    > 오시는 길
                    </div>
                    <div onClick={() => handleNavigate('/services')}
                         className='cursor-pointer m-1 lg:m-5 break-words text-center'
                    >제공 서비스
                    </div>
                    <div onClick={() => handleNavigate('/rooms')}
                         className='cursor-pointer m-1 lg:m-5 break-words text-center'
                    >객실 정보
                    </div>
                    <div
                        onClick={() => handleNavigate('/reservation')}
                        className='cursor-pointer m-1 lg:m-5'
                    > 예약
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header