import React, {useEffect, useState} from "react";


const RoomInfo: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsAppearance(true);
        }, 100);

    }, [])

    useEffect(() => {
        const boxes = document.querySelectorAll(".box");
        const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // 화면 안으로 들어오면 요소를 나타나게 함
                        entry.target.classList.remove("opacity-0", "translate-y-4");
                        entry.target.classList.add("opacity-100", "translate-y-0");
                    } else {
                        // 화면 밖으로 나가면 요소를 다시 숨김
                        entry.target.classList.remove("opacity-100", "translate-y-0");
                        entry.target.classList.add("opacity-0", "translate-y-4");
                    }
                });
            },
            {
                root: null, // 뷰포트 기준
                rootMargin: "0px", // 추가 여백 없음
                threshold: 0.3,
            }
        );

        boxes.forEach((box) => observer.observe(box));
        // 클린업 함수로 observer 해제
        return () => {
            boxes.forEach((box) => observer.unobserve(box));
        };
    }, []);

    return (
        <div className={`transition - all duration-1000 ${isAppearance ? 'opacity-100' : 'opacity-0'}`} >
            <div className='flex-col flex justify-start items-center mt-10 gap-16'>
                <div className='font-bold text-4xl text-black mb-5'>LB의 객실 정보</div>
                <div className='box transition-all duration-1000 rounded-3xl w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
                    <div className='text-3xl font-bold text-black mb-5'>스탠다드</div>
                    <img src='/standard-room.jpeg' className='rounded-2xl shadow-2xl w-5/6'/>
                </div>
                <div className='box transition-all duration-1000 rounded-3xl w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
                    <div className='text-3xl font-bold text-black mb-5'>특실</div>
                    <img src='/special-room.jpeg' className='rounded-2xl shadow-2xl w-5/6'/>
                </div>
                <div className='box transition-all duration-1000 rounded-3xl w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
                    <div className='text-3xl font-bold text-black mb-5'>스파</div>
                    <img src='/spa.jpeg' className='rounded-2xl shadow-2xl w-5/6'/>
                </div>
                <div className='box transition-all duration-1000 rounded-3xl w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
                    <div className='text-3xl font-bold text-black mb-5'>온돌</div>
                    <img src='/ondol-room.jpeg' className='rounded-2xl shadow-2xl w-5/6'/>
                </div>
                <div className='box transition-all duration-1000 rounded-3xl w-1/2 shadow-2xl flex flex-col items-center justify-start p-6'>
                    <div className='text-3xl font-bold text-black mb-5'>트윈</div>
                    <img src='/twin-room.jpeg' className='rounded-2xl shadow-2xl w-5/6'/>
                </div>
            </div>
        </div>
    )
}

export default RoomInfo;