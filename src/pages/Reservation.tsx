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

                    <div className='flex w-full flex-col justify-center'>
                        <div className='text-sm lg:text-lg text-black mt-4'>예약자 성함</div>
                        <input type='text'
                               placeholder='예약자 성함을 작성하여 주세요.'
                               className='mt-1 w-full text-sm lg:text-lg p-2 border-2 rounded-2xl border-slate-500 focus:ring-2 focus:ring-green-500'>
                        </input>
                    </div>
                    <div className='flex w-full flex-col justify-center'>
                        <div className='text-sm lg:text-lg text-black mt-4'>예약자 연락처</div>
                        <input type='text'
                               placeholder='010-0000-0000'
                               className='mt-1 w-full text-sm lg:text-lg p-2 border-2 rounded-2xl border-slate-500 focus:ring-2 focus:ring-green-500'>
                        </input>
                    </div>
                    <div className='flex w-full flex-col justify-center'>
                        <div className='text-sm lg:text-lg text-black mt-4'>예약날짜</div>
                        <div className='text-xs lg:text-base text-slate-500'>예약 시작일</div>
                        <input type='date'
                               min={Date.now().toString()}
                               className='mt-1 min-w-full text-sm lg:text-lg p-2 border-2 bg-white rounded-2xl border-slate-500 focus:ring-2 focus:ring-green-500'>
                        </input>
                    </div>
                    <div className='flex w-full flex-col justify-center'>
                        <div className='text-xs lg:text-base text-slate-500 mt-2'>예약 종료일</div>
                        <input type='date'
                               min={Date.now().toString()}
                               className='mt-1 min-w-full text-sm lg:text-lg p-2 border-2 bg-white rounded-2xl border-slate-500 focus:ring-2 focus:ring-green-500'>
                        </input>
                        <button className='text-xl w-full mt-10 bg-slate-800 text-white'>
                            예약 전송
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Reservation;