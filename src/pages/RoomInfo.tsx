import React, {useEffect, useState} from "react";
import RoomInfoCard, {RoomInfoProps} from "../components/RoomInfoCard.tsx";


const RoomInfo: React.FC = () => {
    const [isAppearance, setIsAppearance] = useState(false);

    const roomInfos: RoomInfoProps[] = [
        {roomName: '스탠다드', image: '/standard-room.jpeg'},
        {roomName: '특실', image: '/special-room.jpeg'},
        {roomName: '스파', image: '/spa.jpeg'},
        {roomName: '온돌', image: '/ondol-room.jpeg'},
        {roomName: '트윈', image: '/twin-room.jpeg'}
    ]


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
        <>
            <div className='h-[10%] bg-black w-full absolute top-0 z-[-1]'>
            </div>
            <div className={`transition - all duration-1000 ${isAppearance ? 'opacity-100' : 'opacity-0'} mb-20`}>
                <div className='flex-col flex justify-start items-center mt-10 gap-6 lg:gap-16'>
                    <div className='font-bold text-2xl lg:text-4xl text-black mb-2 lg:mb-5'>LB의 객실 정보</div>
                    {
                        roomInfos.map((roomInfo) => (
                            <RoomInfoCard {...roomInfo}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default RoomInfo;