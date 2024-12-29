import React, {useEffect, useState} from "react";

const Reservation: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAppearance(true);
        }, 100);
    }, [])

    return (
        <div className={`transition-all duration-1000 ${isAppearance ? 'opacity-100' : 'opacity-0'}`}>
            <div className='flex flex-col justify-center items-center mt-30 h-full mt-10 lg:m-20'>
                <div className='flex flex-col justify-start items-center h-full w-10/12 lg:w-1/3 shadow-2xl rounded-3xl p-10'>
                    <div className='text-black text-3xl font-bold'>객실 예약</div>
                    <div className='mt-10 font-bold text-slate-500'> 예약 서비스는 현재 준비중입니다.</div>
                    <div className='font-bold text-slate-500'>010-8508-3693으로 연락 부탁드립니다.</div>
                </div>
            </div>

        </div>
    )
}

export default Reservation;